<template>

<v-row class="mt-12 pa-4 fill-height">
    <v-col lg="6" offset-lg="3" sm="8" offset-sm="2" class="pa-10">
            <v-row v-if="loading">
                <v-col class="justify-center">
                    <div class="text-center">
                        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <h3 class="mt-3">Loading...</h3>  
                    </div>
                                 
                </v-col>
            </v-row>
        <v-card v-else>
            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-row>
                        <v-col cols="12" lg="8" sm="10">
                            <v-card-title class="justify-center">
                               
                                <h2 class="display-1 green--text accent-3" > Sign In </h2>
                            </v-card-title>

                            <v-card-text>
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <v-form @submit.prevent="handleSubmit(loginUser)" id="loginForm">
                                        <ValidationProvider name="Email" rules="required|email" v-slot=" { errors } ">
                                            <v-text-field 
                                                label="Email" 
                                                prepend-icon="fa-envelope" 
                                                type="text"
                                                color="green"
                                                v-model="email"
                                            />
                                            <span> {{ errors[0] }} </span>
                                        </ValidationProvider>
                                        
                                        <ValidationProvider name="Password" rules="required|min:4|max:12" v-slot=" { errors } ">
                                            <v-text-field 
                                                label="Password" 
                                                prepend-icon="fa-lock" 
                                                type="password"
                                                color="green"
                                                class="mt-4"
                                                v-model="pass"
                                            />
                                            <span> {{ errors[0] }} </span>
                                        </ValidationProvider>
                                        <div class="text-center mt-3">
                                            <v-btn color="green" type="submit" class="px-6" outlined  ripple>
                                                Sign In
                                            </v-btn>
                                        </div>
                                    
                                    </v-form>
                                </ValidationObserver>
                            </v-card-text> 
                        </v-col>
                        <v-col lg="4" sm="12" class="green accent-3">
                            <v-card-text class="text-center mt-2 dark--text">
                                <h2 class="display-1"> Not a Registered User ?<br> </h2>
                                <v-btn dark rounded class="mt-10 px-6 py-5" @click="step++">
                                    Register
                                </v-btn>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-window-item>

                <v-window-item :value="2">
                    <v-row class="fill-height">
                        <v-col lg="4" class="teal accent-4 ">
                            <v-card-text class="text-center white--text">
                                <h2 class="display-1 mb-5"> Welcome Back !! </h2>
                                <h2> Please Login to stay connected </h2>

                            </v-card-text>
                            <div class="text-center mt-10">
                                <v-btn rounded class="dark--text px-7 py-5" @click="step--">
                                    Sign In
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="8">
                            <v-card-title class="justify-center">
                                <h2 class="display-1 teal--text accent-3" > Sign Up </h2>
                            </v-card-title>

                            <v-card-text>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <v-form @submit.prevent="handleSubmit(registerUser)" name="registerForm">
                                     <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }" name="Name">
                                        <v-text-field 
                                            label="Name" 
                                            prepend-icon="fa-user" 
                                            type="text"
                                            color="teal"
                                            v-model="name"
                                            name="name"

                                        />
                                        <span> {{ errors[0] }}</span>

                                    </ValidationProvider>
                                    
                                    <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">

                                        <v-text-field 
                                            label="Email" 
                                            prepend-icon="fa-envelope" 
                                            type="text"
                                            color="teal"
                                            class="mt-4"
                                            v-model="email"
                                        />
                                        <span> {{ errors[0] }}</span>
                                    
                                    </ValidationProvider>

                                    <ValidationProvider rules="required|min:4|max:12" v-slot="{ errors }" name="password">
                                        <v-text-field 
                                            label="Password" 
                                            prepend-icon="fa-lock" 
                                            type="password"
                                            color="teal"
                                            class="mt-4"
                                            v-model="pass"
                                        />
                                        <span> {{ errors[0] }}</span>
                                    </ValidationProvider>
                
                                   <ValidationProvider rules="required" v-slot="{ errors }" name="Address">
                                        <v-textarea
                                            label="Address"
                                            auto-grow
                                            rows="2"
                                            color="teal"
                                            prepend-icon="fa-map-marker-alt"
                                            class="mt-4"
                                            v-model="address"
                                        />
                                        <span> {{ errors[0] }}</span>
                                   </ValidationProvider>

                                   <ValidationProvider rules="required" v-slot="{ errors }" name="Phone Number">
                                        <v-text-field
                                            label="Phone Number" 
                                            prepend-icon="fa-mobile-alt" 
                                            type="text"
                                            color="green"
                                            class="mt-4"
                                            v-model="phone"
                                        />
                                         <span> {{ errors[0] }}</span>
                                   </ValidationProvider>
                                    
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Hobbies">
                                        <v-row>
                                            <v-col>
                                                <h3 class="dark--text"> Hobbies </h3>
                                            </v-col>
                                            <v-col lg="12" class="mt-n8 ml-10">
                                                <v-row>
                                                    <v-checkbox v-model="hobbies" class="mx-2" label="Coding" value="coding"></v-checkbox>
                                                    <v-checkbox v-model="hobbies" class="mx-2" label="Travelling" value="travel"></v-checkbox>
                                                    <v-checkbox v-model="hobbies" class="mx-2" label="Reading" value="reading"></v-checkbox>
                                                    <v-checkbox v-model="hobbies" class="mx-2" label="Gardening" value="gardening"></v-checkbox>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                        <span> {{ errors[0] }}</span>
                                   </ValidationProvider>

                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Gender">
                                          <h3 class="dark--text"> Gender </h3>
                                        <v-radio-group v-model="gender" row class="ml-10">
                                            <v-radio label="Male" value="male"></v-radio>
                                            <v-radio label="Female" value="female"></v-radio>
                                        </v-radio-group>
                                        <span> {{ errors[0] }}</span>
                                   </ValidationProvider>

                                    <input type="file" accept="image/*" ref="fileInput"  @change="onFileSelected" hidden/>
                                    <v-file-input 
                                        label="Select an Image " 
                                        @click="$refs.fileInput.click()"
                                    />
                                   
                                    <div id="preview">
                                        <img v-if = "url" :src="url" />
                                    </div>
