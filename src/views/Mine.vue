<template>
  <div class="bg">
    <!--头部-->
    <div class="head">
      <p style="color: white; margin-bottom: 40px">
        个人中心
        <img
          style="width: 20px; height: 20px; float: right; margin-right: 20px"
          src="./images/mine/8.png"
          alt=""
        />
      </p>
      <img src="../views/images/mine/avatar.png" alt="" />
      <p>请点击登录</p>
    </div>

    <!--中间部分---->
    <div class="mid">
      <div>
        <img src="../views/images/mine/1.png" alt="" />
        <span>&nbsp&nbsp&nbsp切换小区</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div>
        <img src="../views/images/mine/2.png" alt="" />
        <span>&nbsp&nbsp&nbsp家庭成员</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div>
        <img src="../views/images/mine/3.png" alt="" />
        <span>&nbsp&nbsp&nbsp我的收藏</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div>
        <img src="../views/images/mine/4.png" alt="" />
        <span>&nbsp&nbsp&nbsp我的钱包</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div>
        <img src="../views/images/mine/5.png" alt="" />
        <span>&nbsp&nbsp&nbsp优惠券</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div>
        <img src="../views/images/mine/6.png" alt="" />
        <span>&nbsp&nbsp&nbsp积分</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div>
        <img src="../views/images/mine/7.png" alt="" />
        <span>&nbsp&nbsp&nbsp我的订单</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>

      <div class="push"></div>
    </div>
  </div>
  <!--底部---->
  <div class="foot">
    <ul>
      <li><img src="../views/images/icon_1.png" alt="" /></li>
      <li>首页</li>
    </ul>
    <ul>
      <li><img src="../views/images/icon_2.png" alt="" /></li>
      <li>社区服务</li>
    </ul>
    <ul>
      <li><img src="../views/images/icon_3.png" alt="" /></li>
      <li>社区交流</li>
    </ul>
    <ul>
      <li><img src="../views/images/icon_4_1.png" alt="" /></li>
      <li style="color: orange">个人中心</li>
    </ul>
  </div>
</template>

<script>
import "../views/css/index.css";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  margin: 0;
}
.bg {
  background: #f1f1f1;
}
.head {
  width: 390px;
  height: 230px;
  padding-top: 20px;
  text-align: center;
}
.head img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.mid {
  /* background: green; */
  height: 600px;
  min-height: 100%;
  /* margin-bottom: 60px; */
  margin-top: 20px;
}
.mid div {
  height: 71px;
  line-height: 71px;
  margin-left: 15px;
  /* margin: 0 auto; */
}

.foot {
  position: fixed;
  display: flex;
  left: 0px;
  bottom: 0px;
  width: 390px;
  z-index: 9999;
  height: 60px;
  background-color: white;
}
.foot ul {
  float: left;
  list-style: none;
  flex: 1;
  text-align: center;
  margin: 0 auto;
}
</style>
