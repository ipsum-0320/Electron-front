<template>
  <div class="message-main">
    <div class="message-base">
      <div class="sideBar">
        <div class="sideBarOption comment" :class="{ 'active': commentActive }" @click="commentActive = true; replyActive = chatActive = false; $router.push('/main/message/comment');">
          <svg viewBox="0 0 1024 1024" class="sideBarOption-svg"><path d="M949.570847 212.673727l-41.801035 41.517579L768.565377 115.843378l41.801035-41.459251c15.340383-15.283078 39.522132-16.084327 53.892421-1.768273l87.024006 86.454024C965.710432 173.382862 964.91123 197.393719 949.570847 212.673727L949.570847 212.673727zM580.373227 579.594491 441.169815 441.244516l306.238706-304.299541 139.205459 138.348951L580.373227 579.594491 580.373227 579.594491zM560.984644 598.869486l-194.863083 55.314817 55.659671-193.666838L560.984644 598.869486 560.984644 598.869486zM236.551554 178.118724c-48.13223 0-87.081311 38.949081-87.081311 87.024006l0 522.372232c0 48.062646 38.962384 87.026052 87.026052 87.026052l522.485819 0c48.063669 0 87.028099-38.963407 87.028099-87.028099L846.010213 439.248046l87.079264-87.028099 0 464.321094c0 80.124875-64.954361 145.078213-145.078213 145.078213L207.468169 961.619254c-80.124875 0-145.078213-64.954361-145.078213-145.078213L62.389956 236.114602c0-80.124875 64.954361-145.078213 145.078213-145.078213l464.435705 0-87.083357 87.083357L236.551554 178.119747 236.551554 178.118724z"></path></svg>
          Comment
          <svg viewBox="0 0 1024 1024" class="pointer-svg"><path d="M96.74666663 245.86026662c-49.456 0-77.54240002 65.33653335-41.5263999 101.36426676L470.4288001 762.43093329c23.81013335 23.81013335 59.22346666 23.81013335 83.0442668 0L968.66026674 347.21173333c36.95466656-36.95573339 6.10133335-101.36319989-42.12906674-101.36319999l-829.78346683 0.0117334z"></path></svg>
        </div>
        <div class="sideBarOption reply" :class="{ 'active': replyActive }" @click="replyActive = true; commentActive = chatActive = false; $router.push('/main/message/reply');">
          <svg viewBox="0 0 1024 1024" class="sideBarOption-svg"><path d="M902.6 526.7h-71.4c0.2-5.3 0.4-10.6 0.4-15.9 0-187.6-140.5-342.4-327.9-342.4S161.5 323.2 161.5 510.7c0 56.9 23.1 130.8 32.1 160 6 19.5 20.5 54.9 43.5 106.3l-76-1.2c67.2 49.2 181 75.7 299 73.9l11.7-0.3 2.8-0.1 2.8 0.1c5.1 0.2 10.3 0.3 15.4 0.3 35.1 0 69.3-5.3 101.8-15.5l66.3 52.9c-50.8 23.2-107.1 37.1-166.3 37.1-6.2 0-13.7 0.3-19.8 0-4.3 0.2-9.5-0.1-13.8 0-125.6 1.9-333.7-32-406.1-164.4-6.9-12.7-6.5-33.9 0-42.1s16.5-9.5 23-8.2l56.2 8.6c-10.8-28.5-20.8-56.5-29.9-84-11.9-38.1-14.3-80.2-14.3-122.2C89.9 286.2 276.4 99.6 502 99.6S902.9 285 902.9 510.8c0 5.3-0.1 10.6-0.3 15.9z m-142.3 97.7c45.3 2.6 80.3 5.1 105.2 7.7 69.2 7.1 105.4 66.4 108.7 177.9-26.3-19.7-50.8-34.6-73.6-44.9-20.9-9.3-67.6-12.4-140.3-9.3v68.9c0 15.5-10 20.3-22.3 10.5L568.8 699.8c-12.3-9.8-12.3-25.8 0-35.7l169.3-135.5c12.3-9.8 22.3-5.2 22.3 10.5l-0.1 85.3z"></path></svg>
          Reply
          <svg viewBox="0 0 1024 1024" class="pointer-svg"><path d="M96.74666663 245.86026662c-49.456 0-77.54240002 65.33653335-41.5263999 101.36426676L470.4288001 762.43093329c23.81013335 23.81013335 59.22346666 23.81013335 83.0442668 0L968.66026674 347.21173333c36.95466656-36.95573339 6.10133335-101.36319989-42.12906674-101.36319999l-829.78346683 0.0117334z"></path></svg>
        </div>
        <div class="sideBarOption chat" :class="{ 'active': chatActive }" @click="chatActive = true; commentActive = replyActive = false; $router.push('/main/message/chat');">
          <svg viewBox="0 0 1024 1024" class="sideBarOption-svg"><path d="M710.933333 211.2c-17.6-19.733333-37.333333-37.333333-59.733333-53.866667-169.066667-122.666667-405.866667-85.333333-529.066667 83.733334-99.2 137.066667-94.933333 321.6 6.4 452.8l1.066667 137.066666c0 3.2 0.533333 6.4 1.6 9.6 5.333333 17.6 24 27.2 41.6 21.333334l130.666667-41.066667c34.666667 12.266667 70.4 19.2 105.6 21.333333l-0.533334 0.533334c91.733333 67.2 212.266667 86.933333 323.2 50.666666l131.2 42.666667c3.2 1.066667 6.933333 1.6 10.133334 1.6 18.133333 0 33.066667-14.933333 33.066666-33.066667v-138.133333c90.666667-123.2 93.333333-293.866667 1.066667-420.8-50.666667-68.266667-120-113.6-196.266667-134.4zM280.533333 501.333333c-24.533333 0-43.733333-19.2-43.733333-42.666666s19.2-42.666667 43.733333-42.666667c22.4 0 41.6 19.2 41.6 42.666667s-19.2 42.666667-41.6 42.666666z m149.333334 0c-24.533333 0-43.733333-19.2-43.733334-42.666666s19.2-42.666667 43.733334-42.666667c22.4 0 41.6 19.2 41.6 42.666667s-19.2 42.666667-41.6 42.666666z m105.6-42.666666c0-23.466667 19.2-42.666667 43.733333-42.666667 22.4 0 41.6 19.2 41.6 42.666667s-19.2 42.666667-41.6 42.666666c-24.533333 0-43.733333-19.2-43.733333-42.666666z m296 264l-8 9.6 1.066666 101.333333-95.466666-32-11.733334 4.8c-54.933333 20.266667-113.066667 21.866667-166.933333 6.933333 72-22.4 137.6-67.2 185.066667-131.733333 74.666667-102.933333 86.933333-232 43.2-342.4l0.533333 0.533333c22.4 16 43.2 36.266667 60.8 60.8 70.4 97.066667 66.666667 229.333333-8.533333 322.133334z"></path></svg>
          Chat
          <svg viewBox="0 0 1024 1024" class="pointer-svg"><path d="M96.74666663 245.86026662c-49.456 0-77.54240002 65.33653335-41.5263999 101.36426676L470.4288001 762.43093329c23.81013335 23.81013335 59.22346666 23.81013335 83.0442668 0L968.66026674 347.21173333c36.95466656-36.95573339 6.10133335-101.36319989-42.12906674-101.36319999l-829.78346683 0.0117334z"></path></svg>
        </div>
        <div class="tips" @click="isDialogShow = !isDialogShow;">Feedback to us...</div>
      </div>
      <router-view></router-view>
    </div>
    <el-dialog v-model="isDialogShow">
      <div class="dialog-title">Feedback</div>
      <div class="content-title">
        <div class="content-title-capital">Title: </div>
        <input type="text" class="content-title-input"/>
      </div>
      <div class="content-description">
        <div class="content-description-capital">Description: </div>
        <textarea class="content-description-input"/>
      </div>
      <div class="confirm-btn dialog-btn" @click="confirm">
        <span>Confirm</span>
        <svg viewBox="0 0 1024 1024"><path d="M915.515 142.82L98.213 458.2c-46.058 17.772-44.905 43.6 2.349 57.622l197.477 58.595 80.292 238.91c10.512 31.279 37.973 37.875 61.463 14.605L543.378 725.32l204.475 149.84c26.566 19.468 53.879 9.222 61.05-23.09l149.21-672.345c7.151-32.22-11.894-48.753-42.598-36.906zM791.141 294.833l-348.62 310.61c-6.268 5.586-11.941 16.653-12.812 24.847l-15.39 144.698c-1.729 16.248-7.331 16.919-12.498 1.345l-67.457-203.339c-2.64-7.954 0.976-17.705 8.022-21.93L784.5 285.882c28.174-16.898 31.173-12.907 6.64 8.951z"></path></svg>
      </div>
      <div class="cancel-btn dialog-btn" @click="cancel">
        <span>Cancel</span>
        <svg viewBox="0 0 1024 1024"><path d="M693.527273 512l311.854545-311.854545c18.618182-18.618182 18.618182-55.854545 0-79.127273L902.981818 18.618182C884.363636 0 847.127273 0 823.854545 18.618182L512 330.472727 200.145455 13.963636C176.872727-4.654545 139.636364-4.654545 121.018182 13.963636L13.963636 121.018182c-18.618182 18.618182-18.618182 55.854545 0 79.127273L330.472727 512 18.618182 823.854545c-18.618182 18.618182-18.618182 55.854545 0 79.127273l102.4 102.4c18.618182 18.618182 55.854545 18.618182 79.127273 0l311.854545-311.854545 311.854545 311.854545c18.618182 18.618182 55.854545 18.618182 79.127273 0l102.4-102.4c18.618182-18.618182 18.618182-55.854545 0-79.127273L693.527273 512z"></path></svg>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import { ElDialog } from 'element-plus';
