<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Card from '@/components/Card.vue';
import Button from '@/components/PrimaryButton.vue';
import { ref } from 'vue';

// Mock data for news articles
const newsArticles = ref([
  {
    title: 'Prediksi Harga Bawang Bulan Ini',
    description: 'Dapatkan informasi terbaru tentang prediksi harga bawang di berbagai wilayah Indonesia.',
    img: '/src/assets/images/sawah-bawang.jpeg',
  },
  {
    title: 'Strategi Pemasaran untuk Petani Bawang',
    description: 'Pelajari bagaimana petani bisa meningkatkan pemasaran dengan teknologi terbaru.',
    img: '/src/assets/images/sawah-bawang.jpeg',
  },
  {
    title: 'Tren Cuaca dan Pengaruhnya terhadap Harga Bawang',
    description: 'Analisis cuaca terbaru dan dampaknya pada produksi bawang di Indonesia.',
    img: '/src/assets/images/sawah-bawang.jpeg',
  },
  {
    title: 'Inovasi Pertanian Digital',
    description: 'Teknologi digital mempengaruhi berbagai aspek pertanian, termasuk prediksi harga.',
    img: '/src/assets/images/sawah-bawang.jpeg',
  },
  {
    title: 'Cara Optimalisasi Produksi dengan Prediksi Harga',
    description: 'Dengan prediksi harga yang lebih presisi, petani dapat memaksimalkan hasil panen.',
    img: '/src/assets/images/sawah-bawang.jpeg',
  },
  {
    title: 'Kebijakan Pemerintah Terkait Harga Pangan',
    description: 'Informasi terbaru tentang kebijakan pemerintah yang berdampak pada harga bawang.',
    img: '/src/assets/images/sawah-bawang.jpeg',
  },
]);
</script>

<template>
  <UserLayout>
    <main class="mb-12">
      <!-- Jumbotron Section -->
      <Jumbotron bg-url="/src/assets/images/sawah-bawang.jpeg" class="relative">
        <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div class="relative z-10 text-center">
          <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white shadow-lg md:text-5xl lg:text-6xl">
            Selamat Datang di SIPRABU
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48">Solusi Cerdas untuk Prediksi
            Harga Bawang!</p>
        </div>
      </Jumbotron>

      <!-- Feature Section -->
      <section class="container max-w-screen-xl mx-auto mt-12">
        <div class="flex flex-col gap-12 mx-8 md:mx-auto">
          <div class="flex flex-col items-center gap-8 lg:flex-row">
            <img class="object-cover transition-transform duration-300 rounded-lg shadow-lg w-72 h-72 hover:scale-105"
              src="@/assets/images/home-1.jpg" alt="Prediksi Harga Akurat">
            <div class="text-center lg:text-start">
              <h2 class="mb-4 text-3xl font-bold">Prediksi Harga Akurat</h2>
              <p class="max-w-3xl text-gray-600">Kami memanfaatkan teknologi machine learning dan data historis dari
                berbagai sumber terpercaya untuk memberikan prediksi harga bawang yang lebih akurat. Dengan SIPRABU,
                Anda dapat merencanakan strategi bisnis berdasarkan tren yang diproyeksikan, bukan sekedar spekulasi.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-8 lg:flex-row-reverse">
            <img class="object-cover transition-transform duration-300 rounded-lg shadow-lg w-72 h-72 hover:scale-105"
              src="@/assets/images/home-2.jpeg" alt="Informasi Real-Time dan Terpercaya">
            <div class="text-center lg:text-end">
              <h2 class="mb-4 text-3xl font-bold">Informasi Real-Time dan Terpercaya</h2>
              <p class="max-w-3xl text-gray-600">Dapatkan akses ke data harga bawang terkini dari seluruh wilayah
                Indonesia. SIPRABU selalu menyajikan data yang up-to-date, memastikan Anda selalu memiliki informasi
                yang Anda butuhkan untuk tetap kompetitif di pasar.</p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-8 lg:flex-row">
            <img class="object-cover transition-transform duration-300 rounded-lg shadow-lg w-72 h-72 hover:scale-105"
              src="@/assets/images/home-3.jpg" alt="Optimalkan Produksi dan Pemasaran">
            <div class="text-center lg:text-start">
              <h2 class="mb-4 text-3xl font-bold">Optimalkan Produksi dan Pemasaran</h2>
              <p class="max-w-3xl text-gray-600">Dengan prediksi harga yang lebih presisi, petani bisa menentukan waktu
                terbaik untuk menanam dan memanen, sementara pedagang bisa mengatur stok dan strategi harga dengan lebih
                efektif. SIPRABU membantu Anda merencanakan bisnis yang lebih baik dengan meminimalkan risiko dan
                meningkatkan keuntungan.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest News Section -->
      <section class="container max-w-screen-xl mx-auto mt-16">
        <h2 class="my-8 text-3xl font-bold text-center">Berita & Informasi Terbaru</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card v-for="(article, index) in newsArticles" :key="index"
            class="transition-shadow duration-300 hover:shadow-2xl">
            <RouterLink to="#" aria-label="Read more about {{ article.title }}">
              <img class="object-cover w-full h-48 rounded-t-lg" :src="article.img" alt="">
            </RouterLink>
            <div class="p-5">
              <RouterLink to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ article.title }}
                </h5>
              </RouterLink>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ article.description }}</p>
              <Button class="inline-flex items-center" :isLink="true">
                <span>Selengkapnya</span>
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  </UserLayout>
</template>

<style scoped>
/* Custom Animations */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Jumbotron Text Shadow */
.jumbotron-text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
}
</style>
