<template>
  <div class="comment">
    <div class="comment-content">
      <div class="comment-item-and-more-reply" v-for="(item, index) in commentItems">
        <div class="comment-item">
          <img src="@/assets/image/petImg/dog/dogImg1.jpg" alt="" class="product-image">
          <div class="comment-item-content">
            <div class="your-comment">
              Your comment about：
            </div>
            <div class="product-detail">
              {{ item.category }}---{{ item.product }}---{{ item.item }}
            </div>
            <div class="comment-operation">
              {{ item.createdTime }}
              <div class="view-reply" :class="{ 'operation-active': isViewReply[index] }" @click="isViewReply[index] = !isViewReply[index];">
                <svg viewBox="0 0 1024 1024"><path d="M517.352727 15.825455C240.337455 15.825455 15.825455 240.314182 15.825455 517.352727c0 276.968727 224.512 501.527273 501.527272 501.527273 276.968727 0 501.527273-224.558545 501.527273-501.527273C1018.88 240.337455 794.065455 15.825455 517.352727 15.825455z m158.208 539.74109l-199.68 199.703273c-21.154909 21.178182-55.272727 21.178182-76.427636 0a53.922909 53.922909 0 0 1 0-76.404363l161.512727-161.512728-161.512727-161.512727a53.946182 53.946182 0 0 1 0-76.427636 53.992727 53.992727 0 0 1 76.427636 0l199.68 199.703272c21.178182 21.178182 21.178182 55.505455 0 76.450909z"></path></svg>
                view reply
              </div>
            </div>
          </div>
          <div class="comment-message">
            {{ item.commentMessage }}
          </div>
        </div>
        <div class="view-reply-content" :class="{ 'active': isViewReply[index] }">
          <div v-if="item.reply.length === 0" class="no-one-responded">
            Sorry, no one responded.
          </div>
          <div class="reply-item" v-else v-for="reply_item in item.reply">
            <img src="@/assets/image/avatar/avatar.jpg" alt="" class="user-avatar">
            <div class="user-reply-info">
              <div class="username">
                {{ reply_item.username }}
              </div>
              <div class="created-time">
                {{ reply_item.createdTime }}
              </div>
            </div>
            <div class="reply-content">
              {{ reply_item.replyContent }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      commentItems: null,
      isViewReply: null,
    };
  },
  watch: {
    commentItems(newValue, oldValue) {
      this.isViewReply = new Array(newValue.length);
      for (let i = 0; i < this.isViewReply.length; i++) {
        this.isViewReply[i] = false;
      }
    }
  },
  created() {


    // this.commentItems = [
    //   {
    //     category: 'DOG',
    //     product: 'Bulldog',
    //     item: 'dolor sit amet',
    //     createdTime: '2021-06-05 13:29',
    //     commentMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt eaque inventore mollitia perspiciatis, placeat quidem recusandae tempore velit! Facilis!',
    //     reply: [
    //       {
    //         username: 'lorem.',
    //         createdTime: '2021-06-05 13:29',
    //         replyContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil, non odit omnis sapiente similique.',
    //       },
    //       {
    //         username: 'lorem.',
    //         createdTime: '2021-06-05 13:29',
    //         replyContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil, non odit omnis sapiente similique.',
    //       },
    //       {
    //         username: 'lorem.',
    //         createdTime: '2021-06-05 13:29',
    //         replyContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil, non odit omnis sapiente similique.',
    //       },
    //     ]
    //   },
    //   {
    //     category: 'DOG',
    //     product: 'Bulldog',
    //     item: 'dolor sit amet',
    //     createdTime: '2021-06-05 13:29',
    //     commentMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt eaque inventore mollitia perspiciatis, placeat quidem recusandae tempore velit! Facilis!',
    //     reply: []
    //   },
    //   {
    //     category: 'DOG',
    //     product: 'Bulldog',
    //     item: 'dolor sit amet',
    //     createdTime: '2021-06-05 13:29',
    //     commentMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt eaque inventore mollitia perspiciatis, placeat quidem recusandae tempore velit! Facilis!',
    //     reply: []
    //   },
    //   {
    //     category: 'DOG',
    //     product: 'Bulldog',
    //     item: 'dolor sit amet',
    //     createdTime: '2021-06-05 13:29',
    //     commentMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt eaque inventore mollitia perspiciatis, placeat quidem recusandae tempore velit! Facilis!',
    //     reply: []
    //   },
    //   {
    //     category: 'DOG',
    //     product: 'Bulldog',
    //     item: 'dolor sit amet',
    //     createdTime: '2021-06-05 13:29',
    //     commentMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt eaque inventore mollitia perspiciatis, placeat quidem recusandae tempore velit! Facilis!',
    //     reply: []
    //   },
    //   {
    //     category: 'DOG',
    //     product: 'Bulldog',
    //     item: 'dolor sit amet',
    //     createdTime: '2021-06-05 13:29',
    //     commentMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt eaque inventore mollitia perspiciatis, placeat quidem recusandae tempore velit! Facilis!',
    //     reply: []
    //   },
    // ]
  }
}
</script>

