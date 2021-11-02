<template>
    <div class="goods-item" @click="itemClick">
        <img :src="goodsItem.show.img" alt="" @load="imgLoad">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GoodsListItem',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            imgLoad() {
                // 事件总线
                this.$bus.$emit('itemImgLoad')
            },
            itemClick() {
                this.$router.push('/detail/'+ this.goodsItem.iid)
            }
        },
        props: {
            goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>
<style scoped>
    .goods-item {
        padding: 2px;
        width: 48%;
        text-align: center;
    }

    .goods-item img {
        width: 100%;
        border-radius: 10px;
    }

    .goods-info {
        font-size: 12px;
    }

    .goods-info p {
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .goods-info .price {
        color: var(--color-high-text);
    }

    .goods-info .collect {
        position: relative;
        padding: 2px 5px 2px 20px;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: 3px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>