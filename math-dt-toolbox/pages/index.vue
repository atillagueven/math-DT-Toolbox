<script setup lang="ts">
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { onMounted } from 'vue';

const hasEvaluationResult = ref(false);

onMounted(() => {
  if (sessionStorage.getItem('evaluationResult')) {
    hasEvaluationResult.value = true;
  }
});

const route = useRoute()
</script>

<template>
  <div>


    <!-- Hero Section -->
    <section class="min-h-[75vh] content-center  bg-white text-primary py-12">
      <div class="container mx-auto px-6 text-center">
        <!-- Hero Content -->
        <div>
          <h1 class="text-4xl font-bold mb-4">
            Exploring the digital transformation toolbox for CDOs!
          </h1>
          <p class="text-lg mb-6">
            Unveiling tools, frameworks, and strategies to navigate the
            challenges and opportunities of digital transformation in today's
            business landscape.
          </p>
        </div>

        <!-- Image -->
        <div class="mt-8">
          <img
            src="/DTTB Favicon.png"
            alt="Team Collaboration"
            class="rounded-lg shadow-lg mx-auto max-w-2xl"
          />
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 items-center gap-8 mt-10">
          <div class="text-center">
            <p class="text-3xl font-bold">16</p>
            <p>DT Tools</p>
          </div>
          <div class="text-center">
            <img src="/Logo-HSG.png" class="size mx-auto max-w-10"/>
            <p>Master Thesis of the University of St.Gallen</p>
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold">100%</p>
            <p>Research Based & peer reviewed tools</p>
          </div>
        </div>
      </div>
    </section>

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

    <!-- About Section -->
    <section class="bg-gray-100 py-12">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-6">About the Tool</h2>
        <p class="text-lg text-center mb-8">
          This tool is designed to support organizations in evaluating their
          digital maturity and identifying tailored digital transformation
          strategies.
        </p>

        <div class="grid grid-cols-2 gap-24">
          <div class="flex flex-col items-center justify-center text-center">
            <h3 class="text-2xl font-bold mb-4">Master Thesis</h3>
            <p>
              Developed as part of a master's thesis, this tool embodies the latest
              academic research in digital transformation frameworks and tools, aiming
              to bridge the gap between theory and practice.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center text-center">
            <h3 class="text-2xl font-bold mb-4">Collaboration</h3>
            <p>
              A collaborative effort between the Institute for Information Systems
              (IWI) and the HCI Chair at the University of St. Gallen (HSG), combining
              interdisciplinary expertise for impactful solutions.
            </p>
          </div>
        </div>

      </div>
    </section>



  </div>
</template>


<style>

</style>