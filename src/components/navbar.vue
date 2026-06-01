<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// All reactive variables and logic must live inside here
const galleryOpen = ref(false)
const destOpen = ref(false)
const navRef = ref(null)

const onDocClick = (e) => {
  if (!navRef.value) return
  if (!navRef.value.contains(e.target)) {
    galleryOpen.value = false
    destOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <nav ref="navRef" class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
    <img src="../assets/img.png" alt="Logo" class="h-10 w-auto">
    <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
      <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
      
      <!-- Gallery Dropdown -->
      <li class="relative">
        <button @click.stop="galleryOpen = !galleryOpen" class="hover:text-yellow-300 flex items-center gap-1" type="button">
          Gallery<span> v </span>
        </button>
        <ul :class="['absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg transition-opacity', galleryOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 pointer-events-none']">
          <li><RouterLink to="/photo" class="block px-4 py-2 hover:bg-green-700">Images</RouterLink></li>
          <li><RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-700">Videos</RouterLink></li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative">
        <button @click.stop="destOpen = !destOpen" class="hover:text-yellow-300 flex items-center gap-1" type="button">
          Destination<span> v </span>
        </button>
        <ul :class="['absolute left-0 mt-2 w-44 bg-green-800 text-white rounded-md shadow-lg transition-opacity', destOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 pointer-events-none']">
          <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</RouterLink></li>
          <li><RouterLink to="/south" class="block px-4 py-2 hover:bg-green-700">South</RouterLink></li>
          <li><RouterLink to="/west" class="block px-4 py-2 hover:bg-green-700">West</RouterLink></li>
          <li><RouterLink to="/north" class="block px-4 py-2 hover:bg-green-700">North</RouterLink></li>
          <li><RouterLink to="/east" class="block px-4 py-2 hover:bg-green-700">East</RouterLink></li>
        </ul>
      </li>

      <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink></li>
    </ul>
  </nav>
</template>
