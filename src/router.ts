import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import { RouterOptions, RouteConfig, RouterMode } from 'vue-router/types/router';

Vue.use(Router);

const routerOptions: RouterOptions = {};
const routes: RouteConfig[] = [
   {
    path: '/',
    name: 'home',
    component: Home,
  },
];
const mode: RouterMode = 'history';

routerOptions.routes = routes;
routerOptions.mode = mode;

export default new Router(routerOptions);
