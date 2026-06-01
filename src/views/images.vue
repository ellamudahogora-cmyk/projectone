<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const imageModules = import.meta.globEager('../assets/*.{png,jpg,jpeg}')
const captions = {
  'Akagera': 'Sunrise over Akagera National Park, where wildlife and water meet.',
  'Amahor Stadium': 'A vibrant stadium scene with local energy and city culture.',
  'Bk Arena': 'Bk Arena shines with lights and the excitement of community events.',
  'Boat Trips': 'A calm boat trip across Rwanda’s lakes, perfect for nature lovers.',
  'Cafe In Kigali': 'A cozy Kigali cafe moment that captures city travel charm.',
  'Culinary': 'Local flavors and culinary experiences from the heart of Rwanda.',
  'Forest Vibe': 'A peaceful forest path full of green light and mountain air.',
  'Heritage': 'Historic sites and cultural heritage from Rwanda’s rich past.',
  'Highland': 'Rolling highlands and dramatic vistas in the countryside.',
  'Hiking': 'Hiking trails inviting adventure through natural landscapes.',
  'Karisimbi': 'Mount Karisimbi landscape, one of the highest peaks in the region.',
  'Kigali Memorial Site': 'A solemn Kigali memorial site with deep meaning and reflection.',
  'Lake Kivu': 'The serene shores of Lake Kivu glowing at sunrise.',
  'Lake Retreat': 'A lakeside retreat offering calm waters and scenic views.',
  'Lakeside Market In Montreux': 'A lively lakeside market full of color and local life.',
  'Lodges': 'Rustic lodges nestled in nature for a cozy stay.',
  'Market': 'A busy market scene with local crafts and fresh produce.',
  'Musanze Caves': 'The dramatic entrance to Musanze caves, great for explorers.',
  'Musanze Town': 'A charming view of Musanze town with warm local character.',
  'Nature Escape': 'A quiet nature escape where green scenery soothes the mind.',
  'Nyandungu Eco Park': 'Eco-friendly park trails filled with birds and plants.',
  'Ppl': 'Travelers enjoying the community and vibrant local life.',
  'Rwanda': 'A colorful and memorable moment from Rwanda’s beautiful country.',
  'Rwanda2': 'Rwanda’s landscape and culture in a second traveling snapshot.',
  'Rwanda3': 'A third glimpse of Rwanda highlights and outdoor fun.',
  'Rwanda4': 'A fourth Rwanda view celebrating travel and local scenery.',
  'Rwanda5': 'A fifth Rwanda scene with bright colors and natural beauty.',
  'Rwanda6': 'A sixth Rwanda image showing peaceful travel moments.',
  'Rwanda7': 'A seventh Rwanda view that captures the spirit of the journey.',
  'Safaris': 'Adventures on safari with wide open terrain and wildlife.',
  'Sunset': 'A breathtaking sunset painting the sky with warm colors.',
  'Travel': 'An image that inspires travel, discovery, and new journeys.',
  'View': 'A panoramic view that invites you to explore further.',
  'Villag Trip': 'A village trip scene showing authentic local life.',
  'Volcano': 'A volcano silhouette against a natural landscape.',
  'Women Coperative': 'A women’s cooperative highlighting community and craft.'
}

