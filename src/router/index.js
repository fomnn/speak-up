import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './../pages/HomePage.vue';
import Konsultasi from './../pages/Konsultasi.vue';
import Masuk from './../pages/Masuk.vue';
import Daftar from './../pages/Daftar.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage,
        },
        {
            path: '/konsultasi',
            name: 'konsultasi',
            component: Konsultasi,
        },
        {
            path: '/masuk',
            name: 'Masuk',
            component: Masuk,
        },
        {
            path: '/daftar',
            name: 'daftar',
            component: Daftar,
        },
    ]
})
// export default createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: '/',
//             name: 'home-page',
//             component: HomePage,
//         },
//         {
//             path: '/konsultasi',
//             name: 'konsultasi',
//             component: Konsultasi,
//         },
//         {
//             path: '/masuk',
//             name: 'Masuk',
//             component: Masuk,
//         },
//         {
//             path: '/daftar',
//             name: 'daftar',
//             component: Daftar,
//         },
//     ]
// })