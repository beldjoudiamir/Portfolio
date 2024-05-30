import { pool } from "../db/index.js";


export const createContactMessage =  async (payload) => {
    await pool.query('INSERT INTO messages (name, email, message, phone) VALUES (?, ?, ?, ?)', [
        payload.name, payload.email, payload.message, payload.phone
    ])
}