<template>
  <div class="order-list-content">
    <div class="order-list">
      <div class="order-list-title">
        <img src="@/assets/image/svg/index/order.svg" alt="">
        <div class="order-list-text">Order List</div>
      </div>
      <div class="empty-list" v-if="listItems.length === 0">
        <img src="@/assets/image/svg/index/noCategory.svg" alt="">
        <div class="tips">Sorry, Your order list is empty.</div>
      </div>
      <div class="list" v-else>
        <div class="list-item" v-for="(item,index) in listItems" :key="item.orderId" :class="{'delete-cart-item': toDelete==index}">
          <div class="detail-img" @click="clickDetail(index)">
            <img src="@/assets/image/svg/order/orderId.svg" alt="">
          </div>
          <div class="order-id">{{item.orderId}}</div>
          <div class="order-time">{{item.orderTime}}17:32:54 18/05/2021</div>
          <div class="total-price">${{item.totalPrice}}</div>
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
          <hr v-if="showDetail == index">
          <div class="detail" v-if="showDetail == index">
            <detail-item v-for="detail in item.detail" :detail="detail"></detail-item>
          </div>
        </div>
      </div>
      <div class="order-counter">
        There are&nbsp;<span></span>&nbsp;orders in total.
      </div>
      <div class="total-cost">Total Cost: ${{sumPrice}}</div>
    </div>
  </div>
</template>

<script>
import DetailItem from "@/views/orderList/detailItem";
export default {
  name: "orderList",
  components: {DetailItem},
  data() {
    return {
      isDelete:-1,
      toDelete:-1,
      showDetail:-1,
      listItems: [
        {
          orderId: '#1001',
          orderTime: '17:32:54 18/05/2021',
          totalPrice: 240,
          detail: [
            {
              productName: 'NB',
              quantity: 4,
              price: 25,
              hasEvaluated: true
            },
            {
              productName: 'NB',
              quantity: 4,
              price: 25,
              hasEvaluated: false
            }
          ]
        },
        {
          orderId: '#1002',
          orderTime: '17:32:54 18/05/2021',
          totalPrice: 240,
          detail: [
            {
              productName: 'NB',
              quantity: 4,
              price: 25,
              hasEvaluated: true
            }
          ]
        },
        {
          orderId: '#1003',
          orderTime: '17:32:54 18/05/2021',
          totalPrice: 240,
          detail: [
            {
              productName: 'NB',
              quantity: 4,
              price: 25,
              hasEvaluated: true
            },
            {
              productName: 'NB',
              quantity: 4,
              price: 25,
              hasEvaluated: true
            }
          ]
        }
      ]
    }
  },
  computed: {
    sumPrice() {
      return this.listItems.reduce((a,c) => a + c.totalPrice, 0)
    }
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
        this.listItems.splice(index,1)
      },1000)
    },
    clickDetail(index) {
      if(this.showDetail === index) {
        this.showDetail = -1
      }else {
        this.showDetail = index
      }
    }
  }
}
</script>

<style scoped lang="scss">
body {
  background-color: #A0EEE1;
}

.order-list-content {
  overflow-x: auto;
  background-color: #A0EEE1;
  position: relative;
  width: 100vw;
  height: 88vh;

  .order-list {
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    min-width: 1300px;
    width: 80%;
    height: 85%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    counter-reset: order-counter;

    .order-list-title {
      position: absolute;
      left: 50%;
      top: 3%;
      transform: translate(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 60px;
        height: 60px;
      }

      .order-list-text {
        font-size: 30px;
        font-weight: bold;
        color: #11564b;
        position: relative;
        width: max-content;
        height: max-content;

        &::before {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 100%;
          right: 50%;
          top: 0;
          border-bottom: 4px solid #11564b;
          transition: width 1s;
        }

        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 0;
          height: 100%;
          left: 50%;
          top: 0;
          border-bottom: 4px solid #11564b;
          transition: width 1s;
          margin-left: -1px;
        }

        &:hover::before {
          width: 50%;
        }

        &:hover::after {
          width: 50%;
        }

      }

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
        justify-content: space-around;
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


        .detail {
          width: 100%;
        }

        hr {
          width: 100%;
        }

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
          position: relative;
          cursor: pointer;
          img {
            width: 70px;
            height: 70px;
            transition: transform .5s;
            transform-origin: top center;
          }
          &:hover {
            img {
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
          position: relative;
          font-weight: bold;
          color: #11564b;
          font-size: 22px;
          text-align: center;
        }

        .order-id {
          left: 35px;
        }

        .order-time {
          position: relative;
          left: 25px;
          margin: 0 50px 0 50px;
          color: #11564b;
          font-size: 16px;
        }

        .total-cost {
          left: 40px;
          span {
            position: relative;
            left: 50px;
          }
        }

        .order-delete {
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
            width: 180px;
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

    .order-counter {
      position: absolute;
      font-weight: bold;
      font-size: 22px;
      color: #11564b;
      left: 5%;
      bottom: 25px;

      span::after {
        color: red;
        content: counter(order-counter);
      }

    }

    .total-cost {
      position: absolute;
      font-weight: bold;
      font-size: 22px;
      color: #11564b;
      right: 5%;
      bottom: 25px;
    }

  }

}

</style>
