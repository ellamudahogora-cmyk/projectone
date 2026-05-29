<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/img.png" alt="Logo" class="h-10 w-auto">
        
        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
            <li><a href="/" class="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" class="hover:text-yellow-300">About</a></li>
            <li><a href="/services" class="hover:text-yellow-300">Services</a></li>
            <li class="relative group">
                <a href="/gallery" class="hover:text-yellow-300">Gallery<span> v </span></a>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a></li>
                </ul>
            </li>
             <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Destination<span> v </span></a>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</a></li>
                    <li><a href="/southern" class="block px-4 py-2 hover:bg-green-700">South</a></li>
                     <li><a href="/western" class="block px-4 py-2 hover:bg-green-700">West</a></li>
                    <li><a href="/northern" class="block px-4 py-2 hover:bg-green-700">North </a></li>
                    <li><a href="/eastern " class="block px-4 py-2 hover:bg-green-700">East</a></li>
                </ul>
                </li>
            <li><a href="/contact" class="hover:text-yellow-300">Contact</a></li>
        </ul>
    </nav>
    
</template>