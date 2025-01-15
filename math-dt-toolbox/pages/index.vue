<script setup lang="ts">
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
const route = useRoute()
</script>

<template>
  <div>
    <h1>Initial Setup completed!</h1>
    <p>Current route: {{ route.path }}</p>
    <Button label="Verify" />
  </div>
</template>