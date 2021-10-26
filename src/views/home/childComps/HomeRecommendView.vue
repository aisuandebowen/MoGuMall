<template>
    <div class="recommend">
       <div v-for="item in recommend" class="recommend-item">
          <a href="item.link">
             <img :src="item.image" alt="">
             <h3>{{item.title}}</h3>
          </a>
       </div>

    </div>
</template>
<script>
export default {
   name: 'HomeRecommendView',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
   props: {
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
   .recommend {
      display: flex;
      margin: 10px 0;
      padding-bottom: 10px;
      border-bottom: 10px solid #eee;
   }

   .recommend-item {
      flex: 1;
      padding: 0 7px;
      text-align: center;
   }

   .recommend-item img {
      width: 100%;
   }

   .recommend-item h3 {
      font-size: 13px;
   }

</style>
