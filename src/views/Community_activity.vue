<template>
  <div>
    <!-- 背景 -->
    <div class="bg">
      <!-- 头部 -->
      <div class="head">
        <img @click="goback" src="./images/setting/icon_1.png" alt="" />
        <span>社区活动</span>
      </div>

      <!-- 主体部分 -->
      <div class="main1">
        <img src="./images/activity/1.png" alt="" />
        <div class="main2">
          <img src="./images/activity/2.png" alt="" />
          <div class="main3">
            <span style="margin-left: 10px">流浪猫</span>
            <van-progress
              :percentage="80"
              style="width: 200px"
              pivot-text="100票"
              pivot-color="orange"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
          <div style="float: right; margin-top: 10px; margin-right: 18px">
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/3.png"
                alt=""
              />
              <span>54</span>
            </div>
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/4.png"
                alt=""
              />
              <span>30</span>
            </div>
          </div>
        </div>
        <!-- 第二个 -->
        <div class="main2">
          <img src="./images/activity/2.png" alt="" />
          <div class="main4">
            <span style="margin-left: 10px">一笑而过</span>
            <van-progress
              :percentage="65"
              style="width: 200px"
              pivot-text="88票"
              pivot-color="orange"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
          <div style="float: right; margin-top: 10px; margin-right: 18px">
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/3.png"
                alt=""
              />
              <span>54</span>
            </div>
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/4.png"
                alt=""
              />
              <span>30</span>
            </div>
          </div>
        </div>
        <!-- 第三个 -->
        <div class="main2">
          <img src="./images/activity/2.png" alt="" />
          <div class="main5">
            <span style="margin-left: 10px">风情一生</span>
            <van-progress
              :percentage="50"
              style="width: 200px"
              pivot-text="70票"
              pivot-color="orange"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
          <div style="float: right; margin-top: 10px; margin-right: 18px">
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/3.png"
                alt=""
              />
              <span>54</span>
            </div>
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/4.png"
                alt=""
              />
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二大快 -->
      <div class="main1">
        <img src="./images/activity/1.png" alt="" />
        <div class="main2">
          <img src="./images/activity/2.png" alt="" />
          <div class="main6">
            <span style="margin-left: 10px">流浪猫</span>
            <van-progress
              :percentage="80"
              style="width: 200px"
              pivot-text="100票"
              pivot-color="orange"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
          <div style="float: right; margin-top: 10px; margin-right: 18px">
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/3.png"
                alt=""
              />
              <span>54</span>
            </div>
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/4.png"
                alt=""
              />
              <span>30</span>
            </div>
          </div>
        </div>
        <!-- 第二个 -->
        <div class="main2">
          <img src="./images/activity/2.png" alt="" />
          <div class="main7">
            <span style="margin-left: 10px">一笑而过</span>
            <van-progress
              :percentage="65"
              style="width: 200px"
              pivot-text="88票"
              pivot-color="orange"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
          <div style="float: right; margin-top: 10px; margin-right: 18px">
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/3.png"
                alt=""
              />
              <span>54</span>
            </div>
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/4.png"
                alt=""
              />
              <span>30</span>
            </div>
          </div>
        </div>
        <!-- 第三个 -->
        <div class="main2">
          <img src="./images/activity/2.png" alt="" />
          <div class="main8">
            <span style="margin-left: 10px">风情一生</span>
            <van-progress
              :percentage="50"
              style="width: 200px"
              pivot-text="70票"
              pivot-color="orange"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
          <div style="float: right; margin-top: 10px; margin-right: 18px">
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/3.png"
                alt=""
              />
              <span>54</span>
            </div>
            <div>
              <img
                style="width: 15px; height: 15px; margin-right: 10px"
                src="./images/activity/4.png"
                alt=""
              />
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.replace("/property");
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
  /* margin-bottom: 10px; */
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
  width: 390px;
  height: 844px;
  background: #eee;
}
.main1 {
  height: 350px;
  background: #fff;
  /* margin-top: 12px; */
  margin: 12px;
  border-radius: 8px;
}
.main1 img {
  border-radius: 8px;
  width: 100%;
  height: 170px;
}
.mian2 {
  height: 50px;
  position: relative;
}
.main2 img {
  width: 50px;
  height: 50px;
  margin-left: 20px;
}
.main3 {
  position: absolute;
  top: 265px;
  left: 90px;
}

.main4 {
  position: absolute;
  top: 320px;
  left: 90px;
}
.main5 {
  position: absolute;
  top: 375px;
  left: 90px;
}
.main6 {
  position: absolute;
  top: 630px;
  left: 90px;
}
.main7 {
  position: absolute;
  top: 680px;
  left: 90px;
}
.main8 {
  position: absolute;
  top: 735px;
  left: 90px;
}
</style>
