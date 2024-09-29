<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import ButtonLink from '@/components/ButtonLink.vue';

import { onMounted, computed } from 'vue';
import { DataTable } from 'simple-datatables';
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/stores/categories'

const categories = computed(() => storeToRefs(useCategoryStore()).categories);
const { fetchCategories } = useCategoryStore();

const mainCategory = { title: 'Kategori', to: { name: 'admin-categories' } };

onMounted(async () => {
  new DataTable('#search-table', {
    searchable: true,
    sortable: true,
  });

  await fetchCategories();
});
</script>

<template>
  <AdminLayout>
    <Breadcrumb :mainCategory="mainCategory" btnText="Buat baru" :to="{ name: 'admin-categories-create' }"></Breadcrumb>
    <table id="search-table">
      <thead>
        <tr>
          <th>
            <span class="flex items-center">
              No.
            </span>
          </th>
          <th>
            <span class="flex items-center">
              Nama Kategori
            </span>
          </th>
          <th>
            <span class="flex items-center">
              Aksi
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories.value" :key="category.id">
          <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ index + 1 }}</td>
          <td>{{ category.cn_name_category }}</td>
          <td>
            <div class="flex">
              <ButtonLink variant="primary" to="#">
                <svg class="w-4 h-4 text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                    clip-rule="evenodd" />
                </svg>
                Edit
              </ButtonLink>
              <ButtonLink variant="danger" to="#">
                <svg class="w-4 h-4 text-white me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd" />
                </svg>
                Hapus
              </ButtonLink>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>