<template>
    <div class="container">
        <h2>Component 3.  Директива v-for </h2>
        <NestedLists />
        <DynamicTable />
        <Products />
    </div>
    
</template>

<script>
    import NestedLists from './NestedLists.vue';
    import DynamicTable from './DynamicTable.vue';
    import Products from './Products.vue';

    export default {
        name: 'Component3',
        components: {
            NestedLists,
            DynamicTable,
            Products,
        },
    }
</script>
