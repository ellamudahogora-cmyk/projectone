<script setup>
import { ref, computed } from 'vue'

const videos = [
  {
    title: 'Rwanda Travel Highlights',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: new URL('../assets/sunset.png', import.meta.url).href,
    description: 'A short travel video highlighting scenic landscapes, cultural moments, and unforgettable destinations.'
  },
  {
    title: 'Lake Kivu Sunset',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: new URL('../assets/lake kivu.png', import.meta.url).href,
    description: 'A calm lakeside scene rich with color, perfect for travel viewers and gallery visitors.'
  }
]
const selectedVideo = ref(0)
const currentVideo = computed(() => videos[selectedVideo.value])
const selectVideo = (index) => {
  selectedVideo.value = index
}
</script>

<template>
  <section class="min-h-screen bg-slate-100 py-12 text-slate-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-sm uppercase tracking-[0.35em] text-green-800">Video Gallery</p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Travel Video Showcase</h1>
        <p class="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700">
          This page contains the gallery video experience with descriptions and a sample travel story. Watch the video below to see the gallery come alive.
        </p>
      </div>

      <div class="overflow-hidden rounded-3xl bg-white shadow-xl">
        <video
          :key="currentVideo.title"
          controls
          class="w-full bg-slate-900 relative z-0 pointer-events-auto"
          :poster="currentVideo.poster"
          preload="metadata"
        >
          <source :src="currentVideo.src" type="video/mp4" />
          Sorry, your browser does not support embedded videos. Please try a modern browser.
        </video>

        <div class="p-6 sm:p-8">
          <h2 class="text-2xl font-semibold text-slate-900">{{ currentVideo.title }}</h2>
          <p class="mt-3 text-slate-700 leading-7">{{ currentVideo.description }}</p>

          <div class="mt-6 flex flex-wrap gap-3 z-20">
            <button
              v-for="(video, index) in videos"
              :key="video.title"
              @click="selectVideo(index)"
              :class="['rounded-full px-4 py-2 text-sm font-semibold transition z-30 pointer-events-auto', selectedVideo === index ? 'bg-green-800 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200']"
              type="button"
            >
              {{ video.title }}
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10 grid gap-8 md:grid-cols-2">
        <div class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">Video Description</h3>
          <p class="mt-4 leading-8 text-slate-700">
            The video gallery helps visitors explore travel highlights and the story behind each destination. It is designed to complement the photo slideshow and bring the gallery experience to life.
          </p>
        </div>
        <div class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">How to use</h3>
          <p class="mt-4 leading-8 text-slate-700">
            Select a video button to load a new clip, then press play to watch. Each clip includes a description so visitors can understand the place, the mood, and the travel story behind the visuals.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
