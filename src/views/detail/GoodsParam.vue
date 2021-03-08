<template>
  <div id="goods-param">
    <ul class="size-info">
      <li v-for="item in sizeInfo" :key="item.sizeType" style="margin-bottom:10px">
        <ul>
          <li>
            <span>{{item.sizeType}}</span>
          </li>
          <li>
            <span>{{item.first}}</span>
          </li>
          <li>
            <span>{{item.second}}</span>
          </li>
          <li>
            <span>{{item.third}}</span>
          </li>
        </ul>
        <div style="width:95vw;height:2px;background-color:lightgray;margin-top:10px;opacity:.4;"></div>
      </li>
    </ul>
    <ul class="product-info">
      <li v-for="item in productInfo" :key="item.type" style="margin-bottom:10px">
        <span style="margin-right:30px">{{item.type}}</span>
        <span>{{item.typeValue}}</span>
        <div style="height:2px;background-color:lightgray;margin-top:10px;opacity:.4;"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      sizeInfo: {
        type: Array,
        default() {
          return [
            {
              sizeType: '',
              first: '',
              second: '',
              third: ''
            }
          ]
        }
      },
      productInfo: {
        type: Array,
        default() {
          return [
            {
              type: '',
              typeValue: ''
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  #goods-param {
    padding: 0 10px;
    font-size: 15px;
    color: rgb(95, 89, 89);
  }

  .size-info  ul {
    display: flex;
    justify-content: space-between;  
  }

  .size-info > li {
    padding-right: 50px;
  }

  .size-info > li li {
    width: 30px;
    text-align: center;
  }

  .product-info > li > *:nth-child(2) {
    color: var(--themeColor);
  }
</style>