import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css';
import './assets/css/tituloPrincipal.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import VeeValidate from 'vee-validate';


Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.use(VeeValidate);

const router = new VueRouter({
    routes
});



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})