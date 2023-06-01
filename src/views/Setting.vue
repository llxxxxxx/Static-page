<!-- 设置页面 -->
<template>
  <div>
    <div class="main">
      <div class="head">
        <img src="./images/setting/icon_1.png" alt="" />
        <span>设置</span>
      </div>
      <div class="mid">
        <div class="mid-top">
          修改密码
          <img src="./images/setting/icon_0.png" alt="" />
        </div>
        <div class="mid-bottom">
          <div>个人资料<img src="./images/setting/icon_0.png" alt="" /></div>
          <div>意见反馈<img src="./images/setting/icon_0.png" alt="" /></div>
          <div>关于我们<img src="./images/setting/icon_0.png" alt="" /></div>
        </div>
      </div>
      <div class="bottom">
        <button>退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  width: 390px;
  height: 300px;
}
.mid img {
  width: 18px;
  position: absolute;
  top: 20px;
  left: 360px;
}
.mid-top {
  width: 375px;
  height: 60px;
  font-size: 20px;
  padding-left: 15px;
  background-color: white;
  line-height: 60px;
  position: relative;
}
.mid-bottom {
  margin-top: 10px;
}
.mid-bottom div {
  width: 375px;
  height: 60px;
  font-size: 20px;
  padding-left: 15px;
  background-color: white;
  line-height: 60px;
  position: relative;
}

.bottom {
  width: 390px;
  text-align: center;
}
.bottom button {
  width: 360px;
  height: 50px;
  font-size: 18px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
