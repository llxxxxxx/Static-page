<!-- 微信解除绑定页面 -->
<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <img
        @click="goback"
        src="./images/personal-information/icon_1.png"
        alt=""
      />
      <span>解除绑定</span>
    </div>
    <!-- 全局背景部分 -->
    <div class="bg">
      <!-- 头像部分 -->
      <div class="parent">
        <div class="main">
          <img src="./images/personal-information/1_2.png" alt="" />
          <p style="font-size: larger; color: grey">已绑定微信</p>
        </div>
      </div>
      <p class="item">
        您可以点击下方按钮解除与当前微信的绑定，或者绑定新的微信号
      </p>
      <!-- 解除绑定按钮 -->
      <div class="button">解除绑定</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.replace("/personInformation");
    },
  },
};
</script>

<style scoped>
.head {
  width: 370px;
  height: 50px;
  padding-top: 25px;
  padding-left: 20px;
  background-color: white;
  margin-bottom: 10px;
}

.head img {
  width: 10px;
}

.head span {
  font-size: 23px;
  display: inline-block;
  width: 335px;
  height: 40px;
  text-align: center;
}
.bg {
  height: 759px;
  width: 390px;
  background: #292835;
}
.parent {
  height: 200px;
  display: flex;
  justify-content: center; /*使用flex布局水平居中*/
  /* align-items: center;      使用flex布局垂直居中 */
}
.main {
  /* margin-left: 160px; */
  padding-top: 40px;
  text-align: center;
}
.main img {
  width: 90px;
}
.item {
  margin: 30px;
  color: rgb(170, 170, 170);
  font-size: 18px;
}
.button {
  background: rgb(238, 123, 28);
  height: 65px;
  margin-top: 380px;
  border-radius: 10px;
  line-height: 65px;
  text-align: center;
  color: white;
  font-size: 22px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
