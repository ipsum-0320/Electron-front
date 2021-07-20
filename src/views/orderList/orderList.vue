<template>
  <div class="order-list-content">
    <div class="order-list">
      <div class="order-list-title">
        <img src="@/assets/image/svg/index/order.svg" alt="">
        <div class="order-list-text">Order List</div>
      </div>
      <div class="empty-list" v-if="listItems === null || listItems.length === 0">
        <img src="@/assets/image/svg/index/noCategory.svg" alt="">
        <div class="tips">Sorry, Your order list is empty.</div>
      </div>
      <div class="list" >
        <div class="list-item" v-if="listItems !== null" v-for="(item,index) in listItems" :key="item.orderId" :class="{'delete-cart-item': toDelete===index}">
          <div class="detail-img" @click="clickDetail(index)">
            <img src="@/assets/image/svg/order/orderId.svg" alt="">
          </div>
          <div class="order-id">#{{item.orderId}}</div>
          <div class="order-time">{{item.orderDate}}</div>
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
          <hr v-if="showDetail === index">
          <div class="detail" v-if="showDetail === index">
            <detail-item v-for="detail in details" :info="{detail:detail,orderId:item.orderId}" @write-comment="writeComment"></detail-item>
          </div>
        </div>
      </div>
      <div class="order-counter">
        There are&nbsp;<span v-if="listItems !== null">{{listItems.length}}</span>&nbsp;orders in total.
      </div>
      <div class="total-cost">Total Cost: ${{sumPrice}}</div>
    </div>
    <el-dialog v-model="isDialogShow" destroy-on-close>
      <div class="dialog-title">Write Your Comment</div>
      <div class="dialog-rate">
        <rate ref="star" :star="commentOn.detail.stars"></rate>
      </div>
      <div class="content-description">
        <textarea :disabled="commentOn.detail.context != null"  class="content-description-input" ref="textarea" :value="commentOn.detail.context"/>
      </div>
      <div class="confirm-btn dialog-btn" @click="confirm" :class="{'has-commented-btn': commentOn.detail.hasCommented}">
        <span>comment</span>
        <svg viewBox="0 0 1024 1024"><path d="M915.515 142.82L98.213 458.2c-46.058 17.772-44.905 43.6 2.349 57.622l197.477 58.595 80.292 238.91c10.512 31.279 37.973 37.875 61.463 14.605L543.378 725.32l204.475 149.84c26.566 19.468 53.879 9.222 61.05-23.09l149.21-672.345c7.151-32.22-11.894-48.753-42.598-36.906zM791.141 294.833l-348.62 310.61c-6.268 5.586-11.941 16.653-12.812 24.847l-15.39 144.698c-1.729 16.248-7.331 16.919-12.498 1.345l-67.457-203.339c-2.64-7.954 0.976-17.705 8.022-21.93L784.5 285.882c28.174-16.898 31.173-12.907 6.64 8.951z"></path></svg>
      </div>
      <div class="cancel-btn dialog-btn" @click="cancel">
        <span>Cancel</span>
        <svg viewBox="0 0 1024 1024"><path d="M693.527273 512l311.854545-311.854545c18.618182-18.618182 18.618182-55.854545 0-79.127273L902.981818 18.618182C884.363636 0 847.127273 0 823.854545 18.618182L512 330.472727 200.145455 13.963636C176.872727-4.654545 139.636364-4.654545 121.018182 13.963636L13.963636 121.018182c-18.618182 18.618182-18.618182 55.854545 0 79.127273L330.472727 512 18.618182 823.854545c-18.618182 18.618182-18.618182 55.854545 0 79.127273l102.4 102.4c18.618182 18.618182 55.854545 18.618182 79.127273 0l311.854545-311.854545 311.854545 311.854545c18.618182 18.618182 55.854545 18.618182 79.127273 0l102.4-102.4c18.618182-18.618182 18.618182-55.854545 0-79.127273L693.527273 512z"></path></svg>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import DetailItem from "@/views/orderList/detailItem";
import {listOrders, getCommentByOrderId} from "@/api/order";
import {makeComment} from "@/api/comment";
import { ElDialog } from 'element-plus';
import { ElRate } from 'element-plus'
import Rate from "@/views/orderList/rate";
import {viewProduct} from "@/api/catalog";

