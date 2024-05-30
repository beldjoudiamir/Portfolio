import { Router } from "express";
import { registerSchema, loginSchema } from "./auth.schemas.js";
import { registerUser, connectUser } from "./auth.services.js";
import { disabled } from "../middlewares/disabled.js";
import { AUTH_COOKIE_NAME, TOKEN_MAX_AGE } from "../consts/index.js";
import { env } from "../utils/env.js";
import JWT from "jsonwebtoken";

const authRouter = Router();

authRouter.post("/register", disabled, async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      issues: parsed.error.issues,
    });
  }

  try {
    const user = await registerUser(parsed.data);

    return res.status(201).json({ ...user });
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
});

authRouter.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      issues: parsed.error.issues,
    });
  }

  try {
    const { token, id } = await connectUser(parsed.data);

    return res
      .cookie(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        maxAge: TOKEN_MAX_AGE,
      })
      .status(200)
      .json({
        email: parsed.data.email,
        id,
      });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

authRouter.get("/token", (req, res) => {
  try {
    const token = req.cookies[AUTH_COOKIE_NAME];

    console.log(req.cookies);
    console.log({ token });

    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "You are trying to acces a protected resource",
      });
    }

    JWT.verify(token, env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          message: "You are trying to acces a protected resource",
        });
      }

      const { id, email } = decodedToken;

      res.status(200).json({
        id,
        email,
      });
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export { authRouter };
