<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from 'chart.js';

import UserLayout from '@/layouts/UserLayout.vue';

// Register necessary components from Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

// Data for the chart
const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Prediksi Harga Bawang',
      backgroundColor: '#ec4899', // pink-500
      borderColor: '#ec4899',
      data: [120, 150, 180, 100, 220, 300, 250, 270, 290, 350, 400, 450],
      borderWidth: 2,
      hoverBackgroundColor: '#f472b6', // pink-400
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#f3f4f6', // light gray
      },
      ticks: {
        color: '#6b7280', // gray-600
      },
    },
    x: {
      ticks: {
        color: '#6b7280',
      },
    }
  },
  plugins: {
    legend: {
      labels: {
        color: '#ec4899',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
  },
});
</script>

<template>
  <UserLayout>
    <main class="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-pink-100">
      <!-- Section Heading -->
      <section class="mb-12 text-center">
        <h1 class="mb-4 text-4xl font-bold text-pink-500 transition-transform transform hover:scale-105">Prediksi Harga
          Bawang</h1>
        <p class="max-w-2xl mx-auto text-lg text-gray-700">
          Halaman ini menunjukkan prediksi harga bawang selama tahun berjalan. Data ini berdasarkan analisis tren
          historis dan faktor musiman, meliputi distribusi, cuaca, dan permintaan pasar.
        </p>
      </section>

      <!-- Chart Section -->
      <section class="mb-16">
        <h2 class="mb-6 text-2xl font-semibold text-center text-pink-500">Grafik Prediksi Harga Bawang</h2>
        <div class="w-full max-w-4xl mx-auto">
          <div class="p-6 transition-shadow transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
            <div style="height: 400px;">
              <Bar :data="chartData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </section>

      <!-- Deskripsi Section with Card -->
      <section>
        <h2 class="mb-6 text-2xl font-semibold text-center text-pink-500">Deskripsi Prediksi Harga</h2>
        <div class="flex flex-wrap justify-center gap-6">
          <!-- Card 1: Supply and Demand -->
          <div
            class="max-w-xs overflow-hidden transition-shadow transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105">
            <img src="@/assets/images/home-3.jpg" alt="Bawang"
              class="object-cover w-full h-48 transition-transform transform hover:scale-110" />
            <div class="p-6">
              <h3 class="mb-2 text-xl font-semibold text-pink-500">Pengaruh Pasokan dan Permintaan</h3>
              <p class="text-base leading-relaxed text-gray-700">
                Permintaan bawang biasanya meningkat menjelang hari raya dan musim tertentu. Hal ini menyebabkan
                kenaikan harga yang signifikan, terutama ketika pasokan berkurang karena faktor cuaca buruk atau kendala
                distribusi.
              </p>
            </div>
          </div>

          <!-- Card 2: Cuaca dan Musim -->
          <div
            class="max-w-xs overflow-hidden transition-shadow transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105">
            <img src="@/assets/images/home-3.jpg" alt="Cuaca"
              class="object-cover w-full h-48 transition-transform transform hover:scale-110" />
            <div class="p-6">
              <h3 class="mb-2 text-xl font-semibold text-pink-500">Dampak Cuaca dan Musim</h3>
              <p class="text-base leading-relaxed text-gray-700">
                Kondisi cuaca yang ekstrem seperti banjir atau kekeringan bisa mempengaruhi hasil panen dan kualitas
                bawang. Musim panen yang baik akan menurunkan harga, sedangkan bencana alam bisa membuat harga melonjak
                tajam.
              </p>
            </div>
          </div>

          <!-- Card 3: Perdagangan Internasional -->
          <div
            class="max-w-xs overflow-hidden transition-shadow transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105">
            <img src="@/assets/images/home-3.jpg" alt="Perdagangan"
              class="object-cover w-full h-48 transition-transform transform hover:scale-110" />
            <div class="p-6">
              <h3 class="mb-2 text-xl font-semibold text-pink-500">Perdagangan Internasional</h3>
              <p class="text-base leading-relaxed text-gray-700">
                Ekspor dan impor bawang juga mempengaruhi harga di pasar lokal. Jika impor berkurang atau dikenai pajak
                tinggi, harga bawang di dalam negeri akan ikut meningkat karena pasokan tidak mencukupi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </UserLayout>
</template>

<style scoped>
/* Custom CSS for hover effects and transitions */
</style>
