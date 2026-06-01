<template>
  <section class="relative bg-cover bg-center bg-[url('/src/assets/akagera.png')] min-h-[80vh] flex items-center">
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div class="relative max-w-6xl mx-auto px-6 py-20 text-white">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-300 mb-4">Explore the East</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">Eastern Province Discovery</h1>
        <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          Eastern Province is rich with wildlife, cultural sites, and open landscapes. Discover national parks, lakes, and traditions in Rwanda’s eastern region.
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
          <p class="mt-4 text-slate-600 leading-relaxed">Explore national parks, lakes, and cultural landmarks in the Eastern Province.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Akagera Park</li>
            <li>• Lake views</li>
            <li>• Village sites</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950 text-xl">👥</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">People</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Meet local guides, farmers, and craft makers who share eastern hospitality.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Village stories</li>
            <li>• Market visits</li>
            <li>• Community tours</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300 text-slate-950 text-xl">✨</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">Experiences</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Enjoy wildlife drives, lakeside picnics, and authentic culture in the East.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Safaris</li>
            <li>• Boat trips</li>
            <li>• Heritage tours</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-4xl font-bold text-slate-900 mb-5">Wildlife, lakes, and cultural wonders</h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            Eastern Province is a gateway to Rwanda’s wildlife and lakeside attractions. It blends natural beauty with historic towns and cultural experiences.
          </p>
          <ul class="space-y-3 text-slate-600">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">1</span>
              <span>Visit Akagera National Park for safaris and lake views.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">2</span>
              <span>Explore cultural villages and historic East Rwandan markets.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">3</span>
              <span>Enjoy lakeside relaxation and outdoor adventures.</span>
            </li>
          </ul>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/nature escape.png" alt="Eastern savanna" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Wildlife Trails</h3>
              <p class="text-slate-600">Explore open plains and lakeside wildlife habitats.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/ppl.png" alt="East culture" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Cultural Heritage</h3>
              <p class="text-slate-600">Visit local villages and hear stories from eastern communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="things-to-do" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-400 mb-3">Things to do in the East</p>
        <h2 class="text-4xl font-bold text-slate-900">Top eastern attractions</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/Market.png" alt="East market" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Local Markets</h3>
          <p class="text-slate-600 leading-relaxed">See local crafts, fresh produce, and traditional goods.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/safaris.png" alt="Lake activities" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Lake Safaris</h3>
          <p class="text-slate-600 leading-relaxed">Enjoy boat trips and scenic lakeside views in the east.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/akagera.png" alt="Akagera" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Akagera Park</h3>
          <p class="text-slate-600 leading-relaxed">Visit the eastern park for wildlife drives and scenic landscapes.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/travel.png" alt="Village culture" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Village Visits</h3>
          <p class="text-slate-600 leading-relaxed">Experience eastern hospitality and cultural tours.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/rwanda4.png" alt="Nature walks" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Nature Walks</h3>
          <p class="text-slate-600 leading-relaxed">Walk along quiet trails and discover eastern scenery.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/memorial.png" alt="Historic site" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Historic Sites</h3>
          <p class="text-slate-600 leading-relaxed">Learn about eastern Rwanda’s past at local heritage sites.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="plan-visit" class="py-16 bg-slate-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div class="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Best Time</h3>
            <p class="text-slate-600">The dry months are best for safaris, walks, and lakeside travel.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Transportation</h3>
            <p class="text-slate-600">Hire a car or join guided tours for easier access to parks and lakes.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">East Tips</h3>
            <p class="text-slate-600">Bring binoculars for wildlife watching and plan extra time for park visits.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>