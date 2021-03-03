<template>
  <div id="app-cart">
    <top-title :title="title">
      <span>({{goodsNumber}})</span>
    </top-title>
  </div>
</template>

<script>
  import TopTitle from '@/components/uniform/TopTitle.vue'

  export default {
    name: '',
    components: {
      TopTitle
    },
    data() {
      return {
        title: '购物车',
        goodsNumber: 0
      }
    },
  }
</script>

<style scoped>

</style>