import Home from './pages/Home.vue';
export default [
  { path: '/', component: Home },
  { path: '/:user', component: Home },
  { path: '/*', component: Home },
];
