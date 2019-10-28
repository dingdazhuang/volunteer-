import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    text: 'text111',
    uniInfo: '',
    uniId: '',
    uniName: ''
  },
  mutations: {
    storeUniName(state, v) {
      state.uniName = v
      state.text = v
    }
  }
})

export default store