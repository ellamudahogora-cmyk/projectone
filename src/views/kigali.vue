<template>
  <section class="relative bg-cover bg-center bg-[url('/src/assets/view.png')] min-h-[80vh] flex items-center">
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div class="relative max-w-6xl mx-auto px-6 py-20 text-white">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-300 mb-4">Discover Kigali</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">Kigali: Rwanda’s Vibrant City</h1>
        <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          Explore Kigali's modern spirit, peaceful streets, and world-class cultural attractions. From memorials and markets to green city parks, Kigali offers a memorable city experience.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
          <a href="#things-to-do" class="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-slate-950 font-semibold hover:bg-amber-300 transition">Things to do</a>
          <a href="#plan-visit" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition">Plan your visit</a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="text-4xl font-bold text-slate-900 mb-5">A city of culture, history, and modern energy</h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            Kigali is Rwanda’s clean, friendly capital. It blends history, contemporary design, and natural calm — perfect for travelers who want both city life and easy access to national parks and heritage sites.
          </p>
          <ul class="space-y-3 text-slate-600">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">1</span>
              <span>Visit the Kigali Genocide Memorial and learn about Rwanda’s journey of healing.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">2</span>
              <span>Shop fresh produce and crafts at Kimironko Market.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">3</span>
              <span>Enjoy art, music, and cuisine at local galleries and cafes.</span>
            </li>
          </ul>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/Kigali memorial site.png" alt="Kigali Memorial Site" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Kigali Memorial</h3>
              <p class="text-slate-600">A moving museum and memorial honoring those lost during the 1994 genocide.</p>
            </div>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-lg bg-white">
            <img src="/src/assets/nyandungu eco park.png" alt="Nyandungu Eco Park" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-slate-900 mb-3">Eco Park</h3>
              <p class="text-slate-600">Walk tranquil trails, see birds, and enjoy green spaces in the city.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="things-to-do" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.35em] text-amber-400 mb-3">Things to do in Kigali</p>
        <h2 class="text-4xl font-bold text-slate-900">Explore the best Kigali attractions</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/Market.png" alt="Kimironko Market" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Kimironko Market</h3>
          <p class="text-slate-600 leading-relaxed">Discover colorful fabrics, fresh fruits, souvenirs, and local street food in one of Kigali's busiest markets.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/cafe in kigali.png" alt="Cafe in Kigali" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">City Cafés</h3>
          <p class="text-slate-600 leading-relaxed">Relax in stylish cafes and enjoy Kigali's coffee culture paired with creative Rwandan cuisine.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/bk arena.png" alt="BK Arena" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">BK Arena Events</h3>
          <p class="text-slate-600 leading-relaxed">Catch concerts, sports, and major events at Kigali's premier arena.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/Amahor stadium.png" alt="Amahoro Stadium" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Amahoro Stadium</h3>
          <p class="text-slate-600 leading-relaxed">Watch local football matches or visit this major sporting landmark in Kigali.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/rwanda2.png" alt="Inema Arts Center" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">Art & Culture</h3>
          <p class="text-slate-600 leading-relaxed">Visit art galleries, studios, and local performances to feel Kigali's creative pulse.</p>
        </article>

        <article class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition">
          <div class="mb-5">
            <img src="/src/assets/rwanda4.png" alt="City view" class="h-52 w-full rounded-3xl object-cover" />
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-900">City Walks</h3>
          <p class="text-slate-600 leading-relaxed">Take a guided city walk through Kigali’s clean neighborhoods, cafes, and historic streets.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="plan-visit" class="py-16 bg-slate-100">
    <div class="max-w-6xl mx-auto px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        <div class="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Best Time to Go</h3>
            <p class="text-slate-600">Kigali is great year-round, especially during the dry seasons from June to September and December to February.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">How to Move</h3>
            <p class="text-slate-600">Use taxis, moto-taxis, or ride-sharing apps to move easily between Kigali’s attractions.</p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Local Tips</h3>
            <p class="text-slate-600">Wear comfortable shoes, carry water, and sample local coffee while exploring the city.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
