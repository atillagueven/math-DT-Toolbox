<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Chip from 'primevue/chip'
import { useToolsStore } from '@/stores/tools';

// Access the tools store
const toolsStore = useToolsStore();
const tools = toolsStore.tools; // Get all tools

// Search query
const searchQuery = ref('');

// Filter tools based on the search query
const filteredTools = computed(() =>
  tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const route = useRoute();
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="flex lg:flex-row flex-col gap-0 content-start">
      <div class="flex-4 flex items-center justify-center">
        <div class="p-6 pt-12 lg:p-12">
          <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 mb-4 lg:leading-normal text-center lg:text-left">
            All DT tools in <br /><span class="text-primary">one place.</span>
          </h1>
          <p class="text-surface-700 leading-normal mb-8 text-center lg:text-left">
            Explore all the tools to get an insight, where you can improve
            strategic actions of the digital transformation in your company
          </p>
          <div class="flex items-center justify-center lg:justify-start gap-6">
            <Button label="See all tools" type="button" />
            <Button label="Live Demo" type="button" outlined />
          </div>
        </div>
      </div>
      <div class="flex-6">
        <video src="/bg-video-cut.mp4" alt="hero-1" class="h-full w-full object-cover" autoplay loop playsinline muted></video>
      </div>
    </div>

    <!-- Filters and Search -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          <!-- Chips -->
          <div class="md:w-1/2">
            <div class="flex flex-wrap gap-3">
              <h3>Filters</h3>
              <Chip label="Strategy" />
              <Chip label="Insights" />
              <Chip label="Ideation" />
              <Chip label="Social impact" />
              <Chip label="Business model" />
              <Chip label="Show more" />
            </div>
          </div>

          <!-- Search Bar -->
          <div>
            <h3>Find your tool:</h3>
            <div class="flex items-center space-x-4 mb-6">
              <InputText
                v-model="searchQuery"
                placeholder="Search here..."
                class="focus:outline-none focus:ring-2 focus:ring-primary mt-2"
              />
              <Button label="Search" class="!rounded-xl mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filtered Tools List -->
    <div class="container mx-auto px-10 py-12">
      <h1 class="text-3xl font-bold mb-6">Digital Transformation Tools</h1>
      <ul class="space-y-4">
        <li
          v-for="tool in filteredTools"
          :key="tool.id"
          class="p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <div class="flex justify-between items-center">
            <!-- Tool Info -->
            <div>
              <h2 class="text-xl font-semibold">{{ tool.name }}</h2>
              <p class="text-gray-600">{{ tool.description }}</p>
            </div>

            <!-- Action: View Details -->
            <router-link
              :to="`/tools/${tool.id}`"
              class="text-primary hover:underline"
            >
              View Details →
            </router-link>
          </div>
        </li>
        <!-- If no tools match the search query -->
        <li v-if="filteredTools.length === 0" class="text-left text-primary">
          No tools match your search.
        </li>
      </ul>
    </div>
  </div>
</template>


<style>

</style>