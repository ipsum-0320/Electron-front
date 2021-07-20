<template>
  <div class="detail-item">
    <img :src="info.detail.product_picture" alt="">
    <div class="product-name">{{ info.detail.productName }}</div>
    <div class="quantity">×{{info.detail.quantity}}</div>
    <div class="price">${{info.detail.price}}</div>
    <div class="evaluation" @click="comment">
      {{info.detail.hasCommented?"check comment":"comment"}}
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "detailItem",
  props: ['info'],
  data() {
    return {
      product_picture: undefined
    };
  },
  methods: {
    comment() {
      this.$emit('write-comment',this.info)
    }
  }
}
</script>

<style scoped lang="scss">
.detail-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    border-top: 1px solid #11564b;
  }

  div:not(.evaluation) {
    margin-top: 1vw;
    color: #11564b;
    font-size: 18px;
    flex: 1 0 20%;
  }

  .evaluation {
    flex: 0 1 20%;
    margin-top: calc(1vw - 2px);
    box-sizing: border-box;
    display: inline-block;
    padding: 0 0.25em;
    min-width: 110px;
    height: 28px;
    border: 2px solid #11564b;
    background-color: #D6D5B7;
    color: #11564b;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: #D6D5B7;
      background-color: #11564b;
    }
  }

  img {
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    margin-left: 2em;
    margin-right: 4em;
  }

  hr{
    width: 100%;
  }


}
</style>
