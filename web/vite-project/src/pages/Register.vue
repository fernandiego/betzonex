<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="400">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register">
          <v-text-field v-model="cpf" label="CPF" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary">Register</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../axios';
import { useAuthStore } from '../store/authStore';

const cpf = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();

const register = async () => {
  try {
    // Implement your registration logic here, e.g., sending data to the backend
    await authStore.register(cpf.value, password.value);
    router.push('/login');
  } catch (error) {
    console.error('Error registering:', error);
    alert('Registration failed. Please try again.');
  }
};
</script>

<style scoped>
.v-card {
  padding: 16px;
}
</style>
