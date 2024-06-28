// src/router/index.js
import {createRouter, createWebHistory} from 'vue-router';
import {useUserStore} from '../store/userStore.js';
import MeusPalpites from '../pages/MeusPalpites.vue';
import RankingPage from '../pages/Ranking.vue';
import LoginPage from '../pages/LoginPage.vue';
import Register from "../pages/Register.vue";
import {useAuthStore} from "../store/authStore.js";

const routes = [
    {path: '/', name: 'MeusPalpites', component: MeusPalpites},
    {path: '/ranking', name: 'Ranking', component: RankingPage},
    {path: '/login', name: 'Login', component: LoginPage},
    {path: '/register', component: Register},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const userStore = useAuthStore();
    console.log(userStore.isAuthenticated)
    if (to.name !== 'Login' && !userStore.isAuthenticated) next({name: 'Login'});
    else next();
});

export default router;
