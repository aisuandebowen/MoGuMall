import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Cart = ()=>import('../views/cart/Cart')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta:{footShow:true}
    },
    {
        path:'/category',
        component:Category,
        meta:{footShow:true}
    },
    {
        path:'/profile',
        component:Profile,
        meta:{footShow:true}
    },
    {
        path:'/cart',
        component:Cart,
        meta:{footShow:true}
    },
    {
        path:'/detail/:id',
        component:Detail
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router