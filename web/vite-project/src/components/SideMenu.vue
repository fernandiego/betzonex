<template>
  <ul>
    <li v-for="item in props.menuItems" :key="item.id">
      <a :href="item.url">{{ item.label }}</a>
    </li>
  </ul>
</template>


<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
</script>


<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