const slides = Object.entries(imageModules)
  .map(([path, module]) => {
    const name = path.split('/').pop().replace(/\.[^/.]+$/, '')
    const title = name.replace(/[-_]/g, ' ').replace(/\b\w/g, (chr) => chr.toUpperCase())
    return {
      src: module.default,
      title,
      description: captions[title] || `A beautiful view of ${title} from the photo gallery.`
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

const currentIndex = ref(0)
const currentSlide = computed(() => slides[currentIndex.value] || slides[0] || {src:'', title:'', description:''})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
const goToSlide = (index) => {
  currentIndex.value = index
}

let autoPlay = null
onMounted(() => {
  autoPlay = setInterval(nextSlide, 5000)
})
onUnmounted(() => {
  clearInterval(autoPlay)
})

const destinations = [
  { title: 'Kigali', path: '/kigali', description: "Explore Kigali's modern spirit, peaceful streets, and cultural attractions — perfect for city visits and quick park access." },
  { title: 'North', path: '/north', description: 'Discover crater lakes, volcano trails, and scenic viewpoints across the Northern Province.' },
  { title: 'South', path: '/south', description: 'Visit lakes, historic sites, and rolling countryside for relaxed cultural experiences.' },
  { title: 'West', path: '/west', description: 'Enjoy lakes, rolling hills, and peaceful western landscapes ideal for nature lovers.' },
  { title: 'East', path: '/east', description: 'Explore national parks, lakes, and cultural landmarks in the Eastern Province.' }
]
</script>

<template>
  <section class="min-h-screen bg-slate-100 text-slate-900 py-12">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-sm uppercase tracking-[0.35em] text-green-800">Gallery</p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Photos Slideshow</h1>
        <p class="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700">
          All pictures from the gallery are shown here with descriptions. Use the slideshow controls to move through the collection and enjoy each travel image.
        </p>
      </div>

      <div class="overflow-hidden rounded-3xl bg-white shadow-xl">
        <div class="relative overflow-hidden bg-slate-900/5">
          <img
            :src="currentSlide.src"
            :alt="currentSlide.title"
            class="h-[420px] w-full object-cover sm:h-[520px]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-6 text-white">
            <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Photo Gallery</p>
            <h2 class="mt-2 text-3xl font-semibold">{{ currentSlide.title }}</h2>
            <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-200">{{ currentSlide.description }}</p>
          </div>
        </div>

        <div class="flex flex-col gap-4 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              @click="prevSlide"
              type="button"
            >
              Previous
            </button>
            <button
              class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              @click="nextSlide"
              type="button"
            >
              Next
            </button>
            <p class="col-span-2 mt-2 text-sm text-slate-600 sm:col-span-1 sm:mt-0">
              Slide {{ currentIndex + 1 }} / {{ slides.length }}
            </p>
          </div>
          <div>
            <p class="text-sm text-slate-600">Auto-play advances every 5 seconds. Tap a thumbnail to jump directly to any picture.</p>
          </div>
        </div>

        <div class="overflow-x-auto border-t border-slate-200 bg-white p-4">
          <div class="flex gap-3 min-w-full">
            <button
              v-for="(slide, index) in slides"
              :key="slide.title"
              @click="goToSlide(index)"
              :class="['shrink-0 rounded-2xl border transition duration-200 z-20 pointer-events-auto', currentIndex === index ? 'border-green-700 ring-2 ring-green-300' : 'border-slate-200 hover:border-slate-400']"
              type="button"
            >
              <img :src="slide.src" :alt="slide.title" class="h-24 w-36 object-cover" />
              <div class="px-3 py-2 bg-white text-left text-xs font-medium text-slate-700">{{ slide.title }}</div>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10 rounded-3xl bg-white p-8 shadow-lg">
        <h2 class="text-2xl font-semibold text-slate-900">Gallery descriptions</h2>
        <p class="mt-3 text-base leading-8 text-slate-700">
          Each slide includes a short description that highlights the scene and the story behind the photo. This gallery is built using the project’s image collection and a slideshow experience for easy viewing.
        </p>
      </div>
      <div class="mt-10">
        <h2 class="text-2xl font-semibold text-slate-900 mb-6">Destinations</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="dest in destinations" :key="dest.title" class="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 class="text-xl font-semibold text-slate-900">{{ dest.title }}</h3>
            <p class="mt-2 text-slate-600">{{ dest.description }}</p>
            <div class="mt-4">
              <RouterLink :to="dest.path" class="inline-flex items-center rounded-full bg-green-800 px-4 py-2 text-white text-sm font-semibold hover:bg-green-700">Learn more</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
