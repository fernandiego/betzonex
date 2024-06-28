<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="400">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="cpf" label="CPF" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
        <v-divider class="my-3"></v-divider>
        <v-btn @click="goToRegister" color="secondary">Register</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from '../axios';
import {useAuthStore} from '../store/authStore';

const cpf = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
  try {
    await authStore.login(cpf.value, password.value);
    router.push('/');
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed. Please check your credentials.');
  }
};

const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.v-card {
  padding: 16px;
}
</style>
