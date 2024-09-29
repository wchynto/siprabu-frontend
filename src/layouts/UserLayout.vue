<script setup>
import BaseLayout from './BaseLayout.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <BaseLayout>
    <Navbar></Navbar>
    <slot></slot>
    <Footer></Footer>
  </BaseLayout>
</template>