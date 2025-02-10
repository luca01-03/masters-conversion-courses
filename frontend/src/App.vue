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
  <div class="app-container">
    <Header @toggle-view="toggleViewMode" @toggle-dark-mode="toggleDarkMode" />
    <div class="main-content">
      <RouterView :viewMode="viewMode" />
    </div>
  <Footer />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.dark-mode {
  background-color: #1a202c;
  color: white;
}
</style>