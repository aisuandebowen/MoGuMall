<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'Scroll',
        data() {
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time)
            }
        },
        mounted(){
            // 创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType: this.probeType
            })

            // 监听滚动
            this.scroll.on('scroll',position=>{
                this.$emit('scroll',position)
            })
        }
    }
</script>
<style scoped>

</style>