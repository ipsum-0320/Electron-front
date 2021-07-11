<template>
  <div class="collected-product">
    <img class="pet-img" :src='require("@/assets/image/"+info.imgSrc)' alt="">
    <div class="info">
      <div class="product-name">{{ info.name }}</div>
      <div class="cancel-btn" @click="cancelCollection()">
        <img src="@/assets/image/svg/collection/cancel.svg" alt="">
      </div>
      <div class="add-cart-btn">
        <img src="@/assets/image/svg/collection/shopCart.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectedProduct",
  props:['info','index'],
  methods: {
    cancelCollection() {
      this.$emit('cancel-collection',this.index)
    }
  }
}
</script>

<style scoped lang="scss">
.collected-product {
  display: flex;
  box-sizing: border-box;
  background-color: #D6D5B7;
  border-radius: 10px;
  border: 3px solid #11564b;
  width: 30%;
  height: 30%;
  margin:.5em 0.75% .5em 1.5%;
  align-content: space-around;
  cursor: pointer;
  transition: box-shadow .5s;

  .pet-img {
    top: 0;
    bottom: 0;
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    object-fit: cover;
    box-shadow: 0 0 10px 2px #11564b;
    margin:auto 0.75em;
    flex: none;
  }

  .info {
    color: #11564b;
    margin-top: 0.75em;
    flex: auto;
    text-align: center;


    .product-name {
      width: 100%;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .cancel-btn,.add-cart-btn {
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
      float: left;
      margin-top: 0.75em;
      margin-left: 1em;

      img {
        width: 60%;
        color: #11564b;
      }

      &:hover {

      }
    }
  }

  &:hover{
    box-shadow: 0 0 20px 2px #11564b;
  }
}
</style>