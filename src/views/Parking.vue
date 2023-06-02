<!-- 摇一摇 -->
<template>
  <div>
    <div class="head">
      <img @click="goback" src="./images/setting/icon_1.png" alt="" />
      <span>社区停车</span>
    </div>
    <div class="main">
      <div class="top">
        <div v-for="(item, index) in list" class="list">
          <img :src="item.image" class="four" alt="" />
          <div>
            <p style="font-size: 18px; font-weight: 700">{{ item.title }}</p>
            <p style="font-size: 13px; color: #999">{{ item.tip }}</p>
          </div>
        </div>
      </div>
      <div class="mid">
        <h3>附近停车场</h3>
        <div class="midd">
          <div class="left">
            <p style="font-size: 30px; font-weight: 500">106</p>
            <p>剩余车位</p>
          </div>
          <div class="right">
            <p>
              <span style="font-size: 18px; font-weight: 700">万丽豪庭</span>
              <span
                style="
                  display: inline-block;
                  width: 70px;
                  height: 20px;
                  border: 1px solid #999;
                  border-radius: 10px;
                  font-size: 14px;
                  color: #999;
                  text-align: center;
                  line-height: 20px;
                  margin-left: 10px;
                "
                >123米</span
              >
            </p>
            <p style="font-size: 14px; color: #999">总车位数 12345</p>
          </div>
          <img src="./images/parking/icon_3.png" alt="" />
        </div>
        <div class="midd">
          <div class="left">
            <p style="font-size: 30px; font-weight: 500">85</p>
            <p>剩余车位</p>
          </div>
          <div class="right">
            <p>
              <span style="font-size: 18px; font-weight: 700">华润悦府</span>
              <span
                style="
                  display: inline-block;
                  width: 70px;
                  height: 20px;
                  border: 1px solid #999;
                  border-radius: 10px;
                  font-size: 14px;
                  color: #999;
                  text-align: center;
                  line-height: 20px;
                  margin-left: 10px;
                "
                >123米</span
              >
            </p>
            <p style="font-size: 14px; color: #999">总车位数 12345</p>
          </div>
          <img src="./images/parking/icon_3.png" alt="" />
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
          image: "src/views/images/parking/icon_1.png",
          title: "车位管理",
          tip: "管理自己的车位",
        },
        {
          image: "src/views/images/parking/icon_2.png",
          title: "贵宾邀请",
          tip: "邀请朋友来访",
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
.top {
  width: 390px;
  height: 100px;
}
.list {
  float: left;
  width: 160px;
  height: 100px;
  margin-left: 30px;
}
.list img {
  float: left;
}
.list div {
  float: left;
  margin-left: 15px;
}
.mid {
  width: 360px;
  margin: 0 auto;
}
.midd {
  width: 360px;
  height: 80px;
  position: relative;
  margin-top: 10px;
}
.left {
  width: 100px;
  height: 70px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
  background-color: #02dd89;
  text-align: center;
  float: left;
  padding-top: 10px;
}
.left p {
  width: 100px;
}
.right {
  float: left;
  height: 65px;
  margin-top: 15px;
  margin-left: 10px;
}
.right p {
  margin-bottom: 10px;
}
.midd img {
  position: absolute;
  top: 20px;
  left: 300px;
}
</style>
