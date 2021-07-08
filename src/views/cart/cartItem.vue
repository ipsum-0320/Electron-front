<template>
  <div class="cart-item" :class="{ 'delete-cart-item': isDeleting }">
    <input type="checkbox" class="real-delete-checked" :id="cartItem.item.product.productId">
    <label class="fake-delete-checked" :for="cartItem.item.product.productId">
      <img src="@/assets/image/svg/cart/checked.svg" alt="" class="checked-icon">
    </label>
    <div class="cart-item-img">
      <img src="@/assets/image/petImg/dog/dogImg1.jpg" alt="">
    </div>
    <div class="productId">{{cartItem.item.product.name}}</div>
    <div class="description">{{cartItem.item.product.description}}</div>
    <div class="product-price">${{cartItem.item.listPrice}}<span>×</span></div>
    <div class="cart-quantity-content">
      <div class="minus-btn" :class="{'negative': isMinusNegative}" @click="subItem()"><span>－</span></div>
      <input type="text" disabled class="cart-quantity-text" :value="cartItem.quantity">
      <div class="add-btn" @click="addItem()"><span>＋</span></div>
    </div>
    <div class="product-delete" @click="deleteItem">
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
  </div>
</template>

<script>

export default {
  name: "cartItem",
  data() {
    return {
      isMinusNegative: false,
      isDeleting: false
    };
  },
  props: {
    cartItem: Object,
  },
  methods: {
    subItem() {
      this.cartItem.quantity--;
      if (this.cartItem.quantity === 1) {
        this.isMinusNegative = true;
      }
      this.$emit('sub');
    },
    addItem() {
      this.cartItem.quantity++;
      if (this.cartItem.quantity !== 1) {
        this.isMinusNegative = false;
      }
      this.$emit('add');
    },
    deleteItem() {
      this.isDeleting = true;
      setTimeout(() => {
        this.$emit('deleteItem');
      }, 1000);
    },
    /*
      删除v-for元素时，为什么会出现穿透？
      亲测，这个 key 是相关的，我们之后在使用 v-for 时，最好与 key 相结合。
     */
  },
  mounted() {
    if (this.cartItem.quantity === 1) {
      this.isMinusNegative = true;
    }
  }
}
</script>

<style scoped lang="scss">
  .cart-item {
    box-sizing: border-box;
    width: 90%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 40px;
    margin-left: 5%;
    border-left: 3px solid #11564b;
    border-right: 3px solid #11564b;
    padding: 10px 40px;
    transition: box-shadow .5s;

    &.delete-cart-item {
      animation: move 1s;
      .fake-delete-checked {
        display: none;
      }
    }

    @keyframes move {
      100% {
        opacity: 0;
        transform: translateX(300px);
      }
    }

    .real-delete-checked {
      position: absolute;
      clip: rect(0, 0, 0, 0);
      &:checked + .fake-delete-checked {
        background-color: #11564b;
        counter-increment: selected;
        .checked-icon {
          opacity: 1;
        }
      }
    }

    .fake-delete-checked {
      box-sizing: border-box;
      cursor: pointer;
      background-color: #D6D5B7;
      border: 3px solid #11564b;
      position: absolute;
      left: 0;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color .5s;
      .checked-icon {
        user-select: none;
        opacity: 0;
        width: 25px;
        height: 25px;
        transition: opacity .5s;
      }
    }

    .cart-item-img {
      cursor: pointer;
      position: relative;
      img {
        border-radius: 50%;
        width: 15vh;
        height: 15vh;
        object-fit: cover;
        box-shadow: 0 0 10px 2px #11564b;
        transition: transform .5s;
        transform-origin: top center;
      }
      &::after {
        content: 'click here for details';
        position: absolute;
        width: max-content;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 20px);
        color: #11564b;
        font-weight: bold;
        font-size: 16px;
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s, visibility .5s, transform .5s;
      }
      &:hover {
        img {
          transform: scale(0.8);
        }
        &::after {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
        }
      }
    }

    .description {
      position: relative;
      left: 25px;
      margin: 0 50px 0 50px;
      color: #11564b;
      font-size: 16px;
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
      }

      input[type="text"] {
        all: unset;
        display: inline-block;
        text-align: center;
        width: 50px;
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
</style>
