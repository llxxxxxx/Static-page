<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <img @click="goback" src="./images/setting/icon_1.png" alt="" />
      <span>在线报修</span>
      <img style="width: 20px" src="./images/repair/1.png" alt="" />
    </div>
    <!-- 主体部分 -->
    <div class="bg">
      <van-cell title="联系人" is-link value="小明" size="large" />
      <van-cell title="联系电话" is-link value="137****9090" size="large" />
      <van-cell title="地址" is-link value="请输入地址" size="large" />
      <van-cell
        title="报修类型"
        is-link
        value="请选择"
        style="margin-top: 15px"
        size="large"
      />
      <div class="feed">
        <textarea
          name=""
          id=""
          cols="46"
          rows="10"
          placeholder="请输入报修内容"
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
.bg {
  background: #eee;
  height: 769px;
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