<style scoped lang="scss">

  .comment {
    position: relative;
    left: 1vw;
    width: 65vw;
    height: 75vh;
    background-color: #D6D5B7;
    color: #11564b;
    border-radius: 10px;
    border: 5px solid #11564b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .comment-content {
      width: 95%;
      height: 90%;
      padding-right: 10px;
      overflow-x: hidden;
      overflow-y: auto;

      .comment-item-and-more-reply {
        position: relative;

        .comment-item {
          width: 100%;
          // height 不能够越级继承。
          background-color: #D6D5B7;
          position: relative;

          .product-image {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            height: 80px;
            width: 80px;
            border-radius: 50%;
            object-fit: cover;
          }

          .comment-item-content {
            position: absolute;
            top: 50%;
            left: 120px;
            width: 40%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 85%;

            .your-comment {
              color: #11564b;
              font-weight: bold;
              font-size: 20px;
            }

            .product-detail {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .comment-operation {
              font-size: 14px;
              color: #808080;
              display: flex;
              align-items: center;

              .view-reply {
                cursor: pointer;
                user-select: none;
                position: relative;
                left: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: color .5s;
                &.operation-active {
                  color: #11564b;
                  svg {
                    transform: rotate(90deg);
                    fill: #11564b;
                  }
                }
                svg {
                  width: 20px;
                  fill: #808080;
                  margin-right: 5px;
                  transition: fill .5s, transform .5s;
                }
                &:hover {
                  color: #11564b;
                  svg {
                    fill: #11564b;
                  }
                }
              }
            }
          }

          .comment-message {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            max-width: calc(45% - 20px);
            height: calc(100% - 20px);
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: darken(#D6D5B7, 5%);
            color: #11564b;
            word-wrap: break-word;
            padding: 10px;
          }

          &:hover {
            background-color: darken(#D6D5B7, 5%);

            .comment-message {
              background-color: darken(#D6D5B7, 10%);
            }

          }

          &::before {
            content: '';
            display: block; // 伪元素默认是行内元素。
            width: 100%;
            height: 100px;
            position: relative;
            // 使用伪元素将高度撑起来！
          }

        }

        .view-reply-content {

          box-sizing: border-box;
          top: 0;
          position: absolute;
          width: 100%;
          z-index: -1;
          background-color: darken(#D6D5B7, 5%);
          margin-top: 20px;

          .no-one-responded {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
            position: relative;
            font-size: 26px;
            font-weight: bold;
          }

          .reply-item {
            width: 100%;
            height: 100px;
            position: relative;

            .user-avatar {
              position: absolute;
              border-radius: 50%;
              width: 80px;
              height: 80px;
              top: 50%;
              transform: translateY(-50%);
              left: 20px;
            }

            .user-reply-info {
              position: absolute;
              top: 50%;
              left: 120px;
              width: 40%;
              transform: translateY(-50%);
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 85%;

              .username {
                color: #11564b;
                font-weight: bold;
                font-size: 20px;
              }

              .created-time {
                font-size: 14px;
                color: #808080;
              }

            }

            .reply-content {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              max-width: calc(45% - 20px);
              height: calc(100% - 20px);
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              background-color: darken(#D6D5B7, 10%);
              color: #11564b;
              word-wrap: break-word;
              padding: 10px;
            }

            &:hover {
              background-color: darken(#D6D5B7, 10%);

              .reply-content {
                background-color: darken(#D6D5B7, 15%);;
              }

            }

            &:not(:last-child) {
              margin-bottom: 20px;
            }

          }

          &.active {
            z-index: 0;
            position: relative;
          }


        }

        &:not(:last-child) {
          margin-bottom: 20px;
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

  }

</style>
