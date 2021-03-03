<template>
  <div id="app-category">
    <top-title :title="title"></top-title>
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
        title: '分类'
      }
    },
  }
</script>

<style scoped>

</style>