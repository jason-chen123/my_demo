import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ifLogin:false,
    login:{ }
  },
  mutations: {
    saveLogin(state,data){
      state.login=data
    },
    login(state){
      state.ifLogin=true
    },
    cancelLogin(state){
      state.ifLogin=false;
      state.login={}
      console.log(state)
    }
  },
  actions: {

  },
  modules: {
  }
})
