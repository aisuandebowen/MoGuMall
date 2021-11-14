<template>
    <div class="cart">
        <!-- 导航 -->
        <nav-bar class="nav-cart">
            <h1 slot="center">购物车({{cartLength}})</h1>
        </nav-bar>
        <!-- 内容区 -->
        <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true">
            <!-- 商品列表 -->
            <cart-list></cart-list>
        </scroll>
        <!-- 底部导航 -->
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>
<script>
    import Scroll from 'components/common/scroll/Scroll'
    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import CartBottomBar from './childComps/CartBottomBar'
    
    import { mapGetters } from 'vuex'

    export default {
        name: 'Cart',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
            ...mapGetters([
                'cartLength'
            ])
        },
        methods: {
        },
        components: {
            NavBar,
            CartList,
            Scroll,
            CartBottomBar
        },
        activated() {
            // 解决keep-alive组件缓存
            this.$refs.scroll.refresh()
        }
    }
</script>
<style scoped>
    .cart {
        height: 100vh;
    }

    .content {
        height: calc(100% - 44px - 49px - 40px);
        overflow: hidden;
    }

    h1 {
        font-size: 18px;
        margin: 0;
        color: azure;
    }

    .nav-cart {
        background-color: var(--color-tint);
    }
</style>