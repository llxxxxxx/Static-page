<template>
  <div>
    <div class="main">
      <div class="head">
        <img src="./images/personal-information/icon_1.png" alt="" />
        <span>个人资料</span>
      </div>
      <div class="mid">
        <div class="mid-top">
          <div>
            头像
            <span>
              <img
                style="width: 40px; position: absolute; top: 10px; left: 40px"
                src="./images/personal-information/1_2.png"
                alt=""
              />
              <!-- xxxx -->
            </span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
          <div>
            名字
            <span>王一菲</span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
          <div>
            性别
            <span>男</span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
          <div>
            地区
            <span>江苏南京</span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
        </div>
        <div class="mid-bottom">
          <div>
            手机号
            <span>158****4521</span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
          <div>
            微信
            <span>已绑定</span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
          <div>
            QQ
            <span>未绑定</span>
            <img
              class="icon"
              src="./images/personal-information/icon_0.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- <div class="bottom">
        <button>退出登录</button>
      </div> -->
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
  height: 500px;
}
.icon {
  width: 18px;
  position: absolute;
  top: 20px;
  left: 360px;
}

.mid-top div {
  width: 375px;
  height: 60px;
  font-size: 20px;
  padding-left: 15px;
  background-color: white;
  line-height: 60px;
  position: relative;
}
.mid-top span {
  display: inline-block;
  width: 80px;
  position: absolute;
  top: 0px;
  left: 270px;
  text-align: right;
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
.mid-bottom span {
  display: inline-block;
  width: 120px;
  position: absolute;
  top: 0px;
  left: 230px;
  text-align: right;
}
/* .bottom {
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
} */
</style>
