<template>
    <div class="container">
        <h2>Component 2. Динамічні Стилі </h2>
        <DynamicList />
        <p>Перемикання тем, яке динамічно змінює стилі всього додатку між темною та світлою темами</p>
        <div>
            <v-btn block
                @click="switchTheme()" 
            >            
                Світла/Темна
            </v-btn>
        </div>
    </div>
</template>

<script>
    import DynamicList from './DynamicList.vue';

    export default {
        name: 'Component2',
        components: {
            DynamicList,
        },
        data() {
            return  {
                isDarkTheme: false,
            }
        },  
        methods: {
            switchTheme() {
                this.isDarkTheme = !this.isDarkTheme;
                this.$emit('get-theme', this.isDarkTheme)
            },
        }
    }
</script>
