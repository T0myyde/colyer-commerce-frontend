// netlify/functions/contact.js
exports.handler = async (event, context) => {
    // CORS Headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }

    // Handle preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Preflight call successful' })
        }
    }

    try {
        // Parse the incoming request
        const data = JSON.parse(event.body)
        const { name, email, message } = data

        // Validierung
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    message: 'Bitte füllen Sie alle Felder aus.'
                })
            }
        }

        // Hier Ihre E-Mail-Logik einfügen
        // z.B. mit SendGrid, AWS SES, etc.

        // Erfolgsantwort
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: 'Nachricht erfolgreich gesendet',
                data: { name, email }
            })
        }

    } catch (error) {
        console.error('Fehler:', error)

        // Fehlerantwort
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                message: 'Ein interner Fehler ist aufgetreten.',
                error: error.message
            })
        }
    }
}