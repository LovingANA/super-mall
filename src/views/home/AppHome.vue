<template>
  <div id="app-home">
    <top-title :title="title"></top-title>
  </div>
</template>

<script>
  import TopTitle from '@/components/uniform/TopTitle.vue'

  export default {
    name: 'AppHome',
    components: {
      TopTitle
    },
    data() {
      return {
        title: '首页'
      }
    },
  }
</script>

<style scoped>

</style>