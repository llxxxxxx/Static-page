<!-- 我的收藏页面 -->
<template>
  <div>
    <div class="main">
      <div class="head">
        <img @click="goback" src="./images/changeArea/icon_1.png" alt="" />
        <span>我的收藏</span>
      </div>
      <van-tabs
        v-model:active="active"
        color="orange"
        swipeable="true"
        title-active-color="orange"
        line-width="90px"
      >
        <van-tab title="资讯"
          ><div class="mid">
            <div @click="goinformation" class="zixun">
              <img src="./images/1_3.png" alt="" />
              <span> 百岁奶奶创世界纪录 成全球最年长跳伞玩家</span>
            </div>
            <div class="zixun">
              <img src="./images/1_4.png" alt="" />
              <span>南京大屠杀死难者公祭仪式今日举行</span>
            </div>
          </div></van-tab
        >
        <van-tab title="社区交流"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.replace("/mine");
    },
    goinformation() {
      this.$router.push("/information");
    },
  },
  setup() {
    const activeName = ref("a");
    return { activeName };
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
  border-bottom: 1px solid #ccc;
}

.head img {
  width: 15px;
}

.head span {
  font-size: 29px;
  display: inline-block;
  width: 335px;
  height: 40px;
  text-align: center;
}
.select {
  background-color: white;
}
.select ul {
  height: 50px;
}
.select li {
  width: 100px;
  margin-left: 47px;

  margin-right: 47px;
  font-size: 22px;
  float: left;
  list-style: none;
  text-align: center;
  line-height: 50px;
}
.mid {
  margin-top: 15px;
}
.zixun {
  width: 370px;
  height: 80px;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}
.zixun img {
  width: 95px;
  float: left;
}
.zixun span {
  display: inline-block;
  width: 245px;
  margin-left: 15px;
  margin-top: 20px;
}
</style>
