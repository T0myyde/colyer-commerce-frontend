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

</script>
<style>
body {
  background-color: #0B0D12;
  color: white;
}

</style>