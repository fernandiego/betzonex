// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selections: {},
  },
  mutations: {
    SET_SELECTION(state, { event, athletes }) {
      state.selections[event] = athletes;
    },
  },
  actions: {
    updateSelection({ commit }, payload) {
      commit('SET_SELECTION', payload);
    },
  },
  getters: {
    getSelections: (state) => state.selections,
    getSelectionsByEvent: (state) => (event) => state.selections[event] || [],
  },
});
