<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  bgUrl: String,
});
</script>

<template>
  <section :style="{ backgroundImage: `url(${props.bgUrl})` }" class="bg-gray-400 bg-center bg-cover bg-blend-multiply">
    <div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
      <slot></slot>
    </div>
  </section>
</template>
