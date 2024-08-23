<template>
    <div class="container">
        <p>Динамічна таблиця </p>
        <v-container max-width="50vw"> 
            <v-row >
                <v-col>
                    <v-text-field 
                        v-model="numberRow"
                        label="Кількість рядків:" 
                        min="1"
                        type="number"  
                    ></v-text-field>
                </v-col>
                <v-col>     
                    <v-text-field
                        v-model="numberCol"
                        label="Кількість стовпців:" 
                        min="1" 
                        type="number" 
                    ></v-text-field>
                </v-col>  
            </v-row>
        </v-container>

        <v-table class="border">
            <tbody>
                <tr v-for="row in  +numberRow " :key="row" >
                    <td v-for="col in  +numberCol" :key="col">
                        {{ row }}:{{ col }}
                    </td>
                </tr>
            </tbody>    
        </v-table>
    </div>
</template>

<script>
export default {
    name: 'DynamicTable',
    data() {
        return  {
            numberRow: 2,
            numberCol: 3,
        }
    }
}  
</script>

<style scoped>
 tr,td {
    border: 1px solid black;
    padding: 10px;
}
</style>
