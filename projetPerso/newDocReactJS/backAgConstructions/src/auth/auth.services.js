// Insérer l'utilisateur dans la BDD.
import { pool } from "../db/index.js";
import { hashPassword } from "./auth.utils.js";
import { Roles } from "./auth.utils.js";
import { Errors } from "../utils/errors.js";
import { comparePassword } from "./auth.utils.js";
import JWT from "jsonwebtoken";
import { env } from "../utils/env.js";
import { TOKEN_MAX_AGE } from "../consts/index.js";

export const registerUser = async (payload) => {
  const hashedPassword = await hashPassword(payload.password);

  await pool.query(
    "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
    [payload.email, hashedPassword, Roles.USER]
  );

  const response = await pool.query("SELECT * FROM users WHERE email = ?", [
    payload.email,
  ]);

  return response?.[0]?.[0];
};

export const connectUser = async (payload) => {
  const userResult = await pool.query("SELECT * FROM users WHERE email = ?", [
    payload.email,
  ]);

  if (!userResult?.[0]?.[0]) {
    throw new Error(Errors.ERR_RESOURCE_NOT_FOUND);
  }

  const user = userResult[0][0];

  await comparePassword(payload.password, user.password); // throw new Error

  const token = generateToken({ id: user.id, email: payload.email });

  return { token, id: user.id };
};

const generateToken = ({ id, email }) => {
  return JWT.sign({ id, email }, env.JWT_SECRET, {
    expiresIn: TOKEN_MAX_AGE / 1000,
  });
};
