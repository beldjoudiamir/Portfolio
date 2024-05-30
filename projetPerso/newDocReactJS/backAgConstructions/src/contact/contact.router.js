import { Router } from 'express';
import { contactSchema } from './contact.schema.js'
import nodemailer from 'nodemailer'
import { createContactMessage } from './contact.services.js'


const contactRouter = Router()

contactRouter.post('/', async (req, res) => {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        issues: parsed.error.issues,
      });
    }

    try {
        await createContactMessage(parsed.data)

        res.status(201).json(parsed.data)
    } catch (error) {
        res.json({
            message: error.message,
          });
    }
})


export { contactRouter }