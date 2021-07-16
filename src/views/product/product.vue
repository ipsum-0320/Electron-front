<template>
  <div>
    <div class="product-content">
      <div class="product-title">Bulldog</div>
      <div class="back-to-category" @click="$router.push('/main/category')">
        <span>Back to Category</span>
      </div>
      <div class="check-trigger">
        <span @click="clickTrigger">Check {{checkProduct == true?"Comment":"Product"}}</span>
      </div>
      <transition name="fade">
        <div class="product-container" v-if="checkProduct">
          <div class="product-info">
            <div class="product-main-image" @mousemove="mouseMove()" @mouseleave="mouseLeave()" ref="mainImg">
              <img :src='require("@/assets/image/petImg" + mainImg)' alt="">
              <div class="pointer-box" v-show="isShow" ref="pointerBox"></div>
            </div>
            <div class="thumbnail-images">
              <img v-for="(img,index) in imgs" :src='require("@/assets/image/petImg"+img)' @click="clickImg(index)" alt="" tabindex="-1">
            </div>
          </div>
          <div class="buy-form">
            <img src="@/assets/image/svg/category/uncollection.svg" alt="" @click="triggerCollection" class="uncollection" :class="{active:collectionActive}">
            <img src="@/assets/image/svg/category/collection.svg" alt="" @click="triggerCollection" class="collection" :class="{active: !collectionActive}">
            <div class="enlarge-image" v-show="isShow" ref="enlargeImg">
              <img src="@/assets/image/petImg/dog/dogImg1.jpg" alt="" class="enlarge-image-img" ref="enlargeImgImg">
            </div>
            <form class="buy-form-content">
              <div class="buy-form-info">
                <div class="choose-item">
                  <div class="form-info-title">Item:</div>
                  <div class="choose-item-options">
                    <div class="option-container" v-for="item in itemList">
                      <input ref="itemRadio" type="radio" :id="item.itemId" :key="item.itemId" name="choose-item" class="real-radio">
                      <label :for="item.itemId" class="fake-radio">{{ item.attribute1 + item.attribute2 + item.attribute3 }}</label>
                    </div>
                  </div>
                </div>
                <div class="product-price">
                  <div class="form-info-title">Price:</div>
                  <div class="product-price-content">
                    $200.00
                  </div>
                </div>
                <div class="product-stock">
                  <div class="form-info-title">Stock:</div>
                  <div class="product-stock-content">
                    153 only
                  </div>
                </div>
                <div class="product-quantity">
                  <div class="form-info-title">Quantity:</div>
                  <div class="product-quantity-content">
                    <div class="minus-btn" :class="{negative:quantity === 1}" @click="subQuantity()" ><span>－</span></div>
                    <input type="text" disabled class="product-quantity-text" :value=quantity>
                    <div class="add-btn" @click="addQuantity()"><span>＋</span></div>
                  </div>
                </div>
              </div>
              <div class="buy-form-btn">
                <div class="buy-now-btn" @click="$router.push('/main/order')">Buy now</div>
                <div class="add-cart-btn" :class="{active:addCartActive}" @click="clickAddCart">
                  <span>Add to cart</span>
                  <img src="@/assets/image/svg/web_logo.svg" alt="">
                </div>
              </div>
            </form>
          </div>
        </div>
      </transition>
      <div class="cart-link">
        <svg viewBox="0 0 1024 1024">
          <path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208
     20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968
     37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72
     20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816
     210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944
      53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12
      0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48
       0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8
        0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768
         6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928
         302.08l-641.024-2.048 35.84 185.344 535.552 1.024z">
          </path>
        </svg>
        <div class="cart-num-tip">{{quantityInCart}}</div>
      </div>
      <transition name="fade">
        <comment  v-if="!checkProduct" :product-id="productId"></comment>
      </transition>
    </div>
  </div>
</template>

