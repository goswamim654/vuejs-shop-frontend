<template>
   <v-container>
       <v-row v-if="loading">
                <v-col class="justify-center">
                    <div class="text-center">
                        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <h3 class="mt-3">Uploading Images ...</h3>  
                    </div>  
                </v-col>
            </v-row>
       <v-row v-else>
           <v-col cols="8" offset="2" lg="6" offset-lg="3">
               <v-form @submit.prevent="uploadImage">
                    <v-card>
                        <v-card-title class="justify-center">
                                <h4 class="blue--text accent-3" v-if="this.response_status"> {{this.response_data}} </h4>
                                <h4 class="red--text accent-3" v-if="!this.response_status"> {{this.response_data}} </h4>

                        </v-card-title>
                        <v-card-title class="justify-center">
                                <h2 class="display-1 green--text accent-3" > Upload Products </h2>
                        </v-card-title>

                            <v-card-text>
                                  <input type="file" multiple ref="fileInput"  @change="onFileSelected" hidden/>

                                    <v-file-input
                                        label="Select an Image"
                                        accept="image/png, image/jpeg, image/bmp"
                                        @click="$refs.fileInput.click()"
                                    />
                             
                                    <h3 v-if="this.uploadedImages.length > 3" class="red--text ml-5"> {{ this.max_files_error }} </h3>

                                <div class="text-center">
                                    <v-btn
                                        color="blue"
                                        class="ma-2 white--text"
                                        type="submit"
                                        :disabled="disable"
                                    >
                                        Upload
                                        <v-icon right dark >mdi-cloud-upload</v-icon>
                                    </v-btn>
                                </div>
                                <div id="preview">
                                    <div v-for="(image, key) in uploadedImages" :key="key" >
                                        <v-img ref="image" id="imgg" aspect-ratio="1.1" class="flex-grow-1" accept/> 
                                        <a href="#"  @click="deleteImage(key)" class="img_remove"> 
                                            <i class="fas fa-times"></i> 
                                        </a>                                                                          
                                    </div>
                                </div>                                
                        </v-card-text>
                    </v-card>
                </v-form>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProductImages',

    data() {
        return {
            selectedImages: null,
            uploadedImages: [],
            loading: false,
            url: null,
            response_status: null,
            response_data: null,
            max_files_error: "You have exceeded the maximum file uploads limit of 3. Please delete some files to continue",
            disable: false
        }
    },

  watch: {
      uploadedImages() {
            if(this.uploadedImages.length > 3) {
                this.disable = true
            }
            else {
                this.disable = false
            }
      }
  },

    methods: {
        deleteImage(value) {
            console.log(value)
            this.$delete(this.uploadedImages,value);

            for (let i = 0; i < this.uploadedImages.length; i++) {
                let reader = new FileReader();
                reader.onload = () => {
                    this.$refs.image[i].src = reader.result;
                    };
                reader.readAsDataURL(this.uploadedImages[i]);
            }
        },

        onFileSelected(event) {
            this.selectedImages = event.target.files;
            console.log(this.selectedImages);
            for(let i=0;i<this.selectedImages.length;i++) {
                this.uploadedImages.push(this.selectedImages[i]);
            }
            

            for (let i = 0; i < this.uploadedImages.length; i++) {
                let reader = new FileReader();
                reader.onload = () => {
                    this.$refs.image[i].src = reader.result;
                    };
                reader.readAsDataURL(this.uploadedImages[i]);
      }

        },

        async uploadImage() {
            const formdata = new FormData();
            this.loading = true;
            for(let i=0;i<this.uploadedImages.length;i++) {
                formdata.append('images[]',this.uploadedImages[i]);
            }      

            // const response = await axios.post('/prod_images',formdata)
            // if(response.status== 200) {
            //     this.loading = false;
            //     console.log("File Uploaded Successfully");
            // }
            axios.post('/prod_images',formdata)
            .then(response => {
                this.loading = false
                console.log(response);
                if (response.status == 200) {
                    this.uploadedImages = [];   //reset the array after every successfull image
                    this.response_status = 200;
                    this.response_data = "Your image has been successfully uploaded"
                }  
            })
            .catch(error => {
                console.log(error)
                this.uploadedImages = [];  
                this.response_status = null;
                this.loading = false
                this.response_data = error;
                
            })

        }   
    }
}
</script>

<style scoped>

#preview {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

#preview #imgg {
  width: 180px;
  border-radius: 3%;
}

#preview #imgg:hover + .img_remove{
        visibility: visible;
}

.img_remove:hover {
    visibility: visible;
}

.img_remove{
    visibility: hidden;
    position: relative;
    z-index: 1;
    color: red;
    font-size: 2.0em;
    width: 160px;
    height: 200px;
    top: -80%;
    left: 5%;
}


</style>