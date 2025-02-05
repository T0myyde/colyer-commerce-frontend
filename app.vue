<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>
      <Navbar />
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <CookieConsent />
  </div>
</template>
<script setup>
// Stellen Sie sicher, dass die Route verfügbar ist
const route = useRoute()

import { onMounted } from 'vue'

onMounted(() => {
  // Add Cookiebot script
  const script = document.createElement('script')
  script.id = 'Cookiebot'
  script.src = 'https://consent.cookiebot.com/uc.js'
  script.setAttribute('data-cbid', '7e7761ba-0e20-47da-8e66-a978d0bec888')
  script.setAttribute('data-blockingmode', 'auto')
  script.type = 'text/javascript'
  document.head.appendChild(script)
})

</script>
<style>
body {
  background-color: #0B0D12;
  color: white;
}

</style>