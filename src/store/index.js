import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shower:true
  },
  mutations: {
    fimg(state){
      setInterval(()=>{
        if(state.shower){
        state.shower=false
      }else{
        state.shower=true
      }
      },3000)
    }
  },
  actions: {
  },
  modules: {
  }
})
