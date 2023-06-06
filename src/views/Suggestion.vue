<template>
  <div>
    <div class="bg">
      <!-- 头部 -->
      <div class="head">
        <img @click="goback" src="./images/setting/icon_1.png" alt="" />
        <span>投诉建议</span>
        <img style="width: 20px" src="./images/repair/1.png" alt="" />
      </div>
      <!-- 主体部分 -->
      <div class="feed">
        <textarea
          name=""
          id=""
          cols="46"
          rows="10"
          placeholder="请输入您的投诉与建议"
        ></textarea>
        <van-divider />
        <img src="./images/repair/2.png" alt="" />
      </div>

      <van-button
        type="primary"
        size="large"
        style="
          background-color: orange;
          margin-top: 30px;
          width: 90%;
          margin-left: 15px;
        "
        >提交</van-button
      >
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
.bg {
  height: 844px;
  background: #eee;
}
.head {
  width: 375px;
  height: 50px;
  padding-top: 25px;
  padding-left: 15px;
  background-color: white;
  margin-bottom: 10px;
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
.feed {
  width: 360px;
  height: 320px;
  background-color: white;
  margin-top: 12px;
  margin-left: 15px;
  border-radius: 5px;
}

.feed textarea {
  width: 325px;
  height: 50%;
  border: 0;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
  /* margin-left: px; */
  margin-right: 15px;
}
.feed img {
  width: 105px;
  margin-left: 10px;
}
</style>
