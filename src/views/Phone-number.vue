<!-- 手机号 -->
<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <img src="./images/personal-information/icon_1.png" alt="" />
      <span>手机号</span>
    </div>
    <!-- 背景 -->
    <div class="bg">
      <!-- 头像部分 -->
      <div class="parent">
        <div class="main">
          <img src="./images/personal-information/1_2.png" alt="" />
          <p style="font-size: larger; font-weight: 600; margin-bottom: 5px">
            您当前的手机号为
          </p>
          <p
            style="color: orange; font-size: 23px; margin: 0; font-weight: 600"
          >
            151****8512
          </p>
        </div>
      </div>
      <ul class="item">
        <li>1.更换手机后，当前账户基础信息保持不变，部分权益将会失效</li>
        <li>2.更换成功之后请使用新手机号进行登录</li>
        <li>3.30天内只能修改一次手机号</li>
      </ul>
      <!-- 解除绑定按钮 -->
      <div class="button">好了我知道了，我要更换</div>
    </div>
  </div>
</template>

<script></script>

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
  background: #f8f8f8;
  height: 759px;
  width: 390px;
}
.parent {
  height: 230px;
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
  list-style: none;
  padding: 0;
}
.item li {
  margin-top: 8px;
}
.button {
  background: rgb(238, 123, 28);
  height: 62px;
  margin-top: 300px;
  border-radius: 7px;
  line-height: 65px;
  text-align: center;
  color: white;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
