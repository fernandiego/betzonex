<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="400">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form ref="loginForm" @submit.prevent="login">
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
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/userStore.js';

const username = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  userStore.loadUsers();
});

const login = async () => {
  try {
    const user = userStore.getUsers.find(u => u.name === username.value && u.password === password.value);

    if (user) {
      userStore.setCurrentUser(user);
      await router.push('/');
    } else {
      console.error('User not found');
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};
</script>

<style scoped>
.v-card {
  padding: 16px;
}
</style>
