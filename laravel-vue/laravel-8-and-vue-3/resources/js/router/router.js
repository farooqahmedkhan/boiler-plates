import { createRouter, createWebHistory } from "vue-router";

const _routes = [
    { 
        path: '/',
        component: import('./../components/landing.component.vue'),
        children: [
            
        ]
    }
];

var router = createRouter({
    routes: _routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;