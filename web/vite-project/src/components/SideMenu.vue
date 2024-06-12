<template>
  <v-list>
    <v-list-item
      v-for="item in menuItems"
      :key="item.id"
      :to="item.url"
      link
      class="menu-item"
      :class="{ active: isActive(item.url) }"
    >
      <v-list-item-title>{{ item.label }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

const isActive = (url) => {
  return route.path === url;
};
</script>

<style scoped>
.menu-item {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-item:hover {
  background-color: #93a5bf; /* Light grey background on hover */
}

.menu-item.active {
  background-color: #474a47; /* Green background for active item */
  color: #ffffff; /* White text color for active item */
}

.menu-item.active:hover {
  background-color: #242e24; /* Darker green background on hover when active */
}
</style>
