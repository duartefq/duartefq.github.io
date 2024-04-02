<script setup lang="ts">
import type { PropType } from 'vue'
import { Category } from '../types'

defineProps({
  category: { type: Number as PropType<Category>, default: Category.Programming }
})
</script>
<template>
  <span
    :class="{
      'bg-teal-900': category === Category.Programming,
      'bg-orange-800': category === Category.Frameworks,
      'bg-blue-800': category === Category.Tool
    }"
    class="mt-1 text-white text-xs font-medium me-1 px-2.5 py-0.5 rounded-full"
  >
    <slot />
  </span>
</template>
