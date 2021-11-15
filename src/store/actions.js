import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types"

export default {
  addCart({
    state,
    commit
  }, payload) {
    let product = state.cartList.find(item => item.iid === payload.iid)

    if (product) {
      commit(ADD_COUNTER, product)
      // product.count +=1
    } else {
      payload.count = 1
      commit(ADD_TO_CART, payload)
      // state.cartList.push(payload)
    }

    // 法二（原在mutations）
    // for(let item of state.cartList){
    //     // 如果已存在该商品，增加商品数量
    //     if(item.iid === payload.iid) {
    //         item.count +=1
    //         return
    //     }
    // }
    // // 不存在该商品，增添count属性，push进数组里
    // payload.count = 1
    // state.cartList.push(payload)
  },
  changeCheckedAll({state,commit}) {
    let change = state.cartList.filter((item => item.checked)).length === state.cartList.length
    commit('changeAllChecked',!change)
  },
  changeChecked({commit},payload) {
    commit('changeProductChecked',payload)
  }
}
