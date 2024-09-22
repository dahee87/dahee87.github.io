import { createWebHistory, createRouter } from "vue-router";
import free_board from "@/contents/free_board.vue";
import jpa_test from "@/contents/jpa_test.vue";

const routes = [
    {
        path: "/free_board",
        name: "free_board",
        component: free_board,
    },
    {
        path: "/jpa_test",  // TestComponent.vue로 이동할 Path
        name: "jpa_test",  // router name
        component: jpa_test,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;