// composables/useContactForm.ts
export default function useContactForm() {
    const form = ref({
        name: '',
        email: '',
        message: ''
    })

    const isSubmitting = ref(false)
    const submitStatus = ref(null)
    const submitMessage = ref('')

    const submitForm = async () => {
        if (isSubmitting.value) return

        isSubmitting.value = true
        submitStatus.value = null

        try {
            const { data, error } = await useFetch('/api/contact', {
                method: 'POST',
                body: form.value
            })

            if (error.value) {
                throw error.value
            }

            // Reset form after successful submission
            submitStatus.value = 'success'
            submitMessage.value = 'Ihre Nachricht wurde erfolgreich gesendet!'
            form.value = { name: '', email: '', message: '' }
        } catch (err) {
            submitStatus.value = 'error'
            submitMessage.value = 'Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
            console.error(err)
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