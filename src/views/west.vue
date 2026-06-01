<template>
  <section class="relative bg-cover bg-center bg-[url('/src/assets/lake kivu.png')] min-h-[80vh] flex items-center">
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div class="relative max-w-6xl mx-auto px-6 py-20 text-white">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-300 mb-4">Explore the West</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">Western Province Wonders</h1>
        <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          The west offers rolling hills, lakes, and adventure in Rwanda’s lush landscapes. Discover forests, wildlife, and peaceful rural communities.
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
          <p class="mt-4 text-slate-600 leading-relaxed">Discover lakes, hills, and peaceful western landscapes.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Lake retreats</li>
            <li>• Nature spots</li>
            <li>• Scenic trails</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950 text-xl">👥</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">People</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Experience western Rwanda through local artisans, fisherman, and community hosts.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Artisan culture</li>
            <li>• Lakeside life</li>
            <li>• Community markets</li>
          </ul>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300 text-slate-950 text-xl">✨</span>
          <h3 class="mt-6 text-2xl font-semibold text-slate-900">Experiences</h3>
          <p class="mt-4 text-slate-600 leading-relaxed">Enjoy boat trips, nature walks, and scenic sunset moments in the West.</p>
          <ul class="mt-6 space-y-2 text-slate-600">
            <li>• Boat rides</li>
            <li>• Forest walks</li>
            <li>• Sunset views</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-4xl font-bold text-slate-900 mb-5">Lakes, hills, and serene getaways</h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            Western Province is known for its beautiful lakes and rolling hills. It is ideal for nature lovers looking for calm landscapes and authentic local life.
          </p>
          <ul class="space-y-3 text-slate-600">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">1</span>
              <span>Relax by lakes and take in western Rwanda’s peaceful scenery.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">2</span>
              <span>Meet local artisans and enjoy traditional western cuisine.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">3</span>
              <span>Explore quiet lakeside trails and hidden natural spots.</span>
            </li>
          </ul>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/lake retreat.png" alt="Western lake" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Lake Retreats</h3>
              <p class="text-slate-600">Enjoy lakeside views and peaceful boat trips.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/nature escape.png" alt="Western nature" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Nature Escapes</h3>
              <p class="text-slate-600">Explore scenic trails and lush western landscapes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="things-to-do" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-400 mb-3">Things to do in the West</p>
        <h2 class="text-4xl font-bold text-slate-900">Top western attractions</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/Lakeside market in Montreux.png" alt="Lakeside market" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Lakeside Markets</h3>
          <p class="text-slate-600 leading-relaxed">Shop local crafts and taste western specialties near the water.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/forest vibe.png" alt="Natural park" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Forest Trails</h3>
          <p class="text-slate-600 leading-relaxed">Walk hidden paths and enjoy the region’s natural serenity.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/villag trip.png" alt="Western village" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Village Visits</h3>
          <p class="text-slate-600 leading-relaxed">Meet welcoming communities and see traditional crafts.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/boattrips.png" alt="Boat ride" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Boat Trips</h3>
          <p class="text-slate-600 leading-relaxed">Take a relaxing boat trip on western lakes.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/rw8.png" alt="Western cuisine" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Food Experiences</h3>
          <p class="text-slate-600 leading-relaxed">Sample tasty local dishes in western cafes and restaurants.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/sunset.png" alt="Sunset view" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Sunset Views</h3>
          <p class="text-slate-600 leading-relaxed">Watch beautiful western sunsets over lakes and hills.</p>
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
            <p class="text-slate-600">Visit during dry months for the best lake and hiking weather.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Getting Around</h3>
            <p class="text-slate-600">Use local taxis or private transfers to explore western attractions.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">West Tips</h3>
            <p class="text-slate-600">Pack comfortable shoes and a light jacket for cooler lake-side evenings.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>