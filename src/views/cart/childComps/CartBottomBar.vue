<template>
    <div class="cart-bottom-bar">
        <div class="check-all">
            <check-button :isChecked="isAllChecked" @click.native="changeCheckedAll"></check-button>
            <span>全选</span>
        </div>
        <div class="sum">
            合计:{{totalPrice}}
        </div>
        <div class="caculate" @click="calcClick">去计算({{checkedLength}})</div>
    </div>
</template>
<script>
    import CheckButton from 'components/content/checkButton/CheckButton'
    import { mapGetters } from 'vuex'

    export default {
        name: 'CartBottomBar',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
            totalPrice() {
                return '￥' + this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.count
                }, 0).toFixed(2)
            },
            ...mapGetters([
                'isAllChecked',
                'checkedLength'
            ])
        },
        methods: {
            changeCheckedAll() {
                this.$store.dispatch('changeCheckedAll')
            },
            calcClick() {
                if(!this.isAllChecked) {
                    this.$toast.show('请选择购买的商品')
                }
            }
        },
        components: {
            CheckButton
        }
    }
</script>
<style scoped>
    .cart-bottom-bar {
        position: relative;
        display: flex;
        align-items: center;

        z-index: 999;
        padding: 0 5px;
        height: 40px;

        background-color: rgb(221, 219, 219);
    }

    .check-all {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .check-all span {
        padding: 0 5px;
    }

    .sum {
        margin-left: 30px;
    }

    .caculate {
        margin-left: auto;
        height: 100%;
        line-height: 40px;
        color: white;
        padding: 0 20px;
        background-color: rgb(255, 66, 0);
    }
</style>