import { ElMessage } from 'element-plus'

export default {
  name: "index",
  data() {
    return {
      commentActive: true,
      replyActive: false,
      chatActive: false,
      isDialogShow: false
    };
  },
  components: {
    ElDialog
  },
  methods: {
    confirm() {
      ElMessage({
        showClose: true,
        center: true,
        message: 'Your feedback has been sent.',
        type: 'success',
        duration: 2000
      });
      this.isDialogShow = false;
    },
    cancel() {
      this.isDialogShow= false;
    }
  },
  created() {
    if (this.$route.name === 'chat') {
      this.chatActive = true;
      this.replyActive = false;
      this.commentActive = false;
    } else if (this.$route.name === 'comment') {
      this.chatActive = false;
      this.replyActive = false;
      this.commentActive = true;
    } else {
      this.chatActive = false;
      this.replyActive = true;
      this.commentActive = false;
    }
  }
}
</script>

<style scoped lang="scss">
  .message-main {
    position: relative;
    background: #A0EEE1;
    width: 100vw;
    height: 88vh;

    .message-base {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;

      .sideBar {
        width: 15vw;
        height: 75vh;
        background-color: #D6D5B7;
        border-radius: 10px;
        border: 5px solid #11564b;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .sideBarOption {
          box-sizing: border-box;
          position: relative;
          width: 90%;
          height: 15%;
          background-color: #11564b;
          margin-top: 10px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
          color: #D6D5B7;
          border: 5px solid #11564b;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color .5s, color .5s;

          .sideBarOption-svg {
            position: absolute;
            left: 5%;
            width: 30px;
            fill: #D6D5B7;
            transition: fill .5s;
          }

          .pointer-svg {
            position: absolute;
            right: 5%;
            width: 30px;
            fill: #D6D5B7;
            transform: rotate(90deg);
            transition: fill .5s, transform .5s;
          }

          &.active {
            background-color: #D6D5B7;
            color: #11564b;
            border: 5px solid #11564b;

            .sideBarOption-svg {
              fill: #11564b;
            }

            .pointer-svg {
              transform: rotate(-90deg);
              fill: #11564b;
            }
          }
        }

        .tips {
          position: absolute;
          bottom: 5%;
          font-weight: bold;
          font-size: 20px;
          color: #11564b;
          text-decoration: underline ;
          font-style: italic;
          cursor: pointer;
          transition: letter-spacing .5s;

          &:hover {
            letter-spacing: 1px;
          }

        }

      }

    }

    & /deep/ .el-overlay .el-dialog{
      background-color: #D6D5B7;
      border-radius: 10px;
      border: 5px solid #11564b;
      height: 75%;

      .dialog-title {
        font-weight: bold;
        font-size: 30px;
        color: #11564b;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .content-title {
        position: absolute;
        left: 50%;
        top: 25%;
        transform: translate(-50%, 0);
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;

        .content-title-capital {
          font-weight: bold;
          font-size: 20px;
          color: #11564b;
          display: inline-block;
        }

        .content-title-input {
          all: unset;
          border-bottom: 3px #11564b solid;
          width: 400px;
          position: relative;
          left: 27px;
          height: 30px;
          letter-spacing: 2px;
          color: #11564b;
          font-weight: bold;
          font-size: 18px;
        }

      }

      .content-description {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, 0);
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;

        .content-description-capital {
          display: inline-block;
          font-weight: bold;
          font-size: 20px;
          color: #11564b;
          position: relative;
          right: 27px;
        }

        .content-description-input {
          all: unset;
          border-radius: 10px;
          border: 3px #11564b solid;
          width: 400px;
          height: 190px;
          letter-spacing: 2px;
          color: #11564b;
          font-weight: bold;
          font-size: 18px;
          padding: 10px;
        }

      }

      .dialog-btn {
        border: 3px #11564b solid;
        border-radius: 10px;
        width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 30px;
        cursor: pointer;
        transition: background-color .5s;

        span {
          color: #11564b;
          font-size: 18px;
          font-weight: bold;
          margin-right: 5px;
          transition: color .5s;
        }

        svg {
          fill: #11564b;
          transition: fill .5s;
        }

        &:hover {
          background-color: #11564b;
          span {
            color: #D6D5B7;
          }
          svg {
            fill: #D6D5B7;
          }
        }

      }

      .confirm-btn {
        left: 20%;
        svg {
          width: 25%;
        }
      }

      .cancel-btn {
        right: 20%;
        span {
          margin-right: 10px;
        }
        svg {
          width: 15%;
        }
      }

    }

  }
</style>
