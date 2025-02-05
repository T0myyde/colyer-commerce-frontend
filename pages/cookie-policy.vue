<!-- pages/cookie-policy.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0B0D12] via-[#131620] to-[#0B0D12] text-white pt-32 pb-20">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
        <h1 class="text-4xl font-bold mb-8">
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Cookie-Richtlinie
          </span>
        </h1>

        <div class="space-y-8 text-gray-300">
          <section>
            <h2 class="text-2xl font-bold mb-4">Übersicht</h2>
            <p class="mb-4">
              Diese Cookie-Richtlinie erklärt, wie Colyer-Commerce ("wir", "uns", "unser") Cookies und ähnliche
              Technologien verwendet, um Sie zu erkennen, wenn Sie unsere Website besuchen. Sie erklärt, was diese
              Technologien sind und warum wir sie verwenden, sowie Ihre Rechte zur Kontrolle unserer Verwendung dieser.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Was sind Cookies?</h2>
            <p class="mb-4">
              Cookies sind kleine Datendateien, die auf Ihrem Computer oder mobilen Gerät platziert werden, wenn Sie
              eine Website besuchen. Cookies werden weithin verwendet, um Websites funktionsfähig zu machen oder
              deren Funktionsweise zu verbessern, sowie um Informationen an die Eigentümer der Website zu liefern.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Wie verwenden wir Cookies?</h2>
            <p class="mb-4">Wir verwenden folgende Arten von Cookies:</p>

            <div class="space-y-6">
              <div class="p-4 bg-white/5 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Notwendige Cookies</h3>
                <p class="mb-2">Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können in unseren Systemen nicht deaktiviert werden.</p>
                <ul class="list-disc list-inside text-sm text-gray-400">
                  <li>Session-Management</li>
                  <li>Login-Informationen</li>
                  <li>Sicherheitsrelevante Funktionen</li>
                </ul>
              </div>

              <div class="p-4 bg-white/5 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Analytische Cookies</h3>
                <p class="mb-2">Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können.</p>
                <ul class="list-disc list-inside text-sm text-gray-400">
                  <li>Google Analytics</li>
                  <li>Besucherstatistiken</li>
                  <li>Nutzungsverhalten</li>
                </ul>
              </div>

              <div class="p-4 bg-white/5 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Marketing Cookies</h3>
                <p class="mb-2">Diese Cookies können von unseren Werbepartnern über unsere Website gesetzt werden.</p>
                <ul class="list-disc list-inside text-sm text-gray-400">
                  <li>Remarketing</li>
                  <li>Interessenbasierte Werbung</li>
                  <li>Conversion Tracking</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Cookie-Laufzeit</h2>
            <div class="space-y-4">
              <p>Je nach ihrer Funktion unterscheiden wir zwei Arten von Cookies:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Session-Cookies (temporäre Cookies): Diese werden gelöscht, wenn Sie Ihren Browser schließen.</li>
                <li>Permanente Cookies: Diese bleiben auf Ihrem Gerät, bis sie automatisch gelöscht werden oder Sie sie manuell löschen.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Ihre Rechte</h2>
            <div class="space-y-4">
              <p>Sie haben das Recht:</p>
              <ul class="list-disc list-inside space-y-2">
                <li>Cookies zu akzeptieren oder abzulehnen</li>
                <li>Ihre Cookie-Einstellungen jederzeit zu ändern</li>
                <li>Cookies aus Ihrem Browser zu löschen</li>
              </ul>
              <p class="mt-4">
                Bitte beachten Sie, dass die Deaktivierung von Cookies die Funktionalität dieser und vieler anderer Websites,
                die Sie besuchen, beeinträchtigen kann. Daher wird empfohlen, Cookies nicht zu deaktivieren.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Cookie-Einstellungen</h2>
            <p class="mb-4">
              Sie können Ihre Cookie-Einstellungen jederzeit anpassen. Klicken Sie dazu auf den folgenden Button:
            </p>
            <button @click="openCookieSettings"
                    class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-all">
              Cookie-Einstellungen öffnen
            </button>
          </section>

          <section>
            <h2 class="text-2xl font-bold mb-4">Kontakt</h2>
            <p>
              Wenn Sie Fragen zu unserer Verwendung von Cookies oder anderen Tracking-Technologien haben,
              kontaktieren Sie uns bitte unter:
            </p>
            <p class="mt-2">
              E-Mail: info@colyer-commerce.ch<br>
              Tel.: +41 76 701 75 57
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importiere definePageMeta
definePageMeta({
  title: 'Cookie-Richtlinie',
  meta: [
    {
      name: 'description',
      content: 'Cookie-Richtlinie von Colyer-Commerce - Informationen über die Verwendung von Cookies auf unserer Website.'
    }
  ]
})

const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'))
}
</script>