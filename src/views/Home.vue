<script setup>
</script>
<template>
  <!-- Hero Section -->
  <section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    style="background-image: url('/src/assets/rwanda7.png');"
  >
    <div class="bg-black/50 absolute inset-0"></div>
    <div class="relative text-center px-4 z-10">
      <h1 class="text-6xl font-bold mb-4">📍Welcome to Rwanda📍</h1>
      <p class="text-xl font-bold mb-8 max-w-3xl mx-bold">Discover the Land of a Thousand Hills</p>
      <p class="text-lg opacity-90"><i>✔Explore Rwanda's breathtaking landscapes, rich culture, and vibrant tourism destinations</i></p>

      <div class="mt-6 flex items-center justify-center gap-4">
        <a href="/learn" class="px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors">Learn more</a>
        <a href="/explore" class="px-4 py-2 rounded-md bg-yellow-400 text-slate-900 border border-yellow-300 hover:bg-yellow-300 transition-colors">Explore more</a>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 text-green-800">Why Visit Rwanda?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="text-4xl mb-4 text-green-600"></div>
          <h3 class="text-2xl font-bold mb-3 text-green-800">Natural Beauty</h3>
          <p class="text-gray-600">Experience pristine national parks, misty mountains, and serene lakes. Rwanda's diverse ecosystems offer unparalleled natural wonders.</p>
        </div>
        <!-- Feature 2 -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="text-4xl mb-4 text-green-600"></div>
          <h3 class="text-2xl font-bold mb-3 text-yellow-400">Rich Culture</h3>
          <p class="text-gray-600">Immerse yourself in Rwanda's vibrant traditions, art galleries, museums, and cultural heritage. Learn from the local communities.</p>
        </div>
        <!-- Feature 3 -->
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="text-4xl mb-4 text-green-600"></div>
          <h3 class="text-2xl font-bold mb-3 text-green-800">Historical Sites</h3>
          <p class="text-gray-600">Visit significant memorials and monuments that tell Rwanda's remarkable stories of resilience and unity.</p>
        </div>
      </div>
    </div>
  </section>
</template>
