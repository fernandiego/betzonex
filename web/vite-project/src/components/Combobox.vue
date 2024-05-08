<template>
  <div class="combobox">
    <h2>{{ title }}</h2>
    <select>
      <option value="">Select a person</option>
      <option v-for="person in people" :key="person">{{ person }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import people from '../assets/people.json';

const props = defineProps({
  title: String,
});

const peopleList = ref(people.people);
</script>

<style scoped>
.combobox {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

select {
  width: 100%;
  padding: 5px;
}
</style>
