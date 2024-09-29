<script setup>
import { reactive, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Button from '@/components/PrimaryButton.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormInput from '@/components/FormInput.vue';
import Alert from '@/components/Alert.vue';

const authStore = useAuthStore();
const { register } = authStore;
const success = ref('');

const form = reactive({
  username: '',
  email: '',
  isAdmin: 0,
  password: '',
});

const errors = reactive({
  username: '',
  email: '',
  isAdmin: 0,
  password: '',
});

// Watch form fields and reset errors when they change
watch(() => form.username, () => errors.username = '');
watch(() => form.email, () => errors.email = '');
watch(() => form.password, () => errors.password = '');

const validateForm = () => {
  let isValid = true;

  // Reset errors
  errors.username = '';
  errors.email = '';
  errors.password = '';

  if (!form.username) {
    errors.username = 'Username is required';
    isValid = false;
  }

  if (!form.email) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Email is invalid';
    isValid = false;
  }

  if (!form.password) {
    errors.password = 'Password is required';
    isValid = false;
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isValid = false;
  }

  return isValid;
};

const submit = async () => {
  if (validateForm()) {
    try {
      await register(form);
      success.value = 'Akun berhasil dibuat';
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  }
};
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
        <Alert v-if="success" type="success">
          {{ success }}
        </Alert>
        <div
          class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" @submit.prevent="submit">
            <h5 class="text-xl font-bold text-center text-gray-900 dark:text-white">Register</h5>
            <div>
              <FormLabel for="username">Nama</FormLabel>
              <FormInput class="mb-4" id="username" type="text" name="username" placeholder="Asep Setiawan"
                v-model="form.username" required>
              </FormInput>
              <Alert v-if="errors.username" type="danger" :message="errors.username"></Alert>
            </div>
            <div>
              <FormLabel for="email">Email</FormLabel>
              <FormInput class="mb-4" id="email" type="email" name="email" placeholder="asep@example.com"
                v-model="form.email" required>
              </FormInput>
              <Alert v-if="errors.email" type="danger" :message="errors.email"></Alert>
            </div>
            <div>
              <FormLabel for="password">Password</FormLabel>
              <FormInput class="mb-4" id="password" type="password" name="password" placeholder="••••••••"
                v-model="form.password" required>
              </FormInput>
              <Alert v-if="errors.password" type="danger" :message="errors.password"></Alert>
            </div>
            <Button class="w-full" type="submit">Daftar sekarang</Button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Sudah punya akun?
              <RouterLink :to="{ name: 'signin' }" class="text-blue-700 hover:underline dark:text-blue-500">
                Masuk sekarang
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
