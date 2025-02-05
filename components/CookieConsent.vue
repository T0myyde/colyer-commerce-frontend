<!-- components/CookieConsent.vue -->
<template>
  <div
      v-if="showConsent"
      class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
  >
    <div class="bg-[#1A1E29] rounded-2xl max-w-md w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Navigation Tabs -->
      <div class="flex border-b border-white/10">
        <button
            @click="activeTab = 'consent'"
            class="flex-1 py-2 text-center text-sm font-semibold transition-colors"
            :class="activeTab === 'consent' ? 'text-white bg-white/10' : 'text-gray-400 hover:bg-white/5'"
        >
          Consent
        </button>
        <button
            @click="activeTab = 'details'"
            class="flex-1 py-2 text-center text-sm font-semibold transition-colors"
            :class="activeTab === 'details' ? 'text-white bg-white/10' : 'text-gray-400 hover:bg-white/5'"
        >
          Details
        </button>
        <button
            @click="activeTab = 'about'"
            class="flex-1 py-2 text-center text-sm font-semibold transition-colors"
            :class="activeTab === 'about' ? 'text-white bg-white/10' : 'text-gray-400 hover:bg-white/5'"
        >
          About
        </button>
      </div>

      <!-- Scrollable Content Area -->
      <div class="overflow-y-auto flex-grow">
        <!-- Consent Tab -->
        <div v-if="activeTab === 'consent'" class="p-4">
          <h2 class="text-xl font-bold mb-3 text-white">Diese Website verwendet Cookies</h2>
          <p class="text-xs text-gray-400 mb-4">
            Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, soziale Mediafunktionen bereitzustellen und unseren Datenverkehr zu analysieren.
          </p>

          <div class="space-y-3">
            <div
                v-for="(category, key) in cookieCategories"
                :key="key"
                class="bg-white/5 border border-white/10 rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                <h3 class="text-sm font-semibold text-white">{{ category.title }}</h3>
                <p class="text-xs text-gray-400">{{ category.description }}</p>
              </div>
              <div>
                <label class="flex items-center cursor-pointer">
                  <input
                      type="checkbox"
                      :checked="selectedCategories.includes(key)"
                      @change="toggleCategory(key)"
                      :disabled="category.required"
                      class="hidden peer"
                  />
                  <span
                      class="w-10 h-5 bg-gray-700 rounded-full relative transition-all duration-300"
                  >
                    <span
                        class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300"
                        :class="selectedCategories.includes(key) ? 'translate-x-5 bg-blue-600' : 'translate-x-0'"
                    ></span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Details Tab -->
        <div v-else-if="activeTab === 'details'" class="p-4">
          <div
              v-for="(category, key) in cookieCategories"
              :key="key"
              class="mb-4 bg-white/5 border border-white/10 rounded-lg p-3"
          >
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-sm font-semibold text-white">
                {{ category.title }}
                <span class="text-xs text-gray-400 ml-1">
                  ({{ category.cookies ? category.cookies.length : 0 }} Cookies)
                </span>
              </h3>
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    :checked="selectedCategories.includes(key)"
                    @change="toggleCategory(key)"
                    :disabled="category.required"
                    class="hidden peer"
                />
                <span
                    class="w-10 h-5 bg-gray-700 rounded-full relative transition-all duration-300"
                >
                  <span
                      class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300"
                      :class="selectedCategories.includes(key) ? 'translate-x-5 bg-blue-600' : 'translate-x-0'"
                  ></span>
                </span>
              </label>
            </div>
            <p class="text-xs text-gray-400 mb-2">{{ category.description }}</p>
            <div v-if="category.cookies" class="bg-white/10 p-2 rounded-lg">
              <div
                  v-for="cookie in category.cookies"
                  :key="cookie.name"
                  class="flex justify-between text-xs py-1 text-gray-300"
              >
                <span>{{ cookie.name }}</span>
                <span class="text-gray-500">{{ cookie.description }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- About Tab -->
        <div v-else class="p-4">
          <h2 class="text-xl font-bold mb-3 text-white">Über Cookies</h2>
          <p class="text-xs text-gray-400 mb-3">
            Cookies sind kleine Textdateien, die von Websites verwendet werden, um die Benutzererfahrung effizienter zu gestalten.
          </p>
          <p class="text-xs text-gray-400 mb-3">
            Das Gesetz besagt, dass wir Cookies auf Ihrem Gerät speichern dürfen, wenn sie für den Betrieb der Website unbedingt erforderlich sind.
            Für alle anderen Arten von Cookies benötigen wir Ihre Zustimmung.
          </p>
          <p class="text-xs text-gray-400">
            Sie können jederzeit Ihre Einwilligung ändern oder widerrufen.
          </p>
          <p class="text-xs text-gray-500 mt-3">
            <strong>Letzte Aktualisierung:</strong> {{ lastUpdated }}
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="p-4 border-t border-white/10 flex justify-between">
        <button
            @click="denyAll"
            class="px-4 py-2 text-xs bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
        >
          Ablehnen
        </button>
        <div class="space-x-2">
          <button
              @click="allowSelection"
              class="px-4 py-2 text-xs bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
          >
            Speichern
          </button>
          <button
              @click="allowAll"
              class="px-4 py-2 text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// [The entire script remains the same as in the previous implementation]
// Only the template has been modified to be more compact
</script>