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
        <div class="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-white/10 mb-6">
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            INNOVATIVE WEBENTWICKLUNG
          </span>
        </div>
        <h1 class="text-6xl font-bold mb-6 leading-tight">
          Ihre Vision,<br>unsere <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Expertise</span>
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
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title"
               class="group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div class="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
              <div class="w-full h-full rounded-xl bg-[#0B0D12] flex items-center justify-center">
                <div class="text-2xl">{{ feature.icon }}</div>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ feature.title }}</h3>
            <p class="text-gray-400 mb-6 transition-all duration-300 group-hover:text-white">
              {{ feature.description }}
            </p>
            <ul class="space-y-3">
              <li v-for="item in feature.items" :key="item"
                  class="flex items-center gap-2 text-gray-400 group-hover:text-white transition-all duration-300">
                <span class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                {{ item }}
              </li>
            </ul>
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
    <section id="process" class="py-20 relative">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">
          Unser <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Prozess</span>
        </h2>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Process Steps -->
            <div class="space-y-12">
              <div v-for="(step, index) in processSteps"
                   :key="step.title"
                   class="process-step group">

                <!-- Step Number -->
                <div class="flex justify-center mb-6">
                  <div class="relative w-16 h-16">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                    <div class="relative w-full h-full rounded-full backdrop-blur-sm bg-white/5 border border-white/10
                             flex items-center justify-center text-2xl font-bold
                             group-hover:border-blue-500/50 transition-all duration-300">
                      {{ index + 1 }}
                    </div>
                  </div>
                </div>

                <!-- Content Box -->
                <div class="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl
                         hover:bg-white/10 transition-all duration-300 text-center
                         group-hover:border-blue-500/50 group-hover:scale-[1.02]">
                  <h3 class="text-2xl font-bold mb-4">
                  <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {{ step.title }}
                  </span>
                  </h3>
                  <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                    {{ step.description }}
                  </p>
                  <div class="flex flex-wrap justify-center gap-4">
                    <div v-for="point in step.points"
                         :key="point"
                         class="px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10
                              text-sm text-gray-400 group-hover:text-gray-300 group-hover:border-blue-500/30
                              transition-all duration-300">
                      {{ point }}
                    </div>
                  </div>
                </div>

                <!-- Connecting Line -->
                <div v-if="index < processSteps.length - 1"
                     class="w-px h-12 bg-gradient-to-b from-blue-500/50 to-purple-500/50 mx-auto my-4"></div>
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
                class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50"
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
const processSteps = [
  {
    title: 'Analyse & Beratung',
    description: 'Wir analysieren Ihre Anforderungen und entwickeln eine maßgeschneiderte Strategie.',
    points: [
      'Bedürfnisanalyse',
      'Technische Evaluation',
      'Strategieentwicklung'
    ]
  },
  {
    title: 'Konzeption & Design',
    description: 'Entwicklung eines detaillierten Konzepts und modernen Designs.',
    points: [
      'UI/UX Design',
      'Wireframing',
      'Prototyping'
    ]
  },
  {
    title: 'Entwicklung',
    description: 'Agile Umsetzung mit modernsten Technologien und regelmäßigen Updates.',
    points: [
      'Frontend-Entwicklung',
      'Backend-Implementation',
      'Qualitätssicherung'
    ]
  },
  {
    title: 'Launch & Support',
    description: 'Professioneller Go-Live und kontinuierliche Betreuung.',
    points: [
      'Performance-Optimierung',
      'Monitoring',
      'Wartung & Updates'
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
</style>
