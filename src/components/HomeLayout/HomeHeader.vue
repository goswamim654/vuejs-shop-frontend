<template>
  <v-sheet
    :height=sheetHeight
  >
    <v-container>
        <v-row
            align="center"
            justify="center"
        >
            <!-- {{ sheetHeight }} -->
            <v-col>
              <h1 class="text-center display-4 hidden-sm-and-down"> Welcome to Your Shopping Site </h1>

              <h1 class="text-center display-2 hidden-md-and-up"> Welcome to Your Shopping Site </h1>
            </v-col>
        </v-row>
    </v-container>
  </v-sheet>
  <!-- <div>
  </div> -->
</template>


<script>
export default {

 computed: {
      sheetHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '200px'
          case 'sm': return '250px'
          case 'md': return '300px'
          case 'lg': return '300px'
          case 'xl': return '350px'
        }
        return '300px';
      },    
    }
}
</script>
