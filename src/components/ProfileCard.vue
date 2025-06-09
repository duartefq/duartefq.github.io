<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import CustomBadge from './CustomBadge.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const highlightLinkedIn = computed(() => route.name === 'about')

let timer: ReturnType<typeof setInterval>

const currentMessage = ref(0)
const options = ['LinkedIn', 'Hire Me 😉']

onMounted(() => {
  timer = setInterval(() => {
    if (highlightLinkedIn.value) {
      currentMessage.value = currentMessage.value + 1
    }
  }, 10_000 /* 10 seconds */)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})

const buttonMessage = computed(() => options[currentMessage.value % options.length])
</script>

<template>
  <div class="flex-col items-center justify-center px-2">
    <!-- Profile Picture -->
    <img
      alt="Duarte's profile picture"
      class="mx-auto my-4 rounded-full"
      src="@/assets/avatar.jpg"
      width="125"
      height="125"
    />

    <!-- Header -->
    <h1 class="text-5xl font-bold text-center">Hello, I'm Duarte Fernandes.</h1>

    <!-- Description -->
    <p class="mt-4 text-xl text-center text-pretty">
      I'm a <span class="underline decoration-wavy">Full Stack Software Engineer</span>
    </p>

    <!-- Location -->
    <p class="mt-2 text-xl text-center">from Kingston, Ontario.</p>

    <!-- Socials -->
    <div class="flex justify-center my-4">
      <CustomBadge class="mr-2" href="https://github.com/duartefq">GitHub</CustomBadge>
      <CustomBadge
        class="mr-2"
        href="https://linkedin.com/in/duartefq"
        :animated="highlightLinkedIn"
      >
        <Transition name="fade" mode="out-in">
          <span :key="buttonMessage">{{ buttonMessage }}</span>
        </Transition>
      </CustomBadge>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
