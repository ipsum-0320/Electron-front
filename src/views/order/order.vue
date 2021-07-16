<template>
  <div class="order-container">
    <div class="order-steps">
      <div class="step" :class="{'step-active':activeStep==1,'step-finish':activeStep > 1}">
        <div class="step-node">
          <span>1</span>
          <img src="@/assets/image/svg/cart/checked.svg" alt="">
          <div class="step-node-msg">Select Address</div>
        </div>
        <div class="step-line"></div>
      </div>
      <div class="step" :class="{'step-active':activeStep==2,'step-finish':activeStep > 2}">
        <div class="step-node">
          <span>2</span>
          <img src="@/assets/image/svg/cart/checked.svg" alt="">
          <div class="step-node-msg">Confirm Order</div>
        </div>
        <div class="step-line"></div>
      </div>
      <div class="step" :class="{'step-active':activeStep==3,'step-finish':activeStep > 3}">
        <div class="step-node">
          <span>3</span>
          <img src="@/assets/image/svg/cart/checked.svg" alt="">
          <div class="step-node-msg">Payment</div>
        </div>
        <div class="step-line"></div>
      </div>
      <div class="step" :class="{'step-active':activeStep==4}">
        <div class="step-node">
          <span>4</span>
          <img src="@/assets/image/svg/cart/checked.svg" alt="">
          <div class="step-node-msg">Complete</div>
        </div>
      </div>
    </div>
    <transition :duration="{enter:1000, leave:1000}" name="fade">
      <select-address @switch-step="switchStep" ref="selectAddress" v-if="activeStep === 1"></select-address>
    </transition>

    <transition :duration="1000" name="fade">
      <confirm-order @switch-previous="switchStep" @switch-next="switchStep" v-if="activeStep === 2"></confirm-order>
    </transition>

    <transition :duration="1000" name="fade">
      <payment @switch-previous="switchStep" @switch-next="switchStep" v-if="activeStep === 3"></payment>
    </transition>

    <transition :duration="1000" name="fade">
      <complete v-if="activeStep === 4"></complete>
    </transition>
  </div>
</template>

<script>
import selectAddress from "@/views/order/selectAddress";
import confirmOrder from "@/views/order/confirmOrder";
import Payment from "@/views/order/payment";
import Complete from "@/views/order/complete";
export default {
  name: "order",
  components: {
    Complete,
    Payment,
    selectAddress,
    confirmOrder
  },
  data() {
    return {
      activeStep: 1
    }
  },
  methods: {
    switchStep(n) {
      this.activeStep += n
    }
  }
}
</script>

<style scoped lang="scss">
.order-container {
  background-color: #A0EEE1;
  position: absolute;
  width: 100vw;
  height: 88vh;
  overflow: hidden;


  .order-steps {
    margin-top: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .step {
      display: flex;
      justify-content: center;
      align-items: center;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &:last-child {
        .step-node {
          margin-right: 0;
        }
      }

      &.step-active {
        .step-node {
          color: #D6D5B7;
          background-color: #11564b;
        }
      }

      &.step-finish {
        .step-node {
          background-color: #11564b;
          span {
            display: none;
          }
          img {
            display: inline;
          }
        }
      }

      .step-node {
        position: relative;
        width: 35px;
        height: 35px;
        border: 3px solid #11564b;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 20px;
        font-weight: bold;
        color: #11564b;
        margin-right: 10px;
        cursor: pointer;
        background-color: #D6D5B7;
        user-select: none;

        &.step-node-animation {
          animation: step-node-scale 1s;
        }

        img {
          display: none;
          width: 25px;
          height: 25px;
        }

        .step-node-msg {
          color: #11564b;
          position: absolute;
          width: max-content;
          top: 120%;
        }

      }

      @keyframes step-node-scale {
        0% {
          transform: scale(1);
        }
        20% {
          transform: scale(0.9);
        }
        40% {
          transform: scale(1.1);
        }
        60% {
          transform: scale(0.95);
        }
        80% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      .step-line {
        width: 200px;
        height: 3px;
        background-color: #11564b;
      }




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

  //@keyframes fadeInToLeft {
  //  0% {
  //    opacity: 0;
  //    transform: translateX(calc(-50% + 100vw));
  //  }
  //  100% {
  //    opacity: 1;
  //    transform: translateX(-50%);
  //  }
  //}
  //
  //@keyframes fadeInToRight {
  //  0% {
  //    opacity: 0;
  //    transform: translateX(calc(-50% - 100vw));
  //  }
  //  100% {
  //    opacity: 1;
  //    transform: translateX(-50%);
  //  }
  //}
  //
  //@keyframes fadeOutToLeft {
  //  0% {
  //    opacity: 1;
  //    transform: translateX(-50%);
  //  }
  //  100% {
  //    opacity: 0;
  //    transform: translateX(calc(-50% - 100vw));
  //  }
  //}
  //
  //@keyframes fadeOutToRight {
  //  0% {
  //    opacity: 1;
  //    transform: translateX(-50%);
  //  }
  //  100% {
  //    opacity: 0;
  //    transform: translateX(calc(-50% + 100vw));
  //  }
  //}
}
</style>