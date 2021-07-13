<template>
  <div class="collection-content">
    <div class="collection">
      <div class="empty-cart" :class="{ 'show': collections.length === 0 }">
        <img src="@/assets/image/svg/index/noCategory.svg" alt="">
        <div class="tips">Sorry, Your collection is empty.</div>
      </div>
      <div class="collection-items">
        <collected-product v-for="(collection, index) in collections" :info="collection" :index="index" @cancel-collection="cancelCollection(index)"></collected-product>
      </div>
    </div>
  </div>
</template>

<script>
import CollectedProduct from "@/views/user/collection/collectedProduct";
export default {
  name: "collection",
  components: {CollectedProduct},
  data() {
    return {
      collections: [
        {
          name:'BullDog1',
          imgSrc:'petImg/cat/catImg.jpg'
        },
        {
          name:'BullDog2',
          imgSrc:'petImg/cat/catImg.jpg'
        },
        {
          name:'BullDog3',
          imgSrc:'petImg/cat/catImg.jpg'
        },
        {
          name:'BullDog4',
          imgSrc:'petImg/cat/catImg.jpg'
        },
        {
          name:'BullDog5',
          imgSrc:'petImg/cat/catImg.jpg'
        }
      ]
    }
  },
  methods: {
    cancelCollection(index) {
      this.collections.splice(index,1)
    }
  }
}
</script>

<style scoped lang="scss">
.collection-content {
  position: relative;
  width: 100vw;
  height: 88vh;
  background-color: #A0EEE1;

  .collection {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 85%;
    background-color: #D6D5B7;
    border-radius: 10px;
    border: 5px solid #11564b;

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

    .collection-items {
      box-sizing: border-box;
      height: 90%;
      width: 98%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      overflow-y: auto;

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
