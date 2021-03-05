<template>
  <div class="top-title">
    <h2>
      <span>{{title}}</span>
      <slot></slot>
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'TopTitle',
    props: {
      title: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style scoped>
  .top-title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: var(--themeColor);
    text-align: center;
    color: white;
    z-index: 1;
  }

  h2 > span {
    line-height: 40px;
  }

  
</style>