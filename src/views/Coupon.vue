<template>
  <div>
    <div class="main">
      <div class="head">
        <img src="./images/changeArea/icon_1.png" alt="">
        <span>优惠券</span>
      </div>
      <div class="mid">
        <div class="thing">
          <p class="top">
            <span style="color: white;">￥</span>
            <span style="color: white;font-size: 40px;">50</span>
            <span style="color: orange;font-size: 30px;margin-left: 60px;">商品券</span>
            <span style="color: orange;float: right;margin-top: 5px;margin-right: 15px;">3天到期</span>
          </p>
          <p class="bottom">
            <span style="color: white;">无金额门槛</span>
            <span style="margin-left: 40px;">2018-10-30至2018-12-25</span>
          </p>
        </div>
        <div class="pass"></div>
        <p class="no">已无更多优惠券</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },

}
</script>

<style scoped >
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
  width: 375px;
  height: 50px;
  padding-top: 25px;
  padding-left: 15px;
  background-color: white;
  border-bottom: 1px solid #ccc;
}

.head img {
  width: 15px;
}

.head span {
  font-size: 29px;
  display: inline-block;
  width: 335px;
  height: 40px;
  text-align: center;
}
.mid{
  width: 390px;
  margin-top: 10px;
}
.thing{
  width: 340px;
  height: 90px;
  margin: 0 auto;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 20px;
  background-size: 100%;
  background-image: url("./images/coupon/bg_1.png");
}
.pass{
  width: 360px;
  height: 100px;
  margin: 0 auto;
  background-size: 100%;
  background-image: url("./images/coupon/bg_2.png");
}
.no{
  width: 120px;
  margin: 0 auto;
  color: #999;
  margin-top: 20px;
}
</style>