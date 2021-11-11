import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

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
    }
}

export const backTopMixIn = {
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    },
    components: {
      BackTop
    }
}