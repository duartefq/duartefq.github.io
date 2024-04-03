<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import CustomBadge from './CustomBadge.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const highlightLinkedIn = computed(() => route.name === 'about')

let timer: NodeJS.Timeout | undefined = undefined

const currentMessage = ref(0)
const options = ['LinkedIn', 'Hire Me 🙂']

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
  <div class="flex-col justify-center items-center">
    <!-- Profile Picture -->
    <img
      alt="Duarte's profile picture"
      class="rounded-full mx-auto my-4"
      src="@/assets/avatar.jpg"
      width="125"
      height="125"
    />

    <!-- Header -->
    <h1 class="text-5xl font-bold text-center">Hello, I'm Duarte Fernandes.</h1>

    <!-- Description -->
    <p class="text-xl mt-4 text-center">
      I'm a <span class="underline decoration-wavy">Full Stack Web Developer</span>
    </p>

    <!-- Location -->
    <p class="text-xl mt-2 text-center">from Kingston, Ontario.</p>

    <!-- Socials -->
    <div class="my-4 flex justify-center">
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

      <CustomBadge href="mailto:duartefq@outlook.com">Email</CustomBadge>
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
