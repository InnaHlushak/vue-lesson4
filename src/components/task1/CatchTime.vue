<template>
    <div class="container">
        <v-container>
            <v-row>
                <v-col>
                    <v-btn style="btn-primary" @click="getTime">
                        Catch Time!
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn style="btn-primary" v-on:[modifier]="(modifier === 'mouseover') ? addTime() : deleteTime()">
                        Add/Delete Time
                    </v-btn>
                </v-col>
                <v-col>
                    Number: {{numberTime}}
                </v-col>
            </v-row>
            <v-row v-for="(item,index) in time" :key="index">
                <v-col >
                    <b>Time:</b> {{item}}
                </v-col>                 
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CatchTime',
    data() {
        return  {
            time: [],
            numberTime: 0,
            modifier: 'mouseover',
        }
    },
    methods: {
        getTime() {
            const date = new Date();
            this.time.push(date);
            this.numberTime++;
        },
        addTime() {                   
            const date = new Date();
            this.time.push(date); 
            this.numberTime++;
            this.modifier = 'mouseout'      
        },
        deleteTime() {     
            this.time.splice(0,1);
            this.numberTime--;
            this.modifier = 'mouseover';
        },
    },
    
}
</script>
