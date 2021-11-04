<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-imgs="topImgs"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
</template>
<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'

    import { getDetail , Goods , Shop} from 'network/detail'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImgs:[],
                goods: {},
                shop:{}
            }
        },
        created() {
            this.iid = this.$route.params.id

            getDetail(this.iid).then(res => {
                console.log(res);
                // 轮播图数据
                const data = res.result
                this.topImgs = data.itemInfo.topImages
                // console.log(res);
                // 商品信息数据
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                // 店铺信息
                this.shop = new Shop(data.shopInfo)
            })
        },
        computed: {
        },
        methods: {
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo
        }
    }
</script>
<style scoped>
    h1 {
        font-size: 18px;
        margin: 0;
    }
</style>