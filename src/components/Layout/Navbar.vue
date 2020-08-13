<template>
<div app>
  <v-app-bar
    elevate-on-scroll
    style="background-color: 0.0010"
  >
    <v-toolbar-title>
      <h3 class="red--text">
        Shopping Cart
      </h3>
    </v-toolbar-title>
    
    <v-spacer> </v-spacer>

    <span class="hidden-sm-and-up">
        <v-icon left class="black--text" @click.stop="drawer = !drawer"> mdi-menu </v-icon>
    </span>

    <v-toolbar-items class="hidden-xs-only">

      <v-btn to="/" text class="teal--text">
      <v-icon left> mdi-home </v-icon>
        <h4> Home </h4>
      </v-btn>

      <v-btn to="/products" text class="teal--text" v-if = loggedInCheck>  
        <v-icon left> mdi-image-filter-frames </v-icon>
        <h4> Products </h4>
      </v-btn>

      <v-btn to="/product_images" text class="teal--text" v-if = loggedInCheck>  
        <v-icon left> mdi-image-plus </v-icon>
        <h4> Upload Images </h4>
      </v-btn>

      <v-btn to="/gallery" text class="teal--text" v-if = loggedInCheck>  
        <v-icon left> mdi-image-area </v-icon>
        <h4> Image Gallery </h4>
      </v-btn>

      <v-btn to="/signup" text class="teal--text" link v-if="!loggedInCheck">
        <v-icon left> mdi-login-variant </v-icon>
        <h4> Sign In </h4>
      </v-btn>

       <v-btn text class="red--text" @click="Signout" v-if="loggedInCheck">
        <v-icon left> mdi-logout </v-icon>
        <h4> Sign Out </h4>
      </v-btn>

      <!-- <v-btn to="/signup" text class="red--text">
        <v-icon left> mdi-login </v-icon>
        <h4> SignIn </h4>
      </v-btn> -->
     </v-toolbar-items>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    left
  >
    <v-list class = "mt-10">
      <v-list-item v-for="item in items" :key="item.index" :to="item.link" link >
        <v-list-item-icon>
          <v-icon small>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>
            {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'navbar',

    data() {
      return {
        drawer : false,
        appTitle: "Vue Shop",
        items: [
          { index: 1, title: 'Home', link: '#', icon:'mdi-home-circle'},
          { index: 2, title: 'Register', link: '#', icon:'mdi-account-plus'},
          { index: 3, title: 'Login', link: '#', icon:'mdi-login'}
        ]
      }
    },

    computed: {
      ...mapGetters({
          loggedInCheck: 'authModule/loggedIn'
      })
    },

     methods: {
        ...mapActions({
            signout: 'authModule/Signout'
        }),

        async Signout() {
          await this.signout();
          this.$router.push('/signup')

        }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
  *{
            font-family: 'Roboto Condensed', sans-serif;
  }

  .text-white {
    color: "white"
  }

  
</style>