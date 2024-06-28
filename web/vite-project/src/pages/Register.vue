<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="400">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form ref="registerForm" @submit.prevent="register">
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary">Register</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/authStore';

const username = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();

const register = async () => {
  try {
    await authStore.register(username.value, password.value);
    alert('User registered successfully');
    await router.push('/login');
  } catch (error) {
    alert('Registration failed');
  }
};
</script>

<style scoped>
.v-card {
  padding: 16px;
}
</style>
