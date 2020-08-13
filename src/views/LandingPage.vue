<template>
    <v-content id="landing">
    <v-row align="center" justify="center">
      <v-col class="text-center" lg="12" style="margin-top: 10%">
        <h1 class="display-4 font-weight-thin mb-4">Shop App </h1>
        <h4 class="display-1">Items at your Doorstep</h4>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #landing {
      height: 95vh;
      width: 100%;
      background-image: url("../assets/images/home.jpg");
      background-size: cover;
      background-position: center;       
      overflow-y: hidden; 
    }
</style>