<template>
  <div class="sidebar">
    <SideMenu :menuItems="menuItems" />
  </div>
</template>


<script setup>
import SideMenu from './SideMenu.vue';

const menuItems = [
  { id: 1, label: 'Home', url: '#' },
  { id: 2, label: 'Home 2', url: '#' },
  { id: 3, label: 'Home 2', url: '#' }
  // Add more menu items as needed
];
</script>


<style scoped>
.sidebar {
  width: 200px;
  background-color: #333;
  color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 50px; /* adjust as needed */
}
</style>
