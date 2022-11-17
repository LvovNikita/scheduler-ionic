import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/TabsPage.vue';
import TemplateDetails from '../views/templates/TemplateDetails.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: TabsPage,
        children: [
            // {
            //     path: '',
            //     redirect: 'schedule',
            // },
            {
                name: 'schedule',
                path: 'schedule',
                component: () => import('@/views/scheduler/SchedulePage.vue'),
            },
            {
                name: 'templates',
                path: 'templates',
                component: () => import('@/views/templates/TemplatesPage.vue'),
            },
            {
                name: 'calendar',
                path: 'calendar',
                component: () => import('@/views/calendar/CalendarPage.vue'),
            },
            {
                name: 'templateDetails',
                path: 'templates/:id',
                component: TemplateDetails,
                props: true
            }
        ],
    },
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
