<template>
  <div id="app-detail">
    <detail-tab-bar :tabBarItems="tabBarItems" :returnHref="returnHref"></detail-tab-bar>
    <carousel-image :carouselImages="carouselImages" style="height: 300px"></carousel-image>
  </div>
</template>

<script>
  import {getDetailData} from '@/network'
  import DetailTabBar from './DetailTabBar.vue'
  import CarouselImage from '@/components/uniform/CarouselImage.vue'

  export default {
    name: 'AppDetail',
    components: {
      DetailTabBar,
      CarouselImage
    },
    data() {
      return {
        tabBarItems: ['商品', '参数', '评论', '推荐'],
        returnHref: '/',
        carouselImages: []
      }
    },
    computed: {
      iid() {
        return this.$route.query.iid
      }
    },
    created() {
      getDetailData(this.iid).then(res => {
        console.log(res.data.result.itemInfo.topImages);
        this.carouselImages = res.data.result.itemInfo.topImages.map(element => ({
          src: element
        }));
      })
    }
  }
</script>

<style scoped>

</style>