import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Noticia from './components/noticia/Noticia.vue'

export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Home' },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro' },
    { path: '/cadastro/:id', name: 'editar', component: Cadastro, titulo: 'Editar' },
    { path: '/noticia/:id', name: 'noticia', component: Noticia, titulo: 'Noticia' },
    { path: '*', component: Home }
];