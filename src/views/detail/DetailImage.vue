<template>
  <div id="detail-image">
    <div>
      <div style="position:relative;width:100px;height:2px;background-color:lightgray;">
        <div style="position:absolute;left:0;top:-5px;width:5px;height:5px;background-color:black;"></div>
      </div>
    </div>
    <div>
      <span>{{detailImageDesciption}}</span>
    </div>
    <div>
      <div style="position:relative;float:right;width:100px;height:2px;background-color:lightgray;">
        <div style="position:absolute;right:0;top:-5px;width:5px;height:5px;background-color:black;"></div>
      </div>
    </div>
    <ul style="margin-top:10px">
      <li v-for="item in detailImages" :key="item.description">
        <div style="padding:0 10px;margin-bottom:10px">
          <span>{{item.description}}</span>
        </div>
        <ul>
          <li v-for="image in item.images" :key="image + Math.random()">
            <img :src="image">
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      detailImageDesciption: {
        type: String,
        default() {
          return '';
        }
      },
      detailImages: {
        type: Array,
        default() {
          return [
            {
              description: '',
              images: ['']
            }
          ];
        }
      }
    }
  }
</script>

<style scoped>
  #detail-image > *:nth-child(3)::after {
    content: '';
    display: block;
    clear: both;
  }

   #detail-image > *:nth-child(1) {
     padding: 0 10px;
   }

   #detail-image > *:nth-child(2) {
     margin: 15px 0;
     padding: 0 10px;
     font-size: 14px;
   }

   #detail-image > *:nth-child(3) {
     padding: 0 10px;
   }

   img {
     width: 100%;
   }
</style>