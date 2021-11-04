<template>
    <div class="info" v-if="Object.keys(goods).length!==0">
        <p>{{goods.title}}</p>
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
        <ul class="info-row">
            <li>{{goods.columns[0]}}</li>
            <li>{{goods.columns[1]}}</li>
            <li>{{goods.services[goods.services.length-1].name}}</li>
        </ul>
        <ul class="info-row">
            <li v-for="index in goods.services.length-1" v-if="Object.keys(goods.services[index-1]).length>=2">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </li>
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

    .info-row {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
        font-size: 13px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .info-row li {
        flex: 1;
        text-align: center;
    }

    .info-row li:first-child{
        text-align: left;
    }

    .info-row li:last-child{
        text-align: right;
    }

    .info-row img {
        width: 15px;
        vertical-align: middle;
    }

</style>