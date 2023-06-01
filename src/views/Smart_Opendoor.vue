<!-- 智慧开门页 -->
<template>
  <div>
    <!--头部-->
    <div class="head">
      <img src="./images/changeArea/icon_1.png" alt="" />
      <span
        style="
          font-size: 22px;
          display: inline-block;
          /* width: 335px; */
          height: 40px;
          text-align: center;
          margin-left: 120px;
        "
        >智慧开门</span
      >
      <span style="margin-left: 70px; line-height: 40px; font-size: 16px"
        >访客邀请</span
      >
    </div>
    <div class="bg">
      <!--中间图片功能部分-->

      <div class="main">
        <div>
          <div v-for="item in content">
            <img :src="item.image" alt="" />
            <ul>
              <li style="font-weight: 800; font-size: 22px">
                {{ item.title }}
              </li>
              <!-- <br /> -->
              <li style="font-size: 15px">{{ item.info }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="open">
        <div v-for="item in open">
          <img :src="item.image" alt="" />
          <ul>
            <li style="font-weight: 800; font-size: 19px">{{ item.title }}</li>
            <li>{{ item.info }}</li>
          </ul>
        </div>
      </div>

      <!--开门记录-->
      <fieldset>
        <legend>
          <span>开门记录</span>
        </legend>
      </fieldset>

      <!--最后部分-->
      <div class="last">
        <div class="zhang">
          <ul>
            <li style="font-size: 20px; font-weight: 600">张先生</li>
            <li style="font-size: 17px; color: gray">2018-10-25 15:30:20</li>
            <li style="color: red; position: absolute; top: 10px; left: 270px">
              邀请开门
            </li>
          </ul>
        </div>
        <div class="fang">
          <ul>
            <li style="font-size: 20px; font-weight: 600">房主</li>
            <li style="font-size: 17px; color: gray">2018-10-25 15:30:20</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          image: "src/views/images/door/1.png",
          title: "摇一摇",
          info: "手机摇一摇开门",
        },
        {
          image: "src/views/images/door/2.png",
          title: "二维码",
          info: "扫描二维码开门",
        },
      ],
      open: [
        {
          image: "src/views/images/door/3.png",
          title: "一键开门",
          info: "轻松一键开门",
        },
      ],
    };
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
.bg {
  background: #fff;
  height: 700px;
  /* color: #fff; */
}
.bg img {
  width: 55px;
}
.main {
  /* margin-top: 20px; */
  padding-top: 20px;
  margin-left: 20px;
  width: 220px;
}
.main img {
  float: left;
}
.main ul {
  /* position: fixed;
  width: 130px;
  height: 120px; */
  /* padding-top: 10px; */
  list-style: none;
  height: 90px;
  padding-top: 13px;
  padding-left: 65px;
}
.left {
  width: 190px;
}

.open {
  position: fixed;
  top: 145px;
  left: 260px;
}
.open ul {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}
fieldset {
  border: none;
  padding: 0;
  border-top: 1px rgb(190, 190, 190) solid;
  text-align: center;
  width: 360px;
  margin: auto;
}

legend {
  padding: 0 10px;
  font-size: 16px;
  color: #000;
}
.last ul {
  list-style: none;
  /* background: #fff; */
  background: rgb(255, 255, 255);
  border-radius: 10px;
  height: 89px;
  position: relative;
  margin: 0;
  top: 3px;
  width: 324px;
  margin-left: 3px;
}
.zhang {
  height: 100px;
  background: #eee;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  margin-top: 15px;
}
.zhang ul {
  padding-left: 20px;
}
.zhang li {
  width: 170px;
  /* margin-top: 10px; */
  padding-top: 10px;
}
.fang {
  height: 100px;
  background: #eee;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  margin-top: 8px;
}
.fang ul {
  padding-left: 20px;
}
.fang li {
  width: 170px;
  /* margin-top: 10px; */
  padding-top: 10px;
}
</style>
