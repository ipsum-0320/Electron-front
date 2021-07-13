<template>
  <div class="select-address order-part-active">
    <div class="address-list">
      <div class="address default" :class="{'address-active':activeIndex == 1}" @click="onclickAddress1()">
        <div class="default-address">default address</div>
        <div class="set-default-address">set it as default address</div>
        <div class="address-content">
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/account.svg" alt="">
                Receiver
              </legend>
              <span>Curry</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/phone.svg" alt="">
                Phone
              </legend>
              <span>0819-234921</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/address.svg" alt="">
                Address
              </legend>
              <span>Railway Institute</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/city.svg" alt="">
                City
              </legend>
              <span>Chang Sha</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/state.svg" alt="">
                State
              </legend>
              <span>Hu Nan</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/country.svg" alt="">
                Country
              </legend>
              <span>China</span>
            </fieldset>
          </div>
        </div>
        <div class="edit-address">
          <svg viewBox="0 0 1024 1024">
            <path d="M960.3 925.6c0-22.6-18.3-41-41-41H100.1c-22.6 0-41 18.3-41 41 0 22.6 18.3 41 41 41h819.3c22.6-0.1
             40.9-18.4 40.9-41zM874.9 245.5c-0.1-0.1-0.3-0.2-0.4-0.4L695.1 65.7c-26.7-23.2-67.3-22.2-92.7 3.3-0.1 0.1-0.2
              0.3-0.4 0.4L135.4 535.9c-9.4 9.4-13.3 22.3-11.6 34.6v209.1c0 2.1 0.2 4.2 0.5 6.2 0.2 1.4 0.5 2.7 0.8 4 0.7
               2.6 1.6 5.1 2.7 7.5 0.6 1.2 1.2 2.4 1.9 3.5 0.3 0.6 0.7 1.1 1.1 1.7 0.7 1.1 1.5 2.1 2.4 3.2 3.6 4.4 8.1 8
                13.2 10.6l1.2 0.6c5.2 2.4 11 3.8 17.2 3.8h214.3c13.2 0 25-6.3 32.4-16l467.8-467.8c22-26.8 20.5-66.4-4.4-91.4z">
            </path>
          </svg>
        </div>
        <div class="checked">
          <svg viewBox="0 0 1024 1024">
            <path d="M914.030911 321.988412c36.942377-42.659589 43.73099-104.642269
            15.033391-137.729851-28.691459-33.096792-82.397638-25.289989-119.346155
             17.364483L478.375693 584.006987c-36.987403 42.642193-97.452519
             42.642193-134.402059 0L213.74564 433.728332c-36.954657-42.690288-90.669022-50.484811-119.346155-17.364483-28.688389
             33.090653-21.915126 95.045703 15.037485 137.693012l234.741325 270.889617c36.968983
             42.644239 90.691535 50.488905 119.348202 17.35732 28.699646-33.075303 52.109822-60.231803
              52.061726-60.276828-0.058328-0.058328 30.113855-35.0554 67.094094-77.69964L914.030911
              321.988412z">
            </path>
          </svg>
        </div>
      </div >
      <div class="address" :class="{'address-active':activeIndex == 2}" @click="onclickAddress2()">
        <div class="default-address">default address</div>
        <div class="set-default-address">set it as default address</div>
        <div class="address-content">
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/account.svg" alt="">
                Receiver
              </legend>
              <span>Curry</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/phone.svg" alt="">
                Phone
              </legend>
              <span>0819-234921</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/address.svg" alt="">
                Address
              </legend>
              <span>South Campus</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/city.svg" alt="">
                City
              </legend>
              <span>Chang Sha</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/state.svg" alt="">
                State
              </legend>
              <span>Hu Nan</span>
            </fieldset>
          </div>
          <div class="address-content-item">
            <fieldset>
              <legend>
                <img src="@/assets/image/svg/signIn/country.svg" alt="">
                Country
              </legend>
              <span>China</span>
            </fieldset>
          </div>
        </div>
        <div class="edit-address">
          <svg viewBox="0 0 1024 1024">
            <path d="M960.3 925.6c0-22.6-18.3-41-41-41H100.1c-22.6 0-41 18.3-41 41 0 22.6 18.3 41 41 41h819.3c22.6-0.1
             40.9-18.4 40.9-41zM874.9 245.5c-0.1-0.1-0.3-0.2-0.4-0.4L695.1 65.7c-26.7-23.2-67.3-22.2-92.7 3.3-0.1 0.1-0.2
              0.3-0.4 0.4L135.4 535.9c-9.4 9.4-13.3 22.3-11.6 34.6v209.1c0 2.1 0.2 4.2 0.5 6.2 0.2 1.4 0.5 2.7 0.8 4 0.7
               2.6 1.6 5.1 2.7 7.5 0.6 1.2 1.2 2.4 1.9 3.5 0.3 0.6 0.7 1.1 1.1 1.7 0.7 1.1 1.5 2.1 2.4 3.2 3.6 4.4 8.1 8
                13.2 10.6l1.2 0.6c5.2 2.4 11 3.8 17.2 3.8h214.3c13.2 0 25-6.3 32.4-16l467.8-467.8c22-26.8 20.5-66.4-4.4-91.4z">
            </path>
          </svg>
        </div>
        <div class="checked">
          <svg viewBox="0 0 1024 1024">
            <path d="M914.030911 321.988412c36.942377-42.659589 43.73099-104.642269
            15.033391-137.729851-28.691459-33.096792-82.397638-25.289989-119.346155
             17.364483L478.375693 584.006987c-36.987403 42.642193-97.452519
             42.642193-134.402059 0L213.74564 433.728332c-36.954657-42.690288-90.669022-50.484811-119.346155-17.364483-28.688389
             33.090653-21.915126 95.045703 15.037485 137.693012l234.741325 270.889617c36.968983
             42.644239 90.691535 50.488905 119.348202 17.35732 28.699646-33.075303 52.109822-60.231803
              52.061726-60.276828-0.058328-0.058328 30.113855-35.0554 67.094094-77.69964L914.030911
              321.988412z">
            </path>
          </svg>
        </div>
      </div>
    </div>
    <div class="next-step-btn n-btn-in-select" @click="switchStep()">
      Next
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
    </div>
  </div>
