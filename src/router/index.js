import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        meta: {
            title: '首页'
        },
        component: () => import('./../views/Home/index.vue'),
        redirect: { name: "Welcome" },
        children: [
            {
                name: 'Welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎页'
                },
                component: () => import('./../views/Home/Welcome/index.vue'),
            },
            {
                name: 'Login',
                path: '/login',
                meta: {
                    title: '登陆'
                },
                component: () => import('./../views/Login/index.vue'
                ),
            },
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router