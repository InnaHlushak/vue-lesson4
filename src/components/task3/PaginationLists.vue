<template>
    <div class="container">
        <p>Довгий список  об'єктів (товарів):</p>
        <div>
        <v-btn 
            @click="showList()" 
        >            
            Вивести список
        </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginationLists',
    props: ['products'],
    data() {
        return  {
            listProducts: this.products,
        }
    },
    computed: {
        getListProducts() {
            return this.listProducts;
        }
    },
    methods: {
        showList() {
            console.log(this.getListProducts);
        }
    },
}
</script>
