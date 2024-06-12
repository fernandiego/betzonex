<template>
  <v-container>
    <v-card>
      <v-card-title>Ranking</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
        >
          <template v-slot:item.points="{ item }">
            <span :class="getPointsClass(item.points)">{{ item.points }}</span>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/userStore.js';

const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Points', value: 'points' },
];

const userStore = useUserStore();
const users = ref([]);

onMounted(() => {
  users.value = userStore.getUsers;
});

const getPointsClass = (points) => {
  if (points >= 50) return 'text-success';
  if (points >= 20) return 'text-warning';
  return 'text-error';
};
</script>

<style scoped>
.text-success {
  color: green;
}
.text-warning {
  color: orange;
}
.text-error {
  color: red;
}
</style>
