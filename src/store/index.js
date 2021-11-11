import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state,payload) {
            let product = state.cartList.find(item=>item.iid === payload.iid)
            if(product) {
                product.count +=1
            }else {
                payload.count = 1
                state.cartList.push(payload)
            }

            // 法二
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
        }
    }
})

export default store