<template>
    <div class="lightbox">
        <img :src="this.image_url+'/'+this.img_name" />    

            <div class="lightbox-close">
                <v-icon @click.self="closeBox" class="red--text"> mdi-close </v-icon>
            </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            image_url: "http://127.0.0.1:8000/storage/uploads/products/Original",
            img_name: this.$route.params.imageID,

        }
    },

    methods: {
        closeBox() {
              this.$router.push('/gallery');
        }
    }
}
</script>

<style scoped>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;     /* The viewport is divided into 3 columns(using the 3 values) and how much space each column will take is decided by the fr values  */
    grid-gap: 2rem;
}  

.lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 2;
}  



.lightbox-close {
    position:absolute;
    top: 2%;
    right: 2%;
    display: inline-block;
    padding: 0.3rem;
    background-color: #FFFFFF;
    display: inline-block;
}

</style>