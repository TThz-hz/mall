export default {
  addCarts({state, commit}, payload) {
    return new Promise((resolve, reject) => {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    oldProduct ? 
    (commit("addCount", oldProduct), resolve('当前商品数量+1')) : 
    (commit("addToCarts", payload), resolve("成功加入购物车"))
    })
  }
}