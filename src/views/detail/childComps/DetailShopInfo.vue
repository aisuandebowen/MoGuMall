<template>
    <div class="detail-shop-info">
        <div class="shop-title">
            <img :src="shop.logo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="shop-main">
            <div class="shop-main-count">
                <div class="count">
                    <h3>{{dataShow(shop.sells)}}</h3>
                    <h3>总销量</h3>
                </div>
                <div class="count">
                    <h3>{{dataShow(shop.goodsCount)}}</h3>
                    <h3>全部宝贝</h3>
                </div>
            </div>
            <div class="shop-main-score">
                <ul>
                    <li class="score-arr" v-for="(item,index) in shop.score">
                        <ul>
                            <li>{{item.name}}</li>
                            <li :class="{'betterScore':item.isBetter}">{{item.score}}</li>
                            <li class="betterBetter" v-if="item.isBetter">高</li>
                            <li v-else>低</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DetailShopInfo',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            dataShow(data) {
                let boxData = parseInt((data / 10000) * 10) / 10
                return data > 10000 ? boxData + '万' : data
            }
        },
        props: {
            shop: {
                type: Object,
                default: {}
            },
        }
    }
</script>
<style scoped>
    h3{
        font-size: 13px;
    }
    .detail-shop-info {
        padding: 0 5px;
        border-bottom: 4px solid #f5f1f1;
    }

    .shop-title img {
        width: 30px;
        vertical-align: middle;
    }

    .shop-title span {
        padding: 0 5px;
    }

    .shop-main {
        display: flex;
    }

    .shop-main-count ,.shop-main-score {
        flex: 1;
    }

    .shop-main-count {
        display: flex;
        padding: 0 5px;
        margin: 20px 0px;
        border-right: 1px solid rgba(0, 0, 0, .3);
    }

    .shop-main-count .count {
        flex: 1;
        text-align: center;
    }

    .count h3 {
        padding: 2px;
    }

    .score-arr {
        flex: 1;
    }

    .score-arr li {
        float: left;
        font-size: 13px;
        padding: 3px 5px;
    }

    .shop-main-score {
        padding: 5px 3px;
    }

    .shop-main-score>ul {
        display: flex;
        flex-direction: column;
    }

    .score-arr>ul li:nth-child(2),.score-arr>ul li:nth-child(3){
        color: rgb(61, 179, 112);
    }

    .score-arr>ul li:nth-child(2) {
        width: 40px;
    }

    .score-arr>ul li:nth-child(3) {
        margin: 3px 5px;
        padding: 0;
        background-color: rgb(61, 179, 112);
        color: white;
    }

    .betterScore {
        color: var(--color-tint)!important;
    }

    .betterBetter {
        display: inline-block;
        color: white!important;
        background-color: var(--color-tint)!important;
    }

</style>