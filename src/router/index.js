import { createWebHistory, createRouter } from "vue-router";
import lay_out from "@/components/LayOut.vue"
import free_board from "@/contents/FreeBoard.vue";
import jpa_test from "@/contents/JpaTest.vue";
import dash_board from "@/contents/DashBoard.vue";
import log_in from "@/contents/LogIn.vue"

const routes = [
    {
        path: "/",
        name: "log_in",
        component: log_in,
    },
    {
        path: "/",
        name: "lay_out",
        component: lay_out,
        children:[
            {
                path: "/dash_board",
                name: "dash_board",
                component: dash_board,
            },
            {
                path: "/free_board",
                name: "free_board",
                component: free_board,
            },
            {
                path: "/jpa_test",
                name: "jpa_test",
                component: jpa_test,
            },
        ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;