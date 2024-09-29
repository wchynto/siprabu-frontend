<script setup>
import { defineProps, computed, ref, watch } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const currentPage = ref(props.modelValue);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  emit('update:modelValue', page);
};

watch(() => props.modelValue, (newValue) => {
  currentPage.value = newValue;
});

const pageNumbers = computed(() => {
  const pages = [];
  const maxPagesToShow = 7;
  const half = Math.floor(maxPagesToShow / 2);

  if (totalPages.value <= maxPagesToShow) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= half) {
      for (let i = 1; i <= maxPagesToShow - 2; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value);
    } else if (currentPage.value >= totalPages.value - half) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages.value - (maxPagesToShow - 3); i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage.value - half + 1; i <= currentPage.value + half - 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages.value);
    }
  }

  return pages;
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center h-8 -space-x-px text-sm">
      <li>
        <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)"
          class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="sr-only">Previous</span>
          <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
        </button>
      </li>
      <li v-for="page in pageNumbers" :key="page">
        <button v-if="page !== '...'" @click="changePage(page)"
          class="flex items-center justify-center h-8 px-3 leading-tight"
          :class="page === currentPage ? 'text-white bg-pink-500 border border-pink-500 hover:bg-white hover:text-pink-500' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'">{{
            page }}</button>
        <span v-else
          class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
      </li>
      <li>
        <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)"
          class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="sr-only">Next</span>
          <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>