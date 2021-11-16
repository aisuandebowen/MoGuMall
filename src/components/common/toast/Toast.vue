<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>
<script>
    export default {
        name: 'Toast',
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            show(message="请加入商品到购物车", time=1500) {
                this.isShow = true
                this.message = message

                setTimeout(() => {
                    this.isShow = false
                    this.message = ''
                }, time)
            }
        },
    }
</script>
<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;

        padding: 8px 10px;
        transform: translate(-50%, -50%);

        color: #fff;
        background-color: rgba(0, 0, 0, .5);
    }
</style>