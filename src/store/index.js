import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import prod from '../api/Products'

Vue.use(Vuex);

const Product = {
  namespaced: true,

  state: {
    products: prod
  },

  mutations: {

  },

  getters: {
    getProducts(state){
      return state.products;
    }
  },

  actions: {

  }

}

const Cart = {
  namespaced: true,

  state: {

  },

  getters: {

  },

  actions: {
    
  }
}


const Auth = {
  namespaced: true,

  state: {
      token: localStorage.getItem('token') || null,
      user: null
  },

  getters: {
      loggedIn(state) {
          if(state.token) {
              return true
          }
          else
          {
              return false
          }
      }
  },

  mutations: {
      SET_TOKEN(state,tokenValue) {
          state.token = tokenValue
      },
      DESTROY_TOKEN(state) {
          state.token = null
      }
  },

actions: {

    login_GenerateToken(context, credentials) {
       return new Promise((resolve, reject) => {
             axios.post(`${process.env.VUE_APP_APIURL}login`,{
                username: credentials.username,
                password: credentials.password
            })
            .then(response => {
                const access_token = response.data.access_token;
                localStorage.setItem('token',access_token);
                context.commit('SET_TOKEN',access_token);
                resolve(response)
                // console.log(response);   
            })
            .catch(err => {
                console.log(err);
                reject(err)
            })
        })
   },

   register(context, formdata) {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_APIURL}register`,formdata)
        .then(response => {
            resolve(response)
            console.log(response);   
        })
        .catch(err => {
            console.log(err);
            reject(err)
        })
    })       
    },

   Signout(context) {
     console.log("Signout");
       return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_APIURL}logout`,{
                  headers: {
                      'Authorization' : `Bearer ${localStorage.getItem('token')}`
                  }
            })
            .then(response => {
                localStorage.removeItem('token')
                context.commit('DESTROY_TOKEN')
                resolve(response)
            })
            .catch(error => {
                localStorage.removeItem('token')
                context.commit('DESTROY_TOKEN')
                reject(error)
            })
       })
    }
  }
}

const store = new Vuex.Store({
  state: {
  },

  mutations: {

  },

  actions: {

  },

  modules: {
    productModule: Product,
    authModule: Auth,
    cartModule: Cart
  }
});

export default store;
