<template>
    <div>
        <!-- 导航栏 -->
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center">
                <ul>
                    <li v-for="(item,index) in titles" :class="{'active':currentIndex==index}" @click="titleClick(index)">{{item}}</li>
                </ul>
            </div>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'DetailNavBar',
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            titleClick(index) {
                this.currentIndex = index
            },
            backClick() {
                this.$router.back()
            }
        },
        components: {
            NavBar
        }
    }
</script>
<style scoped>
    ul {
        display: flex;
    }
    ul li {
        flex: 1;
        list-style: none;
    }
    .active {
        color: var(--color-high-text);
    }

    .back img{
        vertical-align: middle;
    }
</style>