<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <div class="grid grid-cols-4">
    <div class="sticky flex items-center justify-center col-span-4 lg:min-h-screen lg:col-span-2">
      <ProfileCard />
    </div>
    <main class="flex items-center justify-center col-span-4 ml-2 lg:col-span-2 ">
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
