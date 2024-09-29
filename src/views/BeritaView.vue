<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Card from '@/components/Card.vue';
import Pagination from '@/components/Pagination.vue';
import Button from '@/components/PrimaryButton.vue';
import ButtonOutline from '@/components/PrimaryButtonOutline.vue';
import { computed, ref } from 'vue';

import jumbotronImage from '@/assets/images/news-1.jpg';

import newsImage1 from '@/assets/images/news/news-1.jpg';
import newsImage2 from '@/assets/images/news/news-2.jpg';
import newsImage3 from '@/assets/images/news/news-3.jpg';
import newsImage4 from '@/assets/images/news/news-4.jpg';
import newsImage5 from '@/assets/images/news/news-5.jpg';

// Data Setup
const itemsPerPage = 9;
const currentPage = ref(1);
const selectedCategory = ref('');
const categories = ['Teknologi Pertanian', 'Bisnis Pertanian', 'Penelitian Pertanian', 'Kesehatan Pertanian', 'Pendidikan Pertanian'];

const items = ref(Array.from({ length: 100 }, (v, i) => ({
  id: i + 1,
  name: 'Lorem Ipsum Dolor Sit Amet',
  category: categories[Math.floor(Math.random() * categories.length)],
  image:
    [Math.random() * 5 | 0].map(i => [newsImage1, newsImage2, newsImage3, newsImage4, newsImage5][i])
})));

const filteredItems = computed(() =>
  selectedCategory.value ? items.value.filter(item => item.category === selectedCategory.value) : items.value
);

const totalItems = computed(() => filteredItems.value.length);

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredItems.value.slice(start, start + itemsPerPage);
});

function filterByCategory(category) {
  selectedCategory.value = category;
  currentPage.value = 1;
}
</script>

<template>
  <UserLayout>
    <main class="pb-16 bg-gray-50">
      <!-- Jumbotron Section -->
      <Jumbotron :bg-url="jumbotronImage">
        <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
          Jelajahi Dunia Pertanian
        </h1>
        <p class="mb-8 text-lg font-medium text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Temukan berbagai topik menarik yang meliputi teknologi, bisnis, penelitian, dan kesehatan di dunia pertanian.
        </p>
        <form class="max-w-lg mx-auto">
          <div class="relative">
            <input type="search" id="search" placeholder="Cari berita atau topik..."
              class="w-full p-3 pl-4 pr-12 text-sm text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300" />
            <button type="submit"
              class="absolute inset-y-0 right-0 px-4 py-2 text-white transition duration-300 ease-in-out bg-pink-500 rounded-r-lg hover:bg-pink-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17l5 5M6 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
              </svg>
            </button>
          </div>
        </form>
      </Jumbotron>

      <!-- Categories Section -->
      <section class="container max-w-screen-xl px-4 mx-auto my-10">
        <div class="flex items-center justify-center space-x-4 overflow-x-auto scrollbar-hide">
          <ButtonOutline v-for="category in categories" :key="category" :isActive="selectedCategory === category"
            class="py-1.5 transition duration-200 transform hover:scale-105" @click="filterByCategory(category)">
            {{ category }}
          </ButtonOutline>
        </div>
        <p class="mt-4 text-center text-gray-600">Menemukan {{ totalItems }} artikel</p>
        <hr class="my-6">
      </section>

      <!-- Card Section -->
      <section class="container grid max-w-screen-xl gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="item in paginatedItems" :key="item.id"
          class="transition duration-300 transform hover:shadow-lg hover:scale-105">
          <RouterLink :to="{ name: 'berita-detail', params: { id: item.id } }">
            <img class="object-cover w-full h-48 rounded-t-lg" :src="item.image" alt="Item Image" />
          </RouterLink>
          <div class="p-5 bg-white">
            <RouterLink :to="{ name: 'berita-detail', params: { id: item.id } }">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
            </RouterLink>
            <p class="mb-4 text-gray-700">
              Temukan informasi menarik tentang {{ item.name }} yang berkaitan dengan {{ item.category }}.
            </p>
            <Button class="inline-flex items-center mt-3">
              <span>Baca Selengkapnya</span>
              <svg class="w-4 h-4 ml-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                </path>
              </svg>
            </Button>
          </div>
        </Card>
      </section>

      <!-- Pagination Section -->
      <div class="flex justify-center mt-12">
        <Pagination :total-items="totalItems" :items-per-page="itemsPerPage" v-model="currentPage"></Pagination>
      </div>
    </main>
  </UserLayout>
</template>

<style scoped>
/* Custom Hover & Transition Effects */
.grid .hover\\:shadow-lg:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.grid .hover\\:scale-105:hover {
  transform: scale(1.05);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Adding smooth transition to button hover */
button:hover {
  transition: background-color 0.3s ease-in-out, transform 0.2s;
}
</style>
