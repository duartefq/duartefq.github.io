<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <div class="grid grid-cols-4">
    <div
      class="self-start lg:min-h-screen flex justify-center items-center sticky lg:col-span-2 col-span-4"
    >
      <ProfileCard />
    </div>
    <main class="lg:col-span-2 col-span-4">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
