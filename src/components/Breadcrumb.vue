<script setup>
import ButtonLink from './ButtonLink.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  mainCategory: {
    type: Object,
    required: false,
    default: () => ({})
  },
  subCategories: {
    type: Array,
    required: false,
    default: () => []
  },
  btnText: {
    type: String,
    required: false,
    default: 'Tambah'
  },
  to: {
    required: false,
  },
  useButton: {
    type: Boolean,
    required: false,
    default: true
  }
});
</script>

<template>
  <div class="flex items-center justify-between mb-4 h-14">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <RouterLink :to="props.mainCategory.to"
            class="inline-flex items-center text-sm font-bold text-gray-700 md:text-xl hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-5 h-5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                clip-rule="evenodd" />
            </svg>
            {{ props.mainCategory.title }}
          </RouterLink>
        </li>
        <li v-for="(item, index) in props.subCategories" :key="index">
          <div class="flex items-center">
            <svg class="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <RouterLink :to="item.to"
              class="text-sm font-medium text-gray-700 ms-1 md:text-xl hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              {{ item.title }}
            </RouterLink>
          </div>
        </li>
      </ol>
    </nav>
    <ButtonLink variant="primary" :to="props.to">
      <svg class="w-4 h-4 text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 12h14m-7 7V5" />
      </svg>
      {{ props.btnText }}
    </ButtonLink>
  </div>
</template>