<template>
  <div class="log-container">
    <div class="log-content">
      <div class="log-tips">A total of {{ totalItems }} browsing records: </div>
      <div class="empty-list" v-if="logItems === null || logItems.length === 0">
        <img src="@/assets/image/svg/index/noCategory.svg" alt="">
        <div class="tips">Sorry, Your browseLog list is empty.</div>
      </div>
      <div class="list" v-else>
        <div class="list-item" v-for="(item,index) in logItems" :key="item.orderId" :class="{'delete-cart-item': toDelete==index}">
          <div class="detail-img" @click="clickDetail(index)">
            <svg t="1626660640288" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2692" width="200" height="200"><path d="M704 512a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m64-448a64 64 0 0 1 64 64v321.024h-64V128H256v704h196.352v64H256a64 64 0 0 1-64-64V128a64 64 0 0 1 64-64h512z m-64 512a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m32 32v64h64v64h-128v-128h64z m-255.936-64v64H320v-64h160.064zM704 384v64H320V384h384z m0-160v64H320v-64h384z" p-id="2693" fill="#11564b"></path></svg>
          </div>
          <div class="order-id">{{item.product.name}}</div>
          <div class="order-time">{{item.t.substring(0,10)}}</div>
          <div class="order-delete" :class="{'delete-active':isDelete===index}" @click="clickDelete(index)">
            <svg class="delete-icon" viewBox="0 0 1024 1024">
              <path d="M589.994667 520.533333l276.309333-276.309333c22.016-22.016 22.016-57.685333
                0-79.701333-22.016-22.016-57.685333-22.016-79.701333 0L510.293333 440.832 233.984
                164.522667c-22.016-22.016-57.685333-22.016-79.701333 0-22.016 22.016-22.016 57.685333
                0 79.701333L430.592 520.533333 154.282667 796.842667c-22.016 22.016-22.016 57.685333
                0 79.701333 22.016 22.016 57.685333 22.016 79.701333 0L510.293333 600.234667l276.309334
                276.309333c22.016 22.016 57.685333 22.016 79.701333 0 22.016-22.016 22.016-57.685333
                0-79.701333L589.994667 520.533333z">
              </path>
            </svg>
          </div>
          <div class="delete-yes" @click="confirmDelete(index)">
            <svg viewBox="0 0 1024 1024">
              <path d="M914.030911 321.988412c36.942377-42.659589
              43.73099-104.642269 15.033391-137.729851-28.691459-33.096792-82.397638-25.289989-119.346155
              17.364483L478.375693 584.006987c-36.987403 42.642193-97.452519 42.642193-134.402059 0L213.74564
               433.728332c-36.954657-42.690288-90.669022-50.484811-119.346155-17.364483-28.688389 33.090653-21.915126
               95.045703 15.037485 137.693012l234.741325 270.889617c36.968983 42.644239 90.691535 50.488905
                119.348202 17.35732 28.699646-33.075303 52.109822-60.231803 52.061726-60.276828-0.058328-0.058328
                30.113855-35.0554 67.094094-77.69964L914.030911 321.988412z">
              </path>
            </svg>
          </div>
          <div class="delete-no" @click="clickDelete(index)">
            <svg viewBox="0 0 1024 1024">
              <path d="M589.994667 520.533333l276.309333-276.309333c22.016-22.016 22.016-57.685333
                0-79.701333-22.016-22.016-57.685333-22.016-79.701333 0L510.293333 440.832 233.984
                164.522667c-22.016-22.016-57.685333-22.016-79.701333 0-22.016 22.016-22.016 57.685333
                0 79.701333L430.592 520.533333 154.282667 796.842667c-22.016 22.016-22.016 57.685333
                0 79.701333 22.016 22.016 57.685333 22.016 79.701333 0L510.293333 600.234667l276.309334
                276.309333c22.016 22.016 57.685333 22.016 79.701333 0 22.016-22.016 22.016-57.685333
                0-79.701333L589.994667 520.533333z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { viewBrowseLog, removeBrowseLog } from "@/api/browseLog";

export default {
  name: "index",
  data() {
    return {
      logItems: null,
      totalItems: undefined,
      isDelete:-1,
      toDelete:-1
    };
  },
  methods: {
    clickDelete(index) {
      if(this.isDelete === index) {
        this.isDelete = -1
      }else {
        this.isDelete = index
      }
    },
    confirmDelete(index) {
      this.isDelete = -1

      this.toDelete = index
      setTimeout(() => {
        this.toDelete = -1
        let productId = this.logItems[index].product.productId
        this.logItems.splice(index,1)

        removeBrowseLog({
          username: this.$store.state.username,
          productIdList: [productId]
        })
      },1000)
    },
    clickDetail(index) {
      this.$router.push({path: '/main/product', query: {productId: this.logItems[index].product.productId}})
    }
  },
  created() {
    viewBrowseLog(this.$store.state.username).then(res => {
      console.log(res)
      this.logItems = res.browseLogItems.reverse();
      this.totalItems = res.numberOfItems;
    }).catch(err => {
      console.log(err);
    });

  }
}
</script>

