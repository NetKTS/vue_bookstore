import { createWebHistory , createRouter } from 'vue-router'

const routes = [
    {
        path:'/',
        alias:"/tutorials",
        name:"tutorials",
        component:() => import("./components/TutorialList"),
    },
    {
        path:"/add",
        name:"add",
        component:() => import("./components/AddTutorial.vue")
    },
    {
        path:"/tutorials/:id",
        name:"tutorial-details",
        component:() => import("./components/Tutorial.vue")
    },
    {
        path:"/publish",
        name:"tutorial-publish",
        component:() => import("./components/published.vue")
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;