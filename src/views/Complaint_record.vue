<template>
  <div>
    <div class="bg">
      <!-- 头部 -->
      <div class="head">
        <img @click="goback" src="./images/setting/icon_1.png" alt="" />
        <span>投诉记录</span>
      </div>
      <!-- 主体部分 -->
      <div class="main1">
        <p style="color: lightsteelblue; padding: 20px; margin: 0">
          2018-10-20 &nbsp&nbsp14:30:08
        </p>
        <p style="margin: 0; padding-left: 10px; font-size: 19px">
          我的投诉建议内容，我的投诉建议内容，我的投诉建议内容。
        </p>
        <div class="p1">
          <img src="./images/complaint/2.png" alt="" />
          <img src="./images/complaint/2.png" alt="" />
          <img src="./images/complaint/2.png" alt="" />
        </div>
        <div class="foot">
          <span class="sp1">物业回复：</span>
          <span style="float: right; margin-top: 10px"
            >2018-12-12 12:20:00</span
          >
          <p class="sp2">
            维修或更改描述，维修或更改描述，维修或更改描述，维修或更改描述。
          </p>
        </div>
      </div>
      <div class="main1">
        <p style="color: lightsteelblue; padding: 20px; margin: 0">
          2018-10-20 &nbsp&nbsp14:30:08
        </p>
        <p style="margin: 0; padding-left: 10px; font-size: 19px">
          我的投诉建议内容，我的投诉建议内容，我的投诉建议内容。
        </p>
        <div class="p1">
          <img src="./images/complaint/2.png" alt="" />
          <img src="./images/complaint/2.png" alt="" />
          <img src="./images/complaint/2.png" alt="" />
        </div>
        <div class="foot">
          <span class="sp1">物业回复：</span>
          <span style="float: right; margin-top: 10px"
            >2018-12-12 12:20:00</span
          >
          <p class="sp2">
            维修或更改描述，维修或更改描述，维修或更改描述，维修或更改描述。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.replace("/suggestion");
    },
  },
};
</script>

<style scoped>
.bg {
  height: 844px;
  background: #f7f5f5;
}
.head {
  width: 375px;
  height: 50px;
  padding-top: 25px;
  padding-left: 15px;
  background-color: white;
  /* margin-bottom: 10px; */
}

.head img {
  width: 10px;
}

.head span {
  font-size: 25px;
  display: inline-block;
  width: 335px;
  height: 40px;
  text-align: center;
}
.main1 {
  height: 370px;
  width: 360px;
  margin-left: 15px;
  margin-top: 15px;
  background: #fff;
}
.p1 {
  height: 130px;
  margin-top: 20px;
}
.p1 img {
  width: 100px;
  margin-left: 15px;
  margin-top: 10px;
}
.foot {
  background: #ddd;
  border-radius: 7px;
  width: 330px;
  height: 100px;
  margin-left: 15px;
  position: relative;
}

.sp1 {
  position: absolute;
  margin: 0;
  top: 8px;
  left: 15px;
  color: grey;
}
.sp2 {
  position: absolute;
  top: 20px;
  left: 15px;
}
</style>
