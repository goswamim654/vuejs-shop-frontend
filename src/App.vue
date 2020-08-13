<template>
 <v-app>
  <navbar />
  <v-main>
    <!-- <HelloWorld /> -->
    <router-view> </router-view>
  </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import navbar from "./components/Layout/Navbar";

export default {
  name: "App",

  components: {
    navbar
  },

  data: () => ({
    //
  })
};
</script>