</template>

<script>
export default {
  name: "selectAddress",
  data() {
    return {
      activeIndex: 2
    }
  },
  methods: {
    onclickAddress1() {
      this.activeIndex = 1
    },
    onclickAddress2() {
      this.activeIndex = 2
    },
    switchStep() {
      this.$emit('switch-step', 1)
    }
  }
}
</script>

<style scoped lang="scss">
.select-address {
  width: 50%;
  height: 75%;
  border-radius: 10px;
  border: 5px solid #11564b;
  background-color: #D6D5B7;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%);


&.order-part-active {
   display: block;
 }

.address-list {
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;

.address {
  position: relative;
  width: 45%;
  height: 100%;
  border-radius: 10px;
  border: 3px solid #11564b;
  transition: box-shadow .5s;

&.default {
.default-address {
  opacity: 1;
  visibility: visible;
}
}

.set-default-address {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.default-address {
  width: max-content;
  height: max-content;
  background-color: #11564b;
  color: #D6D5B7;
  position: absolute;
  top: -1px;
  left: -1px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  pointer-events: auto;
  transition: opacity 1s, visibility 1s;
}

.edit-address {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #11564b;
  background-color: #D6D5B7;
  position: absolute;
  bottom: 5px;
  left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .5s;

svg {
  fill: #11564b;
  width: 25px;
  height: 25px;
  transition: fill .5s;
}

&:hover {
   background-color: #11564b;
svg {
  fill: #D6D5B7;
}
}

}

.checked {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.address-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 85%;
  height: 70%;
  overflow-x: hidden;
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

.address-content-item {
  font-weight: bold;
  font-size: 18px;
  color: #11564b;
  position: relative;
  top: -10px;
  width: 96%;
&:first-child {
   margin-top: 10px;
 }
&:not(:last-child) {
   margin-bottom: 5px;
 }
fieldset {
  border-radius: 10px;
  border: 3px solid #11564b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
legend {
  display: flex;
  justify-content: center;
  align-items: center;
img {
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-right: 5px;
}
}

}

}
}

&.address-active {
.checked {
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 0;
  height: 0;
  border: 25px solid #11564b;
  border-left: 25px solid transparent;
  border-top: 25px solid transparent;
  border-radius: 4px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity 1s, visibility 1s;

svg {
  fill: #D6D5B7;
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: -22px;
  right: -22px;
}
}
&:not(.default) .set-default-address {
   width: max-content;
   height: max-content;
   background-color: #11564b;
   color: #D6D5B7;
   position: absolute;
   top: -1px;
   right: -1px;
   border-top-right-radius: 5px;
   border-bottom-left-radius: 5px;
   padding-bottom: 5px;
   padding-left: 5px;
   padding-right: 5px;
   cursor: pointer;
   opacity: 1;
   visibility: visible;
   pointer-events: auto;
   transition: opacity 1s, visibility 1s;

&::before {
   content: '';
   display: block;
   position: absolute;
   width: 0;
   height: 100%;
   right: 50%;
   top: -5px;
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
   top: -5px;
   border-bottom: 1px solid #D6D5B7;
   transition: width 1s;
 }

&:hover::before {
   width: 48%;
 }

&:hover::after {
   width: 48%;
 }
}
}

&:hover {
   box-shadow: 0 0 10px 1px #11564b;
 }

}

}

.next-step-btn {
  transform: translateX(-50%);
  left: 50%;
  bottom: 20px;
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