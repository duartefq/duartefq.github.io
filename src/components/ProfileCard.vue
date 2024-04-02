<script setup lang="ts">
import { computed } from 'vue'
import CustomBadge from './CustomBadge.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const highlightLinkedIn = computed(() => route.name === 'about')
</script>

<template>
  <div class="flex-col justify-center items-center">
    <img
      alt="Duarte's profile picture"
      class="rounded-full mx-auto my-4"
      src="@/assets/avatar.jpg"
      width="125"
      height="125"
    />
    <h1 class="text-5xl font-bold text-center">Hello, I'm Duarte Fernandes.</h1>
    <p class="text-xl mt-4 text-center">
      I'm a <span class="underline decoration-wavy">Full Stack Web Developer</span>
    </p>
    <p class="text-xl mt-2 text-center">from Kingston, Ontario.</p>
    <div class="my-4 flex justify-center">
      <CustomBadge class="mr-2" href="https://github.com/duartefq">Github</CustomBadge>
      <CustomBadge
        class="mr-2"
        href="https://linkedin.com/in/duartefq"
        :animated="highlightLinkedIn"
        >LinkedIn</CustomBadge
      >
      <CustomBadge href="mailto:duartefq@outlook.com">Email</CustomBadge>
    </div>
  </div>
</template>