export default {
  name: "orderList",
  components: {Rate, DetailItem,ElDialog,ElRate},
  data() {
    return {
      isDelete:-1,
      toDelete:-1,
      showDetail:-1,
      details: [],
      isDialogShow:false,
      commentOn: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      listItems: null
    }
  },
  computed: {
    sumPrice() {
      if(this.listItems === null) return
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
      this.isDelete = -1;
      this.toDelete = index;
      setTimeout(() => {
        this.toDelete = -1
        this.listItems.splice(index,1)
      },1000)
    },
    clickDetail(index) {
      this.isDelete = -1
      if(this.showDetail === index) {
        this.showDetail = -1
      }else {
        this.details = []
        this.showDetail = index
        let orderId = this.listItems[index].orderId
        getCommentByOrderId(orderId).then(async data => {
          for(let i = 0; i < this.listItems[index].lineItems.length; i++) {
            let hasCommented = false
            let context = null
            let stars = 0
            let productId = this.listItems[index].lineItems[i].item.product.productId
            let productName = this.listItems[index].lineItems[i].item.product.name
            let price = this.listItems[index].lineItems[i].item.listPrice
            let quantity = this.listItems[index].lineItems[i].quantity
            for(let j = 0; j < data.length; j++) {
              if(productId === data[j].productId) {
                hasCommented = true
                context = data[j].context
                stars = data[j].stars
                break;
              }
            }
            let product = await viewProduct(productId);
            let product_picture = product.product.picture;
            this.details.push({
              hasCommented,
              context,
              stars,
              productId,
              productName,
              price,
              quantity,
              product_picture
            })
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    writeComment(comment) {
      this.isDialogShow = true;
      this.commentOn = comment;
    },
    confirm() {
      this.isDialogShow = false
      let context = this.$refs.textarea.value
      let stars = this.$refs.star.isShow
      let orderId = this.commentOn.orderId
      let productName = this.commentOn.detail.productName
      let productId = this.commentOn.detail.productId
      let username = this.$store.state.username
      for(let i = 0; i < this.listItems.length; i++) {
        if(this.listItems[i].orderId === orderId) {
          for(let j = 0; j < this.details.length; j++) {
            if(this.details[j].productName === productName) {
              this.details[j].hasCommented = true
              this.details[j].context = context
              this.details[j].stars = stars
            }
          }
        }
      }
      makeComment({productId, username, context, stars, orderId})
    },
    cancel() {
      this.isDialogShow = false
    }
  },
  created() {
    listOrders(this.$store.state.username).then(data => {
      this.listItems = data
    }).catch(err => {
      console.log(err)
    })
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
    //counter-reset: order-counter;

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
          height: 1px;
          border: none;
          border-top: 1px solid #11564b;
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

  & /deep/ .el-overlay .el-dialog{
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    height: 75%;

    .dialog-title {
      font-weight: bold;
      font-size: 30px;
      color: #11564b;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .dialog-rate {
      width: 65%;
      position: absolute;
      top:25%;
      left:50%;
      transform:translateX(-50%);
    }

    .content-title {
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translate(-50%, 0);
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-description {
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, 0);
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;

      .content-description-input {
        all: unset;
        border-radius: 10px;
        border: 3px #11564b solid;
        width: 400px;
        height: 190px;
        letter-spacing: 2px;
        color: #11564b;
        font-weight: bold;
        font-size: 18px;
        padding: 10px;
      }

    }

    .dialog-btn {
      border: 3px #11564b solid;
      border-radius: 10px;
      width: 150px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 30px;
      cursor: pointer;
      transition: background-color .5s;

      span {
        color: #11564b;
        font-size: 18px;
        font-weight: bold;
        margin-right: 5px;
        transition: color .5s;
      }

      svg {
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

    .has-commented-btn {
      background-color: grey;

      &:hover {
        background-color: grey;
        span {
          color: #11564b;
        }
        svg {
          fill: #11564b;
        }
      }
    }

    .confirm-btn {
      left: 20%;
      svg {
        width: 25%;
      }
    }

    .cancel-btn {
      right: 20%;
      span {
        margin-right: 10px;
      }
      svg {
        width: 15%;
      }
    }

  }
}

</style>
