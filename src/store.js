import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
    state: {
      progn_ar: []
    },
    mutations: {
      increment: (state,c) => 
        state.progn_ar.push(c)
    },
    getters:{
        getC:(state)=>{
            return state.progn_ar;
        }
    }
  })
  export default store;