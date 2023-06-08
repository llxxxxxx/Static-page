<!-- 个人中心页面 -->
<template>
  <div class="bg">
    <!--头部-->
    <div class="head">
      <p style="color: gray; margin-bottom: 40px">
        个人中心
        <img
          style="width: 20px; height: 20px; float: right; margin-right: 20px"
          src="./images/mine/8.png"
          alt=""
          @click="gosetting"
        />
      </p>
      <img @click="gologin" src="../views/images/mine/avatar.png" alt="" />
      <p>请点击登录</p>
    </div>

    <!--中间部分---->
    <div class="mid">
      <div @click="gochange">
        <img src="../views/images/mine/1.png" alt="" />
        <span>&nbsp&nbsp&nbsp切换小区</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div @click="goperson">
        <img src="../views/images/mine/2.png" alt="" />
        <span>&nbsp&nbsp&nbsp家庭成员</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div @click="gocollection">
        <img src="../views/images/mine/3.png" alt="" />
        <span>&nbsp&nbsp&nbsp我的收藏</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div @click="gowallet">
        <img src="../views/images/mine/4.png" alt="" />
        <span>&nbsp&nbsp&nbsp我的钱包</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div @click="gocoupon">
        <img src="../views/images/mine/5.png" alt="" />
        <span>&nbsp&nbsp&nbsp优惠券</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div @click="gointegral">
        <img src="../views/images/mine/6.png" alt="" />
        <span>&nbsp&nbsp&nbsp积分</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>
      <div @click="goorder">
        <img src="../views/images/mine/7.png" alt="" />
        <span>&nbsp&nbsp&nbsp我的订单</span>
        <img src="../views/images/icon_0.png" class="arrow" alt="" />
      </div>

      <div class="push"></div>
    </div>
  </div>
  <!--底部---->
  <!-- <div class="foot">
    <ul @click="gohome">
      <li><img src="../views/images/icon_1.png" alt="" /></li>
      <li>首页</li>
    </ul>
    <ul @click="goservice">
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
  </div> -->

  <van-tabbar v-model="active" active-color="orange" route="true">
    <van-tabbar-item to="/home">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icon.active1 : icon.inactive1" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/service">
      <span>社区服务</span>
      <template #icon="props">
        <img :src="props.active ? icon.active2 : icon.inactive2" />
      </template> </van-tabbar-item
    ><van-tabbar-item>
      <span>社区交流</span>
      <template #icon="props">
        <img :src="props.active ? icon.active3 : icon.inactive3" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/mine">
      <span>个人中心</span>
      <template #icon="props">
        <img :src="props.active ? icon.active4 : icon.inactive4" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import "../views/css/index.css";
export default {
  methods: {
    gosetting() {
      this.$router.replace("/setting");
    },
    goservice() {
      this.$router.replace("/service");
    },
    gohome() {
      this.$router.replace("/home");
    },
    gochange() {
      this.$router.replace("/changearea");
    },
    goperson() {
      this.$router.replace("/person");
    },
    gocollection() {
      this.$router.replace("/collection");
    },
    gowallet() {
      this.$router.replace("/wallet");
    },
    gointegral() {
      this.$router.replace("/integral");
    },
    gocoupon() {
      this.$router.replace("/coupon");
    },
    goorder() {
      this.$router.replace("/order");
    },
    gologin() {
      this.$router.replace("/login");
    },
  },
  setup() {
    const active = ref(0);
    const icon = {
      active1: "/test/icon_1_1.png",
      inactive1: "/test/icon_1.png",
      active2: "/test/icon_2_1.png",
      inactive2: "/test/icon_2.png",
      inactive3: "/test/icon_3.png",
      active4: "/test/icon_4_1.png",
      inactive4: "/test/icon_4.png",
    };
    return {
      icon,
      active,
    };
  },
};
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
  vertical-align: middle;
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
