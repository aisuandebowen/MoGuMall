<template>
    <div id="home">
        <nav-bar class="home-nav">
            <h1 slot="center">购物街</h1>
        </nav-bar>
        <home-swiper :banner="banner" class="banner"></home-swiper>
        <home-recommend-view :recommend="recommend"></home-recommend-view>
        <home-feature-view></home-feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
        <h2>asdasd</h2>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'

    import TabControl from 'components/content/tabControl/TabControl'

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
                }
            }
        },
        created() {
            // 请求轮播图和推荐数据
            this.getHomeMultidata()
            // 请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        computed: {
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
                })
            }
        },
        components: {
            NavBar,
            TabControl,
            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView,
        }
    }
</script>
<style scoped>
    #home {
        padding: 44px 0 39px;
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
    }
</style>