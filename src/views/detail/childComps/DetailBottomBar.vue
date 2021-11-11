<template>
    <div class="bottom-bar">
        <div class="section">
            <div class="custom-service">
                <i class="icon"></i>
                <h3>客服</h3>
            </div>
            <div class="shop">
                <i class="icon"></i>
                <h3>店铺</h3>
            </div>
            <div class="collect">
                <i class="icon"></i>
                <h3>收藏</h3>
            </div>
        </div>
        <div class="section">
            <div class="add" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DetailBottomBar',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            addToCart() {
                this.$emit('addCart')
            }
        },
    }
</script>
<style scoped>
    h3 {
        font-size: 13px;
    }

    .bottom-bar {
        position: fixed;
        left: 0;
        bottom: 0px;
        right: 0;
        height: 49px;
        background-color: rgb(255, 255, 255);
        display: flex;
    }

    .section {
        flex: 1;
        display: flex;
    }

    .section div {
        flex: 1;
        text-align: center;
        font-size: 14px;
    }

    .section:first-child div {
        padding: 6px 3px;
    }

    .section:nth-child(2) {
        line-height: 49px;
    }

    .add {
        background-color: rgb(254, 231, 23);
    }

    .buy {
        background-color: rgb(255, 101, 154);
        color: #fff;
    }

    .icon {
        margin: 0 auto;
        display: block;
        background: url('~assets/img/detail/detail_bottom.png') no-repeat;
        background-size: 22px 150px;
        width: 22px;
        height: 21px;
    }

    .custom-service i {
        background-position: 0 -53px;
    }

    .shop i {
        background-position: 0 -100px;
    }

    .collect i {
        background-position: -1px -1px;
    }
</style>