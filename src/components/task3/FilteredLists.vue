<template>
    <div class="container">
        <p>Відфільтрований список елементів:</p>
        <v-list lines="one"> 
            <template 
                v-for="(n, i) in listProducts" :key="i"
            > 
                <v-list-item 
                    v-if="n.category === 'jewelery'"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="n.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="n.category"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'FilteredLists',
    props: ['products'],
    data() {
        return  {
            listProducts: this.products,
        }
    },  
}
</script>
