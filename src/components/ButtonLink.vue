<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    required: true
  },
  to: {
    required: true,
  },
});

const typeClasses = computed(() => {
  const baseClasses = "flex items-center justify-center text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none focus:ring-4";
  const typeMap = {
    primary: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    dark: "bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
    success: "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    danger: "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    warning: "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900"
  };
  return `${baseClasses} ${typeMap[props.variant] || ''}`;
});
</script>

<template>
  <RouterLink :to="props.to" :class="typeClasses">
    <slot></slot>
  </RouterLink>
</template>