<script>
import {viewProduct} from "@/api/catalog";
import {viewCart, addItemToCart} from "@/api/cart";
import Comment from "@/views/product/comment";
export default {
  name: "product",
  components: {Comment},
  data() {
    return {
      quantity: 1,
      quantityInCart: null,
      collectionActive: false,
      addCartActive: false,
      imgs: [
        "/dog/dogImg1.jpg",
        "/dog/dogImg2.jpg",
        "/dog/dogImg3.jpg",
        "/dog/dogImg4.jpg"
      ],
      mainImgIndex: 0,
      isShow: false,
      checkProduct: true,
      productId: null,
      itemList: null
    }
  },
  computed: {
    mainImg() {
      return this.imgs[this.mainImgIndex]
    }
  },
  methods: {
    subQuantity() {
      this.quantity--
    },
    addQuantity() {
      this.quantity++
    },
    triggerCollection() {
      this.collectionActive = !this.collectionActive
    },
    clickAddCart() {
      this.addCartActive = true
      setTimeout(() => this.addCartActive = false, 1000)
      this.quantityInCart++
      // addItemToCart(this.$store.state.username, )
      let items = document.getElementsByClassName('option-container')
      for(let i = 0; i < items.length; i++) {
        if(items[i].firstChild.checked) {
          let itemId = items[i].firstChild.id
          let username = this.$store.state.username
          addItemToCart(username, itemId, this.quantity)
        }
      }
    },
    clickImg(index) {
      this.mainImgIndex = index
    },
    mouseMove(e) {
      let product_main_image = this.$refs['mainImg']
      let pointer_box = this.$refs['pointerBox']
      let enlarge_image = this.$refs['enlargeImg']
      let enlarge_image_img = this.$refs['enlargeImgImg']
      let product_main_image_rect = product_main_image.getBoundingClientRect()
      this.isShow = true

      // 以下代码用来控制黑色box的移动
      let pointer_box_left = event.clientX - product_main_image_rect.left - pointer_box.offsetWidth / 2;
      let pointer_box_top = event.clientY - product_main_image_rect.top - pointer_box.offsetHeight * 2.7 / 2 + 85;

      let distanceMaxX = product_main_image.offsetWidth - pointer_box.offsetWidth;
      let distanceMaxY = product_main_image.offsetHeight - pointer_box.offsetHeight;

      // 控制边界值。
      if (pointer_box_left <= 0) {
        pointer_box_left = 0;
      }

      if (pointer_box_top <= 0) {
        pointer_box_top = 0;
      }

      if(pointer_box_left >= distanceMaxX) {
        pointer_box_left = distanceMaxX;
      }

      if(pointer_box_top >= distanceMaxY) {
        pointer_box_top = distanceMaxY;
      }

      pointer_box.style.left = pointer_box_left + 'px';
      pointer_box.style.top = pointer_box_top + 'px';

      // 获取 box 以 product_main_image 盒子为基准的偏移百分比。
      let scaleX = pointer_box_left / distanceMaxX;
      let scaleY = pointer_box_top / distanceMaxY;
      enlarge_image.scrollLeft = (enlarge_image_img.clientWidth - enlarge_image.clientWidth) * scaleX;
      enlarge_image.scrollTop = (enlarge_image_img.clientHeight - enlarge_image.clientHeight) * scaleY;
    },
    mouseLeave() {
      this.isShow = false
    },
    clickTrigger() {
      this.checkProduct = !this.checkProduct
    }
  },
  created() {
    this.productId = this.$route.query.productId
    viewProduct(this.productId).then((res) => {
      this.itemList = res.object.itemList
    }).catch((err) => {
      console.log(err)
    })

    viewCart(this.$store.state.username).then((res) => {
      this.quantityInCart = res.object.cartItems.length
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="scss">

.product-content {
  background-color: #A0EEE1;
  position: relative;
  width: 100vw;
  height: 88vh;

  .product-title {
    font-size: 60px;
    font-weight: bold;
    color: #11564b;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 100%;
      right: 50%;
      top: 5px;
      border-bottom: 5px solid #11564b;
      transition: width 1s;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 100%;
      left: 50%;
      top: 5px;
      border-bottom: 5px solid #11564b;
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

  .check-trigger,.back-to-category {
    position: absolute;
    top: 25px;
    width: 230px;
    height: 40px;

    border-top: 3px solid #11564b;
    border-bottom: 3px solid #11564b;
    color: #11564b;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      transition: transform .5s;
      cursor: pointer;
    }
    &:hover {
      span {
        transform: translateX(10px);
      }
    }
  }

  .check-trigger {
    right: 0;
    background-image: linear-gradient(to left, rgba(214, 213, 183, 1) 90%, rgba(214, 213, 183, 0));
  }

  .back-to-category {
    left: 0;
    background-image: linear-gradient(to right, rgba(214, 213, 183, 1) 90%, rgba(214, 213, 183, 0));
  }

  .product-container {
    width: 80%;
    height: 75%;
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .product-info {
      box-sizing: border-box;
      position: relative;
      width: 30%;
      height: 100%;
      background-color: #D6D5B7;
      border-radius: 10px;
      border: 5px solid #11564b;
      margin-right: 15px;
      padding-top: 20px;

      .product-main-image {
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 75%;
        box-shadow: 0 0 10px #000000;

        .pointer-box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          z-index: 1;
          backdrop-filter: brightness(40%);
          cursor: move;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

      }

      .thumbnail-images {
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
          box-sizing: border-box;
          width: 70px;
          height: 70px;
          cursor: pointer;
          object-fit: contain;

          &:focus {
            border: 2px solid #11564b;
          }

        }

      }



    }

    .buy-form {
      position: relative;
      box-sizing: border-box;
      width: 40%;
      height: 100%;
      background-color: #D6D5B7;
      border-radius: 10px;
      border: 5px solid #11564b;

      .enlarge-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        width: 90%;
        height: 90%;
        box-shadow: 0 0 10px #000000;
        z-index: 1;

        img {
          width: 1200px;
          height: auto;
        }

      }

      .uncollection, .collection {
        display: none;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        z-index: 1;

        &.active {
          display: inline;
        }

        &.collection.active {
          animation: collection 1s forwards;
        }

        @keyframes collection {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(.7, 1.3);
          }
          50% {
            transform: scale(1.2, .8);
          }
          75% {
            transform: scale(.9, 1.1);
          }
          100% {
            transform: scale(1);
          }
        }

      }

      .buy-form-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90%;

        .buy-form-info {
          width: 100%;
          height: 70%;
          margin-top: 5%;

          .form-info-title {
            font-size: 22px;
            font-weight: bold;
            color: #11564b;
            width: 24%;
            text-align: right;
            display: inline-block;
          }

          .choose-item {
            position: relative;
            width: 100%;
            height: 60%;

            .form-info-title {
              position: absolute;
              top: 0;
            }

            .choose-item-options {
              display: inline-block;
              position: relative;
              width: 76%;
              height: 100%;
              left: 25.1%;

              .option-container {
                width: 75%;
                height: 40px;
                margin-top: 10px;
                margin-left: 10px;

                &:first-child {
                  margin-top: 5px;
                }

                .real-radio {
                  position: absolute;
                  clip: rect(0,0,0,0);
                  &:checked + .fake-radio {
                    position: relative;
                    color: #D6D5B7;
                    background-color: #11564b;
                    &::before {
                      content: url("~@/assets/image/svg/product/checked_26px.svg");
                      // 用content不能控制图片大小！
                      position: absolute;
                      top: 50%;
                      transform: translateY(-13px);
                      right: 5px;
                      animation: checked .8s forwards;
                    }
                    @keyframes checked {
                      0% {
                        opacity: 0;
                        transform: translateY(-20px);
                      }
                    }
                  }
                }
                .fake-radio {
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  display: flex;
                  padding-left: 10px;
                  align-items: center;
                  border: 3px solid #11564b;
                  border-radius: 10px;
                  box-sizing: border-box;
                  font-weight: bold;
                  font-size: 18px;
                  color: #11564b;
                  transition: background-color .5s, color .5s;
                  &:hover {
                    color: #D6D5B7;
                    background-color: #11564b;
                  }
                }
              }
            }
          }

          .product-price {
            margin-top: 10px;
            width: 100%;

            .product-price-content {
              margin-left: 10px;
              font-weight: bold;
              font-size: 18px;
              color: #11564b;
              letter-spacing: 1px;
              display: inline-block;
            }
          }

          .product-stock {
            margin-top: 5px;
            width: 100%;

            .product-stock-content {
              margin-left: 10px;
              font-weight: bold;
              font-size: 18px;
              color: #11564b;
              display: inline-block;
            }
          }

          .product-quantity {
            margin-top: 10px;
            width: 100%;
            .product-quantity-content {
              margin-left: 10px;
              display: inline-block;
              width: 35%;

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
          }

        }

        .buy-form-btn {
          margin-top: 10px;
          width: 100%;
          height: 25%;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .buy-now-btn, .add-cart-btn {
            width: 30%;
            height: 35%;
            background-color: #D6D5B7;
            border-radius: 10px;
            border: 3px solid #11564b;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 18px;
            color: #11564b;
            cursor: pointer;
            transition: color .5s, background-color .5s;
            &:hover {
              color: #D6D5B7;
              background-color: #11564b;
            }
            img {
              position: absolute;
              right: 0;
              width: 35px;
              height: 35px;
            }
          }

          .add-cart-btn.active {
            overflow: hidden;
            span {
              animation: add-cart 2.5s ease-in-out;
            }
            img {
              animation: scale 1s infinite alternate-reverse, move 2.5s;
            }
          }

          @keyframes add-cart {
            0% {
              opacity: 1;
              transform: translateX(0);
            }
            50% {
              opacity: 0;
              transform: translateX(150px);
            }
            55% {
              opacity: 0;
              transform: translateX(-150px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes move {
            0% {
              opacity: 1;
              transform: translateX(0);
            }
            60% {
              opacity: 1;
              transform: translateX(300px);
            }
            61% {
              opacity: 0;
              transform: translateX(300px);
            }
            70% {
              opacity: 0;
              transform: translateX(-10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

        }

      }

    }


  }

  .cart-link {
    position: absolute;
    right: 50px;
    bottom: 75px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 5px solid #11564b;
    background-color: #D6D5B7;
    transition: background-color .5s;
    cursor: pointer;

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      fill: #11564b;
      width: 45px;
      height: 45px;
      transition: fill .5s;
    }

    &:hover {
      background-color: #11564b;
      svg {
        fill: #D6D5B7;
      }
    }

    .cart-num-tip {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: red;
      color: #ffffff;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }

  .fade-enter-from {
    opacity: 0;
    transform: translateX(calc(-50% + 100vw));
  }

  .fade-enter-active {
    transition: all 1s ease;
  }

  .fade-enter-to {
    opacity: 1;
    transform: translateX(-50%);
  }

  .fade-leave-from {
    opacity: 1;
    transform: translateX(-50%);
  }

  .fade-leave-active {
    transition: all 1s ease;
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(calc(-50% - 100vw));
  }

}
</style>
