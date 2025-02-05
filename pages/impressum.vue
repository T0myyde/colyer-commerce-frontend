<!-- pages/impressum.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0B0D12] via-[#131620] to-[#0B0D12] text-white pt-32 pb-20">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
        <h1 class="text-4xl font-bold mb-8">
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Impressum
          </span>
        </h1>

        <div class="space-y-8 text-gray-300">
          <section class="space-y-2">
            <h2 class="text-2xl font-bold mb-4">Angaben gemäß Geschäftsrecht</h2>
            <p>Colyer-Commerce</p>
            <p>Einzelunternehmen</p>
            <p>Inhaber: Nil Colyer</p>
            <p>Ifangstrasse 17</p>
            <p>5525 Fischbach-Göslikon</p>
            <p>Schweiz</p>
          </section>

          <section class="space-y-2">
            <h2 class="text-2xl font-bold mb-4">Kontakt</h2>
            <p>Tel.: +41 76 701 75 57</p>
            <p>E-Mail: info@colyer-commerce.ch</p>
          </section>

          <section class="space-y-2">
            <h2 class="text-2xl font-bold mb-4">Handelsregister</h2>
            <p>Handelsregisteramt: Handelsregisteramt des Kantons Aargau</p>
            <p>Registernummer: CHE-330.035.625</p>
          </section>

          <section class="space-y-2">
            <h2 class="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer: DE368919670</p>
          </section>

          <section class="space-y-2">
            <h2 class="text-2xl font-bold mb-4">Streitschlichtung</h2>
            <p>Plattform der EU-Kommission zur Online-Streitbeilegung:</p>
            <a href="https://ec.europa.eu/odr"
               target="_blank"
               rel="noopener noreferrer"
               class="text-blue-400 hover:text-blue-300 transition-colors">
              https://ec.europa.eu/odr
            </a>
            <p class="mt-4">
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Meta-Tags für SEO
useHead({
  title: 'Impressum - Colyer-Commerce',
  meta: [
    {
      name: 'description',
      content: 'Impressum und rechtliche Informationen von Colyer-Commerce, Ihrem Partner für Webentwicklung und E-Commerce Lösungen.'
    }
  ]
})
</script>