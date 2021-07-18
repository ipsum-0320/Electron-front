<template>
  <div class="profile-container">
    <div class="avatar-content">
      <div class="maskI"></div>
      <div class="tips">
        Your avatar is here
        <img src="@/assets/image/svg/user/bottom.svg" alt="">
      </div>
      <div class="avatar">
        <img :src="$store.state.avatarURL" alt="">
      </div>
      <div class="upload">
        <el-upload action=""
                   ref="upload"
                   :http-request="customizeUpload"
                   :show-file-list="false"
                   class="uploader"
                   :before-upload="handleBeforeUpload">
          <div class="toUpload">
            <svg viewBox="0 0 1157 1024" class="uploader-icon"><path d="M0.089 541.57c0-124.378 82.237-233.716 192.153-266.112C253.074 115.123 403.708 0 579.93 0c177.646 0 324.186 115.078 384.973 275.458 113.432 33.153 192.198 141.066 192.198 266.113 0 153.971-119.573 279.15-270.919 279.15-28.347 0-53.934-26.61-53.934-56.07 0-33.82 25.587-56.115 53.934-56.115 91.226 0 163.806-74.093 163.806-166.876 0-49.618-21.449-95.676-56.649-125.136l-9.656-9.434a49.173 49.173 0 0 0-12.46-10.057c-2.76-3.604-9.034-3.604-12.46-6.497h-3.427c-2.76-3.56-6.23-3.56-9.034-6.453h-3.47c-2.76 0-6.23-3.56-9.657-3.56-2.76 0-6.23 0-6.23-2.892h-9.034c-3.471 0-6.23 0-9.701-3.605H882.71c-2.759-10.813-6.23-18.69-6.23-29.503-2.759 0-2.759-3.56-2.759-6.453-3.427-6.497-3.427-12.905-6.23-19.447 0-3.56-3.427-3.56-3.427-7.164-2.759-6.497-6.23-12.905-9.656-19.403v-6.497c-2.804-6.452-9.078-12.905-12.46-19.446-53.178-92.116-151.39-154.64-261.975-154.64-113.342 0-211.466 62.568-264.688 154.64l-9.034 19.446c0 2.18-1.424 2.18-2.091 4.317l-1.38 2.18-9.701 19.403v7.164l-8.945 19.447v6.453c-3.47 10.769-6.942 18.69-6.942 29.459h-28.302c-2.759 3.604-6.23 3.604-8.944 3.604h-6.23c-2.76 2.18-4.14 2.893-4.896 2.893a1.246 1.246 0 0 1-2.047 0c-2.759 0-6.23 3.56-9.033 3.56h-6.23c-3.427 2.937-6.23 2.937-9.657 6.497h-3.426c-2.76 2.893-6.23 2.893-9.079 6.497h-3.426c-2.76 3.56-6.23 6.453-9.701 10.057-6.23 2.848-8.945 6.497-12.416 9.39-35.244 29.504-53.222 75.562-53.222 125.18 0 92.783 72.58 166.876 160.38 166.876 32.485 0 56.693 22.295 56.693 56.07 0 29.505-24.208 56.071-56.694 56.071C123.133 820.722 0.09 695.542 0.09 541.66z m362.857 186.991c0-16.554 6.23-28.791 12.46-39.56l163.762-186.902c10.413-10.814 24.92-16.555 40.806-16.555 15.932 0 28.347 5.786 41.475 16.51l160.38 186.991a55.982 55.982 0 0 1-40.763 94.964c-15.931 0-27.68-8.678-38.048-19.447l-69.109-78.41v281.955c0 33.82-24.208 55.403-53.935 55.403-31.105 0-53.222-21.582-53.222-55.403v-281.91l-69.065 78.365c-10.368 10.814-25.543 19.447-41.43 19.447-28.391 0-53.311-25.9-53.311-55.403v-0.045z"></path></svg>
            Upload new avatar!
          </div>
        </el-upload>
      </div>
      <div class="maskII"></div>
    </div>
  </div>
</template>

<script>

import {ElUpload, ElMessage} from 'element-plus';
import {upload, editAvatar} from "@/api/OSS";

export default {
  name: "index",
  components: {
    ElUpload,
    ElMessage,
  },
  data() {
    return {

    };
  },
  methods: {
    customizeUpload(config) {
      let formData = new FormData()
      formData.append('file', config.file) //图像文件列表
      formData.append('fileName', config.file.name)
      config.onSuccess = this.handleUploadSuccess;
      config.onError = this.handleUploadError;
      let tempPromise = upload(config.onProgress, formData).then((res) => {
        this.$store.commit('setAvatarURL', res);
        editAvatar(this.$store.state.username, res);
      });
      tempPromise.abort = () => {};
      return tempPromise;
    },
    handleUploadSuccess() {
      ElMessage({
        message: '上传成功!',
        type: 'success',
        duration: 1000
      })
    },
    handleUploadError() {
      ElMessage({
        message: '上传失败!',
        type: 'error',
        duration: 1000
      });
    },
    handleBeforeUpload(file) {
      const isLegalPic = file.type === 'image/jpeg';
      if (!isLegalPic) {
        ElMessage({
          message: '上传的宠物图片只能是 JPG 格式!',
          type: 'error',
          duration: 1000
        });
      }
      return isLegalPic;
    },
  }
}
</script>

<style scoped lang="scss">

.profile-container {
  width: 100vw;
  height: 88vh;
  background-color: #A0EEE1;
  display: flex;
  justify-content: center;
  align-items: center;

  .avatar-content {
    box-sizing: border-box;
    width: 35vw;
    height: 35vw;
    background-color: darken(#D6D5B7, 15%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .maskI, .maskII {
      position: absolute;
      width: 50%;
      height: 50%;
      background-color: #A0EEE1;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:last-child {
        top: 50%;
        left: 50%;
      }

    }

    .tips {
      position: absolute;
      color: #11564b;
      font-weight: bold;
      font-size: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 0;
      left: -200px;

      img {
        width: 90px;
        margin-top: 10px;
      }

    }

    .avatar {
      width: 35vw;
      height: 35vw;
      background-color: #A0EEE1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 10px solid #11564b;
      box-sizing: border-box;

      img {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        z-index: 1;
        box-shadow: 0 0 20px 5px #11564b;
      }

    }

    .upload {
      box-sizing: border-box;
      position: absolute;
      width: 200px;
      height: 100px;
      right: -150px;
      bottom: 0;
      z-index: 1;
      background-color: #D6D5B7;
      border: 5px solid #11564b;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color .5s;

      .uploader {
        width: 100%;
        height: 100%;

        & /deep/ .el-upload {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .toUpload {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            color: #11564b;
            font-weight: bold;
            transition: color .5s;

            .uploader-icon {
              width: 50px;
              fill: #11564b;
              transition: fill .5s;
            }

          }

        }

      }

      &:hover {
        background-color: #11564b;
        .uploader /deep/ .el-upload .toUpload {
          color: #D6D5B7;
          .uploader-icon {
            fill: #D6D5B7;
          }
        }
      }

    }

  }

}

</style>
