import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types"

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  changeAllChecked(state,payload) {
    state.cartList = state.cartList.map(item=>{
      item.checked = payload
      return item
    })
  },
  // 此时payload传入iid
  changeProductChecked(state,payload) {
    for(let item of state.cartList) {
      if(item.iid === payload) {
        item.checked = !item.checked
        break
      }
    }
  }
}
