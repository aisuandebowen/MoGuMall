export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  isAllChecked(state) {
    return state.cartList.length !== 0 ? state.cartList.filter((item => item.checked)).length === state.cartList.length : false
  },
  checkedLength(state) {
    return state.cartList.filter((item => item.checked)).length
  }
}
