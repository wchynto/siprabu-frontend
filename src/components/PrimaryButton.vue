<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Object
  }
});
</script>

<template>
  <RouterLink v-if="props.isLink" :to="props.to"
    class="flex items-center justify-center text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none">
    <slot></slot>
  </RouterLink>
  <button v-else
    class="flex items-center justify-center text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none">
    <slot></slot>
  </button>
</template>