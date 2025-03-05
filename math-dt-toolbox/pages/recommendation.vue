<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Chart from 'primevue/chart'; 
import Button from 'primevue/button'; 

const router = useRouter();
const evaluationResult = ref(null);

onMounted(() => {
  const storedResult = sessionStorage.getItem('evaluationResult');

  if (storedResult) {
    evaluationResult.value = JSON.parse(storedResult);
    console.log('Loaded evaluation result:', evaluationResult.value);
  } else {
    console.error('No evaluation result found in session storage.');
    
    // Redirect to the questionnaire page
    router.push('/questionnaire');
  }
});

// Compute chart data dynamically
const chartData = computed(() => ({
  labels: evaluationResult.value?.scores?.labels || [],
  datasets: [
    {
      label: 'Maturity Scores',
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green
      borderColor: 'rgba(75, 192, 192, 1)', // Green border
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      data: evaluationResult.value?.scores?.values || [],
    },
  ],
}));

// Define chart options to set the scale
const chartOptions = {
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 0.5,
      },
    },
  },
};

// Compute recommendations
const recommendations = computed(() => evaluationResult.value?.recommendations || []);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="flex lg:flex-row flex-col mt-10 gap-0 content-start items-center lg:items-stretch">
      <!-- Left Side: Title and Description -->
      <div class="flex-[1] flex items-center justify-center lg:justify-start">
        <div class="p-6 pt-12 lg:p-12">
          <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 mb-4 lg:leading-normal text-center lg:text-left">
            Your Personalized<br /><span class="text-primary">Recommendations</span> 
          </h1>
          <p class="text-surface-700 leading-normal mb-8 text-center lg:text-left">
            Review your current maturity levels and explore tools tailored to strengthen your strategic digital transformation initiatives.
          </p>
        </div>
      </div>

      <!-- Right Side: Radar Chart -->
      <div class="flex-[2] flex items-center justify-center">
        <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full max-w-[600px] h-auto" />
      </div>
    </div>

    <!-- Recommended Tools Section -->
    <div class="container mx-auto px-10 py-12">
      <h1 class="text-3xl font-bold mb-6">Recommended Tools</h1>
      <ul class="space-y-4">
        <li
          v-for="tool in recommendations"
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

              <!-- Action: View Details -->
              <span class="text-primary hover:underline">View Details →</span>
            </div>
          </router-link>
        </li>
        <li v-if="recommendations.length === 0" class="text-left text-primary">
          No tools match your recommendations.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 600px;
  margin: 20px auto;
}
</style>