export default {
  addCarts({state, commit}, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    oldProduct ? commit("addCount", oldProduct) : commit("addToCarts", payload)
  }
}