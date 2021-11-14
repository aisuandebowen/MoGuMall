<template>
    <div class="cart-list-item">
        <check-button class="checkButton" :isChecked="product.checked" @click.native="checkClick"></check-button>
        <!-- {{product}} -->
        <img :src="product.img" alt="">
        <div class="cart-list-info">
            <h1>{{product.title}}</h1>
            <h2>{{product.desc}}</h2>
            <span class="price">￥{{product.price}}</span>
            <span class="count">×{{product.count}}</span>
        </div>
    </div>
</template>
<script>
    import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: 'CartListItem',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            checkClick() {
                this.product.checked = !this.product.checked
            }
        },
        props: {
            product: {
                type: Object,
                default: {}
            }
        },
        components: {
            CheckButton
        }
    }
</script>
<style scoped>
    .cart-list-item {
        display: flex;
        height: 150px;
        padding: 10px 10px 10px 5px;
        border-bottom: 1px solid #bdb5b5;
    }

    .cart-list-info {
        flex:4;
        margin: 0 0 0 10px;
        overflow: hidden;
    }

    .cart-list-item h1,
    .cart-list-item h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .cart-list-item h1 {
        font-size: 18px;
    }

    .cart-list-item h2 {
        font-size: 14px;
    }

    .cart-list-item img {
        flex: 1;
        border-radius: 10px;
        vertical-align: middle;
    }

    span {
        font-size: 17px;
        margin-top: 40px;
    }

    .price {
        color: rgb(220, 101, 39);
        display: inline-block;
    }

    .count {
        float: right;
    }

    .checkButton {
        margin: auto 5px auto 0;
    }
</style>