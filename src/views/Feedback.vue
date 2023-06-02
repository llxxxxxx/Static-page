<!-- 添加家庭成员页面 -->
<template>
  <div>
    <div class="bg">
      <div class="head">
        <img @click="goback" src="./images/changeArea/icon_1.png" alt="" />
        <span>意见反馈</span>
      </div>
      <div class="main">
        <div class="feed">
          <textarea
            name=""
            id=""
            cols="46"
            rows="10"
            placeholder="请你填写遇到的问题与建议，我们会第一时间处理。"
          ></textarea>
        </div>
        <div class="phone">
          <input type="text" placeholder="手机号码，选填" />
        </div>
      </div>
      <div class="bottom">
        <button>提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.replace("/setting");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bg {
  background-color: #f3f3f3;
}

.main {
  width: 390px;
  height: 300px;
  margin-top: 10px;
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
  width: 390px;
  height: 190px;
  background-color: white;
}
.feed textarea {
  border: none;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
}

.phone {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding-left: 15px;
  margin-top: 10px;
  background-color: white;
}
.phone input {
  width: 260px;
  height: 40px;
  font-size: 18px;
  border: none;
  outline: none;
}
.bottom {
  width: 390px;
  text-align: center;
}
.bottom button {
  width: 360px;
  height: 50px;
  font-size: 18px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  color: white;
}
</style>
