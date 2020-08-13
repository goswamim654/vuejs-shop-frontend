/*
import axios from 'axios';

export default {
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
             axios.post('/login',{
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

   register(context, credentials) {
    return new Promise((resolve, reject) => {
        axios.post('/register',{
            username: credentials.username,
            password: credentials.password,
            email: credentials.email
        })
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
       return new Promise((resolve, reject) => {
            axios.get('/logout',{
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

*/