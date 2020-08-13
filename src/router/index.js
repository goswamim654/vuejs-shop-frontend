import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue"
import Signout from "@/components/SignupLayout/SignOut.vue"
import LandingPage from "../views/LandingPage.vue"
import ProductImages from "@/components/Products/ProductImages.vue"
import Gallery from "@/components/Products/Gallery.vue"
import DisplayImage from "../views/DisplayImage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },

  {
    path: "/products",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true 
    }
  },

  {
    path: "/product_images",
    name: "ProductImages",
    component: ProductImages,
    meta: {
      requiresAuth: true 
    }
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
    meta: {
      requiresAuth: true 
    }
  },

  {
    path: "/image/:imageID",
    name: "DisplayImage",
    component: DisplayImage,
   
  },
  
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
   
  },

  
  {
    path: "/signout",
    name: "Signout",
    component: Signout,
    meta: {
      requiresAuth: true 
    }
  }

];

// const router = new VueRouter({
//   routes
// });
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  //base: '/naba/shop/',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['authModule/loggedIn']) {
      next({
        path: '/signup',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
