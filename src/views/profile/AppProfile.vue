<template>
  <div id="app-profile">
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
        title: '我的'
      }
    },
  }
</script>

<style scoped>

</style>