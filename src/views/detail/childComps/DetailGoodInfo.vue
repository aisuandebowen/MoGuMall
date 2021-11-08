<template>
    <div>
        <div class="good-desc">
            <p class="start"></p>
            <p class="desc">
                {{goodInfo.desc}}
            </p>
            <p class="end"></p>
        </div>
        <p class="good-key">{{goodInfo.key}}</p>
        <div class="good-img">
            <img :src="item" alt="" v-for="item in goodInfo.list" @load="goodImgLoad">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DetailGoodInfo',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            goodImgLoad(){
                this.$emit('goodImgLoad')
            }
        },
        props: {
            goodInfo: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style scoped>
    .good-desc {
        position: relative;
        margin: 10px 0;
        font-size: 13px;
    }

    .start,
    .end {
        position: absolute;
        width: 100px;
        height: 1px;
        background-color: black;
    }

    .start {
        left: 0;
        top: 0;
    }

    .start::after {
        left: 0;
        top: -1px;

    }

    .end::after {
        right: 0;
        bottom: -1px;
    }

    .start::after,
    .end::after {
        position: absolute;
        content: "";
        width: 5px;
        height: 5px;
        background-color: black;
    }

    .end {
        right: 0;
        bottom: 0;
    }

    .desc {
        padding: 15px 5px;
    }

    .good-key {
        color: black;
        font-size: 14px;
    }

    .good-img,img {
        width: 100%;
    }
</style>