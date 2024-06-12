// src/stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    currentUser: null,
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user;
    },
    logout() {
      this.currentUser = null;
    },
  },
  getters: {
    getCurrentUser: (state) => state.currentUser,
    isAuthenticated: (state) => !!state.currentUser,
  },
});
