<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useQuestionnaireStore } from '@/stores/questionnaire';
import Button from 'primevue/button';
import Stepper from 'primevue/stepper';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import RadioButton from 'primevue/radiobutton';

// Capability levels definition
const capabilityLevels = [
  { value: 0, label: 'Incomplete' },
  { value: 1, label: 'Performed' },
  { value: 2, label: 'Managed' },
  { value: 3, label: 'Established Process' },
  { value: 4, label: 'Predictable' },
  { value: 5, label: 'Optimizing' },
];

// Active step and questionnaire store
const activeStep = ref('1'); // Active step starts at the first pillar
const questionnaireStore = useQuestionnaireStore();
const pillars = questionnaireStore.getQuestionsByPillar(); // Get structured questions

// Initialize answers as a reactive object
const answers = reactive<{ [key: number]: number }>({});

// Router for navigation
const router = useRouter();

// Function to handle submission
const submitAnswers = async () => {
  console.log('Submitting answers:', answers); // Log the answers

  // Ensure there are answers before submitting
  if (Object.keys(answers).length === 0) {
    alert('Please complete the questionnaire before submitting.');
    return;
  }

  try {
    const response = await $fetch('/api/evaluate', {
      method: 'POST',
      body: { answers }, // Pass the reactive answers object
    });

    console.log('Response from API:', response);

    // Save evaluation result and navigate to recommendations page
    sessionStorage.setItem('evaluationResult', JSON.stringify(response));
    router.push('/recommendation');
  } catch (error) {
    console.error('Error submitting answers:', error);
    alert('Failed to submit answers. Please try again.');
  }
};
</script>

<template>
  <div class="card">
    <Stepper v-model="activeStep">
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
</template>

<style scoped>
.card {
  max-width: 600px;
  margin: 20px auto;
}
</style>
