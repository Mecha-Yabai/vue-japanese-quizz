<template>
    <div class="min-h-screen bg-slate-800 text-white text-center px-4 sm:px-16">
        <header class="p-6 mb-8">
            <h1 class="text-2xl font-bold uppercase">
                Practice your japanese !
            </h1>
        </header>
        <div
            class="min-h-[inherit] flex sm:inline-flex sm:flex-wrap items-center flex-col sm:flex-row"
        >
            <div v-for="exercice in exercices" :key="exercice.level">
                <router-link :to="{ name: exercice.name }">
                    <div
                        class="p-6 my-2 sm:my-0 lg:mx-10 border-white border-2 hover:border-red-500 hover:shadow-sm hover:shadow-black cursor-pointer w-52 h-52"
                    >
                        <span class="flex flex-col p-4">
                            {{ exercice.level }}
                        </span>
                        <span
                            class="flex flex-col text-xl font-bold mt-2 uppercase"
                            >{{ exercice.type }}</span
                        >
                        <button
                            type="button"
                            class="mt-4 inline-block rounded bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-red-400 transition duration-150 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-0 active:bg-red-700"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Exercice
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        exercices() {
            return [
                { level: "Beginner", type: "Hiragana", name: "Hiragana" },
                {
                    level: "Intermediate",
                    type: "Katakana",
                    name: "Katakana",
                },
                // { level: "Advanced", type: "Kanji (JLPT 5)", name: "" },
            ];
        },
    },
};
</script>
