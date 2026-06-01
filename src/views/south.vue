<template>
  <section class="relative bg-cover bg-center bg-[url('/src/assets/rukali.png')] min-h-[80vh] flex items-center">
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div class="relative max-w-6xl mx-auto px-6 py-20 text-white">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-300 mb-4">Explore the South</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">Southern Province Escapes</h1>
        <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          Discover Rwanda’s southern landscapes with lakes, historic sites, and vibrant villages. The south brings calm countryside adventures and warm community experiences.
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
          <p class="mt-4 text-slate-600 leading-relaxed">Visit lakes, historic sites, and scenic countryside spots across the South.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Lakefront villages</li>
            <li>• Heritage sites</li>
            <li>• Nature trails</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950 text-xl">👥</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">People</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Connect with warm southern communities, food vendors, and local artisans.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Village hospitality</li>
            <li>• Local cuisine</li>
            <li>• Artisan crafts</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300 text-slate-950 text-xl">✨</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">Experiences</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Choose from relaxed lake days, cultural tours, and outdoor adventures.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Boat rides</li>
            <li>• Food tours</li>
            <li>• Heritage walks</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-4xl font-bold text-slate-900 mb-5">Lakes, wildlife, and cultural charm</h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            Southern Province offers a peaceful escape with rolling hills, serene lakes, and welcoming villages. It is perfect for relaxed exploration and authentic cultural encounters.
          </p>
          <ul class="space-y-3 text-slate-600">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">1</span>
              <span>Visit lakeside villages and enjoy local cuisine by the water.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">2</span>
              <span>Discover historic memorials and natural landmarks in the region.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">3</span>
              <span>Hike gentle trails through lush southern hills and forest paths.</span>
            </li>
          </ul>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/nyungwe.png" alt="Southern nature" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Nyungwe National Park</h3>
              <p class="text-slate-600">explore one of the oldest mantane rain forest by its famous canppy walkway.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/travel.png" alt="Southern culture" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Cultural Tours</h3>
              <p class="text-slate-600">Meet local communities and learn about southern traditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="things-to-do" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-400 mb-3">Things to do in the South</p>
        <h2 class="text-4xl font-bold text-slate-900">Top southern attractions</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/Market.png" alt="Village market" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Local Markets</h3>
          <p class="text-slate-600 leading-relaxed">Explore markets full of fresh produce, crafts, and southern hospitality.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/nature escape.png" alt="Nature trail" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Nature Trails</h3>
          <p class="text-slate-600 leading-relaxed">Take scenic hikes through rolling hills and quiet countryside.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/heritage.png" alt="Historic monument" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Heritage Sites</h3>
          <p class="text-slate-600 leading-relaxed">Visit peaceful memorials and historic landmarks in the south.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/culinary.png" alt="Food experience" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Culinary Delights</h3>
          <p class="text-slate-600 leading-relaxed">Taste local specialties and enjoy fresh southern cuisine.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/nyungwe.png" alt="Lake activities" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Nyungwe National Park</h3>
          <p class="text-slate-600 leading-relaxed">Explore one of the oldest montane rain forests by its famous canopy walkway.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/lodges.png" alt="Southern lodge" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Country Lodges</h3>
          <p class="text-slate-600 leading-relaxed">Stay in comfortable lodges surrounded by nature and calm.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="plan-visit" class="py-16 bg-slate-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div class="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Best Season</h3>
            <p class="text-slate-600">The dry months are ideal for exploring lakes and countryside paths.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Getting Around</h3>
            <p class="text-slate-600">Travel by car or local taxi to move comfortably between towns and attractions.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Southern Tips</h3>
            <p class="text-slate-600">Bring sun protection, a camera, and a sense of adventure for relaxed exploration.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>