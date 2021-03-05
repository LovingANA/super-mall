<template>
  <ul class="goods-list">
    <li v-for="goodsListItem in goodsListItems" :key="goodsListItem.name + Math.random()">
      <a :href="goodsListItem.href">
        <div class="image">
          <img :src="goodsListItem.src" :alt="goodsListItem.name">
        </div>
        <div class="name"> 
          <span>{{goodsListItem.name}}</span>
        </div>
        <div class="price">
          <span>{{goodsListItem.price}}</span>
          <div>
            <img src="@/assets/images/star.png" alt="星">
            <span>{{goodsListItem.starNumber}}</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: '',
    props: {
      goodsListItems: {
        type: Array
      }
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    padding-top: 0;
    padding-bottom: 52px;
  }

  .image > img {
    width: 175px;
    height: 270px;
  }

  .name > span {
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price img {
    width: 18px;
  }

  .price > *:first-child {
    float: left;
  }

  .price > *:last-child {
    float: right;
  }

  .price::after {
    content: '';
    display: block;
    clear: both;
  }

  .price > div > * {
    vertical-align: top;
  }

  .price {
    padding: 0 35px;
  }
</style>