import dotenv from "dotenv";
import { z } from "zod";

// Lire le fichier .env, si le fichier n'est pas la racine, utiliser "{ path: './src/.env'}" pour indiquer le chemin.
const _env = dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform(Number),
  NODE_ENV: z
    .union([z.literal("production"), z.literal("developement")])
    .optional()
    .default("developement"),
  DB_HOST: z.string().trim().min(1),
  DB_USER: z.string().trim().min(1),
  DB_NAME: z.string().trim().min(1),
  DB_PASS: z.string().trim(),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
