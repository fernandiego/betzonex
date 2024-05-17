<template>
  <v-app>
    <v-navigation-drawer app>
      <SideMenu :menuItems="menuItems" />
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <!-- Main content goes here -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>


import SideMenu from "./SideMenu.vue";

const menuItems = [
  { id: 1, label: 'Escolhas', url: '#' },
  { id: 2, label: 'Ranking', url: '#' },
  { id: 3, label: 'Resultados', url: '#' },
  { id: 4, label: 'Programa de provas', url: '#' }
  // Add more menu items as needed
];
</script>
