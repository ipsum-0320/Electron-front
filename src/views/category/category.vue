<template>
  <div>
    <div class="container" v-if="category !== null">
      <div class="category-title">
        <img :src="require(`@/assets/image/svg/navbar/${category.name.toUpperCase()}.svg`)" alt="">
        <div class="category-title-text">{{ category.name }}</div>
      </div>
      <div class="back-to-index" @click="router('/home')">
        <span>Back to Homepage</span>
      </div>
      <div class="category-content" >
        <div class="products">
          <div class="products-content" :style="{width:productWidth}">
            <div class="product" v-for="product in products" @click="router('/main/product',product.productId)" :style="{ 'background-image': `url(${product.picture})` }">
<!--
有三个需要更改的地方：
1.home
2.navbar
-->
              <div class="mask">
                <div class="product-title">
                  <div>{{ product.name }}</div><br>
                  <div>{{ product.productId }}</div>
                </div>
                <div class="product-description">
                  {{ product.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {viewCategory} from "@/api/catalog/index";

export default {
  name: "category",
  data() {
    return {
      products: null,
      category: null,
      productWidth: null,
    }
  },
  methods: {
    router(route,productId) {
      this.$router.push({path:route,query: {productId:productId}})
    }
  },
  created() {
    viewCategory(this.$route.query.categoryId).then((data) => {
      console.log(this.$route.query.categoryId);
      console.log(data);
      this.category = data.category
      this.products = data.productList;
      let len = this.products.length;
      this.productWidth = (60 * (len - 1) + 325 * len) + 'px'
    }).catch((err) => {
      console.log(err)
    });
    this.$EventBus.on('update', (params) => {
      this.products = null;
      this.category = null;
      this.productWidth = null;
      viewCategory(params.categoryId).then((data) => {
        this.category = data.category
        this.products = data.productList;
        let len = this.products.length;
        this.productWidth = (60 * (len - 1) + 325 * len) + 'px'
      }).catch((err) => {
        console.log(err)
      });
    })
  },
}
</script>

<style scoped lang="scss">
.container {
  background: #A0EEE1;
  position: relative;
  width: 100vw;
  height: 88vh;

  .category-title {
    font-size: 60px;
    font-weight: bold;
    color: #11564b;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70px;
      height: 70px;
      margin-right: 10px;
    }

    .category-title-text {
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 100%;
        right: 50%;
        top: -5px;
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
        top: -5px;
        border-bottom: 5px solid #11564b;
        transition: width 1s;
      }

      &:hover::before {
        width: 50%;
      }

      &:hover::after {
        width: 50%;
      }
    }

  }

  .back-to-index {
    position: absolute;
    top: 25px;
    left: 0;
    width: 230px;
    height: 40px;
    background-image: linear-gradient(to right, rgba(214, 213, 183, 1) 90%, rgba(214, 213, 183, 0));
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
    }
    &:hover {
      span {
        transform: translateX(10px);
      }
    }
  }

  .category-content {
    position: absolute;
    margin-top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 75%;
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .products {
      width: 90%;
      height: 90%;
      overflow-x: auto;

      .products-content {
        // width 由 JS 来确定。
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .product {
          position: relative;
          box-sizing: border-box;
          cursor: pointer;
          height: 90%;
          width: 325px;
          border-radius: 10px;
          border-left: 3px solid #11564b;
          border-right: 3px solid #11564b;
          background-image: url("~@/assets/image/skeleton/loading.gif");
          background-position: center;
          background-size: cover;
          transition: box-shadow .5s, transform .5s;

          .mask {
            position: absolute;
            width: 101%;
            height: 40%;
            left: -2px;
            bottom: 0;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            backdrop-filter: brightness(35%);
            transition: height .5s;
            overflow: hidden;

            img {
              width: 24px;
              height: 24px;
              top: 24px;
              right: 24px;
              position: absolute;
            }

            .product-title {
              font-weight: bold;
              color: #ffffff;
              font-size: 30px;
              padding: 30px;

              div:last-child {
                position: relative;
                top: -30px;
                font-size: 18px;
              }

            }

            .product-description {
              position: relative;
              top: -25px;
              color: #ffffff;
              padding: 0 30px 0 30px;
              opacity: 0;
              transition: opacity .5s;
            }

          }

          &:hover {
            box-shadow: 0 0 15px 1px #11564b;
            transform: scale(1.03);

            .mask {
              border-radius: 10px;
              height: 100%;

              .product-description {
                opacity: 1;
              }

            }

          }

        }

      }

      &::-webkit-scrollbar {
        height: 10px;
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
