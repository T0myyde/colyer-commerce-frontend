<!-- pages/datenschutz.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0B0D12] via-[#131620] to-[#0B0D12] text-white pt-24 md:pt-32 pb-20">
    <div class="container mx-auto px-4 md:px-6">
      <div class="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8">
        <h1 class="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
          Datenschutzerklärung
        </h1>

        <div class="space-y-6 md:space-y-8 text-gray-300">
          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              1. Informationen zur Datenverarbeitung
            </h2>

            <div class="space-y-4">
              <h3 class="text-lg md:text-xl font-bold">Kontakt des Verantwortlichen</h3>
              <div class="bg-white/10 p-3 md:p-4 rounded-lg text-sm md:text-base">
                <p class="mb-1 md:mb-2"><strong>Einzelunternehmen Colyer-Commerce</strong></p>
                <p>Ifangstrasse 17</p>
                <p>5525 Fischbach-Göslikon</p>
                <p>Schweiz</p>
                <p class="mt-1 md:mt-2">
                  <strong>E-Mail:</strong>
                  <a href="mailto:info@colyer-commerce.de" class="text-blue-400 hover:underline break-all">
                    info@colyer-commerce.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              2. Datenerfassung beim Websitebesuch
            </h2>

            <div class="space-y-4">
              <h3 class="text-lg md:text-xl font-bold">Arten der erfassten Daten</h3>
              <p class="text-sm md:text-base">
                Bei jedem Besuch unserer Website werden automatisch folgende Daten temporär in Logfiles gespeichert:
              </p>
              <ul class="list-disc list-inside space-y-2 bg-white/10 p-3 md:p-4 rounded-lg text-sm md:text-base">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browser und Betriebssystem</li>
                <li>Verweisende Website</li>
                <li>Aufgerufene Seiten</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              3. Cookies und Tracking-Technologien
            </h2>

            <div class="space-y-4">
              <h3 class="text-lg md:text-xl font-bold">Arten von Cookies</h3>
              <p class="text-sm md:text-base">Wir verwenden verschiedene Arten von Cookies:</p>
              <ul class="list-disc list-inside space-y-2 bg-white/10 p-3 md:p-4 rounded-lg text-sm md:text-base">
                <li><strong>Technisch notwendige Cookies:</strong> Ermöglichen die Grundfunktionalität der Website</li>
                <li><strong>Analytische Cookies:</strong> Helfen uns, die Websitenutzung zu verstehen</li>
                <li><strong>Funktionale Cookies:</strong> Verbessern die Benutzerfreundlichkeit</li>
              </ul>

              <h3 class="text-lg md:text-xl font-bold mt-4 md:mt-6">Liste der verwendeten Cookies</h3>
              <div class="overflow-x-auto">
                <table class="w-full bg-white/10 rounded-lg text-sm md:text-base">
                  <thead>
                  <tr class="border-b border-white/20">
                    <th class="p-2 md:p-3 text-left">Cookie-Name</th>
                    <th class="p-2 md:p-3 text-left">Zweck</th>
                    <th class="p-2 md:p-3 text-left">Gültigkeitsdauer</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="border-b border-white/10">
                    <td class="p-2 md:p-3">session_id</td>
                    <td class="p-2 md:p-3">Sitzungsidentifikation</td>
                    <td class="p-2 md:p-3">Sitzungsende</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="p-2 md:p-3">cookie_consent</td>
                    <td class="p-2 md:p-3">Speichert Cookie-Einstellungen</td>
                    <td class="p-2 md:p-3">30 Tage</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="p-2 md:p-3">_ga</td>
                    <td class="p-2 md:p-3">Google Analytics Benutzer-ID</td>
                    <td class="p-2 md:p-3">2 Jahre</td>
                  </tr>
                  <tr>
                    <td class="p-2 md:p-3">_gid</td>
                    <td class="p-2 md:p-3">Google Analytics Sitzungs-ID</td>
                    <td class="p-2 md:p-3">24 Stunden</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Rest of the sections follow the same mobile optimization pattern -->
          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              4. Web-Analyse
            </h2>

            <div class="space-y-4">
              <h3 class="text-lg md:text-xl font-bold">Google Analytics</h3>
              <p class="text-sm md:text-base">
                Wir nutzen Google Analytics zur Websiteanalyse. Die IP-Adresse wird anonymisiert (IP-Masking).
              </p>
              <div class="bg-white/10 p-3 md:p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-sm md:text-base">Erfasste Daten:</h4>
                <ul class="list-disc list-inside space-y-2 text-sm md:text-base">
                  <li>Besucherdauer</li>
                  <li>Seitenaufrufe</li>
                  <li>Herkunft der Besucher</li>
                  <li>Genutztes Endgerät</li>
                </ul>
              </div>

              <h3 class="text-lg md:text-xl font-bold mt-4 md:mt-6">Opt-Out</h3>
              <p class="text-sm md:text-base">
                Sie können Google Analytics deaktivieren durch:
              </p>

              <ul class="list-disc list-inside space-y-2 bg-white/10 p-3 md:p-4 rounded-lg">
                <li>Browser-Plugin: Google Analytics Opt-out</li>
                <li>Deaktivierung in den Browsereinstellungen</li>
              </ul>
            </div>
          </section>

          <!-- Remaining sections follow the same pattern of mobile optimization -->
          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              5. Ihre Rechte
            </h2>

            <div class="space-y-4">
              <p class="text-sm md:text-base">
                Sie haben folgende Rechte:
              </p>
              <ul class="list-disc list-inside space-y-2 bg-white/10 p-3 md:p-4 rounded-lg text-sm md:text-base">
                <li>Auskunftsrecht über gespeicherte Daten</li>
                <li>Recht auf Berichtigung</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Widerspruchsrecht</li>
                <li>Beschwerderecht bei Aufsichtsbehörden</li>
              </ul>

              <div class="bg-white/10 p-3 md:p-4 rounded-lg">
                <h3 class="font-bold mb-2 text-sm md:text-base">Kontakt für Datenschutzanfragen:</h3>
                <p class="text-sm md:text-base">
                  E-Mail:
                  <a href="mailto:info@colyer-commerce.de" class="text-blue-400 hover:underline break-all">
                    info@colyer-commerce.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              6. Technische und Organisatorische Maßnahmen
            </h2>

            <ul class="list-disc list-inside space-y-2 bg-white/10 p-3 md:p-4 rounded-lg text-sm md:text-base">
              <li>Verschlüsselte Datenübertragung (HTTPS)</li>
              <li>Regelmäßige Sicherheitsupdates</li>
              <li>Zugriffskontrollen</li>
              <li>Pseudonymisierung personenbezogener Daten</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              7. Änderungen der Datenschutzerklärung
            </h2>

            <p class="text-sm md:text-base">
              Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren.
              Die aktuelle Version finden Sie immer auf dieser Website.
            </p>
            <p class="mt-2 md:mt-4 text-xs md:text-sm text-gray-500">
              <strong>Letzte Aktualisierung:</strong> Februar 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Optional: Add any necessary script logic here
</script>

<style scoped>
/* Ensure horizontal scrolling for wide tables on mobile */
.overflow-x-auto {
  max-width: 100%;
  overflow-x: auto;
}
</style>