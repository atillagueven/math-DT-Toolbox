<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuestionnaireStore } from '@/stores/questionnaire';
import { useToolsStore } from '@/stores/tools';
import Button from 'primevue/button';
import Stepper from 'primevue/stepper';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import RadioButton from 'primevue/radiobutton';
import { EvaluationService } from '~/utils/EvaluationService';
import { watch } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

// Capability levels definition
const capabilityLevels = [
  { value: 0, label: 'Incomplete' },
  { value: 1, label: 'Performed' },
  { value: 2, label: 'Managed' },
  { value: 3, label: 'Established Process' },
  { value: 4, label: 'Predictable' },
  { value: 5, label: 'Optimizing' },
];

const activeStep = ref('1'); // Step 1 open by default

const activeAccordionIndex = ref([0]);

watch(activeStep, () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Access stores
const questionnaireStore = useQuestionnaireStore();
const toolsStore = useToolsStore();
const pillars = questionnaireStore.getQuestionsByPillar(); 

// Reactive answers
const answers = reactive<{ [key: number]: number }>({});

// Computed tools from store
const tools = computed(() => toolsStore.tools);

// Router for navigation
const router = useRouter();

const hasEvaluationResult = ref(false);

onMounted(() => {
  if (sessionStorage.getItem('evaluationResult')) {
    hasEvaluationResult.value = true;
  }
});

onMounted(() => {
  if (toolsStore.tools.length === 0) {
    console.log('Fetching tools...');
    toolsStore.fetchTools();
  }
});

const submitAnswers = async () => {
  console.log('Submitting answers:', JSON.stringify(answers));
  console.log('Tools:', JSON.stringify(tools.value));

  if (Object.keys(answers).length === 0 || !tools.value || tools.value.length === 0) {
    alert('Please complete the questionnaire and ensure tools are available before submitting.');
    return;
  }

  try {
    const payload = { answers, tools: tools.value };
    console.log('Request payload:', JSON.stringify(payload));

    const response = EvaluationService.evaluate(payload);

    console.log('Response from Evaluation service:', response);

    sessionStorage.setItem('evaluationResult', JSON.stringify(response));
    router.push('/recommendation');
  } catch (error) {
    console.error('Error submitting answers:', error);
    alert('Failed to submit answers. Please try again.');
  }
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative flex flex-col lg:flex-row gap-0 mb-10 content-start">
      <!-- Left Content (Text) -->
      <div class="flex-4 flex items-center justify-center absolute z-10 w-full h-full">
        <div class="container mx-auto px-6 lg:pr-96 lg:pl-6 pt-12 lg:pt-24 z-20">
          <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 lg:leading-normal text-left">
            Evaluate Your <span class="text-primary">Digital Transformation Readiness</span>
          </h1>
          <p class="mt-2 text-surface-700">
            Fill out the maturity assessment about the digital transformation of your organization to get tailored tool recommendations.
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <router-link
              v-if="hasEvaluationResult"
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

      <!-- Right Side (Video) -->
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

    <!-- Main Content (Questionnaire) -->
    <section class="py-8">
      <div class="container mx-auto px-6">


        <Accordion v-model:activeIndex="activeAccordionIndex" multiple class="mb-8 text-sm">
          <!-- SPICE Capability Levels -->
          <AccordionTab header="SPICE Capability Levels">
            <div class="bg-gray-50 border border-gray-200 rounded-b-lg p-6">
              <p class="text-gray-700 mb-3 text-sm">
                These Levels were chosen for their standardized, scalable structure that allows digital leaders to objectively assess and benchmark digital transformation maturity across key process areas (Konrad, Paulk, & Graydon, 1995).
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>0 – Incomplete:</strong> No recognizable process or digital activity exists.</li>
                <li><strong>1 – Performed:</strong> The process has started and is delivering basic results.</li>
                <li><strong>2 – Managed:</strong> The process is tracked, planned, and managed.</li>
                <li><strong>3 – Established Process:</strong> Standardized and consistently followed process.</li>
                <li><strong>4 – Predictable:</strong> The process is measured and controlled.</li>
                <li><strong>5 – Optimizing:</strong> Focused on continuous improvement and innovation.</li>
              </ul>
            </div>
          </AccordionTab>

          <!-- Questionnaire Structure -->
          <AccordionTab header="Questionnaire Structure">
            <div class="bg-gray-50 border border-gray-200 rounded-b-lg p-6">
              <p class="text-gray-700 mb-3 text-sm">
                Breitruck, Back, and Pätzmann (2024) propose a structure to assess digital maturity across eight strategic pillars. This structure is adapted in the following maturity assessment to evaluate which specific digital transformation tools—categorized as frameworks, methods, or strategic tools — are most suitable for your organization's needs. Each pillar is supported by at least two tailored tool recommendations, ensuring that both dimensions within the pillar (e.g., "Leadership" and "Culture") are addressed with practical guidance for CDOs.
              </p>
            </div>
          </AccordionTab>

          <!-- Use Case -->
          <AccordionTab header="Use Case">
            <div class="bg-gray-50 border border-gray-200 rounded-b-lg p-6">
              <p class="text-gray-700 mb-3 text-sm">
                Imagine a mid-sized retail company introducing an AI-powered inventory system to optimize stock levels across stores. The leadership has begun training staff, implemented pilot tests in two locations, and is now evaluating performance metrics. When answering the questions, think about how far your organization has progressed in a similar transformation effort—from just starting out to having standardized, optimized processes in place.
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li><strong>Technology and Infrastructure - AI Deployment:</strong> If your organization uses AI systems in daily operations—for example, demand forecasting powered by machine learning models—and these are well integrated and regularly monitored, you might rate “Established Process” or “Predictable” depending on maturity and consistency.</li>
                <li><strong>Process Automation and Optimization - Process Standardization Establishment:</strong> If you have clearly documented process standards and use software tools to continuously optimize workflows, “Predictable” or “Optimizing” would be appropriate.</li>
                <li><strong>Data and Analytics - Decision Support:</strong> If you use real-time dashboards and predictive analytics tools to support decisions across departments, this likely reflects a “Predictable” or “Optimizing” maturity level.</li>
              </ul>
            </div>
          </AccordionTab>
        </Accordion>

        <div class="card flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Stepper value="1" v-model="activeStep" class="stepper">
            <!-- Loop through each pillar -->
            <StepItem
              v-for="(pillar, index) in pillars"
              :key="index"
              :value="String(index + 1)"
            >
              <Step>{{ pillar.pillar }}</Step>
              <StepPanel v-slot="{ activateCallback }">
                <div>
                  <!-- Loop through questions in the current pillar -->
                  <div
                    v-for="question in pillar.questions"
                    :key="question.id"
                    class="mb-6"
                  >
                    <p class="font-bold">{{ question.title }}</p>
                    <p class="mb-2">{{ question.text }}</p>
                    <!-- Radio Buttons for SPICE Capability Levels -->
                    <div class="flex flex-wrap gap-4 items-center">
                      <div
                        v-for="level in capabilityLevels"
                        :key="level.value"
                        class="flex items-center gap-4"
                      >
                        <RadioButton
                          v-model="answers[question.id]" 
                          :value="level.value"
                        />
                        <label>{{ level.label }}</label>
                      </div>

                      <!-- Only show 'Not Relevant' if this is the Technology and Infrastructure pillar -->
                      <div
                        v-if="pillar.pillar.toLowerCase().includes('technology')"
                        class="flex items-center gap-4"
                      >
                        <RadioButton
                          v-model="answers[question.id]"
                          :value="-1"
                        />
                        <label>Not Relevant</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Navigation Buttons -->
                <div class="flex py-6 gap-2">
                  <Button
                    v-if="index > 0"
                    label="Back"
                    severity="secondary"
                    @click="activateCallback(String(index))"
                  />
                  <Button
                    v-if="index < pillars.length - 1"
                    label="Next"
                    @click="activateCallback(String(index + 2))"
                  />
                  <Button
                    v-else
                    label="Submit"
                    class="!bg-primary"
                    @click="submitAnswers"
                  />
                </div>
              </StepPanel>
            </StepItem>
          </Stepper>
        </div>
      </div>
    </section>
  </div>
</template>