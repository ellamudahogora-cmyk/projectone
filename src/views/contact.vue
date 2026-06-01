<template>
  <section class="min-h-screen bg-white text-green-900 py-12">
    <div class="mx-auto max-w-6xl px-4">
      <div class="rounded-3xl border border-green-100 bg-green-50/70 p-10 shadow-xl shadow-green-100">
        <div class="mb-10 text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-green-700">Get in touch</p>
          <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl">
            We’re here to help you plan your next adventure.
          </h1>
          <p class="mx-auto mt-4 max-w-2xl text-base leading-8 text-green-700 sm:text-lg">
            Whether you want suggestions for destinations, want to book a tour, or need support, our team is ready to answer your questions quickly and personally.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <div class="space-y-6">
            <div class="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
              <h2 class="text-2xl font-semibold text-green-900">Contact details</h2>
              <p class="mt-3 text-green-700">
                Reach us by phone, email, or visit our office. We aim to reply within 24 hours.
              </p>
              <div class="mt-6 space-y-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-wide text-green-600">Phone</p>
                  <p class="mt-1 text-lg text-green-900">+250 788 123 456</p>
                </div>
                <div>
                  <p class="text-sm font-semibold uppercase tracking-wide text-green-600">Email</p>
                  <p class="mt-1 text-lg text-green-900">support@rwandatravel.com</p>
                </div>
                <div>
                  <p class="text-sm font-semibold uppercase tracking-wide text-green-600">Address</p>
                  <p class="mt-1 text-lg text-green-900">Kigali City Tower, KG 7 Ave, Kigali, Rwanda</p>
                </div>
                <div>
                  <p class="text-sm font-semibold uppercase tracking-wide text-green-600">Office hours</p>
                  <p class="mt-1 text-lg text-green-900">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <p class="text-sm font-semibold uppercase tracking-wide text-green-600">Travel planning</p>
                <p class="mt-2 text-green-700">Custom itineraries for families, couples, and solo explorers.</p>
              </div>
              <div class="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <p class="text-sm font-semibold uppercase tracking-wide text-green-600">Local insights</p>
                <p class="mt-2 text-green-700">Expert advice on the best routes, accommodations, and experiences.</p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-semibold text-green-900">Quick message</h2>
            <p class="mt-3 text-green-700">Send us a short message and we’ll get back to you as soon as possible.</p>
            <form class="mt-8 space-y-5">
              <label class="block">
                <span class="text-sm font-medium text-green-700">Name</span>
                <input type="text" placeholder="Your name" class="mt-2 w-full rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-900 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200" />
              </label>
              <label class="block">
                <span class="text-sm font-medium text-green-700">Email</span>
                <input type="email" placeholder="you@example.com" class="mt-2 w-full rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-900 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200" />
              </label>
              <label class="block">
                <span class="text-sm font-medium text-green-700">Message</span>
                <textarea rows="5" placeholder="Tell us what you need" class="mt-2 w-full rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-900 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"></textarea>
              </label>
              <button type="button" class="inline-flex w-full items-center justify-center rounded-2xl bg-green-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>