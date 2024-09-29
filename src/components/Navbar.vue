<script setup>
import Button from '@/components/PrimaryButton.vue'
import ButtonOutline from '@/components/PrimaryButtonOutline.vue'
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <nav class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/logo.png" class="h-8" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SIPRABU</span>
      </RouterLink>
      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <div class="items-center justify-center hidden gap-2 md:flex">
          <ButtonOutline :is-link="true" :to="{ name: 'signup' }">Daftar</ButtonOutline>
          <Button :is-link="true" :to="{ name: 'signin' }">Masuk</Button>
        </div>
        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
          class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink :to="{ name: 'beranda' }"
              class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
              :class="route.name === 'beranda' ? 'text-pink-500' : ''">
              Beranda
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'prediksi' }"
              class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
              :class="route.name === 'prediksi' ? 'text-pink-500' : ''">
              Prediksi
              Panen</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'berita' }"
              class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
              :class="route.name === 'berita' ? 'text-pink-500' : ''">
              Berita
              & Informasi</RouterLink>
          </li>
          <li>
            <div class="flex flex-col items-center justify-center w-full gap-2 md:hidden">
              <ButtonOutline class="w-full" :is-link="true" :to="{ name: 'signup' }">Daftar</ButtonOutline>
              <Button class="w-full" :is-link="true" :to="{ name: 'signin' }">Masuk</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>