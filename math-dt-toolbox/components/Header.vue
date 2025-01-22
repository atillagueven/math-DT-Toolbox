<template>
  <div class="flex justify-between items-center  bg-white/60 bg-opacity-30 backdrop-blur-md shadow-lg sm:px-2 md:px-10 lg:px-20 py-5 !sticky top-0 z-50">
    <div>
      <img src="/Logo-HSG.png" alt="St. Gallen Logo" class="h-12" />
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
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style>

</style>