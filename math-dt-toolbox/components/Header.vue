<template>
  <div class="bg-white/60 bg-opacity-30 backdrop-blur-md shadow-lg !sticky top-0 z-50 py-5">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div>
        <router-link to="/">
          <img src="/IWI-HSG_Logo_EN.png" alt="St. Gallen Logo" class="h-12 cursor-pointer" />
        </router-link>
      </div>
      <nav>
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
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style>

</style>