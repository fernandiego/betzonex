// src/stores/selectionStore.js
import { defineStore } from 'pinia';

export const useSelectionStore = defineStore('selectionStore', {
  state: () => ({
    selections: JSON.parse(localStorage.getItem('selections') || '{}'),
  }),
  actions: {
    setSelection(event, athletes) {
      this.selections[event] = athletes;
      this.saveSelections();
    },
    updateSelection(payload) {
      this.setSelection(payload.event, payload.athletes);
    },
    saveSelections() {
      localStorage.setItem('selections', JSON.stringify(this.selections));
    },
    deleteSelections(event) {
      delete this.selections[event];
      this.saveSelections();
    },
    loadSelections() {
      this.selections = JSON.parse(localStorage.getItem('selections') || '{}');
    },
  },
  getters: {
    getSelections: (state) => state.selections,
    getSelectionsByEvent: (state) => (event) => state.selections[event] || [],
  },
});
