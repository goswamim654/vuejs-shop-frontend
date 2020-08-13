<template>
<v-container>
    <div v-if="this.countImages >  0" class="gallery">           
        <div v-for="(imageName,index) in src" :key="index" class="gallery-panel">
            <router-link :to="`/image/${imageName}`">
                <img :src = "image_url + '/'+imageName" /> 
            </router-link>
        </div>
    </div>   
</v-container>
    

</template>

<script>
import axios from 'axios';

export default {
    name: 'Gallery',
    
    data() {
        return {
            src : [],
            isEmpty: false,
            len: 0,
            image_url: "http://127.0.0.1:8000/storage/uploads/products/Thumbnail",
        }
    },

    mounted() {
        // console.log("Its Mounted ");
           axios.get('/getImages')
           .then(response => {
                // console.log(response);
                this.src = response.data;
                // this.base_url = response.config.baseURL;
                // console.log(this.image_name);
           })
        },
    
    computed: {
        countImages() {
            return this.src.length;
            // if(this.src.length() > 0) 
            // {
            //     this.isEmpty = false
            //     return this.isEmpty
            // }
           
        }
    }
}
</script>

<style scoped>

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 0.7rem;
    margin: 5rem auto;
    padding: 0 5rem;
    /* border: 3px solid red; */
}  

.gallery-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
}
</style>