import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartList: []
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    },
    isAllChecked(state) {
      return state.cartList.every(item => item.checked === true)
    },
    total(state) {
      let sum = 0
      state.cartList.forEach(item => {
        sum += (item.checked ? item.count : 0)
      });
      return sum
    },
    endPrice(state) {
      let money = 0
      state.cartList.forEach(item => {
        money += (item.checked ? item.count * item.price : 0)
      });
      return money
    } 
  },
  mutations,
  actions,
})

export default store