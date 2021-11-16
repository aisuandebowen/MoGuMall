<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="detailNavBar"></detail-nav-bar>
    <scroll :probe-type="3" :pull-up-load="true" class="content" ref="scroll" @scroll="contentScroll">
      <detail-swiper :top-imgs="topImgs"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-good-info :good-info="goodInfo" @goodImgLoad="goodImgLoad"></detail-good-info>
      <detail-good-params ref="params" :good-params="goodParams"></detail-good-params>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodInfo from "./childComps/DetailGoodInfo";
  import DetailGoodParams from "./childComps/DetailGoodParams";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import GoodsList from "components/content/goods/GoodsList";

  import Scroll from "components/common/scroll/Scroll";

  import { itemListenerMixin, backTopMixIn } from "common/mixin";
  import { debounce } from "common/utils";
  import { BACKTOP_DISTANCE } from 'common/const'

  import { mapActions } from 'vuex'

  import {
    getDetail,
    getRecommend,
    Goods,
    Shop,
    GoodInfo,
    GoodParams,
  } from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImgs: [],
        goods: {},
        shop: {},
        goodInfo: {},
        goodParams: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: [],
        getThemeTopYs: null,
        message: '',
        show: false
      };
    },
    created() {
      this.iid = this.$route.params.id;

      getDetail(this.iid).then((res) => {
        // 轮播图数据
        const data = res.result;
        // console.log(res);
        this.topImgs = data.itemInfo.topImages;
        // 商品信息数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 店铺信息
        this.shop = new Shop(data.shopInfo);
        // 商品详细数据（图片）
        this.goodInfo = new GoodInfo(data.detailInfo);
        // 商品参数
        this.goodParams = new GoodParams(data.itemParams);
        // 评论信息
        this.commentInfo = data.rate.cRate !== 0 ? data.rate.list[0] : {};
        // 赋值getThemeTopYs函数
        this.getThemeTopYs = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        })
      });

      getRecommend().then((res) => {
        // 推荐信息
        this.recommend = res.data.list;
      });
    },
    destroyed() {
      // 取消全局事件的监听
      this.$bus.$off('itemImgLoad', this.itemListener)
    },
    computed: {},
    methods: {
      ...mapActions([
        'addCart'
      ]),
      goodImgLoad() {
        this.refresh()
        this.getThemeTopYs()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
      },
      contentScroll(position) {
        // 详情页顶部与内容相对应
        for (let i in this.themeTopYs) {
          if (-position.y < this.themeTopYs[i]) {
            this.$refs.detailNavBar.currentIndex = i - 1
            break
          }
          this.$refs.detailNavBar.currentIndex = i
        }

        // 返回顶部
        this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE
      },
      addToCart() {
        const product = {
          img: this.topImgs[0],
          title: this.goods.title,
          desc: this.goods.desc,
          price: this.goods.realPrice,
          iid: this.iid
        }
        this.addCart(product).then(res => {
          this.$toast.show(res)
        })
        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res);
        // })
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
      GoodsList,
      DetailBottomBar,
    },
    mixins: [itemListenerMixin, backTopMixIn],
  };
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
    font-size: 0.24rem;
    margin: 0;
  }

  .content {
    /* position: absolute;
        top: .586667rem;
        bottom:0;
        left: 0;
        right: 0; */
    height: calc(100% - 44px - 49px);
  }
</style>