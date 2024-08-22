import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

//Bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

//Vuetyfi
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify( {
    components,
    directives,
})

//Axios
import axios from 'axios';

createApp(App).use(vuetify).mount('#app');
//createApp(App).mount('#app') 
