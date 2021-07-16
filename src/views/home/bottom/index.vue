<template>
  <div class="category_choose">
    <div class="category_content" @mousemove="contentMove">
      <div class="container">
        <div class="left-tips">
          <img src="@/assets/image/svg/index/rightCategory.svg" alt="">
          <div class="tips">Your pet is on the right!</div>
        </div>
        <category_item v-for="category in categories" :category="category"></category_item>
        <div class="right-tips">
          <img src="@/assets/image/svg/index/noCategory.svg" alt="">
          <div class="tips">Sorry, No more categories.</div>
        </div>
      </div>
    </div>
    <div class="topBtn" @click="toTop">
      <svg class="topBtn-img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M796.422846 524.478323 537.312727
            265.185862c-6.368176-6.39914-14.688778-9.471415-22.976697-9.407768-1.119849-0.096331-2.07972-0.639914-3.19957-0.639914-4.67206 0-9.024163
            1.087166-13.023626 2.879613-4.032146 1.536138-7.87163 3.872168-11.136568
            7.135385L227.647682 524.27706c-12.512727 12.480043-12.54369 32.735385-0.032684
            45.248112 6.239161 6.271845 14.432469 9.407768 22.65674 9.407768 8.191587 0
            16.352211-3.135923 22.624056-9.34412L479.1356 363.426421l0 563.712619c0
             17.695686 14.336138 31.99914 32.00086 31.99914s32.00086-14.303454 32.00086-31.99914L543.13732 361.8576l207.91012
              207.73982c6.240882 6.271845 14.496116 9.440452 22.687703 9.440452s16.319527-3.103239
               22.560409-9.311437C808.870206 557.277355 808.902889 536.989329
               796.422846 524.478323zM864.00258 192 160.00258 192c-17.664722
                0-32.00086-14.336138-32.00086-32.00086S142.337858 128 160.00258
                128l704 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.698266 192 864.00258 192z">
        </path>
      </svg>
    </div>
  </div>
</template>

<script>

import category_item from "@/views/home/bottom/category_item";

export default {
  name: "index",
  components: {
    category_item
  },
  data() {
    return {
      categories: ['IPHONE', 'SAMSUNG', 'DOGS', 'CATS', 'REPTILES'],
      contentWidth: undefined,
      containerWidth: undefined,
      contentOffset: undefined,
      container: undefined,
      fullImages: undefined,
      timer: undefined,
      scrollHeight: undefined
    };
  },
  methods: {
    contentMove(e) {
      let mouseX = e.pageX - this.contentOffset;
      let offset = mouseX / this.contentWidth * this.containerWidth - mouseX / 2;

      this.container.style['transform'] = 'translateX(' + -offset + 'px)';

      for (let image of this.fullImages) {
        image.style['transform'] = 'translateX(calc(' + offset + 'px - 25%))'
      }
    },
    runToTop() {
      let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
      currentPosition -= 10;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition);
      } else {
        window.scrollTo(0, 0);
        clearInterval(this.timer);
      }
    },
    toTop() {
      this.timer = setInterval(this.runToTop,1)
    }
  },
  mounted() {
    this.contentWidth = document.querySelector('.category_content').clientWidth;
    this.containerWidth = document.querySelector('.container').clientWidth;
    this.contentOffset = document.querySelector('.category_content').getBoundingClientRect().left;
    this.container = document.querySelector('.container');
    this.fullImages = document.querySelectorAll('.fullImage');
    this.scrollHeight = document.body.clientHeight - document.documentElement.clientHeight;
  }
}
</script>

<style scoped lang="scss">
.category_choose {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #A0EEE1;
  display: flex;
  align-items: center;
  justify-content: center;

  .category_content {
    width: 80vw;
    height: 80vh;
    background-color: #D6D5B7;
    border: 5px solid #19CAAD;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    top: 0;

    .container {
      width: 200%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 25%;
      position: relative;

      .left-tips {
        display: grid;
        grid-template: repeat(2, 1fr) / 1fr;
        justify-items: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -10.5%;
        width: 10%;
        height: 30%;
        background-color: transparent;
        border: 5px dashed #11564b;
        border-radius: 10px;

        .tips {
          color: #11564b;
          position: relative;
          bottom: 60%;
          font-weight: bold;
        }

        img {
          width: 60%;
          height: 60%;
        }

      }

      .right-tips {
        display: grid;
        grid-template: repeat(2, 1fr) / 1fr;
        justify-items: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10.5%;
        width: 10%;
        height: 30%;
        background-color: transparent;
        border: 5px dashed #11564b;
        border-radius: 10px;

        .tips {
          color: #11564b;
          position: relative;
          bottom: 60%;
          font-weight: bold;
        }

        img {
          width: 60%;
          height: 60%;
        }

      }

    }

  }

  .topBtn {
    width: 8vh;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D6D5B7;
    border: 5px solid #19CAAD;
    border-radius: 50%;
    position: absolute;
    right: 50px;
    bottom: 120px;
    cursor: pointer;
    transition: background-color .5s, border-color .5s;

    .topBtn-img {
      fill: #11564b;
      height: 90%;
      width: 90%;
      transition: fill .5s;
    }

    &:hover {
      border-color: #11564b;
      background-color: #11564b;

      .topBtn-img {
        fill: #D6D5B7;
      }

    }

  }

}
</style>

<style lang="scss">
  .category_choose {
    .category_content {
      .container {
        .category_item {
          width: 17%;
          height: 60%;
          position: relative;
          opacity: 1;
          transition: opacity .5s;

          .category-image {
            width: 100%;
            height: 100%;
            z-index: 3;
            position: relative;
            transition: transform .5s;
            border-radius: 10px;
            border: 5px solid #19CAAD;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              border-radius: 10px;
            }

          }

          .category-introduce {
            color: #11564b;
            position: absolute;
            left: 10%;
            width: 400px;
            height: 100px;
            opacity: 0;
            z-index: 2;
            padding: 1em 0 0 1em;
            border-left: 1px solid;
            transform: translateY(-80px);
            transition: transform .5s, opacity .5s;

            h1 {
              font-size: 1.2em;
              font-weight: 700;
            }

          }

          &:hover {

            .category-image {
              transform: translateY(-45px);
            }

            .category-introduce {
              transform: translateY(-65px);
              opacity: 1;
            }

          }

          &:hover + .fullImage {
            // 兄弟选择器的妙用
            opacity: 1;
            transform: scale(1.02);
          }

        }
      }
    }
  }
</style>
