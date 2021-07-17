<template>
  <div class="payment">
    <div class="payment-msg">
      Please enter your password
    </div>
    <div class="enter-background">
      <img ref="eye" :src="require('@/assets/image/svg/order/'+eyeSrc)" alt="" @mousedown="clickEye" @mouseup="cancelEye">
      <div class="password-input">
        <input :type='type' v-for="(item, index) in placeHolder" :placeholder="item" @keyup="inputPwd(index)" :ref="nameRef(index)">
      </div>
      <div class="forget-msg">Forget Your Password ?</div>
      <div class="help" tabindex="-1">
        <svg viewBox="0 0 1024 1024">
          <path d="M497.664 849.792c35.392 0 64 24.768 64 55.232 0 30.528-28.608 55.296-64 55.296-35.392
          0-64.064-24.768-64.064-55.296 0-30.464 28.672-55.232 64-55.232z m9.408-785.472c95.744 0
           173.312 24.384 232.768 73.024 61.376 50.368 92.16 112.96 92.16 187.712 0 27.776-4.288
           53.76-12.8 77.504-8.576 23.936-19.968 45.44-33.984 64.448-15.168 19.968-37.376 41.792-66.56
            65.28-29.184 23.424-65.472 48.128-108.736 74.24-20.096 12.16-33.28 24.128-39.296 35.904-6.08
             11.712-9.088 29.76-9.088 54.208v42.496c0 29.76-27.968 54.016-62.656 54.016h-3.392c-34.496
              0-62.592-24.064-62.592-54.016v-41.152c-1.92-36.48 3.712-68.864 17.408-97.152 13.504-28.16
               40.576-53.696 80.96-76.224h-1.6c35.2-23.488 64.96-44.416 89.152-62.656 24.192-18.24
               41.856-33.92 52.864-46.976 20.096-22.528 31.36-52.48 33.28-89.92a113.216 113.216 0 0
               0-12.8-59.392 210.048 210.048 0 0 0-40.064-51.264l-3.2-2.944c-36.992-31.104-84.352-46.784-142.016-46.784-55.296
                0-100.672 18.88-135.936 56.768-27.2 29.184-45.376 70.784-54.592 124.928-4.864 28.736-35.456 48.832-68.736
                45.632-34.496-3.392-59.392-30.272-55.168-60.032 4.288-29.76 11.584-57.28 22.08-82.56a295.936 295.936 0 0
                1 67.264-100.992 288.448 288.448 0 0 1 99.84-62.656 356.224 356.224 0 0 1 125.44-21.44z">
          </path>
        </svg>
        <div class="help-card">
          <div class="help-card-triangle"></div>
          <div class="help-card-content">
            Your payment password is different form the login password.
            It needs additional definition
          </div>
        </div>
      </div>
    </div>
    <div class="previous-step-btn p-btn-in-payment" @click="clickPrevious">
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
    <div class="next-step-btn n-btn-in-payment" @click="clickNext">
      <span>Next</span>
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
      <div class="waiting"></div>
      <svg viewBox="0 0 1024 1024" class="result">
        <path d="M233.90663111 246.38729482a38.83614815 38.83614815 0 0 1
        55.14733037-55.14733037l543.70607407 543.70607407a38.83614815
        38.83614815 0 0 1-55.14733037 55.14733037z"></path><path d="M777.61270518 191.23996445a38.83614815 38.83614815
        0 0 1 55.14733037 55.14733037l-543.70607407 543.70607407a38.83614815 38.83614815
         0 0 1-55.14733037-55.14733037z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024" class="result"><path d="M914.030911 321.988412c36.942377-42.659589
      43.73099-104.642269 15.033391-137.729851-28.691459-33.096792-82.397638-25.289989-119.346155
      17.364483L478.375693 584.006987c-36.987403 42.642193-97.452519 42.642193-134.402059 0L213.74564
       433.728332c-36.954657-42.690288-90.669022-50.484811-119.346155-17.364483-28.688389 33.090653-21.915126
       95.045703 15.037485 137.693012l234.741325 270.889617c36.968983 42.644239 90.691535 50.488905
        119.348202 17.35732 28.699646-33.075303 52.109822-60.231803 52.061726-60.276828-0.058328-0.058328
        30.113855-35.0554 67.094094-77.69964L914.030911 321.988412z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      placeHolder: ["","","","","",""],
      type:'password',
      eyeSrc: 'eyeClose.svg'
    }
  },
  methods: {
    clickPrevious() {
      this.$emit('switch-previous',-1)
    },
    clickNext() {
      this.$emit('switch-next',1)
    },
    inputPwd(index) {
      let input0 = this.$refs.ref0, input1 = this.$refs.ref1, input2 = this.$refs.ref2, input3 = this.$refs.ref3, input4 = this.$refs.ref4, input5 = this.$refs.ref5
      let inputs = new Array()
      inputs.push(input0,input1,input2,input3,input4,input5)
      if(event.keyCode == 8) {
        inputs[index-1].focus()
        inputs[index-1].value = ''
      }else if(index+1 != 6) {
        inputs[index+1].focus()
      }
    },
    nameRef(index) {
      return 'ref' + index
    },
    clickEye() {
      this.eyeSrc = "eyeOpen.svg"
      this.type = 'text'
    },
    cancelEye() {
      this.eyeSrc = "eyeClose.svg"
      this.type = 'password'
    }
  }
}
</script>

