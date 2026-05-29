<script setup lang="ts">
import { useLink } from 'vue-router';

</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        
        <div class="flex flex-wrap justify-between gap-8">
            <!--This is footer-->
        
        <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA U RWANDA</h3>
        <p class="text-sm text-green-200">Discover the beauty of the land of thousand hills</p>
        </div>
        <!--Quick links-->
        <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick Links</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink><br>
                    <RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink><br>
                    <RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink><br>
                    <RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink>
                </li>
            </ul>
        </div>
        <!-- Destination -->
         <div> 
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destination</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/north" class="hover:text-yellow-300">Northern province</RouterLink><br>
                    <RouterLink to="/south" class="hover:text-yellow-300">Southern province</RouterLink><br>
                    <RouterLink to="/east" class="hover:text-yellow-300">Eastern province</RouterLink><br>
                    <RouterLink to="/west" class="hover:text-yellow-300">Western province</RouterLink><br>
                    <RouterLink to="/kigali" class="hover:text-yellow-300">Kigali city</RouterLink>
                </li>
            </ul>
         </div>
         <!--contact info-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact</h3>
            <ul class="space-y-1 text-green-300">
                <li>ahantunyaburanga@gmail.com</li>
                <li>+250791456810</li>
                <li>Kagugu kigali Rwanda</li>
                <li>we support.org</li>
                
            </ul>
         </div>
         
        </div>
        <!--place for copyright-->
         <div class="border-green-600 mt-8 pt-4 text-sm text-green-300">
         <p class="text-center"> @ 2026 Visit Rwanda. All right reserved</p>
         </div>

        </footer>
    </template>