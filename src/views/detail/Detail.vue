<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-imgs="topImgs"></detail-swiper>
    </div>
</template>
<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'

    import { getDetail } from 'network/detail'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImgs:[]
            }
        },
        created() {
            this.iid = this.$route.params.id

            getDetail(this.iid).then(res => {
                // 轮播图数据
                this.topImgs = res.result.itemInfo.topImages
            })
        },
        computed: {
        },
        methods: {
        },
        components: {
            DetailNavBar,
            DetailSwiper
        }
    }
</script>
<style scoped>
    h1 {
        font-size: 18px;
        margin: 0;
    }
</style>