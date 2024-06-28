<template>
  <div>
    <v-app-bar v-if="showMenu" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Bolão Olimpíadas De Paris 2024</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout" class="logout-btn" rounded>Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="showMenu" v-model="drawer" app>
      <SideMenu :menuItems="menuItems" />
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // Add useRoute
import { useAuthStore } from '../store/authStore.js'; // Adjust the path as needed
import SideMenu from './SideMenu.vue';

const drawer = ref(false);

const menuItems = [
  { id: 1, label: 'Meus palpites', url: '/' },
  { id: 2, label: 'Ranking', url: '/ranking' },
  { id: 3, label: 'Resultados', url: '#' },
  { id: 4, label: 'Programa de provas', url: '#' },
];

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const showMenu = computed(() => route.name !== 'Login'); // Conditionally show menu

const logout = () => {
  authStore.setCurrentUser(null);
  router.push('/login'); // Adjust the path as needed
};
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #f5f5f5; /* Cor de fundo */
}

.v-app-bar {
  background-color: #1e8c19; /* Cor de fundo da barra de aplicativos */
  color: #ffffff; /* Cor do texto da barra de aplicativos */
}

.logout-btn {
  background-color: #ff5722;
  color: #ffffff;
  border-radius: 50px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #e64a19;
}
</style>
