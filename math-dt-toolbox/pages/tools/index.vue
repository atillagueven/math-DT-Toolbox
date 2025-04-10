<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ToggleButton from 'primevue/togglebutton';
import { useToolsStore } from '@/stores/tools';
import { onMounted } from 'vue';

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

const hasEvaluationResult = ref(false);

onMounted(() => {
  if (sessionStorage.getItem('evaluationResult')) {
    hasEvaluationResult.value = true;
  }
});

const route = useRoute();
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative flex flex-col lg:flex-row gap-0 content-start">
      <div class="flex-4 flex items-center justify-center absolute z-10 w-full h-full">
        <div class="container mx-auto px-6 lg:pr-96 lg:pl-6 pt-12 lg:pt-24 z-20">
          <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 lg:leading-normal text-left">
            All DT tools in <span class="text-primary">one place.</span>
          </h1>
          <p class="mt-2 text-surface-700">
            Searching for a strategic tool, method or framework to evolve the digital transformation in your organization? 
            Find, filter or search for research based tools, which guide you along the DT journey.
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <router-link
              v-if="!hasEvaluationResult"
              to="/questionnaire"
            >
              <Button
                label="Get Recommendations"
                class="!px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
              />
            </router-link>

            <router-link
              v-else
              to="/recommendation"
            >
              <Button
                label="View Your Result"
                class="!px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex-6 relative z-0 overflow-hidden">
        <div class="absolute inset-0 bg-white opacity-50 block lg:hidden z-10"></div>
        <div class="pl-0 lg:pl-[50%]">
          <video
            src="/bg-video-cut.mp4"
            alt="hero-1"
            class="h-full w-full object-cover"
            autoplay
            loop
            playsinline
            muted
          ></video>
        </div>
      </div>
    </div>

    <!-- Filters and Search -->
    <section class="py-8">
      <div class="container mx-auto px-6">
        <!-- Filters & Search Bar in One Row (Adjusts for mobile & desktop) -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <!-- Pillar ToggleButtons (Takes full width) -->
          <div class="w-full">
            <p class="text-accent">Filter:</p>
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

    <!-- Call-to-Action Section -->
    <section class="bg-primary text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-lg mb-6">
          Complete a maturity assessment and get tailored recommendations based on the results. It only takes 10 minutes. 
        </p>
        <div>
          <router-link
            v-if="!hasEvaluationResult"
            to="/questionnaire"
          >
            <Button
              label="Get Recommendations"
              class="!px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
            />
          </router-link>

          <router-link
            v-else
            to="/recommendation"
          >
            <Button
              label="View Your Result"
              class="!px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
            />
          </router-link>
        </div>
        
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add transition for better visual effect */
.p-button {
  transition: background-color 0.3s ease-in-out;
}
</style>