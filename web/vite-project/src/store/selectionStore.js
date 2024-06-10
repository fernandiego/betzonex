// src/stores/selectionStore.js
import { defineStore } from 'pinia';

export const useSelectionStore = defineStore('selectionStore', {
  state: () => ({
    selections: {},
  }),
  actions: {
    setSelection(event, athletes) {
      this.selections[event] = athletes;
    },
    updateSelection(payload) {
      this.setSelection(payload.event, payload.athletes);
    },
  },
  getters: {
    getSelections: (state) => state.selections,
    getSelectionsByEvent: (state) => (event) => state.selections[event] || [],
  },
});
