import {debounce} from 'common/utils'

export const itemListenerMixin = {
    data(){
        return {
            itemListener:null,
            refresh:null
        }
    },
    mounted() {
        // 监听Item图片加载 
        this.refresh = debounce(this.$refs.scroll.refresh)
        this.itemListener = () => {
            this.refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemListener)
        console.log(this.$route.path+'混入成功');
    }
}