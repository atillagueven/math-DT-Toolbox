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
      backgroundColor: 'rgba(0, 135, 81, 0.2)', // Light green
      borderColor: 'rgba(0, 135, 81, 1)', // Green border
      pointBackgroundColor: 'rgba(0, 135, 81, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 135, 81, 1)',
      data: evaluationResult.value?.scores?.values.filter(val => val !== null) || [],
    },
  ],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    autoPadding: true,
    padding: {
      top: 10,
      bottom: 20,
      left: 10,
      right: 10
    }

  },
  plugins: {
    tooltip: {
      titleFont: { size: 14 },
      bodyFont: { size: 14 },
      backgroundColor: 'rgba(0, 135, 81, 1)',
      titleColor: '#fff',
      bodyColor: '#fff',
    },
    legend: {
      display: false,
    }
  },
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
        color: '#374151', // Tailwind gray-700
        font: {
          size: window.innerWidth < 640 ? 10 : 14,
          weight: 'bold',
        }
      },
      pointLabels: {
        font: {
          size: window.innerWidth < 640 ? 8 : 14,
          weight: 'bold',
        },
        color: '#111827' // Tailwind gray-900
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      angleLines: {
        color: 'rgba(0, 0, 0, 0.2)',
      }
    }
  }
};

// Compute recommendations
const recommendations = computed(() => evaluationResult.value?.recommendations || []);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="flex flex-col items-center text-center px-6 pt-12 lg:pt-20">
      <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 mb-4">
        Your Personalized 
        <span class="text-primary">Recommendations</span>
      </h1>
      <p class="text-surface-700 leading-normal mb-8 max-w-3xl">
        Review your current maturity levels and explore tools tailored to strengthen your strategic digital transformation initiatives.
      </p>

      <!-- Radar Chart -->
      <div class="relative w-full px-5 sm:px-0 max-w-full sm:max-w-[900px] h-[300px] sm:h-[40vh] mx-auto">
        <Chart
          type="radar"
          :data="chartData"
          :options="chartOptions"
          class="w-full h-full"
        />
      </div>
    </div>

    <!-- Recommended Tools Section -->
    <div class="container mx-auto px-10 py-12">
      <h1 class="text-3xl font-bold">Recommended Tools</h1>
      <p class="mb-6">Based on the maturity assessment, these are the recommended tools. You want to see different tools? <router-link to="/tools" class="text-primary underline hover:text-secondary transition">Go to tools!</router-link>
      </p>
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

    <!-- Call-to-Action Section -->
    <section class="bg-primary text-white py-12">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold mb-6">
            Find different Tools!
          </h2>
          <p class="text-lg mb-6">
            You have completed the assessment but want to see all DT tools? 
          </p>
          <div>
            <router-link
              to="/tools"
            >
              <Button
                label="All Tools"
                class="!px-6 !py-2 hover:!bg-secondary hover:!text-white transition duration-300"
              />
            </router-link>
          </div>
          
        </div>
      </section>


  </div>
</template>

<style scoped>
.card {
  max-width: 600px;
  margin: 20px auto;
}
</style>