<template>
  <select v-model = "atleta" @change="selectName">
    <option :value="'Escolha um atleta'">Escolha um atleta</option>
    <option v-for="person in people" :key="person.id" :value="person.name">{{ person.name }}</option>
  </select>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import peopleData from '../assets/people.json';

const props = defineProps({
  title: String
});
const atleta = ref("Escolha um atleta")
const emit = defineEmits(['selectName']);

const people = ref(peopleData.people);

function selectName(name) {
  emit('selectName', atleta.value);
}
</script>

<style scoped>
.combobox {
  margin-bottom: 20px;
}

select {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}
</style>
