<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
});

const variantClasses = computed(() => {
  const baseClasses = 'flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none';
  const variantMap = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    dark: 'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
    success: 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    warning: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
  };
  return `${baseClasses} ${variantMap[props.variant] || ''}`;
});
</script>

<template>
  <button :class="variantClasses" :type="props.type" v-on="$attrs">
    <slot></slot>
  </button>
</template>