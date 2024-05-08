<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <Combobox title="Combobox 1" />
      <Combobox title="Combobox 2" />
      <!-- Add more combobox components as needed -->
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Combobox from './components/Combobox.vue';
</script>

<style>
/* Add any additional styling for the main content area here */
.content {
  margin-left: 200px; /* Adjust according to the width of your sidebar */
  padding: 20px;
}
</style>
