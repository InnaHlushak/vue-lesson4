<template>
    <div class="container">
        <h2>Component 1. Події користувача та Модифікатори подій</h2>
        <CatchTime/>
        <FormUser @get-info="showInfo"/>
        <p>Information from the form: {{ info }} </p>
    </div>
</template>

<script>
    import CatchTime from './CatchTime.vue';
    import FormUser from './FormUser.vue';

    export default {
        name: 'Component1',
        components: {
            CatchTime,
            FormUser,
        },
        data() {
            return  {
                info: '',
            }
        },  
        methods: {
            showInfo(data){
                this.info = data;
            }
        }
    }
</script>

