export default {
  /* mutation尽量只做一件事 */
    // addCarts(state, payload) {
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //   oldProduct ? oldProduct.count += 1 : state.cartList.push(payload)
    // }
    addCount(state, payload) {
      payload.count += 1
    },
    addToCarts(state, payload) {
      state.cartList.push(payload)
    },
    changeChecked(state, payload) {
      state.cartList[payload].checked = !state.cartList[payload].checked
    },
    changeAllChecked(state, payload) {
      state.cartList.forEach(item => {
        item.checked = payload
      });
    }
}