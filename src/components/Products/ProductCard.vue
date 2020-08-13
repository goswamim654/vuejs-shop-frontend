<template>  
<v-container> 
    <v-row class= "mt-4" justify="center">
    <v-col
        lg="3"
        md="8"
        sm="8"
        v-for="(product) in popularProducts"
        :key="product.index"
    >
        <v-card class="pa-2">
            <!-- {{ product.image_url }} -->
            <v-img height="230px" :src= 'product.image'/> 
            <v-card-title>
                {{ product.name }}
            </v-card-title>
            <v-card-subtitle class="text-left" >  
                Price - {{product.price}} <br>
                Available Quantity - {{product.inventory}}
            </v-card-subtitle>
            <v-card-actions>
                <v-btn color="primary" outlined>
                    <v-icon small left> fa-plus </v-icon>
                    Add To Cart
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>
</v-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ProductCard',
    computed: {
        ...mapGetters({
            popularProducts: 'productModule/getProducts'
        })
    }

}
</script>