<script setup>
import BaseLayout from './BaseLayout.vue';
import Navbar from '@/components/Admin/Navbar.vue';
import Sidebar from '@/components/Admin/Sidebar.vue';
</script>

<template>
  <BaseLayout>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
      <div class="p-4 mt-14">
        <slot></slot>
      </div>
    </div>
  </BaseLayout>
</template>