<style scoped lang="scss">
.payment {
  width: 50%;
  height: 75%;
  border-radius: 10px;
  border: 5px solid #11564b;
  background-color: #D6D5B7;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);


&.order-part-active {
   display: block;
 }

.payment-msg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 7%;
  font-size: 22px;
  font-weight: bold;
  color: #11564b;
  cursor: pointer;

&::before {
   content: '';
   display: block;
   position: absolute;
   width: 0;
   height: 100%;
   right: 50%;
   top: 3px;
   border-bottom: 3px solid #11564b;
   transition: width 1s;
 }

&::after {
   content: '';
   display: block;
   position: absolute;
   width: 0;
   height: 100%;
   left: 50%;
   top: 3px;
   border-bottom: 3px solid #11564b;
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

.enter-background {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url("~@/assets/image/svg/order/guard.svg");

img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 60px;
  height: 60px;
  top: 45px;
}

.password-input {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

input[type="password"], input[type="text"] {
  all: unset;
  box-sizing: border-box;
  height: 39px;
  width: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #D6D5B7;
  padding-left: 13px;

&:nth-child(1) {
   border: 3px solid #D6D5B7;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
 }

&:nth-child(2) {
   border: 3px solid #D6D5B7;
   border-right: none;
   border-left: none;
   width: 37px;
 }
&:nth-child(3) {
   border: 3px solid #D6D5B7;
   border-right: none;
 }
&:nth-child(4) {
   border: 3px solid #D6D5B7;
   border-right: none;
 }
&:nth-child(5) {
   border: 3px solid #D6D5B7;
   border-right: none;
 }
&:nth-child(6) {
   border: 3px solid #D6D5B7;
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
 }
&:placeholder-shown {
   padding-left: 17px;
 }

}

}

.forget-msg {
  width: max-content;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #D6D5B7;
  bottom: 100px;
  cursor: pointer;

&::before {
   content: '';
   display: block;
   position: absolute;
   width: 0;
   height: 100%;
   right: 50%;
   top: 3px;
   border-bottom: 1px solid #D6D5B7;
   transition: width 1s;
 }

&::after {
   content: '';
   display: block;
   position: absolute;
   width: 0;
   height: 100%;
   left: 50%;
   top: 3px;
   border-bottom: 1px solid #D6D5B7;
   transition: width 1s;
 }

&:hover::before {
   width: 50%;
 }

&:hover::after {
   width: 50%;
 }

}

.help {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #D6D5B7;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .5s;

svg {
  width: 24px;
  height: 24px;
  fill: #D6D5B7;
  transition: fill .5s;
}

&:hover {
   background-color: #D6D5B7;
svg {
  fill: #11564b;
}
}

&:focus-within {
   background-color: #D6D5B7;
svg {
  fill: #11564b;
}
.help-card {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  cursor: default;
  transform: translate(-50%, 0);
}
}

.help-card {
  position: absolute;
  left: 50%;
  top: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, -20px);
  transition: opacity .5s, visibility .5s, transform .5s;
.help-card-triangle {
  position: absolute;
  left: calc(50% - 10px);
  top: -20px;
  width: 0;
  height: 0;
  border-right: 10px solid transparent;
  border-top: 10px solid #D6D5B7;
  border-left: 10px solid transparent;
}
.help-card-content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -100px;
  width: 200px;
  height: 75px;
  border: 3px solid #D6D5B7;
  background-color: #11564b;
  border-radius: 5px;
  font-size: 13px;
  color: #D6D5B7;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
}

}

}

.previous-step-btn {
  left: 25%;
  bottom: 20px;
}

.next-step-btn {
  right: 25%;
  bottom: 20px;
&.n-btn-in-payment span, &.n-btn-in-payment svg:not(.result) {
                            transition: opacity .5s, visibility .5s, fill .5s;
                          }
}

.waiting {
  width: 25px;
  height: 25px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity .5s .5s, visibility .5s .5s;
  border: 5px solid #808080;
  border-top-color: #11564b;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.result {
  position: absolute;
  width: 35px;
  height: 35px;
  opacity: 0;
  visibility: hidden;
  transition: opacity .5s 1s, visibility .5s 1s, fill .5s;
  transform: rotate(0);
  fill: #11564b;
&:hover {
   fill: #D6D5B7;
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