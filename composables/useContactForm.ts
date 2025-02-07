// composables/useContactForm.js
export const useContactForm = () => {
    const form = ref({
        name: '',
        email: '',
        message: ''
    })

    const isSubmitting = ref(false)
    const submitStatus = ref('')
    const submitMessage = ref('')

    const submitForm = async () => {
        try {
            isSubmitting.value = true
            submitStatus.value = ''
            submitMessage.value = ''

            const response = await fetch('/.netlify/functions/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form.value)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Ein Fehler ist aufgetreten')
            }

            submitStatus.value = 'success'
            submitMessage.value = 'Ihre Nachricht wurde erfolgreich gesendet!'
            form.value = { name: '', email: '', message: '' }

        } catch (error) {
            console.error('Fehler beim Senden:', error)
            submitStatus.value = 'error'
            submitMessage.value = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
        } finally {
            isSubmitting.value = false
        }
    }

    return {
        form,
        isSubmitting,
        submitStatus,
        submitMessage,
        submitForm
    }
}