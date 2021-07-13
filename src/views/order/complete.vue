<template>
  <div class="complete">
    <div class="order-id">
      <img src="@/assets/image/svg/order/orderId.svg" alt="">
      Order Id: #1001
    </div>
    <div class="order-complete-msg">
      <img src="@/assets/image/svg/order/laugh.svg" alt="">
      <div class="order-complete-msg-content">
        Congratulations, the order has been completed.
        You can click
        <div class="order-link">
          <img src="@/assets/image/svg/index/order.svg" alt="" class="icon-in-text">
          <div class="text">Order</div>
        </div>
        to view the details of the order.
      </div>
    </div>
    <div class="complete-btn">
      OK
      <svg viewBox="0 0 1024 1024">
        <path d="M914.030911 321.988412c36.942377-42.659589 43.73099-104.642269 15.033391-137.729851-28.691459-33.096792-82.397638-25.289989-119.346155
         17.364483L478.375693 584.006987c-36.987403 42.642193-97.452519 42.642193-134.402059 0L213.74564
          433.728332c-36.954657-42.690288-90.669022-50.484811-119.346155-17.364483-28.688389 33.090653-21.915126
          95.045703 15.037485 137.693012l234.741325 270.889617c36.968983 42.644239 90.691535 50.488905 119.348202
           17.35732 28.699646-33.075303 52.109822-60.231803 52.061726-60.276828-0.058328-0.058328 30.113855-35.0554
           67.094094-77.69964L914.030911 321.988412z">
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "complete"
}
</script>

<style scoped lang="scss">
.complete {
  width: 50%;
  height: 75%;
  transform: translateX(-50%);
  border-radius: 10px;
  border: 5px solid #11564b;
  background-color: #D6D5B7;
  position: absolute;
  left: 50%;
  top: 15%;

&.order-part-active {
   display: block;
 }

.order-id {
  position: absolute;
  top: 35px;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  color: #11564b;
img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
}

.order-complete-msg {
  position: absolute;
  width: 60%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px dashed #11564b;
  border-radius: 10px;

img:not(.icon-in-text) {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translate(-50%, -50%);
}

.order-complete-msg-content {
  width: 80%;
  height: 30%;
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 18px;
  color: #11564b;

.order-link {
  display: inline-block;
  cursor: pointer;
img {
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;
  top: 3px;
  margin-right: -5px;
  transition: transform .5s;
  transform-origin: right;
}
.text {
  display: inline-block;
  position: relative;
  top: -3px;
  font-weight: bold;
  font-size: 14px;
  color: #11564b;
  transition: transform .5s;
&::after {
   content: '';
   width: 100%;
   height: 100%;
   position: absolute;
   bottom: -2px;
   left: 0;
   border-bottom: 3px solid #11564b;
   transition: transform .5s;
 }
}
&:hover {
img {
  transform: scale(1.2);
}
.text {
  transform: translateY(-5px);
&::after {
   transform: translateY(5px);
 }
}
}
}

}

}

.complete-btn {
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
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color .5s, color .5s;

svg {
  display: inline-block;
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
}
</style>
