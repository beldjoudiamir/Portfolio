import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"; // Correction : importation correcte de cors
import { env } from "./utils/env.js";
import { pool } from "./db/index.js";
import { logger } from "./utils/logger.js"; // Utilise la méthode info pour loguer les informations plutôt que des méthodes non-standard.
import { authRouter } from "./auth/auth.router.js";
import { contactRouter } from './contact/contact.router.js'

const createServer = () => {
  const app = express();

  // Limite la taille du corps des requêtes JSON à 64kb
  app.use(
    express.json({
      limit: "64kb",
    })
  );

  // Parse les corps des requêtes URL-encoded
  app.use(express.urlencoded({ extended: false }));

  // Sécurise les en-têtes HTTP de l'application
  app.use(helmet());

  // Configuration CORS pour permettre les requêtes de "http://localhost:5173"
  // avec des méthodes spécifiques et pour permettre les cookies avec les requêtes
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "HEAD", "PUT", "POST", "DELETE"],
      credentials: true, // Pour autoriser les cookies sur les requêtes trans-domaines
      allowedHeaders: ["Content-Type"],
    })
  );

  // Logger pour le développement qui affiche les requêtes dans la console
  app.use(morgan("dev"));

  // Middleware pour parse les cookies des requêtes entrantes
  app.use(cookieParser());

  // Route racine qui renvoie le temps de fonctionnement du serveur
  app.get("/", (request, res) => {
    res.json({ uptime: process.uptime() });
  });
  app.use("/auth", authRouter);
  app.use("/contact", contactRouter);

  // Démarrage du serveur sur le port défini dans les variables d'environnement
  app.listen(env.PORT, async () => {
    logger.info(`[API] Started at port ${env.PORT}.`);

    // Test de connexion à la base de données
    await pool.query("SELECT NOW()");

    logger.info("DB connected.");
  });
};

createServer();

// POST http://localhost:3005/auth/register
