<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
        <scroll :probe-tpe="2" :pull-up-load="true" class="content" ref="scroll">
            <detail-swiper :top-imgs="topImgs"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-good-info :good-info="goodInfo" @goodImgLoad="goodImgLoad"></detail-good-info>
            <detail-good-params :good-params="goodParams"></detail-good-params>
            <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
            <goods-list :goods="recommend"></goods-list>
        </scroll>
    </div>
</template>
<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodInfo from './childComps/DetailGoodInfo'
    import DetailGoodParams from './childComps/DetailGoodParams'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    
    import GoodsList from 'components/content/goods/GoodsList'
    
    import Scroll from 'components/common/scroll/Scroll'

    import { debounce } from 'common/utils'

    import { getDetail, getRecommend, Goods, Shop, GoodInfo, GoodParams } from 'network/detail'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImgs: [],
                goods: {},
                shop: {},
                goodInfo: {},
                goodParams: {},
                commentInfo: {},
                recommend: []
            }
        },
        created() {
            this.iid = this.$route.params.id

            getDetail(this.iid).then(res => {
                // 轮播图数据
                const data = res.result
                // console.log(res);
                this.topImgs = data.itemInfo.topImages
                // 商品信息数据
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                // 店铺信息
                this.shop = new Shop(data.shopInfo)
                // 商品详细数据（图片）
                this.goodInfo = new GoodInfo(data.detailInfo)
                // 商品参数
                this.goodParams = new GoodParams(data.itemParams)
                // 评论信息
                this.commentInfo = data.rate.cRate !== 0 ? data.rate.list[0] : {}
            })

            getRecommend().then(res=>{
                // 推荐信息
                this.recommend = res.data.list
            })
        },
        computed: {
        },
        methods: {
            goodImgLoad() {
                const refresh = debounce(this.$refs.scroll.refresh)
                refresh()
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodInfo,
            DetailGoodParams,
            DetailCommentInfo,
            GoodsList
        }
    }
</script>
<style scoped>
    #detail {
        height: 100vh;
    }

    .detail-nav-bar {
        position: relative;
        z-index: 2;
        background-color: #fff;
    }

    h1 {
        font-size: .24rem;
        margin: 0;
    }

    .content {
        /* position: absolute;
        top: .586667rem;
        bottom:0;
        left: 0;
        right: 0; */
        height: calc(100% - 44px);
    }
</style>