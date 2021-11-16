import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHANGE_ALL_CHECKED,
  CHANGE_PRODUCT_CHECKED 
} from "./mutation-types"

export default {
  addCart({
    state,
    commit
  }, payload) {
    return new Promise((resolve,reject)=> {
      let product = state.cartList.find(item => item.iid === payload.iid)

      if (product) {
        commit(ADD_COUNTER, product)
        // product.count +=1
        resolve('商品数量加一')
      } else {
        payload.count = 1
        commit(ADD_TO_CART, payload)
        // state.cartList.push(payload)
        resolve('添加新的商品')
      }
    })
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
  changeCheckedAll(context) { 
    context.commit(CHANGE_ALL_CHECKED,!context.getters.isAllChecked)
  },
  changeChecked({commit},payload) {
    commit(CHANGE_PRODUCT_CHECKED,payload)
  } 
}
