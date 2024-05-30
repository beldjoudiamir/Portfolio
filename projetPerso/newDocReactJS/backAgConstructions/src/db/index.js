import mysql2 from "mysql2/promise";
import { env } from "../utils/env.js";

const generateConnectionPool = () => {
  try {
    return mysql2.createPool({
      host: env.DB_HOST,
      user: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_NAME,
    });
  } catch (error) {
    console.error(error);
  }
};

export const pool = generateConnectionPool();
