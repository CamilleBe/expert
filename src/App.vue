<script setup>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app" class="w-screen overflow-x-hidden">
    <NavBar />
    
    <main class="pt-20 w-screen overflow-x-hidden">
      <router-view />
    </main>

    <!-- Footer commun à toutes les pages -->
    <Footer />
  </div>
</template>

<style>
@import './style.css';

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* Nous pouvons garder les effets de hover pour les logos */
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
