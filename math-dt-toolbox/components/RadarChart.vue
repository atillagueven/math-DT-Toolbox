<template>
  <RadarChart :data="chartData" />
</template>

<script setup>
import { useAsyncData } from '#app';


const { data } = useAsyncData(() => $fetch('/server/api/evaluate', { method: 'POST', body: { answers } }));

const chartData = computed(() => ({
  labels: data.value?.scores.labels,
  datasets: [
    {
      label: 'Maturity Scores',
      data: data.value?.scores.values,
    },
  ],
}));
</script>
