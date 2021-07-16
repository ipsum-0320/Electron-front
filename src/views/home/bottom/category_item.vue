<template>
  <div class="item">
    <a href="" class="category_item" :id="category.toLowerCase()" @click.prevent="router">
      <div class="category-image">
        <img :src="require('@/assets/image/index/' + category.toLowerCase() + '-category.jpg')" alt="">
      </div>
      <div class="category-introduce">
        <h1 class="category-title">{{ category }}</h1>
        <p class="category-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error facere illum magni natus ullam!</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "category_item",
  props: {
    category: String
  },
  methods: {
    router() {
      this.$router.push({path: '/main/category', query: {categoryId: this.category}})
    },
  }
}
</script>

<style scoped lang="scss">
  .item {
    height: 70%;
    width: 18%;
    position: relative;
  }
</style>
