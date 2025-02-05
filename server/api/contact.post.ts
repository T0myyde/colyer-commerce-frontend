// server/api/contact.post.ts
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    // Validate input
    const body = await readBody(event)
    if (!body.name || !body.email || !body.message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bitte füllen Sie alle Felder aus'
        })
    }

    // Microsoft 365 SMTP Configuration
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MICROSOFT_EMAIL,
            pass: process.env.MICROSOFT_APP_PASSWORD // Use an app-specific password
        },
        tls: {
            ciphers: 'TLSv1.2',
            rejectUnauthorized: true
        }
    })

    try {
        await transporter.sendMail({
            from: process.env.MICROSOFT_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            subject: `Neue Kontaktanfrage von ${body.name}`,
            text: `
        Name: ${body.name}
        Email: ${body.email}
        
        Nachricht:
        ${body.message}
      `,
            html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${body.message}</p>
      `
        })

        return {
            success: true,
            message: 'Nachricht erfolgreich gesendet'
        }
    } catch (error) {
        console.error('Email sending error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Fehler beim Senden der Nachricht'
        })
    }
})