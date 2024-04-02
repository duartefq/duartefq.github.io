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

  <RouterView />
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
</style>
