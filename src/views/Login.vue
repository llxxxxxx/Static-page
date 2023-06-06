<template>
  <div class="bg">
    <!-- 图片 -->
    <img class="image" src="./images/login/45_登录_03.png" alt="" />

    <div>
      <van-tabs
        v-model:active="active"
        title-active-color="grey"
        line-width="140px"
        color="orange"
        background="#333333"
      >
        <van-tab title="账号密码登录"
          ><van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="请输入账号"
                size="large"
              />
              <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                size="large"
              />
            </van-cell-group>
          </van-form>
        </van-tab>
        <van-tab title="短信验证码登录"
          ><van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="请输入手机号"
                size="large"
              />
              <!-- <van-field
                v-model="password"
                type="password"
                name="密码"
                label=""
                placeholder="请输入密码"
                size="large"
              /> -->

              <van-field
                v-model="sms"
                center
                clearable
                label="验证码"
                placeholder="请输入验证码"
              >
                <template #button>
                  <van-button size="small" type="primary"
                    >发送验证码</van-button
                  >
                </template>
              </van-field>
            </van-cell-group>
          </van-form></van-tab
        >
      </van-tabs>
    </div>
    <!-- 登录按钮 -->
    <div style="margin: 16px; margin-top: 100px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        style="background-color: orangered"
        to="/home"
      >
        登录
      </van-button>
    </div>
    <!-- 第三方登录 -->
    <div class="foot">
      <van-divider style="width: 300px; margin-left: 40px"
        >第三方登录</van-divider
      >
      <img src="./images/login/icon_qq2.png" alt="" />
      <img src="./images/login/icon-wx.png" alt="" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0); // 导航
    //表单
    const username = ref("");
    const password = ref("");
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    return { active, username, password, onSubmit };
  },
};
</script>

<style scoped>
.bg {
  height: 844px;
  background: #333333;
}
.image {
  width: 100px;
  margin-left: 145px;
  margin-top: 140px;
}

.foot {
  z-index: 1000;
  margin-top: 200px;
}
.foot img {
  width: 50px;
  margin-left: 90px;
}
</style>
