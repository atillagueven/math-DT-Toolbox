<script setup lang="ts">
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Chip from 'primevue/chip'


const route = useRoute()
</script>

<template>
    <div>
      <!-- Hero Section -->
      <div class="flex lg:flex-row flex-col gap-0 content-start">
        <div class="flex-4 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12">
                <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 mb-4 lg:leading-normal text-center lg:text-left">
                  All DT tools in <br /><span class="text-primary">one place.</span>
                </h1>
                <p class="text-surface-700 leading-normal mb-8 text-center lg:text-left">
                  Explore all the tools to get an insight, where you can improve strategic actions of the digital transformation in your company
                </p>
                <div class="flex items-center justify-center lg:justify-start gap-6">
                    <Button label="Learn More" type="button" />
                    <Button label="Live Demo" type="button" outlined />
                </div>
            </div>
        </div>
        <div class="flex-6">
          <video src="/bg-video-cut.mp4" alt="hero-1" class="h-full w-full object-cover" autoplay loop playsinline muted></video>
        </div>
      </div>

      <section class="py-16">
        <div class="container mx-auto px-6">

          <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
            <!-- Left Content (Search and Chips) -->
            <div class="md:w-1/2">    
              <!-- Chips -->
              <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="flex flex-wrap gap-3">
                <h3>Filters</h3>
                <div class="flex flex-wrap gap-3">
                  <Chip label="Strategy"  />
                  <Chip label="Insights"  />
                  <Chip label="Ideation"  />
                  <Chip label="Social impact"  />
                  <Chip label="Business model" />
                  <Chip label="Show more" />
                </div>
              </div>
            </div>

            <!-- Right Content (Optional Image or Illustration) -->


              <!-- Search Bar -->
              <div >
                <h3>Find your tool:</h3>
                <div class="flex items-center space-x-4 mb-6">
                  <InputText
                    placeholder="Search here..."
                    class="focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  />
                  <Button label="Search" class="!rounded-xl mt-2" />
                </div>
              </div>
          </div>
        </div>

        <div class="bg-surface-50 px-20">
          <div class="py-10 mt-10 ">
              <div class="bg-surface-0 p-6 shadow rounded-border">
                  <div class="text-3xl font-medium text-surface-900 mb-2">AI Readiness Framework</div>
                  <div class="font-medium text-surface-500 mb-4">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                  <div class="h-[150px] border-2 border-dashed border-surface" />
              </div>
          </div>
          <div class="pb-10 ">
              <div class="bg-surface-0 p-6 shadow rounded-border">
                  <div class="text-3xl font-medium text-surface-900 mb-2">BPI MM</div>
                  <div class="font-medium text-surface-500 mb-4">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                  <div class="h-[150px] border-2 border-dashed border-surface" />
              </div>
          </div>
        </div>
      </section>

    </div>
</template>


<style>

</style>