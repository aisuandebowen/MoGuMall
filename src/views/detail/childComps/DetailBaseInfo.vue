<template>
    <div class="info" v-if="Object.keys(goods).length!==0">
        <p>{{goods.title}}</p>
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
        <ul class="columns">
            <li v-for="item in goods.columns">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'DetailBaseInfo',
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
                type: Object,
                default: {}
            }
        }
    }
</script>
<style scoped>
    .info {
        padding: 5px;
    }

    .info p {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .newPrice {
        font-size: 20px;
        padding: 0 3px;
        color: var(--color-tint);
    }

    .oldPrice {
        padding: 0 3px;
        text-decoration: line-through;
        font-size: 13px;
    }

    .discount {
        vertical-align: top;
        padding: 3px;
        font-size: 13px;
        color: white;
        background-color: tomato;
        border-radius: 15px;
    }

    .columns {
        margin-top: 20px;
        display: flex;
        list-style: none;
        font-size: 13px;
    }

    .columns li:nth-child(1) {
        float: left;
    }
    .columns li:nth-child(2) {
        flex: 1;
        text-align: center;
    }
    .columns li:nth-child(3) {
        float: right;
    }
</style>