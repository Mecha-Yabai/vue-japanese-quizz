<template>
    <div class="min-h-screen bg-slate-800 text-white text-center">
        <header class="p-6 mb-8">
            <h1 class="text-2xl font-bold uppercase">Hiragana Quiz</h1>
            <div>
                <p>{{ streak }} / {{ maxStreak }}</p>
            </div>
        </header>

        <div class="text-9xl font-bold mb-8">
            <p>{{ currentHiragana }}</p>
        </div>

        <div class="mb-8">
            <form @submit.prevent="onSubmit()">
                <input
                    type="text"
                    v-model="answer"
                    class="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2"
                />
            </form>
        </div>
        <div v-if="error">
            <p class="text-red-500">{{ error }}</p>
        </div>
    </div>
</template>

<script>
import hiragana from "../data/hiragana";
export default {
    data() {
        return {
            streak: parseInt(localStorage.getItem("streak")) || 0,
            maxStreak: parseInt(localStorage.getItem("maxStreak")) || 0,
            error: "",
            answer: "",
            currentIndex: 0,
            hiragana,
        };
    },
    created() {
        this.setRandomHiragana();
    },
    methods: {
        setRandomHiragana() {
            this.currentIndex = Math.floor(Math.random() * hiragana.length);
        },
        onSubmit() {
            if (
                this.answer.toLowerCase() ===
                hiragana[this.currentIndex].romanji
            ) {
                this.streak = this.streak + 1;
                this.maxStreak = Math.max(this.streak, this.maxStreak);
                this.error = "";
                localStorage.setItem("streak", this.streak + 1);
                localStorage.setItem(
                    "maxStreak",
                    Math.max(this.streak, this.maxStreak)
                );
            } else {
                const h = hiragana[this.currentIndex].hiragana;
                const r = hiragana[this.currentIndex].romanji;
                this.error = `Wrong! The correct answer for ${h} is ${r}`;
                this.streak = 0;
                localStorage.setItem("streak", 0);
            }

            this.answer = "";
            this.setRandomHiragana();
        },
    },
    computed: {
        currentHiragana() {
            return hiragana[this.currentIndex].hiragana;
        },
    },
};
</script>
