<template>
  <div>
    <div class="head">
      <img @click="goback" src="./images/setting/icon_1.png" alt="" />
      <span>物业服务</span>
    </div>
    <div class="main">
      <div v-for="(item, index) in list" class="list" @click="select(index)">
        <img :src="item.image" alt="" />
        <div>
          <p style="font-size: 18px; font-weight: 700">{{ item.title }}</p>
          <p>{{ item.tip }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: "src/views/images/property/icon_1.png",
          title: "物业缴费",
          tip: "在线缴费",
        },
        {
          image: "src/views/images/property/icon_2.png",
          title: "在线报修",
          tip: "快速报修",
        },
        {
          image: "src/views/images/property/icon_3.png",
          title: "社区活动",
          tip: "活动投票",
        },
        {
          image: "src/views/images/property/icon_4.png",
          title: "投诉建议",
          tip: "意见反馈",
        },
      ],
    };
  },
  methods: {
    goback() {
      this.$router.replace("/home");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
.main {
  width: 390px;
}
.list {
  width: 150px;
  float: left;
  margin-top: 20px;
  margin-left: 35px;
}
.list img {
  float: left;
  margin-top: 10px;
}
.list div {
  float: left;
  margin-left: 15px;
  margin-top: 8px;
}
</style>
