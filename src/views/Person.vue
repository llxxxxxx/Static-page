<!-- 家庭成员页面 -->
<template>
  <div>
    <img
      style="width: 15px; float: left; padding-top: 10px; padding-left: 20px"
      src="./images/personal-information/icon_1.png"
      alt=""
      @click="goback"
    />

    <div @click="goadd" class="add">
      <img src="./images/person/icon_add.png" alt="" />
      <span style="margin-left: 10px; line-height: 50px; font-size: 18px"
        >添加家庭成员</span
      >
    </div>
    <div class="main">
      <div class="person">
        <p style="font-size: 26px; font-weight: 700">李一菲</p>
        <p style="color: #999; font-size: 20px; margin-top: 10px">
          139****7666
        </p>
        <img src="./images/person/icon_1.png" alt="" />
      </div>
      <div class="person">
        <p style="font-size: 26px; font-weight: 700">刘芳</p>
        <p style="color: #999; font-size: 20px; margin-top: 10px">
          177****5678
        </p>
        <img src="./images/person/icon_2.png" alt="" />
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
      this.$router.replace("/mine");
    },
    goadd() {
      this.$router.replace("/personAdd");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.add {
  margin-top: 40px;
  margin-left: 220px;
  height: 50px;
}
.add img {
  vertical-align: middle;
}
.main {
  margin-top: 40px;
  width: 390px;
  margin-top: 30px;
}
.person {
  width: 375px;
  padding-left: 15px;
  position: relative;
  margin-bottom: 20px;
}
.person img {
  position: absolute;
  top: 20px;
  left: 340px;
}
</style>
