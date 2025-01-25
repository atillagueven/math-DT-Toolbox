<template>
    <div class="container mx-auto py-12">
      <h1 class="text-3xl font-bold mb-4">{{ tool.name }}</h1>
      <p class="text-lg text-gray-700 mb-4">{{ tool.description }}</p>
      <p class="text-md text-gray-500"><strong>Pillar:</strong> {{ tool.pillar }}</p>
      <p class="text-md text-gray-500"><strong>Details:</strong> {{ tool.details }}</p>
  
      <!-- Back Button -->
      <router-link
        to="/tools"
        class="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
      >
        Back to Tools
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useToolsStore } from '@/stores/tools';
  
  // Access the current route parameters
  const route = useRoute();
  const toolsStore = useToolsStore();
  
  // Find the tool by ID from the store
  const tool = toolsStore.tools.find((t) => t.id === parseInt(route.params.id));
  </script>