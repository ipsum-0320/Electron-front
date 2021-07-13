<template>
  <div class="window" :style="{ width: (683 - windowWidth) + 'px' }">
    <div class="chat-window"></div>
    <div class="enterArea">
      <div class="expression" tabindex="-1">
        <div class="expression-content">
          <div class="main-content">

          </div>
          <div class="subscript"></div>
        </div>
        <div class="quick-btn">
          <img :src="require('@/assets/image/svg/message/expression.svg')" alt="">
        </div>
      </div>
      <div></div>
      <div class="send-btn">
        <span>send</span>
        <svg viewBox="0 0 1024 1024"><path d="M915.515 142.82L98.213 458.2c-46.058 17.772-44.905 43.6 2.349 57.622l197.477 58.595 80.292 238.91c10.512 31.279 37.973 37.875 61.463 14.605L543.378 725.32l204.475 149.84c26.566 19.468 53.879 9.222 61.05-23.09l149.21-672.345c7.151-32.22-11.894-48.753-42.598-36.906zM791.141 294.833l-348.62 310.61c-6.268 5.586-11.941 16.653-12.812 24.847l-15.39 144.698c-1.729 16.248-7.331 16.919-12.498 1.345l-67.457-203.339c-2.64-7.954 0.976-17.705 8.022-21.93L784.5 285.882c28.174-16.898 31.173-12.907 6.64 8.951z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatWindow",
  props: {
    windowWidth: String
  },
}
</script>

<style scoped lang="scss">
  .window {
    position: absolute;
    height: 100%;
    width: 68.5%;
    right: 0;
    background-color: darken(#D6D5B7, 5%);

    .chat-window {

    }

    .enterArea {
      box-sizing: border-box;
      border-top: 3px #11564b solid;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40%;

      .expression {
        user-select: none;
        position: absolute;

        .expression-content {
          position: absolute;

          .main-content {
            height: 60px;
            width: 140px;
            border: ;
          }


          .subscript {
            border-top: 10px solid #11564b;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            position: relative;
            bottom: 20px;
            left: 5px;
          }

        }

        .quick-btn {
          position: absolute;
          width: 30px;
          height: 30px;
          cursor: pointer;
          top: 5px;

          img {
            width: 100%;
            height: 100%;
          }

        }

      }

      .send-btn {
        position: absolute;
        right: 15px;
        bottom: 15px;
        width: 120px;
        height: 40px;
        box-sizing: border-box;
        border: 3px solid #11564b;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .5s;

        span {
          color: #11564b;
          font-size: 18px;
          font-weight: bold;
          margin-right: 10px;
          transition: color .5s;
        }

        svg {
          width: 30px;
          height: 30px;
          fill: #11564b;
          transition: fill .5s;
        }

        &:hover {
          background-color: #11564b;
          span {
            color: #D6D5B7;
          }
          svg {
            fill: #D6D5B7;
          }
        }

      }

    }

  }
</style>
