<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-primary text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">{{ tool.name }}</h1>
        <p class="text-lg mb-2">{{ tool.description }}</p>
        <p class="text-md font-semibold">Pillar: {{ tool.pillar }}</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto py-12 px-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Details</h2>
        <p class="text-md text-gray-700">{{ tool.details }}</p>

        <h2 class="text-2xl font-bold mt-6 mb-2">Source</h2>
        <p class="text-md text-gray-500 italic">{{ tool.reference }}</p>
      </div>

      <!-- Back Button -->
      <button
        @click="goBack"
        class="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
      >
        Back
      </button>

      <!-- Recommendations Section -->
      <div class="mt-48">
        <h2 class="text-2xl font-bold mb-4">You might also like</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link
            v-for="recommendation in recommendedTools"
            :key="recommendation.id"
            :to="`/tools/${recommendation.id}`"
            class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <h3 class="text-xl font-semibold">{{ recommendation.name }}</h3>
            <p class="text-gray-600">{{ recommendation.description }}</p>
          </router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useToolsStore } from '@/stores/tools';

// Access the current route parameters
const route = useRoute();
const toolsStore = useToolsStore();

// Find the tool by ID from the store
const tool = toolsStore.tools.find((t) => t.id === parseInt(route.params.id));

// Get 3 random recommended tools (excluding the current tool)
const recommendedTools = computed(() => {
  return toolsStore.tools
    .filter((t) => t.id !== tool.id)
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 3); // Pick first 3 elements
});

// Function to go back dynamically
const goBack = () => {
  window.history.length > 1 ? window.history.back() : window.location.href = "/tools";
};
</script>