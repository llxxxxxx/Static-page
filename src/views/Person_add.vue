<!-- 添加家庭成员页面 -->
<template>
  <div>
    <div class="main">
      <div class="head">
        <img @click="goback" src="./images/changeArea/icon_1.png" alt="" />
        <span>添加</span>
      </div>
      <div class="mid">
        <div class="name">
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名" />
        </div>
        <div class="name">
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="bottom">
        <button>添加</button>
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
      this.$router.replace("/person");
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
.mid {
  width: 100%;
  height: 180px;
}
.name {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding-left: 15px;
  background-color: white;
}
.name span {
  display: inline-block;
  width: 70px;
}
.name input {
  width: 280px;
  height: 40px;
  font-size: 18px;
  margin-left: 5px;
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
