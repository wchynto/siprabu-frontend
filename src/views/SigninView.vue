<script setup>
import { reactive, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';

import Button from '@/components/PrimaryButton.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormInput from '@/components/FormInput.vue';
import Alert from '@/components/Alert.vue';

const authStore = useAuthStore();
const { error, isAuthenticated } = storeToRefs(authStore);
const { login, checkAuth } = authStore;
const router = useRouter();

const form = reactive({
  email: '',
  password: '',
  remember: false,
});

const submit = async () => {
  await login(form);
  await checkAuth();

  if (isAuthenticated.value) {
    router.push({ name: 'admin-dashboard' });
  }
};

// Watch for changes in form and reset error
watch(
  () => form,
  () => {
    if (error.value) {
      error.value = null;
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen bg-pink-500 lg:bg-white">
    <div
      class="items-center justify-center hidden w-full h-screen px-24 bg-[url('/src/assets/images/sawah-bawang.jpeg')] bg-cover bg-no-repeat bg-gray-400 bg-blend-multiply lg:flex">
      <div class="w-3/4 text-center">
        <RouterLink to="/" class="flex items-center justify-center w-full mb-6 space-x-3 rtl:space-x-reverse">
          <img src="@/assets/logo.png" class="h-20" alt="Flowbite Logo">
          <span class="self-center font-bold text-white text-7xl whitespace-nowrap dark:text-white">
            SIPRABU
          </span>
        </RouterLink>
        <h2 class="text-2xl text-white">
          Mudah digunakan, aksesibel di mana saja, dan memberikan hasil prediksi yang akurat. SIPRABU adalah solusi
          tepat untuk petani bawang modern seperti Anda.
        </h2>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full h-screen lg:w-4/5">
      <h1 class="hidden max-w-md mb-8 text-2xl italic text-center lg:block">"Daftar Sekarang dan Rasakan Manfaat
        SIPRABU untuk Panen Bawang Anda!"
      </h1>
      <div class="flex flex-col items-center justify-center mb-6 text-center text-white lg:hidden">
        <RouterLink to="/" class="flex items-center justify-center w-full mb-6 space-x-3 rtl:space-x-reverse">
          <img src="@/assets/logo.png" class="h-14" alt="Flowbite Logo">
          <span class="self-center text-6xl font-bold text-white whitespace-nowrap dark:text-white">
            SIPRABU
          </span>
        </RouterLink>
        <h2 class="text-xl italic">"Daftar Sekarang dan Rasakan Manfaat SIPRABU untuk Panen Bawang Anda!"</h2>
      </div>
      <div class="w-full max-w-sm">
        <Alert v-if="error" type="danger" class="mb-4">
          {{ error }}
        </Alert>
        <div
          class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" @submit.prevent="submit">
            <h5 class="text-xl font-bold text-center text-gray-900 dark:text-white">Login</h5>
            <div>
              <FormLabel for="email">Email</FormLabel>
              <FormInput id="email" type="email" name="email" placeholder="asep@example.com" v-model="form.email"
                required />
            </div>
            <div>
              <FormLabel for="password">Password</FormLabel>
              <FormInput id="password" type="password" name="password" placeholder="••••••••" v-model="form.password"
                required />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    v-model="form.remember" />
                </div>
                <FormLabel for="remember" class="ml-3">
                  Ingat saya
                </FormLabel>
              </div>
              <RouterLink to="#" class="text-sm text-blue-700 ms-auto hover:underline dark:text-blue-500">Lupa password?
              </RouterLink>
            </div>
            <Button class="w-full" type="submit">Masuk sekarang</Button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Belum punya akun?
              <RouterLink :to="{ name: 'signup' }" class="text-blue-700 hover:underline dark:text-blue-500">
                Buat akun
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
