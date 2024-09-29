<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormInput from '@/components/FormInput.vue';

import { reactive, computed } from 'vue';

const mainCategory = { title: 'Berita & Informasi', to: { name: 'admin-news' } };

const subCategories = [
  { title: 'Membuat Berita & Postingan', to: { name: 'admin-news-create' } },
];

const form = reactive({
  title: '',
  content: '',
});
</script>

<template>
  <AdminLayout>
    <Breadcrumb :mainCategory="mainCategory" :subCategories="subCategories" :useButton="false"></Breadcrumb>
    <div class="w-full p-8 bg-white rounded shadow-md">
      <form @submit.prevent="submit">
        <div class="mb-5">
          <FormLabel for="title" v-model="form.title">Judul</FormLabel>
          <FormInput type="text" v-model="form.title" id="title" name="title"
            placeholder="Tulis judul catatanmu disini..." required />
        </div>
        <div class="flex justify-end w-full gap-4">
          <button type="submit"
            class="flex items-center justify-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800">
            <svg class="w-4 h-4 text-white ms-1 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
            </svg>
            Atur ulang
          </button>
          <button type="submit"
            class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg class="w-4 h-4 text-white ms-1 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14m-7 7V5" />
            </svg>
            Simpan
          </button>
        </div>
      </form>
    </div>
  </AdminLayout>
</template>