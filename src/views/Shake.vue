<!-- 摇一摇 -->
<template>
  <div>
    <div class="head">
      <img @click="goback" src="./images/setting/icon_1.png" alt="" />
      <span>摇一摇</span>
    </div>
    <div class="main">
      <img
        style="width: 200px"
        src="./images/shake/6_2摇一摇开门_03.gif"
        alt=""
      />
      <p>摇一摇开门</p>
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
      this.$router.replace("/smartdoor");
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
  height: 350px;
  text-align: center;
  margin-top: 100px;
}
.main p {
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
