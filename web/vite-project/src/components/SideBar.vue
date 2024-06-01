<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Bolão Olimpíadas De Paris 2024</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <SideMenu :menuItems="menuItems" />
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SideMenu from './SideMenu.vue';

const drawer = ref(false);

const menuItems = [
  { id: 1, label: 'Meus palpites', url: '#' },
  { id: 2, label: 'Ranking', url: '#' },
  { id: 3, label: 'Resultados', url: '#' },
  { id: 4, label: 'Programa de provas', url: '#' },
  // Add more menu items as needed
];
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #f5f5f5; /* Cor de fundo */
}

.v-app-bar {
  background-color: #1e8c19; /* Cor de fundo da barra de aplicativos */
  color: #ffffff; /* Cor do texto da barra de aplicativos */
}
</style>
