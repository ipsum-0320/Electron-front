<template>
  <div>
    <div class="container">
      <div class="search" tabindex="-1" :class="{active:isActive}">
        <input type="text" class="search-input" @focus="onfocus()" @input="oninput()" v-model="context">
        <button class="search-button"  @focus="onfocus()" @click="getResult(context)">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M424.024 766.098c-91.619 0-177.754-35.679-242.538-100.464-133.735-133.737-133.735-351.344 0-485.078 64.784-64.784
                 150.919-100.462 242.538-100.462s177.754 35.677 242.539 100.462c133.733 133.735 133.735 351.34 0
                 485.078-64.785 64.783-150.922 100.464-242.539 100.464zM424.024 196.085c-60.637 0-117.643 23.613-160.523
                 66.489-88.512 88.51-88.51 232.53 0 321.040 42.876 42.876 99.885 66.491 160.523
                 66.491s117.643-23.614 160.523-66.491c88.51-88.51 88.51-232.53 0-321.040-42.876-42.876-99.885-66.489-160.523-66.489z">
            </path>
            <path d="M886.838 943.904c-14.842 0-29.684-5.663-41.010-16.986l-261.286-261.285c-22.647-22.649-22.647-59.369
                 0-82.018 22.647-22.647 59.37-22.647 82.018 0l261.286 261.286c22.647 22.649 22.647 59.369 0 82.018-11.325
                 11.322-26.167 16.985-41.010 16.985z">
            </path>
          </svg>
          Search
        </button>
        <div class="auto-complete" tabindex="-1">
          <div class="auto-complete-item" v-for="item in autoCompleteItems" @click="getResult(item)">
            <span>{{item}}</span>
            <svg class="cancel" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488
                    135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z"></path>
              <path d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552
                    97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392
                    435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576
                     67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776
                     46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016
                     0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0
                     138.6496 138.5728 138.6496 363.4432 0 502.1184z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="search-logo">
        Electron
      </div>
      <div class="search-result" :class="{activer:isActive}">
        <div class="empty-result" v-show="isShow">
          <img src="@/assets/image/svg/index/noCategory.svg" alt="">
          <div class="tips">Sorry, No search results.</div>
        </div>
        <div class="result" v-show="!isShow">
          <div class="result-item" v-for="item in resultItems" @click="$router.push({path: '/main/product',query: {productId:item.productId }})">
            <img :src="item.picture" alt="">
            <div class="description">{{item.description}}</div>
            <div class="productId">{{item.productId}}</div>
          </div>
        </div>
      </div>
    </div>
    <input type="text" id="move-focus-input">
  </div>
</template>

<script>
import {autoComplete, search} from "@/api/search";

export default {
  name: "search",
  data() {
    return {
      isShow:true,
      isActive:false,
      autoCompleteItems:[],
      resultItems:[],
      context:''
    }
  },
  methods: {
    onfocus() {
      if (this.isActive) return;
      this.isActive = true
      this.autoCompleteItems=['iphone12','huaweiP40','iphone12Pro','OPPOreno5']
    },
    oninput() {
      if(this.context === '') {
        this.autoCompleteItems = ['iphone12','huaweiP40','iphone12Pro','OPPOreno5']
      } else {
        autoComplete(this.context).then(data => {
          this.autoCompleteItems = data.slice(0,5)
        }).catch(data => {
          console.log(data)
        })
      }
    },
    getResult(item) {
      search(item).then(data => {
        this.resultItems = data
      }).catch(err => {
        console.log(err)
      })
      this.isShow = false;
      document.querySelector('#move-focus-input').focus();
    }
  }
}
</script>

<style scoped lang="scss">

body {
  background-color: #A0EEE1;
}

