import * as VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import HiraganaQuiz from "@/components/HiraganaQuiz.vue";
import KatakanaQuiz from "@/components/KatakanaQuiz.vue";

const routes = [
    { path: "/", name : "Home", component: Home },
    { path: "/hiragana", name : "Hiragana", component: HiraganaQuiz },
    { path: "/katakana", name : "Katakana", component: KatakanaQuiz },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
