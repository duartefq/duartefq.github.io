<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
</script>
<template>
  <li class="mb-6 ms-8">
    <span
      class="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-md -start-4 ring-6 dark:bg-blue-900"
    >
      <slot name="icon" />
    </span>
    <h2 class="mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300">
      <slot name="heading" />
    </h2>
    <h3 class="mb-1 text-md font-semibold text-gray-900 dark:text-slate-300">
      <FontAwesomeIcon class="mr-2" :icon="faBuilding" />
      <slot name="sub-heading" />
    </h3>
    <div class="mb-1 text-sm font-medium text-gray-600 dark:text-slate-300">
      <FontAwesomeIcon class="mr-2" :icon="faCalendar" />
      <slot name="period" />
    </div>
    <div class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-500">
      <FontAwesomeIcon class="mr-2" :icon="faLocationDot" />
      <slot name="location" />
    </div>
    <div class="flex flex-wrap">
      <slot name="technologies" />
    </div>
    <p class="ml-4 my-2 text-base font-normal text-gray-900 dark:text-gray-400">
      <slot />
    </p>
  </li>
</template>
