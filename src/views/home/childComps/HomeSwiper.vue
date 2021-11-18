<template>
    <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
    import { Swiper, SwiperItem } from 'components/common/swiper'
    export default {
        name: 'HomeSwiper',
        data() {
            return {
                isLoad:false
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            imgLoad(){
                if(!this.isLoad){
                    this.$emit('swiperImageLoad')
                    this.isLoad = !this.isLoad
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            banner: {
                type: Array,
                default(){
                    return []
                }
            },
            recommend: {
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>
<style scoped>

</style>