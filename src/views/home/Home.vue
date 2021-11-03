<template>
    <div id="home">
        <nav-bar class="home-nav">
            <h1 slot="center">购物街</h1>
        </nav-bar>
        <tab-control v-show="isShowTab" class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="loadMore">
            <home-swiper :banner="banner" class="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-recommend-view :recommend="recommend"></home-recommend-view>
            <home-feature-view></home-feature-view>
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"></tab-control>
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

    import {debounce} from 'common/utils'

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
                isShowBackTop: false,
                tabOffsetTop: 0,
                isShowTab: false
            }
        },
        created() {
            // 请求轮播图和推荐数据
            this.getHomeMultidata()
            // 请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

            console.log('home create');
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
                this.$refs.tabControl.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            backClick() {
                this.$refs.scroll.scrollTo(0, 0)
            },
            contentScroll(position) {
                // 返回顶部
                this.isShowBackTop = (-position.y) > 1000

                // tabControl吸顶
                this.isShowTab = (-position.y) >= this.tabOffsetTop
            },
            loadMore() {
                this.getHomeGoods(this.currentType)
                this.$refs.scroll.finishPullUp()
            },
            // 获取tab-control距离content顶部的距离
            swiperImageLoad(){
                this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
        },
        mounted() {
            // 监听Item图片加载
            const refresh = debounce(this.$refs.scroll.refresh)
            this.$bus.$on('itemImgLoad', () => {
                refresh()
            })
        },
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
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1; */
        background-color: var(--color-tint);
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

    .tab-control {
        position: relative;
        z-index: 1;
    }
</style>