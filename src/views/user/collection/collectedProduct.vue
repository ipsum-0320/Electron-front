<template>
  <div class="collected-product">
    <div class="pet-img">
      <img class="pet-img" :src='require("@/assets/image/"+info.imgSrc)' alt="">
    </div>
    <div class="info">
      <div class="product-name">{{ info.name }}</div>
      <div class="cancel-btn" @click="cancelCollection()">
        <svg viewBox="0 0 1024 1024"><path d="M511.788859 18.303158c135.962319 0 259.81072 54.535525 349.400799 144.483018a494.147107 494.147107 0 0 1 0 698.400938l-3.523263 2.696504c-88.399547 87.682175-210.702546 141.820856-345.874992 141.820856a494.482898 494.482898 0 0 1-349.362641-144.519904C72.875569 771.599579 18.303158 648.117495 18.303158 511.393287A490.920206 490.920206 0 0 1 162.426218 162.786176l3.12769-2.695233C254.350299 72.048811 377.407556 18.303158 511.788859 18.303158z m129.706938 285.875231L511.788859 434.316513 382.080649 304.178389a55.308862 55.308862 0 0 0-77.903532 0c-20.994574 21.821333-20.994574 56.473955 0 77.903532l129.70821 129.311366-129.70821 130.110141c-20.994574 21.821333-20.994574 56.473955 0 77.903532a55.243993 55.243993 0 0 0 77.903532 0L511.788859 589.333704l129.706938 130.066896a55.245265 55.245265 0 0 0 77.904803 0c21.065803-21.425761 21.065803-56.082199 0-77.903531l-130.068168-130.103782 130.068168-129.311366c21.065803-21.427033 21.065803-56.873343 0-77.903532a55.310134 55.310134 0 0 0-77.904803 0z m141.787785-64.24294a382.384641 382.384641 0 0 0-271.494723-112.200012c-105.117873 0-199.774072 42.492835-269.121291 109.863466l-2.732119 2.732118c-68.952918 69.311604-112.566329 165.513206-112.566329 271.062266 0 106.735775 43.607051 202.578691 112.566329 271.890295 69.702089 69.347219 165.908778 112.955542 271.85341 112.955542 104.793529 0 199.846573-42.457221 269.158177-110.618996l2.336546-2.336546c70.138363-69.311604 112.94791-165.15452 112.94791-271.890295a379.990858 379.990858 0 0 0-112.94791-271.062266v-0.395572z"></path></svg>
      </div>
      <div class="add-cart-btn">
        <svg viewBox="0 0 1028 1024"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z"></path></svg>
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
  cursor: default;
  transition: box-shadow .5s;

  .pet-img {
    position: relative;
    top: 10px;
    left: 5px;
    img {
      top: 0;
      bottom: 0;
      border-radius: 50%;
      width: 15vh;
      height: 15vh;
      object-fit: cover;
      box-shadow: 0 0 10px 2px #11564b;
      margin:auto 0.75em;
      flex: none;
      cursor: pointer;
      transition: transform .5s;
      transform-origin: top center;
    }
    &:hover {
      img {
        transform: scale(0.9);
      }
      &::after {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
      }
    }
    &::after {
      content: 'click here for details';
      position: absolute;
      width: max-content;
      left: 55%;
      bottom: 20px;
      transform: translate(-50%, 20px);
      color: #11564b;
      font-weight: bold;
      font-size: 14px;
      opacity: 0;
      visibility: hidden;
      transition: opacity .5s, visibility .5s, transform .5s;
    }
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
      transition: background-color .5s;
      float: left;
      margin-top: 0.75em;
      margin-left: 1em;

      svg {
        width: 60%;
        fill: #11564b;
        transition: fill .5s
      }

      &:hover {
        background-color: #11564b;
        svg {
          fill: #D6D5B7
        }
      }
    }
  }

  &:hover{
    box-shadow: 0 0 20px 2px #11564b;
  }
}
</style>
