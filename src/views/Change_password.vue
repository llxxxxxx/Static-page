<!-- 添加家庭成员页面 -->
<template>
  <div>
    <div class="head">
      <img @click="goback" src="./images/changeArea/icon_1.png" alt="" />
      <span>修改密码</span>
    </div>
    <div class="main">
      <div class="inter">
        <span><img src="./images/changepassword/icon-1.png" alt="" /></span>
        <input type="text" placeholder="请输入旧密码" />
      </div>
      <div class="inter">
        <span><img src="./images/changepassword/icon-2.png" alt="" /></span>
        <input type="text" placeholder="请输入新密码" />
      </div>
      <div class="inter">
        <span><img src="./images/changepassword/icon-2.png" alt="" /></span>
        <input type="text" placeholder="请再次输入新密码" />
      </div>
    </div>
    <div class="bottom">
      <button>提交</button>
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

.main {
  width: 390px;
  height: 280px;
  background-color: #f3f3f3;
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

.inter {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding-left: 15px;
  background-color: white;
}
.inter span {
  display: inline-block;
  width: 30px;
  margin-left: 20px;
}
.inter input {
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