<!--                                     
                                    <v-dialog v-model="errorDialog" max-width="300">
                                        <v-card>
                                            <v-card-text class="subheading">{{errorText}}</v-card-text>
                                            <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="errorDialog = false" flat>Got it!</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog> -->

                                    <div class="text-center mt-3">
                                        <v-btn color="teal" type="submit" class="px-8" outlined ripple>
                                            Sign Up
                                        </v-btn>
                                    </div>
                                  
                                </v-form>
                            </ValidationObserver>
                            </v-card-text> 
                        </v-col>
                    </v-row>
                </v-window-item>
            </v-window>

        </v-card>

    </v-col>
</v-row>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        source: String       
    },
    data() {
        return {
            step: 1,
            email: '',
            pass: '',
            name: '',
            address: '',
            date1: new Date().toISOString().substr(0, 10),
            phone: '',
            hobbies: [],
            gender: '',
            selectedFile: null,
            url: null,
            loading: false
        }
    },  

    methods: {
         onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.url = URL.createObjectURL(this.selectedFile);
        },

        ...mapActions({
            login: 'authModule/login_GenerateToken',
            signup: 'authModule/register'
        }),

        async loginUser() {
            let credentials = {
            username : this.email,
            password : this.pass
             }
            // this.loading = true;
            // await this.login(credentials)
            // .then(response => {
            //     this.loading= false
            //     this.$router.push('/products');
            // })
            this.loading = true;

            let response = await this.login(credentials)
            if(response.status == 200) {
                this.loading= false
                this.$router.push('/products');
            }
            else {
                this.loading= false
                this.$router.push('/');
            }
        },

        async registerUser() {
            // var form = document.getElementById('registerForm');
            const formdata = new FormData();
            formdata.append('username', this.name);
            formdata.append('password', this.pass);
            formdata.append('address', this.address);
            formdata.append('gender', this.gender);
            formdata.append('hobbies', this.hobbies);
            formdata.append('phone', this.phone);
            formdata.append('photo',this.selectedFile);
            formdata.append('email', this.email);



        //     let userData = {
        //     username: this.name,
        //     email: this.email,
        //     password: this.pass,
        //     address: this.address,
        //     gender: this.gender,
        //     hobbies: this.hobbies,
        //     phone: this.phone,
        //     fd: this.fd
        // }

        await this.signup(formdata)
        this.$router.push('/')
        }

       
    }
}
</script>

<style scoped>

#preview {
  display: flex;
}

#preview img {
  max-width: 35%;
  max-height: 30%;
}
</style>>
