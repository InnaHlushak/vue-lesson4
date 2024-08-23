<template>
    <div class="container">
        <p>Довгий список  об'єктів (товарів):</p>
        <v-list rounded>
            <v-list-subheader>List of products:</v-list-subheader>
            <v-list-item
                v-for="(n, i) in subListProducts" :key="i"
            >
                <v-list-item>
                    <v-list-item-title v-text="n.title"></v-list-item-title>
                </v-list-item>
            </v-list-item>
            <v-pagination
                v-if="pages > 1"
                v-model="pagination.page"
                :length="pages"
            ></v-pagination>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'PaginationLists',
    props: ['products'],
    data() {
        return  {
            listProducts: this.products,
            pagination: {
                page: 1,
                total: this.products.length,
                perPage: 5,
            },
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.listProducts.length / this.pagination.perPage);
        },
        subListProducts() {
            return this.listProducts.slice((this.pagination.page-1)*this.pagination.perPage, this.pagination.page * this.pagination.perPage)
        },
    },
}
</script>
