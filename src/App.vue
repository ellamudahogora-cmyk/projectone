
<script setup>
import { provide } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import { locale, t, setLocale, languageOptions } from './i18n.js'

provide('locale', locale)
provide('t', t)
provide('setLocale', setLocale)
provide('languageOptions', languageOptions)
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>







