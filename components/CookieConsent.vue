<!-- components/CookieConsent.vue -->
<template>
  <div
      v-if="showConsent"
      class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
  >
    <div class="bg-[#1A1E29] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Navigation Tabs -->
      <div class="flex border-b border-white/10">
        <button
            @click="activeTab = 'consent'"
            class="flex-1 py-3 text-center font-semibold transition-colors"
            :class="activeTab === 'consent' ? 'text-white bg-white/10' : 'text-gray-400 hover:bg-white/5'"
        >
          Einwilligung
        </button>
        <button
            @click="activeTab = 'details'"
            class="flex-1 py-3 text-center font-semibold transition-colors"
            :class="activeTab === 'details' ? 'text-white bg-white/10' : 'text-gray-400 hover:bg-white/5'"
        >
          Details
        </button>
        <button
            @click="activeTab = 'about'"
            class="flex-1 py-3 text-center font-semibold transition-colors"
            :class="activeTab === 'about' ? 'text-white bg-white/10' : 'text-gray-400 hover:bg-white/5'"
        >
          Über Cookies
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
            <strong>Letzte Aktualisierung:</strong> Februar 2024
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="p-4 border-t border-white/10 flex justify-between">
        <button
            @click="denyAll"
            class="px-4 py-2 text-xs bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
        >
          Nur notwendige Cookies
        </button>
        <div class="space-x-2">
          <button
              @click="allowSelection"
              class="px-4 py-2 text-xs bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
          >
            Auswahl speichern
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
const activeTab = ref('consent')
const showConsent = ref(false)
const selectedCategories = ref(['necessary'])
const lastUpdated = ref('Februar 2024')

const cookieCategories = {
  necessary: {
    title: 'Notwendige Cookies',
    description: 'Technisch unerlässliche Cookies, die für die Grundfunktionalität der Website erforderlich sind.',
    required: true,
    cookies: [
      { name: 'session_id', description: 'Sitzungsidentifikation' },
      { name: 'security_token', description: 'Websitesicherheit' }
    ]
  },
  preferences: {
    title: 'Präferenz-Cookies',
    description: 'Cookies, die die Benutzerfreundlichkeit verbessern und Ihre Vorlieben speichern.',
    required: false,
    cookies: [
      { name: 'language', description: 'Spracheinstellungen' }
    ]
  },
  analytics: {
    title: 'Analyse-Cookies',
    description: 'Cookies, die uns helfen zu verstehen, wie Besucher mit der Website interagieren.',
    required: false,
    cookies: [
      { name: '_ga', description: 'Google Analytics Benutzer-ID' },
      { name: '_gid', description: 'Google Analytics Sitzungs-ID' }
    ]
  },
  marketing: {
    title: 'Marketing-Cookies',
    description: 'Cookies zur Personalisierung von Werbung und Tracking über Websites hinweg.',
    required: false,
    cookies: [
      { name: 'ad_session', description: 'Werbe-Tracking' }
    ]
  }
}

// Toggle cookie categories
const toggleCategory = (category) => {
  if (cookieCategories[category].required) return

  const index = selectedCategories.value.indexOf(category)
  if (index > -1) {
    selectedCategories.value.splice(index, 1)
  } else {
    selectedCategories.value.push(category)
  }
}

// Cookie management functions
const setCookie = (name, value, days) => {
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`
}

const getCookie = (name) => {
  const cookieName = `${name}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')

  for(let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length)
    }
  }
  return ''
}

// Consent handling methods
const denyAll = () => {
  selectedCategories.value = ['necessary']
  saveSettings()
}

const allowSelection = () => {
  saveSettings()
}

const allowAll = () => {
  selectedCategories.value = Object.keys(cookieCategories)
  saveSettings()
}

const saveSettings = () => {
  // Save selected categories
  setCookie('cookie_consent', JSON.stringify(selectedCategories.value), 365)

  // Initialize tracking based on selected categories
  initTracking(selectedCategories.value)

  // Hide consent modal
  showConsent.value = false
}

// Initialize tracking
const initTracking = (categories) => {
  // Clear existing tracking scripts
  const existingScripts = document.querySelectorAll('script[data-cookie-category]')
  existingScripts.forEach(script => script.remove())

  // Analytics tracking
  if (categories.includes('analytics')) {
    // Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-VF160GWL7', { 'anonymize_ip': true })

    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-VF160GWL7'
    gaScript.setAttribute('data-cookie-category', 'analytics')
    document.head.appendChild(gaScript)
  }
}

// Check consent on mount
onMounted(() => {
  const existingConsent = getCookie('cookie_consent')

  if (!existingConsent) {
    // Show consent modal if no previous consent
    showConsent.value = true
  } else {
    // Parse and apply existing consent
    try {
      const parsedConsent = JSON.parse(existingConsent)
      selectedCategories.value = parsedConsent
      initTracking(parsedConsent)
    } catch (error) {
      // Fallback to necessary cookies if parsing fails
      selectedCategories.value = ['necessary']
      initTracking(['necessary'])
    }
  }
})
</script>