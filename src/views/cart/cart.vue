<template>
  <div class="cart-content">
    <div class="cart">
      <div class="cart-main-content">
        <div class="empty-cart" :class="{ 'show': isEmptyShow }">
          <img src="@/assets/image/svg/index/noCategory.svg" alt="">
          <div class="tips">Sorry, Your cart is empty.</div>
        </div>
        <div class="cart-items">
          <cart-item v-for="(cartItem, index) in cart.object.cartItems" :cartItem="cartItem" :index="index" @sub="subItem(index)" @add="addItem(index)" @deleteItem="deleteItem(index)" :key="cartItem.item.product.productId" :class="{ 'delete-cart-item': isItemDeleting[index] }"></cart-item>
        </div>
      </div>
      <div class="delete" @click="deleteItems">
        Delete
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
      <div class="have-selected">You have selected&nbsp;<span></span>&nbsp;items.</div>
      <div class="sub-total">Sub Total: ${{subTotal}}</div>
      <div class="payment">Payment</div>
    </div>
  </div>
</template>

<script>

import cartItem from "@/views/cart/cartItem";

export default {
  name: "cart",
  data () {
    return {
      cart: null,
      isItemDeleting: null,
      isEmptyShow: undefined
    }
  },
  components: {
    cartItem
  },
  methods:{
    subItem(index) {
      console.log(this.cart.object.cartItems[index].quantity);
    },
    addItem(index) {
      console.log(this.cart.object.cartItems[index].quantity);
    },
    deleteItems() {
      let checked_items = document.querySelectorAll('[type="checkbox"]:checked');
      for (let i = 0; i < checked_items.length; i++) {
        let index = checked_items[i].parentNode.getAttribute('index');
        this.isItemDeleting[index] = true;
        let id = this.cart.object.cartItems[index].item.product.productId;
        setTimeout(() => {
          for (let i = 0; i < this.cart.object.cartItems.length; i++) {
            if (this.cart.object.cartItems[i].item.product.productId === id) {
              this.isItemDeleting[i] = false;
              this.cart.object.cartItems.splice(i, 1);
              this.isItemDeleting.splice(0, 1);
              this.isEmptyShow = this.cart.object.cartItems.length === 0;
            }
          }
        }, 1000);
      }
    },
    deleteItem(index) {
      this.cart.object.cartItems.splice(index, 1);
      this.isEmptyShow = this.cart.object.cartItems.length === 0;
    }
  },
  computed: {
    subTotal() {
      let total = 0;
      for (let i = 0; i < this.cart.object.cartItems.length; i++) {
        total += this.cart.object.cartItems[i].item.listPrice * this.cart.object.cartItems[i].quantity;
      }
      return total;
    }
  },
  created() {
    this.cart= {
      object:{
        subTotal:55.5,
        cartItems:[
          {
            item:{
              itemId:'EST-13',
              productId:null,
              listPrice:18.5,
              unitCost:null,
              attribute1:'Green Adult',
              attribute2:'白',
              attribute3:'雄',
              attribute4:null,
              attribute5:null,
              product:{
                productId: 'RP-LI-01',
                categoryId:'REPTILES',
                name:'1',
                description:'Friendly green friend',
                picture:null,
                publishStatus:1
              },
              quantity:9999
            },
            quantity: 2,
            inStock:true,
            total:37
          },
          {
            item:{
              itemId:'EST-13',
              productId:null,
              listPrice:19.5,
              unitCost:null,
              attribute1:'Green Adult',
              attribute2:'白',
              attribute3:'雄',
              attribute4:null,
              attribute5:null,
              product:{
                productId: 'RP-LI-02',
                categoryId:'REPTILES',
                name:'2',
                description:'Friendly green friend',
                picture:null,
                publishStatus:1
              },
              quantity:9999
            },
            quantity: 2,
            inStock:true,
            total:37
          },
          {
            item:{
              itemId:'EST-13',
              productId:null,
              listPrice:20.5,
              unitCost:null,
              attribute1:'Green Adult',
              attribute2:'白',
              attribute3:'雄',
              attribute4:null,
              attribute5:null,
              product:{
                productId: 'RP-LI-03',
                categoryId:'REPTILES',
                name:'3',
                description:'Friendly green friend',
                picture:null,
                publishStatus:1
              },
              quantity:9999
            },
            quantity: 2,
            inStock:true,
            total:37
          }
        ]
      }
    }
    this.isItemDeleting = new Array(this.cart.object.cartItems.length);
    for (let i = 0; i < this.isItemDeleting.length; i++) {
      this.isItemDeleting[i] = false;
    }
    this.isEmptyShow = this.cart.object.cartItems.length === 0;
  }
}
</script>

<style scoped lang="scss">
.cart-content {
  position: relative;
  width: 100vw;
  height: 88vh;
  background-color: #A0EEE1;

  .cart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 85%;
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    counter-reset: selected;

    .cart-main-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -57%);
      width: 90%;
      height: 80%;
      overflow-x: hidden;
      overflow-y: auto;

      .empty-cart {
        width: 30%;
        height: 40%;
        border: 5px dashed #11564b;
        border-radius: 10px;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &.show {
          display: flex;
        }

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

    .payment, .delete {
      width: 130px;
      height: 35px;
      background-color: #D6D5B7;
      border-radius: 10px;
      border: 3px solid #11564b;
      position: absolute;
      bottom: 20px;
      font-weight: bold;
      font-size: 18px;
      color: #11564b;
      cursor: pointer;
      transition: background-color .5s, color .5s;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #D6D5B7;
        background-color: #11564b;
        svg {
          fill: #D6D5B7;
        }
      }
    }

    .payment {
      right: 5%;
    }

    .delete {
      left: 5%;
      svg {
        fill: #11564b;
        width: 22px;
        height: 22px;
        margin-left: 5px;
        transition: fill .5s;
      }
    }

    .sub-total,.have-selected {
      height: 35px;
      position: absolute;
      bottom: 20px;
      font-weight: bold;
      font-size: 18px;
      color: #11564b;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 1px;
    }

    .sub-total {
      width: 200px;
      right: calc(140px + 5%);
    }

    .have-selected {
      width: 270px;
      left: calc(160px + 5%);
      span::after {
        color: red;
        content: counter(selected);
      }
    }

  }
}

</style>
