<template>
  <div class="carousel-image" v-if="carouselImages" id="carousel-image-01">
    <ul class="images" :style="{transform: `translateX(${leftOffset}px)`}">
      <li v-for="carouselImage in carouselImages" :key="carouselImage.src">
        <a :href="carouselImage.href || ''">
          <img :src="carouselImage.src" :alt="carouselImage.name" :style="{width: imageWidth + 'px', height: height}">
        </a>
      </li>
    </ul>
    <ul class="dots" :style="{width: totoalImagesNumber * 10 + 5 + 'px'}">
      <li class="dot-item" v-for="index in totoalImagesNumber" :key="index" :class="{'pink-dot': currentImage === --index}"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CarouselImage',
    props: {
      carouselImages: {
        type: Array
      },
      height: {
        type: String
      }
    },
    data() {
      return {
        leftOffset: 0,
        currentImage: 0,
        imageWidth: 0,
      }
    },
    computed: {
      totoalImagesNumber() {
        return this.carouselImages.length;
      }
    },
    methods: {
      translateImages() {
        const id = setInterval(() => {
          if (this.leftOffset === -(this.imageWidth)) {
            clearInterval(id);
            this.carouselImages.push(this.carouselImages.shift());
            this.leftOffset = 0;
          } else {
            this.leftOffset -= 3;
          }
        }, 5);
      }
    },
    created() {
      setInterval(() => {
        if (this.currentImage === this.totoalImagesNumber - 1) {
          this.currentImage = 0;
        } else {
          this.currentImage++;
        }
        this.translateImages();
      }, 4000)
    },
    mounted() {
      this.imageWidth = document.getElementById('carousel-image-01').offsetWidth;
    }
  }
</script>

<style scoped>
  .carousel-image {
    position: relative;
    overflow: hidden;
  }

  .images {
    display: flex;
  }

  .dots {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
  }

  .dots > li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  li.pink-dot {
    background-color: rgb(189, 69, 69);
  }

  .dot-item {
    background-color: rgba(255, 255, 255, .7);
  }
</style>