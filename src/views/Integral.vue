<!-- 积分页面 -->
<template>
  <div>
    <div class="main">
      <div class="head">
        <img @click="goback" src="./images/integral/icon_1.png" alt="" />
        <span>积分</span>
        <p class="money">6400</p>
        <p class="yu">我的积分</p>
      </div>
      <div class="mid">
        <div class="midd">
          <p class="title">签到</p>
          <p class="date">2018-12-21</p>
          <p class="inter">+10</p>
        </div>
        <div class="midd">
          <p class="title">兑换</p>
          <p class="date">2018-10-03</p>
          <p class="outer">-50</p>
        </div>
        <div class="midd">
          <p class="title">签到</p>
          <p class="date">2018-10-03</p>
          <p class="inter">+10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
    };
  },
  methods: {
    goback() {
      this.$router.replace("/mine");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  width: 390px;
  height: 844px;
  background-color: #e9e9e9;
}
.head {
  width: 390px;
  height: 215px;
  background-image: url("./images/integral/1.png");
  background-size: 100%;
  padding-top: 25px;
}
.head img {
  padding-left: 15px;
  width: 30px;
}

.head span {
  font-size: 22px;
  display: inline-block;
  width: 310px;
  height: 40px;
  text-align: center;
  color: white;
}
.money {
  margin-top: 15px;
  text-align: center;
  font-size: 45px;
  color: white;
}
.yu {
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
  color: white;
}
.mid {
  width: 390px;
  position: relative;
  top: -25px;
}
.midd {
  width: 320px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;
  position: relative;
  margin-bottom: 10px;
}
.title {
  font-size: 20px;
}
.date {
  color: #999;
  margin-top: 5px;
  font-size: 17px;
}
.inter {
  font-size: 30px;
  color: rgb(3, 212, 66);
  position: absolute;
  top: 20px;
  left: 280px;
}
.outer {
  font-size: 30px;
  color: #333;
  position: absolute;
  top: 20px;
  left: 290px;
}
</style>
