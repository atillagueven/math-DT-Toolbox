<script setup lang="ts">
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const route = useRoute()
</script>

<template>
  <section class="bg-primary text-white py-12">
    <div class="container mx-auto px-6 text-center">
      <!-- Logo and Navigation -->
      <div class="flex justify-between items-center mb-10">
        <div>
          <img src="/DTTB Favicon.png" alt="St. Gallen Logo" class="h-12" />
        </div>
        <nav>
          <ul class="flex space-x-6 text-white">
            <li><a href="#landing" class="hover:underline">Landings</a></li>
            <li><a href="#secondary" class="hover:underline">Secondary Pages</a></li>
            <li><a href="#account" class="hover:underline">Account Pages</a></li>
          </ul>
        </nav>
        <Button
          label="Sign Up"
          class="bg-white text-primary font-semibold px-6 py-2 rounded"
        />
      </div>
      <!-- Hero Content -->
      <div>
        <h1 class="text-4xl font-bold mb-4">
          Exploring Digital Transformation for Business Excellence
        </h1>
        <p class="text-lg mb-6">
          Unveiling tools, frameworks, and strategies to navigate the challenges
          and opportunities of digital transformation in today's business
          landscape.
        </p>
      </div>
      <!-- Image -->
      <div class="mt-8">
        <img
          src="/DTTB Favicon.png"
          alt="Team Collaboration"
          class="rounded-lg shadow-lg mx-auto max-w-2xl"
        />
      </div>
      <!-- Stats -->
      <div class="grid grid-cols-4 gap-6 mt-10">
        <div class="text-center">
          <p class="text-3xl font-bold">20+</p>
          <p>Years of Research</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold">100+</p>
          <p>Transformation Tools</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold">95%</p>
          <p>Success Rate</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold">10+</p>
          <p>Collaborative Projects</p>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
.bg-primary {
  background-color: #008751; /* Green of the University of St. Gallen */
}

.text-primary {
  color: #008751;
}
</style>