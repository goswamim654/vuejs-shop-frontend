<template>
   <v-container mb-12>
       <v-row
        justify="center"
        class="text-center"
       >
           <v-col>
               <h3 class="display-1"> Popular Products </h3>
           </v-col>
           <ProductCard />
       </v-row>
   </v-container>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';

export default {
components: {
    ProductCard
}   
}
</script>


