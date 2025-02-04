<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const viewMode = ref('table');

function toggleViewMode() {
  viewMode.value = viewMode.value === 'table' ? 'card' : 'table';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
</script>

<template>
  <Header @toggle-view="toggleViewMode" @toggle-dark-mode="toggleDarkMode" />
  <RouterView :viewMode="viewMode" />
  <Footer />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.dark-mode {
  background-color: #1a202c;
  color: white;
}
</style>