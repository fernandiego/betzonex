<template>
  <v-list>
    <v-list-item v-for="item in menuItems" :key="item.id" :to="item.url">
      <v-list-item-title>{{ item.label }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
