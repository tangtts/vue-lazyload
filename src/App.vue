<template>
  <div class="container">
    <div class="box" v-for="item of imageData" :key="item.id">
      <div class="img-box">
        <img v-lazy="item.avator" :alt="item.title" />
      </div>
      <div class="content-box">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      imageData: [
        {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        },
        {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        }, {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        },
        {
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        },{
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF",
        },{
          id: "1",
          title: "aa",
          description: "简介",
          avator: "https://ts1.cn.mm.bing.net/th/id/R-C.028756b4f46d264575851247131be384?rik=KXvKeXgPY1GW7g&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f2a53fffbca0f76e1475073371c70067d&ehk=AlLfRxb6kmDoR4BNvQpQHBb7gos7GLfsvu2xD7rY4sY%3d&risl=&pid=ImgRaw&r=0",
        },
      ]
    }
  },
}
</script>

<style>
.container {
  overflow: auto;
  height: 100vh;
}

.box {
  position: relative;
  height: 100px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
}

.img-box {
  height: 100%;
}

.img-box img {
  height: 100%;
}
.content-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 163px;
  box-sizing: border-box;
}

h1 {
  font-size: 16px;
}

p {
  font-size: 14px;
  color: #666;
}
</style>
