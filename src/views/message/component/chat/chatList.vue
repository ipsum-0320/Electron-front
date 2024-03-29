<template>
  <div class="list" :style="{ width: 'calc(27% + ' + listWidth + 'px' }">
    <div class="list-item" v-for="(item, index) in listItems" @click="chatTo(index)">
      <img :src="deleteImg" alt="" class="delete">
      <div class="avatar-content" :class="{ 'avatar-tip': !item.isRead }">
        <img :src="avatars[index]" alt="" class="avatar">
      </div>
      <div class="content">
        <div class="name">
          {{ item.toUsername === $store.state.username ? item.username : item.toUsername }}
          <!-- listItems中的数据来自于最新的一个数据结构 -->
        </div>
        <div class="quick-message">
          {{ item.context }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import deleteImg from '@/assets/image/svg/message/delete.svg'
import {getChatListByUsername} from '@/api/chat';
import {getAvatar} from "@/api/user";
import {readMessage} from "@/api/chat";

export default {
  name: "chatList",
  data() {
    return {
      listItems: [],
      deleteImg,
      avatars: []
    }
  },
  methods: {
    chatTo(index) {
      readMessage(this.$store.state.username).then(res => {
        this.listItems[index].isRead = true;
        this.$emit('chatTo' ,{
          toUsername: this.listItems[index].toUsername === this.$store.state.username ? this.listItems[index].username : this.listItems[index].toUsername,
          avatarURL: this.avatars[index]
        });
      }).catch(err => {
        console.log(err);
      });
    },
  },
  props: {
    listWidth: String,
    webSocketData: Object
  },
  watch: {
    webSocketData: function (newVal, oldVal) {
      for (let i = 0; i < this.listItems.length; i++) {
        let toUsername = this.listItems[i].toUsername === this.$store.state.username ? this.listItems[i].username : this.listItems[i].toUsername;
        if (toUsername === newVal.username) {
          this.listItems[i].context = newVal.context;
          this.listItems[i].isRead = newVal.isRead;
          return;
        }
      }
    }
  },
  async created() {
    try {
      this.listItems = await getChatListByUsername(this.$store.state.username);
      for (let listItem of this.listItems) {
        let avatarURL = await getAvatar(listItem.toUsername === this.$store.state.username ? listItem.username : listItem.toUsername);
        this.avatars.push(avatarURL);
        // await 居然会阻塞 for 循环。
      }
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 95%;
    width: 27%;
    min-width: 27%;
    max-width: 50%;
    overflow-x: hidden;
    overflow-y: auto;

    .list-item {
      user-select: none;
      box-sizing: border-box;
      height: 80px;
      width: 100%;
      background-color: #D6D5B7;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      .delete {
        display: inline-block;
        width: 0;
        height: 30px;
        transition: width .5s;
        position: absolute;
        left: 5px;
        // flex 和 width 结合有着意想不到的效果。
      }

      .avatar-content {
        position: relative;

        &.avatar-tip::after {
          content: '';
          background-color: red;
          width: 10px;
          height: 10px;
          position: absolute;
          right: -5px;
          border-radius: 50%;
        }

        .avatar {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

      }

      .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 80px;
        width: 45%;
        margin-left: 10px;

        .name {
          font-weight: bold;
          font-size: 18px;
        }

        .quick-message {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 12px;
        }

      }

      &:hover {
        .delete {
          width: 30px;
        }
        background-color: darken(#D6D5B7, 5%);
      }

    }

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
</style>
