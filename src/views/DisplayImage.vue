<template>
    <div>
        <Gallery />
        <Photo />
    </div>
   
</template>

<script>
import Gallery from '@/components/Products/Gallery.vue'
import Photo from "@/components/Products/Photo.vue";

export default {
    name: "DisplayImage",

    components: {
        Photo, Gallery
    },
}
</script>