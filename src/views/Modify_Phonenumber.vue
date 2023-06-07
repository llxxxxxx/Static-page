<!-- 修改手机号 -->
<template>
  <div>
    <div class="head">
      <img @click="goback" src="./images/setting/icon_1.png" alt="" />
      <span>修改手机号</span>
    </div>
    <!-- 背景 -->
    <div class="bg">
      <!-- 小手机 -->
      <div class="parent">
        <div class="main">
          <img src="./images/modify_phonenumber/icon_bdshouji.png" alt="" />
          <p
            style="
              font-size: larger;
              color: grey;
              font-weight: 400;
              margin-bottom: 5px;
            "
          >
            绑定手机号
          </p>
        </div>
      </div>
      <!-- 输入框 -->
      <div class="mid">
        <div class="name">
          <img src="../views/images/modify_phonenumber/手机_填充.png" alt="" />
          <input type="text" placeholder="请输入手机号" />
        </div>
        <hr
          style="
            margin: 0;
            width: 350px;
            margin-left: 20px;
            border: 0.5px solid grey;
          "
        />
        <div class="name">
          <img src="../views/images/modify_phonenumber/密码.png" alt="" />
          <input type="text" placeholder="请输入验证码" style="width: 180px" />
          <!-- <p style="float: right">发送验证码</p> -->
          <span style="color: orange">发送验证码</span>
        </div>
      </div>
      <div>
        <button @click="goperson">绑定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.replace("/phonenumber");
    },
    goperson() {
      this.$router.replace("/personInformation");
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
  height: 759px;
  width: 390px;
  background: #292835;
}
.parent {
  height: 230px;
  display: flex;
  justify-content: center; /*使用flex布局水平居中*/
  /* align-items: center;      使用flex布局垂直居中 */
}
.main {
  /* margin-left: 160px; */
  padding-top: 40px;
  text-align: center;
}
.main img {
  width: 90px;
}
.mid {
  width: 100%;
  height: 180px;
}
.name {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  /* background-color: white; */
}
.name img {
  width: 25px;
}

.name input {
  width: 280px;
  height: 40px;
  font-size: 18px;
  margin-left: 10px;
  border: none;
  outline: none;
  background: #292835;
  color: white;
}
button {
  background: rgb(255, 115, 0);
  width: 350px;
  height: 60px;
  border-radius: 10px;
  margin-left: 19px;
  color: white;
  font-size: 23px;
}
</style>
