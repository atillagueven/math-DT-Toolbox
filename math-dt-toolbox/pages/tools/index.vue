<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ToggleButton from 'primevue/togglebutton';
import { useToolsStore } from '@/stores/tools';

// Access the tools store
const toolsStore = useToolsStore();
const tools = toolsStore.tools;

// Get unique pillars dynamically
const uniquePillars = computed(() => {
  return [...new Set(tools.map(tool => tool.pillar))];
});

// Track selected pillars using ToggleButton
const selectedPillars = ref(
  uniquePillars.value.reduce((acc, pillar) => ({ ...acc, [pillar]: false }), {})
);

// Search query state
const searchQuery = ref('');

// Compute filtered tools based on search and selected pillars
const filteredTools = computed(() => {
  const activeFilters = Object.keys(selectedPillars.value).filter(
    pillar => selectedPillars.value[pillar]
  );

  return tools.filter(tool => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesPillar =
      activeFilters.length === 0 || activeFilters.includes(tool.pillar);
    return matchesSearch && matchesPillar;
  });
});

const route = useRoute();
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row gap-0 content-start">
      <div class="flex-4 flex items-center justify-center">
        <div class="p-6 pt-12 lg:p-12"> 
          <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 lg:leading-normal text-left">
            All DT tools in <span class="text-primary">one place.</span>
          </h1>
        </div>
      </div>
      <div class="flex-6">
        <video src="/bg-video-cut.mp4" alt="hero-1" class="h-full w-full object-cover" autoplay loop playsinline muted></video>
      </div>
    </div>

    <!-- Filters and Search -->
    <section class="py-8">
      <div class="container mx-auto px-6">
        <!-- Filters & Search Bar in One Row (Adjusts for mobile & desktop) -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <!-- Pillar ToggleButtons (Takes full width) -->
          <div class="w-full">
            <div class="flex flex-wrap gap-2">
              <ToggleButton
                v-for="pillar in uniquePillars"
                :key="pillar"
                v-model="selectedPillars[pillar]"
                :onLabel="pillar"
                :offLabel="pillar"
                :onIcon="'pi pi-check'"
                :offIcon="'pi pi-times'"
                class="p-button-rounded"
              />
            </div>
          </div>


        </div>
      </div>
    </section>

    <!-- Filtered Tools List -->
    <div class="container mx-auto px-10 py-12">
      <!-- Title & Search in One Row on Desktop -->
      <div class="flex flex-col mb-6 md:flex-row md:items-center justify-between">
        <h1 class="text-3xl font-bold mb-4 md:mb-0">Digital Transformation Tools</h1>

        <!-- Search Bar (ALWAYS visible, moves to next line on mobile) -->
        <div class="w-full md:w-1/5 flex flex-col md:flex-row items-start md:items-center gap-4">
          <InputText
            v-model="searchQuery"
            placeholder="Search here..."
            class="w-full md:w-60 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <ul class="space-y-4">
        <li
          v-for="tool in filteredTools"
          :key="tool.id"
        >
          <router-link
            :to="`/tools/${tool.id}`"
            class="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <div class="flex justify-between items-center">
              <!-- Tool Info -->
              <div>
                <p class="text-green-600">{{ tool.pillar }}</p>
                <h2 class="text-xl font-semibold">{{ tool.name }}</h2>
                <p class="text-gray-600">{{ tool.description }}</p>
              </div>
            </div>
          </router-link>
        </li>

        <!-- If no tools match the search query -->
        <li v-if="filteredTools.length === 0" class="text-left text-primary">
          No tools match your search.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Add transition for better visual effect */
.p-button {
  transition: background-color 0.3s ease-in-out;
}
</style>