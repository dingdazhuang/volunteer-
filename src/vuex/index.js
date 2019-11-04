import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    text: 'text',
    uniInfo: '',
    uniId: '',
    uniName: ''
  },
  mutations: {
    storeUniName (state, v) {
      state.uniName = v
      state.text = v
    },
    storeInfo (state, info) {
      state.uniInfo = info
    },
    storeId (state, id) {
      state.uniId = id
    }
  }
})

export default store
