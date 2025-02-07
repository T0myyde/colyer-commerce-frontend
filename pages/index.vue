<!-- app.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0B0D12] via-[#131620] to-[#0B0D12] text-white pb-20 md:pb-0">
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-6 overflow-hidden">
      <div class="container mx-auto text-center relative z-10">
        <div
            class="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-white/10 mb-6"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            >
        <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            INNOVATIVE WEBENTWICKLUNG
          </span>
        </div>
        <h1
            class="text-7xl font-bold mb-6 leading-tight"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, delay: 200 }"
        >
          Ihre Vision,<br>unsere <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient">Expertise</span>
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Wir entwickeln massgeschneiderte Weblösungen, die Ihr Unternehmen auf die nächste Stufe heben.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#contact">
            <button
                class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Kostenloses Gespräch
              <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section id="services" class="py-20 relative">
      <!-- Mouse spotlight effect container -->
      <div class="absolute inset-0 overflow-hidden">
        <div id="spotlight" class="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100
                  blur-3xl transition-opacity duration-500"></div>
        </div>
      </div>

      <div class="container mx-auto px-6">
        <!-- Main services showcase -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div v-for="(feature, index) in features"
               :key="feature.title"
               class="service-module group relative"
               @mousemove="handleMouseMove"
               @mouseleave="handleMouseLeave"
               v-motion
               :initial="{ opacity: 0, y: 100 }"
               :enter="{ opacity: 1, y: 0, delay: index * 200 }">

            <!-- Service card -->
            <div class="relative h-full">
              <!-- Top accent bar -->
              <div class="absolute -top-14 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <!-- Service content -->
              <div class="relative z-20 p-8">
                <!-- Animated number indicator -->
                <div class="absolute -top-10 -left-10 text-8xl font-bold text-white/5 select-none
                        group-hover:text-white/10 transition-colors duration-500">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>

                <!-- Service icon -->
                <div class="relative mb-8">
                  <div class="text-4xl transform group-hover:scale-125 group-hover:-rotate-12
                          transition-transform duration-500 inline-block">
                    {{ feature.icon }}
                  </div>
                </div>

                <!-- Title -->
                <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400
                       text-transparent bg-clip-text">
                  {{ feature.title }}
                </h3>

                <!-- Description -->
                <p class="text-gray-400 mb-8 group-hover:text-white transition-colors duration-300">
                  {{ feature.description }}
                </p>

                <!-- Interactive feature list -->
                <div class="space-y-4">
                  <div v-for="(item, itemIndex) in feature.items"
                       :key="item"
                       class="feature-item group/item relative"
                       :style="{ transitionDelay: itemIndex * 100 + 'ms' }">

                    <!-- Feature background -->
                    <div class="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100
                            transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>

                    <!-- Feature content -->
                    <div class="relative p-4 flex items-center gap-4">
                      <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400
                              transform group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span class="text-gray-400 group-hover/item:text-white transition-colors duration-300">
                    {{ item }}
                  </span>
                    </div>
                  </div>
                </div>

                <!-- Interactive elements -->
                <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Carousel -->
    <section id="technologies" class="py-20 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">
          Unser <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Tech Stack</span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name"
               class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div class="relative h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
              <div class="text-3xl mb-3">{{ tech.icon }}</div>
              <div class="font-medium text-center mb-2">{{ tech.name }}</div>
              <div class="text-xs text-gray-400 text-center">{{ tech.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Process Timeline -->
    <section id="process" class="py-20 relative min-h-screen">

      <!-- Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_50%)]"></div>
      </div>

      <div class="relative">
        <h2 class="text-4xl font-bold text-center mb-16">
          Unser <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Prozess</span>
        </h2>

        <!-- Process Steps Carousel -->
        <div class="flex items-center justify-center gap-8 mb-12">
          <div v-for="(step, index) in processSteps"
               :key="step.title"
               @click="activeStep = index"
               class="relative cursor-pointer w-16 h-16 flex-shrink-0"
               :class="{ 'opacity-50': activeStep !== index }">
            <!-- Number Container -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full
                    opacity-50 blur-md transition-opacity duration-500"
                 :class="{ 'opacity-75': activeStep === index }"></div>
            <div class="relative w-full h-full rounded-full border border-white/10
                    backdrop-blur-sm overflow-hidden transition-all duration-500"
                 :class="{ 'border-blue-500/50 scale-110': activeStep === index }">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div class="relative w-full h-full flex items-center justify-center text-2xl font-bold">
                {{ index + 1 }}
              </div>
            </div>
          </div>
        </div>

        <!-- Process Content -->
        <div class="container mx-auto px-4 md:px-6">
          <div class="relative">
            <TransitionGroup
                name="process"
                tag="div"
                class="relative"
            >
              <div v-for="(step, index) in processSteps"
                   :key="step.title"
                   v-show="activeStep === index"
                   class="process-step">

                <!-- Content Container -->
                <div class="mx-auto bg-black/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10">
                  <!-- Header -->
                  <div class="flex items-center justify-between mb-4 md:mb-8">
                    <h3 class="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {{ step.title }}
                    </h3>
                    <div class="text-2xl md:text-4xl opacity-50">{{ step.icon }}</div>
                  </div>

                  <!-- Description -->
                  <p class="text-base md:text-xl text-gray-400 mb-6 md:mb-12">{{ step.description }}</p>

                  <!-- Features Grid -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div v-for="feature in step.points"
                         :key="feature"
                         class="relative group">
                      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 rounded-xl
                              group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
                      <div class="relative p-4 md:p-6 rounded-xl border border-white/5 backdrop-blur-sm
                              active:border-blue-500/20 md:group-hover:border-blue-500/20 transition-all duration-300">
                        <!-- Feature Icon -->
                        <div class="flex items-center gap-3 mb-2 md:mb-4">
                          <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10
                                  flex items-center justify-center">
                            <span class="text-xl md:text-2xl">{{ feature.icon }}</span>
                          </div>
                          <h4 class="text-base md:text-lg font-semibold">{{ feature.title }}</h4>
                        </div>
                        <!-- Feature Description -->
                        <p class="text-gray-400 text-sm md:text-base">{{ feature.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </section>
    <!-- Affiliate Section -->
    <section class="py-10 sm:py-16 relative">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8">
          <h2 class="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Partner-Empfehlungsprogramm
          </span>
          </h2>

          <p class="text-center text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Haben Sie Kontakte zu Unternehmen, die eine innovative digitale Lösung benötigen? Unser Partnerprogramm bietet Ihnen die Chance, von wertvollen Empfehlungen zu profitieren.
          </p>

          <div class="text-center mb-8 sm:mb-12">
            <p class="text-white text-base sm:text-lg">
              Interessiert an einer Partnerschaft?
              <br>
              <a href="mailto:partnerprogramm@colyer-commerce.ch"
                 class="inline-block mt-2 text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
                partnerprogramm@colyer-commerce.ch
              </a>
            </p>
          </div>

          <!-- FAQ Accordion -->
          <div class="space-y-3 sm:space-y-4">
            <div v-for="(faq, index) in faqs"
                 :key="index"
                 class="relative">
              <button
                  @click="toggleFaq(index)"
                  class="w-full p-3 sm:p-4 text-left backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl
                     hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                <span class="text-sm sm:text-base font-medium">{{ faq.question }}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-300"
                    :class="{ 'rotate-180': faq.isOpen }"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                  v-show="faq.isOpen"
                  class="mt-2 p-3 sm:p-4 text-gray-300 bg-black/20 rounded-xl text-xs sm:text-sm leading-relaxed"
                  style="transition: all 0.3s ease">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="py-20 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 class="text-4xl font-bold text-center mb-8">
            Starten Sie Ihr <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Projekt</span>
          </h2>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="block text-sm font-medium">Name</label>
                <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all duration-300"
                >
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-medium">E-Mail</label>
                <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all duration-300"
                >
              </div>
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium">Nachricht</label>
              <textarea
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all duration-300"
              ></textarea>
            </div>

            <div v-if="submitStatus" class="mb-4 p-4 rounded-lg"
                 :class="{
                 'bg-green-500/10 text-green-400': submitStatus === 'success',
                 'bg-red-500/10 text-red-400': submitStatus === 'error'
               }">
              {{ submitMessage }}
            </div>

            <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-102 transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sendet...' : 'Nachricht senden' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 relative">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Company Info -->
          <div>
            <div class="flex items-center gap-2 mb-6">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"></div>
              <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Colyer-Commerce
              </span>
            </div>
            <p class="text-gray-400">Innovative Weblösungen für Ihren digitalen Erfolg</p>
          </div>

          <!-- Navigation -->
          <div>
            <h4 class="font-bold mb-6">Navigation</h4>
            <ul class="space-y-4">
              <li v-for="item in menuItems" :key="item.href">
                <NuxtLink :to="item.href"
                          class="text-gray-400 hover:text-white transition-colors">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-bold mb-6">Kontakt</h4>
            <ul class="space-y-4 text-gray-400">
              <li>info@colyer-commerce.de</li>
              <li>+41 76 701 75 57</li>
              <li>Aargau, Schweiz</li>
            </ul>
          </div>

          <!-- Social -->
          <div>
            <h4 class="font-bold mb-6">Social Media</h4>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.name"
                 :href="social.href"
                 class="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                {{ social.icon }}
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright & Legal Links -->
        <div class="mt-12 pt-8 border-t border-white/10 text-center">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-400">&copy; {{ new Date().getFullYear() }} Colyer-Commerce. Alle Rechte vorbehalten.</p>
            <div class="flex gap-6">
              <NuxtLink to="/impressum"
                        class="text-gray-400 hover:text-white transition-colors">
                Impressum
              </NuxtLink>
              <NuxtLink to="/datenschutz"
                        class="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </NuxtLink>
              <NuxtLink to="/cookie-policy" class="text-gray-400 hover:text-white transition-colors">
                Cookie-Richtlinie
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const {
  form,
  isSubmitting,
  submitStatus,
  submitMessage,
  submitForm
} = useContactForm()
const menuItems = [
  { label: 'Services', href: '#services' },
  { label: 'Technologien', href: '#technologies' },
  { label: 'Prozess', href: '#process' },
  { label: 'Kontakt', href: '#contact' }
]
const socialLinks = [
]
const features = [
  {
    icon: '🚀',
    title: 'Webentwicklung',
    description: 'Moderne und skalierbare Webanwendungen mit neuesten Technologien.',
    items: ['Frontend & Backend', 'Responsive Design', 'Performance Optimierung']
  },
  {
    icon: '💎',
    title: 'E-Commerce Lösungen',
    description: 'Professionelle Online-Shops und E-Commerce Plattformen.',
    items: ['Shop-Systeme', 'Payment Integration', 'Inventory Management']
  },
  {
    icon: '⚡',
    title: 'Digitale Beratung',
    description: 'Strategische Beratung für Ihren digitalen Erfolg.',
    items: ['Technologie-Beratung', 'Digitale Strategie', 'Prozessoptimierung']
  }
]
const technologies = [
  {
    icon: '⚡',
    name: 'Vue.js & Nuxt',
    description: 'Moderne Frontend Frameworks für reaktive Webanwendungen'
  },
  {
    icon: '🎨',
    name: 'Tailwind CSS',
    description: 'Utility-First CSS Framework für schnelles Design'
  },
  {
    icon: '🚀',
    name: 'Node.js',
    description: 'Skalierbare Backend-Lösungen & API-Entwicklung'
  },
  {
    icon: '📦',
    name: 'MongoDB',
    description: 'NoSQL Datenbank für flexible Datenspeicherung'
  },
  {
    icon: '🔄',
    name: 'REST & GraphQL',
    description: 'Moderne API-Architekturen für Datenkommunikation'
  },
  {
    icon: '🔒',
    name: 'OAuth & JWT',
    description: 'Sichere Authentifizierung & Autorisierung'
  },
  {
    icon: '📱',
    name: 'Responsive Design',
    description: 'Optimierte Darstellung auf allen Geräten'
  },
  {
    icon: '⚡',
    name: 'TypeScript',
    description: 'Type-sicheres JavaScript für robuste Anwendungen'
  },
  {
    icon: '🔍',
    name: 'SEO',
    description: 'Suchmaschinenoptimierung & Performance'
  },
  {
    icon: '🛠️',
    name: 'DevOps',
    description: 'CI/CD, Docker & Cloud-Deployment'
  },
  {
    icon: '🔄',
    name: 'Git & GitHub',
    description: 'Versionskontrolle & Kollaboration'
  },
  {
    icon: '📊',
    name: 'Analytics',
    description: 'Datengesteuerte Entscheidungen & Tracking'
  }
]

const faqs = ref([
  {
    question: 'Wie werden Provisionen berechnet und ausgezahlt?',
    answer: 'Unsere Provisionszahlungen basieren auf einem transparenten Berechnungsmodell. Nach erfolgreichem Projektabschluss und vollständiger Bezahlung wird die vereinbarte Provision automatisch ermittelt und zeitnah an Sie überwiesen. Die Höhe richtet sich nach dem Projektumfang und der vereinbarten Partnerschaftsstufe.',
    isOpen: false
  },
  {
    question: 'Wer kann am Partnerprogramm teilnehmen?',
    answer: 'Unser Partnerprogramm ist vielseitig und offen: Digitalagenturen, IT-Berater, Freelancer, Unternehmen und auch Privatpersonen können teilnehmen. Egal ob Sie ein professionelles Netzwerk haben oder einfach Bekannte kennen, die eine Webseite oder digitale Lösung benötigen – jeder kann Empfehlungen einbringen und von unseren Provisionen profitieren.',
    isOpen: false
  },
  {
    question: 'Welche strategischen Vorteile bietet die Partnerschaft?',
    answer: 'Unsere Partnerschaft geht über klassische Provisionszahlungen hinaus. Sie erhalten Zugang zu exklusiven Ressourcen, Schulungsmaterialien und Unterstützung. Gleichzeitig erweitern Sie Ihr berufliches Netzwerk, generieren zusätzliche Einnahmequellen und positionieren sich als kompetenter Vermittler innovativer digitaler Lösungen.',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const activeStep = ref(0)
const processSteps = [
  {
    title: 'Analyse & Beratung',
    description: 'Wir analysieren Ihre Anforderungen und entwickeln eine maßgeschneiderte Strategie.',
    icon: '🎯',
    points: [
      {
        icon: '📊',
        title: 'Bedürfnisanalyse',
        description: 'Detaillierte Analyse Ihrer Geschäftsziele und Anforderungen'
      },
      {
        icon: '🔍',
        title: 'Technische Evaluation',
        description: 'Bewertung der technischen Möglichkeiten und Infrastruktur'
      },
      {
        icon: '📈',
        title: 'Strategieentwicklung',
        description: 'Entwicklung einer maßgeschneiderten digitalen Strategie'
      },
      {
        icon: '📋',
        title: 'Projektplanung',
        description: 'Detaillierte Zeitplanung und Ressourcenallokation'
      }
    ]
  },
  {
    title: 'Konzeption & Design',
    description: 'Entwicklung eines detaillierten Konzepts und modernen Designs.',
    icon: '✨',
    points: [
      {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Entwicklung intuitiver und ansprechender Benutzeroberflächen'
      },
      {
        icon: '🖼️',
        title: 'Wireframing',
        description: 'Erstellung detaillierter Struktur- und Layoutpläne'
      },
      {
        icon: '📱',
        title: 'Prototyping',
        description: 'Entwicklung interaktiver Prototypen zur Visualisierung'
      },
      {
        icon: '🎯',
        title: 'Design-System',
        description: 'Entwicklung eines konsistenten Design-Systems'
      }
    ]
  },
  {
    title: 'Entwicklung',
    description: 'Agile Umsetzung mit modernsten Technologien und regelmäßigen Updates.',
    icon: '⚡',
    points: [
      {
        icon: '💻',
        title: 'Frontend-Entwicklung',
        description: 'Implementierung moderner und reaktiver Benutzeroberflächen'
      },
      {
        icon: '⚙️',
        title: 'Backend-Implementation',
        description: 'Entwicklung skalierbarer Server-Infrastruktur'
      },
      {
        icon: '🔍',
        title: 'Testing',
        description: 'Umfassende Tests und Qualitätssicherung'
      },
      {
        icon: '⚡',
        title: 'Optimierung',
        description: 'Performance-Optimierung und Feintuning'
      }
    ]
  },
  {
    title: 'Launch & Support',
    description: 'Professioneller Go-Live und kontinuierliche Betreuung.',
    icon: '🚀',
    points: [
      {
        icon: '🔄',
        title: 'Deployment',
        description: 'Professionelle Inbetriebnahme und Installation'
      },
      {
        icon: '📊',
        title: 'Monitoring',
        description: 'Kontinuierliche Überwachung und Analyse'
      },
      {
        icon: '🔄',
        title: 'Updates',
        description: 'Regelmäßige Updates und Wartung'
      },
      {
        icon: '💬',
        title: 'Support',
        description: 'Zuverlässiger technischer Support'
      }
    ]
  }
]


</script>

<style scoped>
.process-step {
  position: relative;
}

.process-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.2), transparent);
  z-index: -1;
}

/* Ensure content doesn't get hidden behind navbar on mobile */
@media (max-width: 768px) {
  body {
    padding-top: 60px; /* Adjust based on navbar height */
    padding-bottom: 80px; /* Space for bottom app bar */
  }
}

.process-step {
  position: relative;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.process-enter-active {
  animation: slideInScale 0.6s ease forwards;
}

.process-leave-active {
  animation: slideOutFade 0.4s ease forwards;
}

@keyframes slideInScale {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(30px);
  }
  60% {
    transform: scale(1.02) translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes slideOutFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.95) translateY(-30px);
  }
}

/* Zusätzliche Animation für die Nummern oben */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.number-active {
  animation: pulse 2s infinite;
}
</style>
