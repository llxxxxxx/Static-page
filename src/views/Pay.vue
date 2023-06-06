<template>
  <div>
    <div class="main">
      <div class="bg">
        <div class="head">
          <img @click="goback" src="./images/wallet/icon_1.png" alt="" />
          <span>物业缴费</span>
          <p class="money">300.00</p>
          <p class="yu">待缴余额（元）</p>
        </div>
      </div>
      <van-button
        class="button"
        round
        type="success"
        style="width: 200px; height: 55px; font-size: 20px"
        color="orange"
        >一键缴费</van-button
      >
      <div class="a1">
        <span style="font-size: 20px">10月物业费</span>
        <img src="./images/pay/2.png" alt="" />
        <p class="bianhao">订单编号:4256389754</p>
        <p class="price">￥80.2</p>
        <p class="pay">立即支付</p>
      </div>
      <div class="a1">
        <span style="font-size: 20px">8月物业费</span>
        <img src="./images/pay/2.png" alt="" />
        <p class="bianhao">订单编号:4256389754</p>
        <p class="price">￥80.2</p>
        <p class="pay1">已支付</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.replace("/property");
    },
  },
};
</script>

<style scoped>
.main {
  width: 390px;
  height: 844px;
  background-color: #f3f1f1;
  position: relative;
}
.bg {
  width: 390px;
  height: 220px;
  background-image: url("./images/pay/1.png");
  background-size: 100%;
}
.head {
  background-size: 100%;
  padding-top: 25px;
  /* margin-top: 25px; */
}
.head img {
  padding-left: 15px;
  width: 30px;
}

.head span {
  font-size: 22px;
  display: inline-block;
  width: 320px;
  height: 40px;
  text-align: center;
  color: white;
}
.money {
  /* margin-top: 15px; */
  margin: 0;
  margin-bottom: 0;
  text-align: center;
  font-size: 60px;
  color: white;
}
.yu {
  margin: 0;
  text-align: center;
  font-size: 18px;
  color: white;
}
.button {
  position: absolute;
  top: 175px;
  left: 85px;
}
.a1 {
  width: 350px;
  height: 100px;
  background: #fff;
  margin-top: 30px;
  margin-left: 20px;
  position: relative;
  border-radius: 5px;
}
.a1 img {
  float: right;
}
.a1 span {
  position: absolute;
  top: 15px;
  left: 10px;
}
.bianhao {
  position: absolute;
  right: 20px;
  top: 0;
  margin: 0;
  line-height: 35px;
}
.price {
  font-size: 30px;
  color: orange;
  position: absolute;
  top: 15px;
  left: 10px;
}
.pay {
  width: 100px;
  height: 40px;
  background-color: #dcdcdc;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  color: #666;
  position: absolute;
  top: 25px;
  left: 245px;
}
.pay1 {
  width: 100px;
  height: 40px;
  /* background-color: #dcdcdc; */
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  color: orange;
  position: absolute;
  top: 25px;
  left: 245px;
}
</style>
