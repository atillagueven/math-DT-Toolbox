<script setup>
import { ref, computed, onMounted } from 'vue';
import Chart from 'primevue/chart'; // Import Chart component from PrimeVue

// Store the evaluation result from session storage
const evaluationResult = ref(null);

onMounted(() => {
  const storedResult = sessionStorage.getItem('evaluationResult');
  evaluationResult.value = storedResult ? JSON.parse(storedResult) : null;
});

// Compute chart data dynamically
const chartData = computed(() => ({
  labels: evaluationResult.value?.scores.labels || [],
  datasets: [
    {
      label: 'Maturity Scores',
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green
      borderColor: 'rgba(75, 192, 192, 1)', // Green border
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      data: evaluationResult.value?.scores.values || [],
    },
  ],
}));

// Recommendations to display below the radar chart
const recommendations = computed(() => evaluationResult.value?.recommendations || []);
</script>

<template>
  <div>
    <!-- Radar Chart -->
    <Chart type="radar" :data="chartData" style="max-width: 600px; margin: 0 auto;" />

    <!-- Recommendations Section -->
    <h3 class="mt-8 text-xl font-bold">Recommended Tools</h3>
    <ul>
      <li v-for="tool in recommendations" :key="tool.id" class="mb-4">
        <strong>{{ tool.name }}:</strong> {{ tool.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
