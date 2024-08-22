<template>
    <div class="container">
        <v-sheet class="mx-auto" width="350">
            <v-form @submit.prevent = "validateForm">
                <v-text-field
                    v-model="firstName"
                    label="First name"
                ></v-text-field>
                <span class="error">{{ errorFirstName }}</span>
                    
                <v-text-field
                    v-model="lastName"
                    label="Last name"
                ></v-text-field>
                <span class="error">{{ errorLastName }}</span>

                <v-text-field
                    v-model="email"
                    placeholder="text@text.text"
                    label="E-mail"
                ></v-text-field>
                <span class="error">{{ errorEmail }}</span>

                <v-btn class="mt-2" type="submit" block>Submit</v-btn>
                <v-btn class="mt-2" type="submit" block @click="getInfo">View Info</v-btn>           
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        name: 'FormUser',        
        data() {
            return  {
                firstName: '',                
                lastName: '',
                email: '',
                errorFirstName: '',                
                errorLastName: '',
                errorEmail: '',
                isValidForm: false,
            }
        },
        methods: {
            validateForm() {   
                const nameRegex = /[0-9]/;
                if (this.firstName.trim().length < 3 || nameRegex.test(this.firstName)) {
                    this.errorFirstName = 'First name must be at least 3 characters and can not contain digits';
                    return;
                } 
                this.errorFirstName = '';

                if (!this.lastName.trim() || this.lastName.trim().length > 15 || nameRegex.test(this.lastName)) {
                    this.errorLastName = 'Last name must be 15 characters or less and can not contain digits';
                    return;
                }
                this.errorLastName = '';

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
                if(!emailRegex.test(this.email)) {
                    this.errorEmail = 'Must be a valid e-mail';
                    return;
                }

                this.errorEmail= '';
                this.isValidForm = true;
                alert('Data saved and sent');
            },
            getInfo() {
                if(this.isValidForm) {
                    this.$emit('get-info',{ 
                        'first name': this.firstName,
                        'last name': this.lastName,
                        email: this.email
                    })
                }
            },
        }  
    }
</script>

<style scoped>
    .error {
        color:red;
    }    
</style>
