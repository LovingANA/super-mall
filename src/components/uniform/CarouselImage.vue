<template>
  <div class="carousel-image" v-if="carouselImages" id="carousel-image-01">
    <ul class="images" :style="{transform: `translateX(${leftOffset}px)`}">
      <li v-for="carouselImage in carouselImages" :key="carouselImage.src">
        <a :href="carouselImage.href">
          <img :src="carouselImage.src" :alt="carouselImage.name" :style="{width: imageWidth + 'px'}">
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li :class="{'pink-dot': currentImage === 0}"></li>
      <li :class="{'pink-dot': currentImage === 1}"></li>
      <li :class="{'pink-dot': currentImage === 2}"></li>
      <li :class="{'pink-dot': currentImage === 3}"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CarouselImage',
    props: {
      carouselImages: {
        type: Array
      }
    },
    data() {
      return {
        leftOffset: 0,
        currentImage: 0,
        imageWidth: 0,
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
        if (this.currentImage === 3) {
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
    left: calc((100% - 40px) / 2);
    bottom: 10px;
    width: 40px;
  }

  .dots > li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .pink-dot {
    background-color: rgb(189, 69, 69);
  }
</style>