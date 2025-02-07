// plugins/google-analytics.client.ts
export default defineNuxtPlugin(() => {
    const GA_ID = 'G-VF160GWL7' // Replace with your Google Analytics ID
    const COOKIEBOT_ID = '7e7761ba-0e20-47da-8e66-a978d0bec888' // Replace with your Cookiebot ID

    function initializeCookiebot() {
        const script = document.createElement('script')
        script.id = 'Cookiebot'
        script.src = 'https://consent.cookiebot.com/uc.js'
        script.setAttribute('data-cbid', COOKIEBOT_ID)
        script.setAttribute('data-blockingmode', 'auto')
        script.type = 'text/javascript'

        // Warte auf das onload-Ereignis,
        // erst dann ist das Script wirklich geladen
        script.onload = () => {
            // Cookiebot ist jetzt da
            initializeGoogleAnalytics()
        }

        document.head.appendChild(script)
    }

    function initializeGoogleAnalytics() {
        // 1) GA-Skript laden
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
        document.head.appendChild(script)

        // 2) dataLayer einrichten und gtag definieren
        window.dataLayer = window.dataLayer || []
        function gtag() { window.dataLayer.push(arguments) }
        window.gtag = gtag
        gtag('js', new Date())

        // 3) Jetzt Cookiebot abfragen
        if (window.Cookiebot && window.Cookiebot.consent && window.Cookiebot.consent.statistics) {
            gtag('config', GA_ID)
        }

        // 4) Consent-Änderungen überwachen
        //    Falls CookiebotCallback noch nicht existiert, legen wir sie an.
        if (!window.CookiebotCallback) {
            window.CookiebotCallback = function () {}
        }

        // Hier überschreiben/erweitern wir die Callback-Funktion
        const oldCallback = window.CookiebotCallback
        window.CookiebotCallback = function () {
            oldCallback()
            if (window.Cookiebot.consent.statistics) {
                gtag('config', GA_ID)
            } else {
                window['ga-disable-' + GA_ID] = true
            }
        }
    }

    // Stelle window und document sicher zur Verfügung stehen
    if (process.client) {
        // Warte bis das DOM geladen ist
        if (document.readyState === 'complete') {
            initializeCookiebot()
            initializeGoogleAnalytics()
        } else {
            window.addEventListener('load', () => {
                initializeCookiebot()
                initializeGoogleAnalytics()
            })
        }
    }

    return {
        provide: {
            ga: {
                trackEvent: (category, action, label, value) => {
                    // Only track if Cookiebot allows statistics
                    if (window.gtag && (!window.Cookiebot || window.Cookiebot.consent.statistics)) {
                        window.gtag('event', action, {
                            event_category: category,
                            event_label: label,
                            value: value
                        })
                    }
                },
                pageView: (page_path) => {
                    // Only track page view if Cookiebot allows statistics
                    if (window.gtag && (!window.Cookiebot || window.Cookiebot.consent.statistics)) {
                        window.gtag('config', GA_ID, {
                            page_path
                        })
                    }
                }
            }
        }
    }
})