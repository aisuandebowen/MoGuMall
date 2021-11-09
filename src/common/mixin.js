import {debounce} from 'common/utils'

export const itemListenerMixin = {
    data(){
        return {
            itemListener:null
        }
    },
    mounted() {
        // 监听Item图片加载 
        const refresh = debounce(this.$refs.scroll.refresh)
        this.itemListener = () => {
            refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemListener)
        console.log('混入成功');
    }
}