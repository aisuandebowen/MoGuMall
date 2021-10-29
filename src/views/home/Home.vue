<template>
    <div id="home">
        <nav-bar class="home-nav">
            <h1 slot="center">购物街</h1>
        </nav-bar>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="loadMore">
            <home-swiper :banner="banner" class="banner"></home-swiper>
            <home-recommend-view :recommend="recommend"></home-recommend-view>
            <home-feature-view></home-feature-view>
            <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import Scroll from 'components/common/scroll/Scroll'

    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import BackTop from 'components/content/backTop/BackTop'

    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommendView from './childComps/HomeRecommendView'
    import HomeFeatureView from './childComps/HomeFeatureView'

    import {
        getHomeGoods,
        getHomeMultidata
    } from 'network/home'

    export default {
        name: 'Home',
        data() {
            return {
                banner: [],
                recommend: [],
                goods: {
                    'pop': { page: 0, list: [] },
                    'new': { page: 0, list: [] },
                    'sell': { page: 0, list: [] },
                },
                currentType: 'pop',
                isShowBackTop: false
            }
        },
        created() {
            // 请求轮播图和推荐数据
            this.getHomeMultidata()
            // 请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
            // 监听Item图片加载
            this.$bus.$on('itemImgLoad',()=>{
                this.$refs.scroll.refresh()
            })
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        methods: {
            // 轮播图和推荐数据
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banner = res.data.banner.list
                    this.recommend = res.data.recommend.list
                })
            },
            // 商品数据
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    this.$refs.scroll.refresh()
                })
            },
            // 事件监听
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break;
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                }
            },
            backClick() {
                this.$refs.scroll.scrollTo(0, 0)
            },
            contentScroll(position) {
                if (position.y <= -1000) {
                    this.isShowBackTop = true
                } else {
                    this.isShowBackTop = false
                }
            },
            loadMore() {
                // this.getHomeGoods(this.currentType)
                // this.$refs.scroll.finishPullUp()
            }
        },
        components: {
            NavBar,
            TabControl,
            GoodsList,
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,
            Scroll,
            BackTop
        }
    }
</script>
<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }

    h1 {
        font-size: 18px;
        margin: 0;
        color: azure;
    }

    .home-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background-color: var(--color-tint);
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 1;
    }

    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        /* margin-top: 44px;
        height: calc(100% - 44px - 49px); */
        overflow: hidden;
    }
</style>