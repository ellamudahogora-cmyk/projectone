<template>
  <section class="relative bg-cover bg-center bg-[url('/src/assets/hiking.png')] min-h-[80vh] flex items-center">
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div class="relative max-w-6xl mx-auto px-6 py-20 text-white">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-300 mb-4">Explore the North</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">Northern Province Adventures</h1>
        <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          Discover Rwanda's northern highlands with lush forests, mountain lakes, and unique wildlife experiences. Plan your journey through vibrant culture and scenic nature.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
          <a href="#things-to-do" class="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-slate-950 font-semibold hover:bg-amber-300 transition">Things to do</a>
          <a href="#plan-visit" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition">Plan your visit</a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-14 bg-slate-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 text-xl">🗺️</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">Places</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Discover crater lakes, volcano trails, and scenic viewpoints found across the North.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Musanze Caves</li>
            <li>• Gorilla Trekking</li>
            <li>• Volcano hiking</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950 text-xl">👥</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">People</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Meet friendly local communities, artisans, and guides who bring northern Rwanda to life.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Village experiences</li>
            <li>• Local markets</li>
            <li>• Cultural tours</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300 text-slate-950 text-xl">✨</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">Experiences</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Choose memorable adventures from sunrise hikes to lake retreats and safari-style exploration.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Hiking</li>
            <li>• Birdwatching</li>
            <li>• Relaxation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-4xl font-bold text-slate-900 mb-5">Nature, culture, and mountain escapes</h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            Rwanda's northern province is home to cool mountains, hidden lakes, and warm communities. It’s a perfect base for hiking, birdwatching, and exploring Rwanda’s rural beauty.
          </p>
          <ul class="space-y-3 text-slate-600">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">1</span>
              <span>Hike crater lakes and enjoy quiet landscapes around Musanze.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">2</span>
              <span>Visit local markets and traditional villages near the volcanoes.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">3</span>
              <span>Relax in mountain lodges and watch the sunrise over the hills.</span>
            </li>
          </ul>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/highland.png" alt="Northern hiking" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Highland Trails</h3>
              <p class="text-slate-600">Hike gentle trails through forest, hills, and scenic lookout points.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/lake retreat.png" alt="Lake views" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Lake Retreats</h3>
              <p class="text-slate-600">Relax beside crater lakes and enjoy peaceful evenings by the water.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="things-to-do" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-400 mb-3">Things to do in the North</p>
        <h2 class="text-4xl font-bold text-slate-900">Top northern attractions</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/musanze caves.png" alt="Musanze caves" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Musanze Caves</h3>
          <p class="text-slate-600 leading-relaxed">Explore ancient underground caverns and learn their volcanic history.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/lake kivu.png" alt="Lake Kivu" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Lake Kivu</h3>
          <p class="text-slate-600 leading-relaxed">Spend a day by the lake with boat rides, beaches, and scenic views.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/hiking.png" alt="Volcanoes National Park" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Volcano Hiking</h3>
          <p class="text-slate-600 leading-relaxed">Set out on scenic hikes around volcanoes and enjoy dramatic highland panoramas.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/ppl.png" alt="French church" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Local Culture</h3>
          <p class="text-slate-600 leading-relaxed">Visit nearby villages and markets to experience northern Rwandan life.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/nature escape.png" alt="Nature excursions" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Nature Excursions</h3>
          <p class="text-slate-600 leading-relaxed">Birdwatch, hike, and enjoy scenic drives through forested hills.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/musanze town.png" alt="Musanze town" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Musanze Town</h3>
          <p class="text-slate-600 leading-relaxed">Enjoy cafés, local restaurants, and easy access to nearby attractions.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="plan-visit" class="py-16 bg-slate-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div class="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Best Time to Visit</h3>
            <p class="text-slate-600">The dry seasons from June to September and December to February are ideal for mountain hikes and lake trips.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Getting Around</h3>
            <p class="text-slate-600">Hire a car or use local transport to move between lakes, caves, and mountain viewpoints.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Northern Tips</h3>
            <p class="text-slate-600">Bring warm layers for high elevations and reserve popular activities in advance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
