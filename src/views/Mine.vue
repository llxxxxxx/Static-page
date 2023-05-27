<template>
  <div class="bg">
    <!--头部-->
    <div class="head">
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

  <footer class="footer">
    <ul>
      <li><img src="../views/images/icon_1.png" alt="" /></li>
      <li><p>首页</p></li>
    </ul>
    <ul>
      <li><img src="../views/images/icon_2.png" alt="" /></li>
      <li><p>社区服务</p></li>
    </ul>
    <ul>
      <li><img src="../views/images/icon_3.png" alt="" /></li>
      <li><p>社区交流</p></li>
    </ul>
    <ul>
      <li><img src="../views/images/icon_4.png" alt="" /></li>
      <li><p>个人中心</p></li>
    </ul>
  </footer>
</template>

<script>
import "../views/css/index.css";
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}
.bg {
  background: #f5f5f5;
}
.head {
  width: 390px;
  height: 250px;
  /* background: #ccc; */
  display: flex;
  align-items: center;
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

footer {
  position: fixed;
  display: flex;
  left: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 9999;
  height: 60px;
  background-color: white;
}
footer ul {
  float: left;
  list-style: none;
  flex: 1;
  text-align: center;
}
.footer,
.push {
  height: 50px;
}
</style>
