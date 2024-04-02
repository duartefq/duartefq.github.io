<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <ProfileCard />
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </RouterView>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
