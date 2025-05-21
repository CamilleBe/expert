<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center justify-center space-y-8">
        <div class="flex space-x-8">
          <a href="https://vite.dev" target="_blank" class="transform transition-transform hover:scale-110">
            <img src="/vite.svg" class="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank" class="transform transition-transform hover:scale-110">
            <img src="./assets/vue.svg" class="h-24 w-24" alt="Vue logo" />
          </a>
        </div>
        
        <div class="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <HelloWorld msg="Vite + Vue" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Nous pouvons garder les effets de hover pour les logos */
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
