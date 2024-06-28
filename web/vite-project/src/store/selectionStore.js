// src/store/selectionStore.js
import { defineStore } from 'pinia';
import axios from '../axios';

export const useSelectionStore = defineStore('selectionStore', {
  state: () => ({
    selections: {},
  }),
  actions: {
    async saveSelections() {
      try {
        await axios.post('/predictions', { selections: this.selections });
      } catch (error) {
        console.error('Failed to save selections:', error);
      }
    },
    async loadSelections() {
      try {
        const response = await axios.get('/predictions');
        this.selections = response.data.selections;
      } catch (error) {
        console.error('Failed to load selections:', error);
      }
    },
    setSelection(event, athletes) {
      this.selections[event] = athletes;
      this.saveSelections();
    },
    updateSelection(payload) {
      this.setSelection(payload.event, payload.athletes);
    },
    deleteSelections(event) {
      delete this.selections[event];
      this.saveSelections();
    },
  },
  getters: {
    getSelections: (state) => state.selections,
    getSelectionsByEvent: (state) => (event) => state.selections[event] || [],
  },
});
