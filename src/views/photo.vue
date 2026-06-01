<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

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

const slideCount = slides.length
const currentIndex = ref(0)
const currentSlide = computed(() => {
  if (slideCount === 0) return { src: '', title: 'No images found', description: 'There are no images available in the gallery yet.' }
  const index = ((currentIndex.value % slideCount) + slideCount) % slideCount
  return slides[index]
})
const displayIndex = computed(() => (slideCount === 0 ? 0 : ((currentIndex.value % slideCount) + slideCount) % slideCount + 1))

const setIndex = (newIndex) => {
  if (slideCount === 0) return
  currentIndex.value = ((newIndex % slideCount) + slideCount) % slideCount
}

const nextSlide = () => setIndex(currentIndex.value + 1)
const prevSlide = () => setIndex(currentIndex.value - 1)
const goToSlide = (index) => setIndex(index)

const onKeydown = (event) => {
  if (event.key === 'ArrowRight') nextSlide()
  if (event.key === 'ArrowLeft') prevSlide()
}

let autoPlay = null
onMounted(() => {
  if (slideCount > 0) {
    autoPlay = setInterval(nextSlide, 5000)
  }
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  clearInterval(autoPlay)
  window.removeEventListener('keydown', onKeydown)
})
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
        <div class="grid gap-6 p-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:p-8">
          <div class="flex flex-col gap-6">
            <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">Slide {{ displayIndex }} / {{ slideCount }}</p>
              <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ currentSlide.title }}</h2>
              <p class="mt-3 text-sm leading-7 text-slate-700">{{ currentSlide.description }}</p>
            </div>

            <div class="grid gap-3">
              <button
                class="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                @click="prevSlide"
                type="button"
              >
                Previous photo
              </button>
              <button
                class="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                @click="nextSlide"
                type="button"
              >
                Next photo
              </button>
            </div>

            <div class="rounded-3xl border border-slate-200 bg-slate-50 p-4 overflow-visible">
              <p class="text-sm font-semibold uppercase tracking-[0.35em] text-slate-600">Thumbnails</p>
              <div class="mt-4 grid gap-3 max-h-[520px] overflow-y-auto">
                <button
                  v-for="(slide, index) in slides"
                    :key="slide.title"
                    @click="goToSlide(index)"
                    :class="['flex items-center gap-3 rounded-3xl border px-3 py-2 text-left transition duration-200 z-20 pointer-events-auto', displayIndex - 1 === index ? 'border-green-700 bg-emerald-50' : 'border-slate-200 bg-white hover:border-slate-400']"
                  type="button"
                >
                  <img :src="slide.src" :alt="slide.title" class="h-16 w-20 rounded-2xl object-cover" />
                  <div>
                    <p class="text-sm font-semibold text-slate-900">{{ slide.title }}</p>
                    <p class="text-xs text-slate-600 line-clamp-2">{{ slide.description }}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-[32px] bg-slate-900">
            <img
              :src="currentSlide.src"
              :alt="currentSlide.title"
              class="h-full w-full min-h-[420px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute left-6 bottom-6 right-6 rounded-3xl bg-slate-950/60 p-6 text-white backdrop-blur-sm sm:right-auto">
              <p class="text-sm uppercase tracking-[0.35em] text-emerald-300">Photo Gallery</p>
              <h3 class="mt-2 text-3xl font-semibold">{{ currentSlide.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-200">{{ currentSlide.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 rounded-3xl bg-white p-8 shadow-lg">
        <h2 class="text-2xl font-semibold text-slate-900">Gallery descriptions</h2>
        <p class="mt-3 text-base leading-8 text-slate-700">
          Each slide includes a short description that highlights the scene and the story behind the photo. This gallery is built using the project’s image collection and a slideshow experience for easy viewing.
        </p>
      </div>
    </div>
  </section>
</template>
