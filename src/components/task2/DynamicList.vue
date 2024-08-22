<template>
    <div contenteditable="container">
        <p>Динамічний список </p>
        <div>
            <v-btn 
                @click="addItemToList()" 
                :class="[isBlue ? blueStyle : underlineStyle]" 
            >            
                Додати елемент до списку
            </v-btn>
        </div>
        <div>
            <v-list>
                <v-list-item 
                    :style="{'background-color': itemStyle['background-color'], 'font-size': itemStyle['font-size'] + 'px'}"
                    v-for="item in itemsList"
                > 
                    {{ item }}
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DynamicList',
        data() {
            return  {
                numberItems: 0,
                itemsList: [],
                itemStyle: '',
                rundomStyle: [
                    {'background-color': 'red', 'font-size': 10},
                    {'background-color': 'green', 'font-size': 20},
                    {'background-color': 'yellow', 'font-size': 30},
                    {'background-color': 'pink', 'font-size': 40},
                ],
                isBlue: false,
                blueStyle: 'blue',
                underlineStyle: 'underline',
                isDarkTheme:false,
            }
        },  
        methods: {
            getItemStyle() {
                const randNumber = Math.floor(Math.random() * 3);
                this.itemStyle = this.rundomStyle[randNumber];
            },
            addItemToList() {
                this.numberItems++;
                let i = this.numberItems;
                this.itemsList[i-1] = `Item ${i}`;
                this.getItemStyle();
                this.isBlue = !this.isBlue;
            },
            switchTheme() {
                isDarkTheme = !isDarkTheme;
            }
        },
    }
</script>

<style scoped>
    .blue {
        background-color:blue;
        scale: 120%;
        transition-property: scale;
        transition-duration: 1s;

    }
    .underline {
        text-decoration: underline;
    }
</style>
