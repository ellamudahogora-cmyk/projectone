<script setup>
import { inject, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import heroImage from '../assets/rwanda7.png'

const t = inject('t')
const setLocale = inject('setLocale')
const languageOptions = inject('languageOptions')
const locale = inject('locale')
const searchQuery = ref('')

const selectedLanguage = computed({
  get: () => locale?.value || 'en',
  set: value => setLocale?.(value)
})

function onSearch() {
  if (!searchQuery.value) return
  alert(`${t('hero.searchButton')}: ${searchQuery.value}`)
}
</script>

<template>
  <section class="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="bg-slate-900/75 absolute inset-0"></div>
    <div class="relative px-6 md:px-0 max-w-6xl w-full">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
        <form @submit.prevent="onSearch" class="flex-1 flex flex-col sm:flex-row items-stretch gap-3 w-full md:max-w-2xl">
          <input
            v-model="searchQuery"
            type="search"
            :placeholder="t('hero.searchPlaceholder')"
            class="min-w-0 flex-1 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            class="rounded-full bg-yellow-400 text-slate-900 px-5 py-3 font-semibold hover:bg-yellow-300 transition"
          >
            {{ t('hero.searchButton') }}
          </button>
        </form>

        <div class="flex flex-col gap-2 items-start sm:items-end">
          <span class="text-sm uppercase tracking-[0.3em] text-slate-100">{{ t('language.label') }}</span>
          <select
            v-model="selectedLanguage"
            class="rounded-full border border-white/30 bg-slate-900/70 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option v-for="option in languageOptions" :key="option.code" :value="option.code">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="text-left max-w-3xl">
        <p class="text-sm uppercase tracking-[0.4em] text-yellow-300 mb-4">{{ t('nav.destination') }}</p>
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-4">{{ t('hero.title') }}</h1>
        <p class="text-2xl md:text-3xl text-slate-200 mb-6">{{ t('hero.subtitle') }}</p>
        <p class="text-lg md:text-2xl text-slate-100 mb-8">{{ t('hero.description') }}</p>
        <div class="flex flex-col sm:flex-row items-start gap-4">
          <RouterLink to="/about" class="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">{{ t('hero.learnMore') }}</RouterLink>
          <RouterLink to="/services" class="px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">{{ t('hero.exploreMore') }}</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 bg-slate-100">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <p class="text-yellow-500 font-semibold uppercase tracking-[0.3em] mb-3">{{ t('features.title') }}</p>
        <h2 class="text-4xl font-bold text-slate-900">{{ t('features.title') }}</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
          <div class="text-5xl mb-4 text-green-600">🌿</div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ t('features.items.0.title') }}</h3>
          <p class="text-slate-600">{{ t('features.items.0.description') }}</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
          <div class="text-5xl mb-4 text-yellow-500">🎨</div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ t('features.items.1.title') }}</h3>
          <p class="text-slate-600">{{ t('features.items.1.description') }}</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition">
          <div class="text-5xl mb-4 text-teal-600">🏛️</div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ t('features.items.2.title') }}</h3>
          <p class="text-slate-600">{{ t('features.items.2.description') }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
      <div>
        <p class="text-sm uppercase tracking-[0.35em] text-yellow-500 mb-4">{{ t('discover.title') }}</p>
        <h2 class="text-4xl font-bold text-slate-900 mb-6">{{ t('discover.title') }}</h2>
        <p class="text-slate-600 leading-relaxed">{{ t('discover.description') }}</p>
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div class="rounded-3xl bg-slate-100 p-6 shadow-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('cards.one.title') }}</h3>
          <p class="text-slate-600">{{ t('cards.one.description') }}</p>
        </div>
        <div class="rounded-3xl bg-slate-100 p-6 shadow-lg">
          <h3 class="text-xl font-semibold mb-3">{{ t('cards.two.title') }}</h3>
          <p class="text-slate-600">{{ t('cards.two.description') }}</p>
        </div>
        <div class="rounded-3xl bg-slate-100 p-6 shadow-lg sm:col-span-2">
          <h3 class="text-xl font-semibold mb-3">{{ t('cards.three.title') }}</h3>
          <p class="text-slate-600">{{ t('cards.three.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
