<template>
  <img :src="image.src" :alt="image.name" @click="toTop">
</template>

<script>
  export default {
    name: '',
    props: {
      image: {
        type: Object
      }
    },
    data() {
      return {

      }
    },
    methods: {
      toTop() {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style scoped>
  img {
    position: fixed;
    right: 5px;
    bottom: 60px;
    width: 40px;
    border-radius: 50%;
  }
</style>