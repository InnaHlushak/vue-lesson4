<template>
    <div class="wrapper" :class="{dark: mainTheme}">
        <h1>Доманнє завдання 4 </h1>
        <Component1 />
        <Component2  @get-theme="getTheme" />
        <Component3 />
    </div>
</template>

<script>
    import Component1 from './components/task1/Component1.vue'
    import Component2 from './components/task2/Component2.vue'
    import Component3 from './components/task3/Component3.vue'

    export default {
        name: 'App',
        components: {
            Component1,
            Component2,
            Component3,
        },
        data() {
            return {
                mainTheme: '',
                dark: 'dark',
            }
        },
        methods: {
            getTheme(theme) {
                this.mainTheme = theme;
            }
        },
    }
</script>

<style scoped>
    .dark {
        background-color: black;
        color: white;
    }

    .wrapper {
        border: 1px solid #0df886;
        padding: 0 20px;
    }

    .wrapper h1{
        color: green;
    }

</style>
