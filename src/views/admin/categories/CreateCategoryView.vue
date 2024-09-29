<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue';

import { reactive } from 'vue';
import { useCategoryStore } from '@/stores/categories'

const categoryStore = useCategoryStore()
const { createCategory } = categoryStore


const mainCategory = { title: 'Kategori', to: { name: 'admin-categories' } };

const subCategories = [
  { title: 'Membuat Kategori', to: { name: 'admin-categories-create' } },
];

const form = reactive({
  cn_name_category: '',
});

const submit = async () => {
  await createCategory(form)


};

const reset = () => {
  form.cn_name_category = ''
}
</script>

<template>
  <AdminLayout>
    <Breadcrumb :mainCategory="mainCategory" :subCategories="subCategories" :useButton="false"></Breadcrumb>
    <div class="w-full p-8 bg-white rounded shadow-md">
      <form @submit.prevent="submit">
        <div class="mb-5">
          <FormLabel for="title" v-model="form.cn_name_category">Nama Kategori</FormLabel>
          <FormInput type="text" v-model="form.cn_name_category" id="title" name="title"
            placeholder="Masukkan nama kategori..." required />
        </div>
        <div class="flex justify-end w-full gap-4">
          <Button variant="dark" @click.prevent="reset">
            <svg class="w-4 h-4 text-white ms-1 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
            </svg>
            Atur ulang
          </Button>
          <Button variant="primary" type="submit">
            <svg class="w-4 h-4 text-white ms-1 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14m-7 7V5" />
            </svg>
            Simpan
          </Button>
        </div>
      </form>
    </div>
  </AdminLayout>
</template>