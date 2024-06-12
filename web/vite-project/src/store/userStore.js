// src/store/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    currentUser: null,
    users: [],
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user;
    },
    getCurrentUser() {
      return this.currentUser;
    },
    async loadUsers() {
      try {
        const response = await fetch('/assets/users.json');
        const data = await response.json();
        this.users = data.users;
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    },
    updateUserPoints(userName, points) {
      const user = this.users.find(user => user.name === userName);
      if (user) {
        user.points = points;
      }
    },
  },
  getters: {
    getUsers: (state) => state.users,
    isAuthenticated: (state) => !!state.currentUser,
  },
});