<style scoped lang="scss">

.log-container {
  width: 100vw;
  height: 88vh;
  background-color: #A0EEE1;
  position: relative;

  .log-content {
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    width: 80%;
    height: 85%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    .log-tips {
      position: absolute;
      left: 20px;
      top: 20px;
      font-weight: bold;
      color: #11564b;
      font-size: 20px;

    }

    .log-real-content {
      width: 95%;
      height: 80%;
      position: absolute;
      left: 50%;
      bottom: 5%;
      transform: translateX(-50%);
      background-color: #11564b;
    }

    .empty-list {
      width: 40%;
      height: 60%;
      border: 5px dashed #11564b;
      border-radius: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      user-select: none;

      .tips {
        width: max-content;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #11564b;
        bottom: 10%;
        font-size: 22px;
        font-weight: bold;
      }

      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 10%;
        height: 60%;
      }
    }

    .list {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: 15%;
      width: 90%;
      height: 70%;
      overflow-x: hidden;
      overflow-y: auto;

      .list-item {
        box-sizing: border-box;
        width: 90%;
        min-height: 30%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        border-radius: 10px;
        margin-top: 40px;
        margin-left: 5%;
        border-left: 3px solid #11564b;
        border-right: 3px solid #11564b;
        padding: 10px 40px;
        transition: box-shadow .5s;
        counter-increment: order-counter;


        &.delete-cart-item {
          animation: move 1s;
        }

        @keyframes move {
          100% {
            opacity: 0;
            transform: translateX(300px);
          }
        }

        .detail-img {
          flex: 0 0 20%;
          position: relative;
          cursor: pointer;
          svg {
            width: 70px;
            height: 70px;
            transition: transform .5s;
            transform-origin: top center;
          }
          &:hover {
            svg {
              transform: scale(0.7);
            }
            &::after {
              opacity: 1;
              visibility: visible;
              transform: translate(-50%, 0);
            }
          }
          &::after {
            content: 'click for details';
            position: absolute;
            width: max-content;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 10px);
            color: #11564b;
            font-weight: bold;
            font-size: 16px;
            opacity: 0;
            visibility: hidden;
            transition: opacity .5s, visibility .5s, transform .5s;
          }
        }

        .order-id, .total-price {
          flex: 1 1 10%;
          position: relative;
          font-weight: bold;
          color: #11564b;
          font-size: 22px;
          text-align: left;
        }

        .order-id {
          left: 35px;
        }

        .order-time {
          flex: 1 1 10%;
          position: relative;
          left: 25px;
          margin: 0 50px 0 50px;
          color: #11564b;
          font-size: 16px;
          text-align: left;
        }

        .total-cost {
          left: 40px;
          span {
            position: relative;
            left: 50px;
          }
        }

        .order-delete
        {
          cursor: pointer;
          position: relative;
          z-index: 1;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #D6D5B7;
          border: 3px solid #11564b;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color .5s, color .5s, width .5s, border-radius .5s;
          &.delete-active {
            width: 200px;
            border-radius: 10px;
            cursor: default;
            &::after {
              content: 'delete? ';
              width: max-content;
              position: absolute;
              top: 50%;
              left: 5%;
              transform: translateY(-50%);
              color: #11564b;
              font-weight: bold;
              font-size: 18px;
            }
            svg {
              display: none;
            }
            & ~ .delete-yes, & ~ .delete-no {
              opacity: 1;
              visibility: visible;
              pointer-events: auto;
              cursor: pointer;
            }
          }
          svg {
            fill: #11564b;
            width: 22px;
            height: 22px;
            transition: fill .5s;
          }
          &:not(.delete-active):hover {
            color: #D6D5B7;
            background-color: #11564b;
            svg {
              fill: #D6D5B7;
            }
          }
        }

        .delete-yes, .delete-no {
          width: 26px;
          height: 26px;
          position: absolute;
          border-radius: 50%;
          border: 3px solid #11564b;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity .5s, visibility .5s, background-color .5s;
          svg {
            width: 22px;
            height: 22px;
            fill: #11564b;
            transition: fill .5s;
          }
          &:hover {
            background-color: #11564b;
            svg {
              fill: #D6D5B7;
            }
          }
        }

        .delete-yes {
          right: 180px;
        }

        .delete-no {
          right: 135px;
        }

        &:first-child {
          margin-top: 25px;
        }

        &:last-child {
          margin-bottom: 25px;
        }

        &:hover {
          box-shadow: 0 0 20px 2px #11564b;
        }

      }

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

    }


  }



}


</style>
