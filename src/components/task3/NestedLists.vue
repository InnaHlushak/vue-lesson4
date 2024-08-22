<template>
    <div class="container">
        <p>Cписок об'єктів, де кожен об'єкт має вкладений список:</p>
        <div>
            <ul id="array-rendering">
                <li v-for="item in list" :key="item.id" >
                    Sublist {{ item.id }}:
                    <li v-for="(element,i) in item.sublist" :key="i" class="inline">
                        {{ element + ', '}}
                    </li>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NestedLists',
    data() {
        return  {
            list: [
                {id:1, sublist: ['Item1', 'Item2', 'Item3'] },
                {id:2, sublist: ['Item4', 'Item5']},
                {id:3, sublist: ['Item6', 'Item7', 'Item8']},
            ],
        }
    },
}
</script>

<style scoped>
    .inline {
        display: inline;
    }
</style>
