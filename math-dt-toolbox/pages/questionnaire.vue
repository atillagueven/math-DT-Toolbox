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

// Capability levels definition
const capabilityLevels = [
  { value: 0, label: 'Incomplete' },
  { value: 1, label: 'Performed' },
  { value: 2, label: 'Managed' },
  { value: 3, label: 'Established Process' },
  { value: 4, label: 'Predictable' },
  { value: 5, label: 'Optimizing' },
];

// Active step (first step open by default)
const activeStep = ref('1'); 

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
    <div class="flex flex-col lg:flex-row gap-0 content-start">
      <div class="flex-4 flex items-center justify-center">
        <div class="p-6 pt-12 lg:p-12"> 
          <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 lg:leading-normal text-left">
            Evaluate Your Digital Transformation Readiness
          </h1>
        </div>
      </div>
      <div class="flex-6">
        <video src="/bg-video-cut.mp4" alt="hero-1" class="h-full w-full object-cover" autoplay loop playsinline muted></video>
      </div>
    </div>

    <!-- Main Content (Questionnaire) -->
    <section class="py-8">
      <div class="container mx-auto px-6">
        <div class="card flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Stepper v-model="activeStep" class="stepper">
            <!-- Loop through each pillar -->
            <StepItem
              v-for="(pillar, index) in pillars"
              :key="index"
              :value="String(index + 1)"
            >
              <Step>{{ pillar.pillar }}</Step>
              <StepPanel v-slot="{ activateCallback }">
                <div>
                  <h2 class="mb-4">{{ pillar.pillar }}</h2>
                  <!-- Loop through questions in the current pillar -->
                  <div
                    v-for="question in pillar.questions"
                    :key="question.id"
                    class="mb-6"
                  >
                    <p class="font-bold">{{ question.title }}</p>
                    <p class="mb-2">{{ question.text }}</p>
                    <!-- Radio Buttons for SPICE Capability Levels -->
                    <div class="flex flex-col gap-2">
                      <div v-for="level in capabilityLevels" :key="level.value">
                        <RadioButton
                          v-model="answers[question.id]" 
                          :value="level.value"
                          class="mr-2"
                        />
                        <label>{{ level.label }}</label>
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
