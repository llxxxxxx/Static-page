<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <img @click="goback" src="./images/setting/icon_1.png" alt="" />
      <span>智慧安防</span>
    </div>
  </div>
  <div>
    <van-tabs
      v-model:active="active"
      title-active-color="orange"
      line-width="90px"
      color="orange"
    >
      <van-tab title="可视对讲">
        <div class="bg">
          <div class="jian1">
            <img style="width: 160px" src="./images/security/1.png" alt="" />
            <p>监控1</p>
          </div>
          <div class="jian2">
            <img style="width: 160px" src="./images/security/2.png" alt="" />
            <p>监控2</p>
          </div>
          <div class="jian1">
            <img style="width: 160px" src="./images/security/3.png" alt="" />
            <p>监控3</p>
          </div>
          <div class="jian2">
            <img style="width: 160px" src="./images/security/4.png" alt="" />
            <p>监控4</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="私人监控">
        <div class="bg">
          <div class="jian1">
            <img style="width: 160px" src="./images/1_3.png" alt="" />
            <p>监控1</p>
          </div>
          <div class="jian2">
            <img style="width: 160px" src="./images/1_3.png" alt="" />
            <p>监控2</p>
          </div>
          <div class="jian1">
            <img style="width: 160px" src="./images/1_3.png" alt="" />
            <p>监控3</p>
          </div>
          <div class="jian2">
            <img style="width: 160px" src="./images/1_3.png" alt="" />
            <p>监控4</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="公共监控">
        <div class="bg">
          <div class="jian1">
            <img style="width: 160px" src="./images/1_2.png" alt="" />
            <p>监控1</p>
          </div>
          <div class="jian2">
            <img style="width: 160px" src="./images/1_2.png" alt="" />
            <p>监控2</p>
          </div>
          <div class="jian1">
            <img style="width: 160px" src="./images/1_2.png" alt="" />
            <p>监控3</p>
          </div>
          <div class="jian2">
            <img style="width: 160px" src="./images/1_2.png" alt="" />
            <p>监控4</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
  methods: {
    goback() {
      this.$router.replace("/home");
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
  height: 715px;
}
.jian1 {
  margin-top: 20px;
  float: left;
  margin-left: 20px;
  border: 1px solid white;
  background: white;
  border-radius: 8px;
}
.jian2 {
  margin-top: 20px;
  float: right;
  margin-right: 30px;
  border: 1px solid white;
  background: white;
  border-radius: 8px;
}
p {
  text-align: center;
}
</style>
