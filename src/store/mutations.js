import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHANGE_ALL_CHECKED,
  CHANGE_PRODUCT_CHECKED
} from "./mutation-types"

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  [CHANGE_ALL_CHECKED](state,payload) {
    state.cartList = state.cartList.map(item=>{
      item.checked = payload
      return item
    })
  },
  // 此时payload传入iid
  [CHANGE_PRODUCT_CHECKED](state,payload) {
    for(let item of state.cartList) {
      if(item.iid === payload) {
        item.checked = !item.checked
        break
      }
    }
  }
}