.container {
  background-color: #A0EEE1;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 88vh;
  position: relative;

  .search {
    position: absolute;
    z-index: 1;
    top: 300px;
    transition: transform .5s;

    .search-button {
      cursor: pointer;
      position: absolute;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      height: 42px;
      border: none;
      border-left: 5px solid #11564b;
      background-color: #11564b;
      color: #D6D5B7;
      font-size: 20px;
      font-weight: bold;
      right: 4px;
      top: 4px;
      transition: background-color .5s, color .5s;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        fill: #D6D5B7;
        margin-right: 5px;
        transition: fill .5s;
      }

      &:hover {
        color: #11564b;
        background-color: #D6D5B7;

        svg {
          fill: #11564b;
        }

      }

    }

    .search-input {
      all: unset;
      background-color: #D6D5B7;
      border-radius: 30px;
      border: 5px solid #11564b;
      width: 450px;
      height: 40px;
      font-size: 20px;
      font-weight: bold;
      color: #11564b;
      letter-spacing: 2px;
      padding-left: 10px;
      padding-right: 125px;
    }

    .auto-complete {
      display: none;

      .auto-complete-item {
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 20px;
        font-weight: bold;
        color: #11564b;
        margin-bottom: 5px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 30px;
        background-color: #D6D5B7;
        transition: background-color .5s, color .5s;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:first-child {
          margin-top: 10px;
        }

        svg {
          fill: #11564b;
          transition: fill .5s;
        }

        span {
          transition: transform .5s;
        }

        &:hover {
          color: #D6D5B7;
          background-color: #11564b;
          svg {
            fill: #D6D5B7;
          }
          span {
            transform: translateX(15px);
          }
        }


      }

    }

    &.active {

      transform: translateY(-250px);

      & + .search-logo {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-250px);
      }

      &:focus-within {
        background-color: #D6D5B7;
        border-radius: 30px;
        border: 5px solid #11564b;

        .search-input {
          position: relative;
          top: 2px;
          border: none;
          border-radius: 30px;
        }

        .search-button {
          border: 5px solid #11564b;
        }

        .auto-complete {
          display: block;
        }
      }

    }

  }

  .activer {
    opacity: 1 !important;
    visibility: visible !important;
  }

  .search-result {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    width: 70vw;
    height: 65vh;
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    transition: visibility .5s, opacity.5s;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .empty-result {
      width: 30%;
      height: 40%;
      border: 5px dashed #11564b;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .tips {
        color: #11564b;
        position: relative;
        top: 5%;
        font-size: 20px;
        font-weight: bold;
      }

      img {
        position: relative;
        top: -5%;
        width: 60%;
        height: 60%;
      }

    }

    .result {
      position: relative;
      padding-left: 5%;
      width: 80%;
      height: 90%;
      overflow-y: auto;
      overflow-x: hidden;
      flex-direction: column;
      align-items: center;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: #11564b;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #808080;
        border-radius: 5px;
      }

      .result-item {
        box-sizing: border-box;
        width: 90%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 40px;
        border-left: 3px solid #11564b;
        border-right: 3px solid #11564b;
        padding: 10px 40px;
        transition: box-shadow .5s, transform .5s;

        img {
          border-radius: 50%;
          width: 15vh;
          height: 15vh;
          object-fit: cover;
          box-shadow: 0 0 10px 2px #11564b;
        }

        .description {
          margin: 0 50px 0 50px;
          flex: 5;
          color: #11564b;
          font-size: 16px;
        }

        .productId {
          font-weight: bold;
          color: #11564b;
          font-size: 22px;
          text-align: center;
          flex: 2;
        }

        &:first-child {
          margin-top: 25px;
        }

        &:last-child {
          margin-bottom: 25px;
        }

        &:hover {
          box-shadow: 0 0 20px 2px #11564b;
          transform: scale(1.03);
        }

      }

    }

  }

  .search-logo {
    cursor: default;
    opacity: 1;
    visibility: visible;
    position: absolute;
    font-size: 80px;
    font-weight: bold;
    letter-spacing: 10px;
    top: 180px;
    color: #11564b;
    transition: opacity .3s, visibility .3s, transform .5s;
  }

}

#move-focus-input {
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}


</style>
