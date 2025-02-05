<!-- components/Navbar.vue -->
<template>
  <nav class="fixed top-0 left-0 right-0 z-50 w-full">
    <!-- Desktop Navigation -->
    <div class="hidden md:block backdrop-blur-md bg-[#0B0D12]/60 border-b border-white/5">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <div class="mr-3">
              <img class="w-10 h-10 rounded-full" src="../app/assets/iamges/Blau.jpg" alt="Rounded avatar">
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Colyer-Commerce
            </span>
          </div>
          <div class="flex items-center gap-8">
            <a
                v-for="item in menuItems"
                :key="item.href"
                :href="item.href"
                class="relative group text-gray-300 hover:text-white transition-colors"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom App Bar -->
    <div class="fixed bottom-0 left-0 right-0 md:hidden z-50">
      <div class="bg-[#1A1E29]/90 backdrop-blur-lg border-t border-white/10 rounded-t-2xl shadow-2xl">
        <div class="grid grid-cols-4 py-3">
          <a
              v-for="item in menuItems"
              :key="item.href"
              :href="item.href"
              class="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors group"
          >
            <div class="text-2xl mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
              {{ getIconForMenuItem(item.label) }}
            </div>
            <span class="text-xs">{{ item.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const moreMenuOpen = ref(false)

const menuItems = [
  { label: 'Services', href: '#services' },
  { label: 'Technologien', href: '#technologies' },
  { label: 'Prozess', href: '#process' },
  { label: 'Kontakt', href: '#contact' }
]

const getIconForMenuItem = (label) => {
  switch(label) {
    case 'Services': return '🚀'
    case 'Technologien': return '💻'
    case 'Prozess': return '⚙️'
    case 'Kontakt': return '📞'
    default: return '•'
  }
}

const openMoreMenu = () => {
  moreMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMoreMenu = () => {
  moreMenuOpen.value = false
  document.body.style.overflow = 'unset'
}

// Cleanup body style when component is unmounted
onUnmounted(() => {
  document.body.style.overflow = 'unset'
})
</script>

<style scoped>
/* Ensure the body has padding at the bottom to prevent content being hidden behind the app bar */
@media (max-width: 768px) {
  body {
    padding-bottom: 80px;
    padding-top: 60px;
  }
}
</style>