<template>
    <div v-if="products.length" class="container">
        <h3>Компонент Products створено із застосуванням Axios та  API fakeStore </h3>  
        <PaginationLists  :products="products"/>
        <FilteredLists  :products="products"/>     
    </div>
</template>

<script>
import axiosInstance from "../../../services/axios";
import PaginationLists from "./PaginationLists.vue";
import FilteredLists from "./FilteredLists.vue";

export default {
    name: 'Products', 
    components: {
        PaginationLists,
        FilteredLists,
    },   
    data() {
        return  {
            products: [],
        }
    },
     //щоб цей запит спрацював коли компонент буде загружатися(монтуватися) треба звернутися до хукі життєвого циклу
     mounted() {
        this.getProducts();
    },
    methods: {
        //запит на безкоштовний API для створення карток товарів
        getProducts() {
            axiosInstance.get('/products')
            .then(response => {
                this.products = response.data;
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
}
</script>
