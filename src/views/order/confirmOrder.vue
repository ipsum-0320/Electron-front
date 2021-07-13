<template>
  <div class="confirm-order">
    <div class="confirm-order-content">
      <div class="confirm-order-content-item">
        <fieldset>
          <legend>
            <img src="@/assets/image/svg/order/information.svg" alt="">
            Order Information
          </legend>
          <span><img src="@/assets/image/svg/signIn/account.svg" alt="">Curry</span>
          <span><img src="@/assets/image/svg/signIn/phone.svg" alt="">0819-234921</span>
          <span><img src="@/assets/image/svg/signIn/address.svg" alt="">Railway Institute</span>
          <span><img src="@/assets/image/svg/signIn/city.svg" alt="">Chang Sha</span>
          <span><img src="@/assets/image/svg/signIn/state.svg" alt="">Hu Nan</span>
          <span><img src="@/assets/image/svg/signIn/country.svg" alt="">China</span>
        </fieldset>
      </div>
      <div class="confirm-order-content-item">
        <fieldset class="show-cart-item">
          <legend>
            <img src="@/assets/image/svg/navbar/pet.svg" alt="">
            Purchased Pets
          </legend>
          <div class="cart-items">
            <div class="empty-cart" v-if="cart.object.cartItems.length == 0">
              <img src="@/assets/image/svg/index/noCategory.svg" alt="">
              <div class="tips">Sorry, no pets in your order.</div>
            </div>
            <cart-item v-for="(cartItem, index) in cart.object.cartItems" :cartItem="cartItem" :index="index" :show-input="false" @deleteItem="deleteItem()" :key="cartItem.item.product.productId" ></cart-item>
          </div>
        </fieldset>
      </div>
      <div class="cart-items-quantity">There are&nbsp;<span></span>&nbsp;kinds of pets in total.</div>
      <div class="cart-items-sub-total">Sub Total: ${{ subTotal }}</div>
    </div>
    <div class="previous-step-btn p-btn-in-confirm" @click="clickPrevious()">
      <svg viewBox="0 0 1000 1000">
        <path d="M389.66666667 144.33333333l-333.33333333 333.33333334c-26.03338667
        26.03338667-26.03338667 68.23338667 0 94.26666666l333.33333333 333.33333334c26.03338667
        26.03338667 68.23338667 26.03338667 94.26666667 0 26.03338667-26.03338667 26.03338667-68.23338667
        0-94.26666667l-219.53333334-219.53333333 639.06666666 0c36.83338667 0 66.66666667-29.83338667
         66.66666668-66.66666668s-29.83338667-66.66666667-66.66666667-66.66666666l-639.06666667
          0 219.53333334-219.53333333c13-13 19.53333333-30.06666667
          19.53333333-47.13333332s-6.50005333-34.13333333-19.53333333-47.13333335c-26.03338667-26.03338667-68.23338667-26.03338667-94.26666667 0z">
        </path>
      </svg>
      Previous
    </div>
    <div class="next-step-btn n-btn-in-confirm" @click="clickNext()">
      Next
      <svg viewBox="0 0 1000 1000">
        <path d="M389.66666667 144.33333333l-333.33333333 333.33333334c-26.03338667
        26.03338667-26.03338667 68.23338667 0 94.26666666l333.33333333 333.33333334c26.03338667
        26.03338667 68.23338667 26.03338667 94.26666667 0 26.03338667-26.03338667 26.03338667-68.23338667
        0-94.26666667l-219.53333334-219.53333333 639.06666666 0c36.83338667 0 66.66666667-29.83338667
         66.66666668-66.66666668s-29.83338667-66.66666667-66.66666667-66.66666666l-639.06666667
          0 219.53333334-219.53333333c13-13 19.53333333-30.06666667
          19.53333333-47.13333332s-6.50005333-34.13333333-19.53333333-47.13333335c-26.03338667-26.03338667-68.23338667-26.03338667-94.26666667 0z">
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
import CartItem from "@/views/cart/cartItem";
export default {
  name: "confirmOrder",
  components: {CartItem},
  data() {
    return {
      cart: {
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
      },
      isItemDeleting: null
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
  methods: {
    clickPrevious() {
      this.$emit('switch-previous',-1)
    },
    clickNext() {
      this.$emit('switch-next',1)
    },
    deleteItem(index) {
      this.cart.object.cartItems.splice(index, 1);
    }
  }
}
</script>

<style scoped lang="scss">
.order-container {
.confirm-order {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  width: 80%;
  height: 75%;
  border-radius: 10px;
  border: 5px solid #11564b;
  background-color: #D6D5B7;

.confirm-order-content {
  width: 90%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  overflow-x: hidden;
  overflow-y: auto;
  counter-reset: cart-item;

.confirm-order-content-item {
  font-weight: bold;
  font-size: 18px;
  color: #11564b;
  position: relative;

&:not(:last-child) {
   margin-bottom: 5px;
 }

fieldset {
  border-radius: 10px;
  border: 3px solid #11564b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
legend, span {
  display: flex;
  justify-content: center;
  align-items: center;
img {
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-right: 5px;
}
}
}

.show-cart-item {
  overflow: hidden;
  height: 230px;
  display: block;
  position: relative;

span {
  display: inline;
}

.cart-items {
  overflow-y: auto;
  overflow-x: hidden;
  width: 95%;
  height: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

.empty-cart {
  width: 30%;
  height: 70%;
  border: 5px dashed #11564b;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-align: center;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

.tips {
  color: #11564b;
  position: relative;
  top: 10%;
  font-size: 20px;
  font-weight: bold;
}

img {
  position: relative;
  top: 8%;
  width: 60%;
  height: 60%;
}
}

.cart-item {
  box-sizing: border-box;
  width: 95%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 30px;
  border-left: 3px solid #11564b;
  border-right: 3px solid #11564b;
  padding: 10px 40px;
  transition: box-shadow .5s;
  counter-increment: cart-item;

&.delete-cart-item {
   animation: move 1s;
 }

@keyframes move {
  100% {
    opacity: 0;
    transform: translateX(300px);
  }
}

img {
  border-radius: 50%;
  width: 15vh;
  height: 15vh;
  object-fit: cover;
  box-shadow: 0 0 10px 2px #11564b;
}

.description {
  position: relative;
  left: 25px;
  margin: 0 50px 0 50px;
  color: #11564b;
  font-size: 16px;
  width: max-content;
}

.productId, .product-price {
  position: relative;
  font-weight: bold;
  color: #11564b;
  font-size: 22px;
  text-align: center;
}

.productId {
  left: 35px;
}

.product-price {
  left: 40px;
span {
  position: relative;
  left: 50px;
}
}

.cart-quantity-content {
  display: inline-block;
  width: 35%;
  position: relative;
  left: 130px;

.add-btn, .minus-btn {
  all: unset;
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 25px;
  font-weight: bold;
  font-size: 20px;
  color: #11564b;
  border: 3px solid #11564b;
  background-color: #D6D5B7;
  transition: color .5s, background-color .5s;
  user-select: none;
&:hover {
   color: #D6D5B7;
   background-color: #11564b;
 }
span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
&::before {
   content: '-';
   opacity: 0;
   visibility: hidden;
 }
}

.minus-btn {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
&.negative {
   pointer-events: none;
   color: #808080;
 }
&.negative::after {
   position: absolute;
   top: -1px;
   left: -1px;
   width: 27px;
   height: 28.4px;
   border-top-left-radius: 8px;
   border-bottom-left-radius: 8px;
   content: '';
   background-color: #808080;
   opacity: .7;
 }
}

.add-btn {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  left: -2px;
}

input[type="text"] {
  all: unset;
  display: inline-block;
  text-align: center;
  width: 52px;
  position: relative;
  left: -1px;
  border-top: 3px solid #11564b;
  border-bottom: 3px solid #11564b;
  margin-left: -5px;
  margin-right: -5px;
  font-weight: bold;
  font-size: 20px;
  color: #11564b;
}

}

.product-delete {
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
  transition: background-color .5s, color .5s;
svg {
  fill: #11564b;
  width: 22px;
  height: 22px;
  transition: fill .5s;
}
&:hover {
   color: #D6D5B7;
   background-color: #11564b;
svg {
  fill: #D6D5B7;
}
}
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

.cart-items-quantity, .cart-items-sub-total {
  position: absolute;
  font-weight: bold;
  font-size: 22px;
  color: #11564b;
}

.cart-items-quantity {
  margin-top: 5px;
  left: 5px;
span::after {
  content: counter(cart-item);
  color: red;
}
}

.cart-items-sub-total {
  margin-top: 5px;
  right: 5px;
}

}

&.order-part-active {
   display: block;
 }

.previous-step-btn {
  left: 25%;
  bottom: 20px;
}

.next-step-btn {
  right: 25%;
  bottom: 20px;
}

}
}

.next-step-btn, .previous-step-btn {
  width: 130px;
  height: 40px;
  border: 3px solid #11564b;
  background-color: #D6D5B7;
  color: #11564b;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color .5s, color .5s;

  svg {
    display: inline-block;
    transform: rotate(180deg);
    width: 25px;
    fill: #11564b;
    transition: fill .5s;
    margin-left: 5px;
    margin-right: 0;
  }

  &:hover {
    color: #D6D5B7;
    background-color: #11564b;
    svg {
      fill: #D6D5B7;
    }
  }

}

.previous-step-btn {
  svg {
    margin-left: 0;
    margin-right: 5px;
    transform: rotate(0);
  }
}
</style>