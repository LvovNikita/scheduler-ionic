import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/schedule',
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/schedule',
            },
            {
                path: 'schedule',
                component: () => import('@/views/SchedulePage.vue'),
            },
            {
                path: 'templates',
                component: () => import('@/views/templates/TemplatesPage.vue'),
            },
            {
                path: 'calendar',
                component: () => import('@/views/CalendarPage.vue'),
            },
        ],
    },
    {
        path: '/new-template',
        component: () => import('@/views/templates/NewTemplate.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
