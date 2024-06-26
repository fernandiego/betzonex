import {createApp} from 'vue';
import App from './App.vue';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {createPinia} from "pinia";
import router from "./router/index.js";

const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(pinia)
    .use(router)
    .mount('#app');
