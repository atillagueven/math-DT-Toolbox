<template>
  <div class="bg-white/60 bg-opacity-30 backdrop-blur-md shadow-lg !sticky top-0 z-50 py-5">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <img src="/IWI-HSG_Logo_EN.png" alt="St. Gallen Logo" class="h-12 cursor-pointer" />
      </router-link>

      <!-- Hamburger Icon (mobile only) -->
      <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-primary focus:outline-none">
        <i class="pi pi-bars text-xl"></i>
      </button>

      <!-- Desktop Navigation (hidden on mobile) -->
      <nav class="hidden lg:flex">
        <ul class="flex space-x-6 items-center text-primary">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/tools" class="hover:underline">Tools</a></li>
          <li>
            <router-link to="/questionnaire">
              <Button
                label="Questionnaire"
                class="!px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
              />
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-show="isMenuOpen" class="lg:hidden px-6 pt-4 pb-2 text-primary transition-all duration-300">
      <ul class="flex flex-col items-center space-y-3">
        <li><a href="/" class="block hover:underline">Home</a></li>
        <li><a href="/tools" class="block hover:underline">Tools</a></li>
        <li>
          <router-link to="/questionnaire">
            <Button
              label="Questionnaire"
              class="w-full !px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';

const isMenuOpen = ref(false);
</script>