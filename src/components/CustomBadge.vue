<script setup lang="ts">
defineProps({
  animated: { type: Boolean },
  href: { type: String, required: true }
})
</script>
<template>
  <button
    :class="{
      'animate-border bg-gradient-to-r from-red-600 via-green-600 to-blue-600': animated
    }"
    class="inline-block rounded-full bg-slate-800 bg-[length:400%_400%] p-1"
  >
    <a
      :href="href"
      target="_blank"
      class="block rounded-full hover:bg-slate-800 bg-slate-900 px-5 py-2 font-bold text-white"
    >
      <slot />
    </a>
  </button>
</template>
<style></style>
