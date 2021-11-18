<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-list-item>
    </div>
</template>
<script>
    import GoodsListItem from 'components/content/goods/GoodsListItem'

    export default {
        name: 'GoodsList',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            GoodsListItem
        }
    }
</script>
<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>