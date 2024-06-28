// src/store/userStore.js
import { defineStore } from 'pinia';
import axios from '../axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    currentUser: null,
    users: [],
  }),
  actions: {
    async loadUsers() {
      try {
        const response = await axios.get('/users');
        this.users = response.data.users;
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    },
    async updateUserPoints(userName, points) {
      try {
        const user = this.users.find(user => user.name === userName);
        if (user) {
          user.points = points;
          await axios.put(`/users/${user.id}`, { points });
        }
      } catch (error) {
        console.error('Failed to update user points:', error);
      }
    },
    getCurrentUser() {
      return this.currentUser;
    },
  },
  getters: {
    getUsers: (state) => state.users,
    isAuthenticated: (state) => !!state.currentUser,
  },
});
