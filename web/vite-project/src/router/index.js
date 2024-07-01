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
    {path: '/register', name: 'Register', component: Register},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const userStore = useAuthStore();
    console.log('Navigating to:', to.name, 'User authenticated:', userStore.isAuthenticated);

    // Allow navigation to the register page without authentication
    if (to.name === 'Register') {
        next();
    } else if (to.name !== 'Login' && !userStore.isAuthenticated) {
        // Redirect to the login page if not authenticated and trying to access any other page
        next({ name: 'Login' });
    } else {
        // Otherwise, allow navigation to the requested page
        next();
    }
});




export default router;
