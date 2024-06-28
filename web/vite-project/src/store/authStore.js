// src/store/authStore.js
import { defineStore } from 'pinia';
import axios from '../axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    currentUser: null,
    token: null,
  }),
  actions: {
    async register(username, password) {
      try {
        await axios.post('/register', { username, password });
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
    async login(cpf, password) {
      try {
        const response = await axios.post('/login', { cpf, password });
        this.currentUser = response.data.user.cpf; // Assuming 'cpf' is the user identifier
        // this.token = response.data.token;
        // axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        console.error('Login failed:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
        throw error; // Re-throw the error to handle it in the component
      }
    },
    logout() {
      this.currentUser = null;
      this.token = null;
      delete axios.defaults.headers.common['Authorization'];
    },
    setCurrentUser(user) {
      this.currentUser = user;
    }
  },
  getters: {
    getCurrentUser: (state) => state.currentUser,
    isAuthenticated: (state) => !!state.currentUser,
  },
});
