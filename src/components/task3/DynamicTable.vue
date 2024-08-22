<template>
    <div class="container">
        <p>Динамічна таблиця </p>
        <v-container max-width="50vw"> 
            <v-row >
                <v-col>
                    <v-text-field 
                        label="Кількість рядків:" 
                        placeholder="1"  
                        @input="numberRow=$event.target.value"
                    ></v-text-field>
                </v-col>
                <v-col>     
                    <v-text-field
                        label="Кількість стовпців:" 
                        placeholder="1"  
                        @input="numberCol=$event.target.value"
                    ></v-text-field>
                </v-col>  
            </v-row>
        </v-container>

        <v-table class="border">
                <tr v-for="(row,i) in  inputedSize.row " :key="i" >
                    <td v-for="(col,j) in  inputedSize.col" :key="j">
                        ok
                    </td>
                </tr>
        </v-table>
    </div>
</template>

<script>

    export default {
        name: 'DynamicTable',
        data() {
            return  {
                numberRow: '',
                numberCol: '',
            }
        },  
        computed: {
            inputedSize () {
                const size = {
                    row: this.numberRow,
                    col: this.numberCol,
                }
                console.log(size.row,size.col);
                return size;
            },
        },
        //налаштовано наступне: реактивні дані, обчислювані властивості, методи та спостерігачі. 
        //Однак етап монтування ще не розпочато
        create() {
            this.inputedSize;
        }
    }
</script>

<style scoped>
 tr,td {
  border: 1px solid black;
  padding: 10px;
}
</style>
