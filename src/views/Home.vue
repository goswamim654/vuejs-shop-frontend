<template>
  <div>
    <HomeHeader/>
    <HomeBody />
    <!-- <HomeFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeLayout/HomeHeader.vue";
import HomeBody from "@/components/HomeLayout/HomeBody.vue";
// import HomeFooter from "@/components/HomeLayout/HomeFooter.vue";

export default {
  name: "Home",
  components: {
    HomeHeader, HomeBody
  }
};
</script>
