// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../store/userStore.js';
import MeusPalpites from '../pages/MeusPalpites.vue';
import RankingPage from '../pages/Ranking.vue';
import LoginPage from '../pages/LoginPage.vue';

const routes = [
  { path: '/', name: 'MeusPalpites', component: MeusPalpites },
  { path: '/ranking', name: 'Ranking', component: RankingPage },
  { path: '/login', name: 'Login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.name !== 'Login' && !userStore.currentUser) next({ name: 'Login' });
  else next();
});

export default router;
