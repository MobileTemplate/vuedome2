import User from '@/page/user/index.vue';
import Home from '@/page/home/index.vue';

const routes = [
    { path: "/user", name: 'user', component: User },
    { path: "/home", name: 'home', component: Home },
    { path: "*", component: Home }
];

export default routes;