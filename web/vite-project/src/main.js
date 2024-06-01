import {createApp} from 'vue';
import App from './App.vue';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import store from './store'

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(store)
    .mount('#app');
