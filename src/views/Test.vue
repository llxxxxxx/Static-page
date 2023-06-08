<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="./images/header.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/header.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./images/header.png" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!--灰色背景-->
    <div class="bg">
      <!--中间部分-->
      <div class="mid">
        <div>
          <van-notice-bar
            left-icon="volume-o"
            text="通知公告的内容放在这里啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
            background="white"
          />
        </div>
        <hr style="border: 1px solid #ddd" />
        <div>
          <div
            v-for="(item, index) in list"
            class="list"
            @click="select(index)"
          >
            <img :src="item.image" class="four" alt="" />
            <div>
              <p style="font-size: 18px; font-weight: 700">{{ item.title }}</p>
              <p style="color: #888">{{ item.lock }}</p>
            </div>
          </div>
        </div>
      </div>
      <!--民生资讯部分-->
      <div>
        <div class="zixun">
          <span style="font-weight: 600; font-size: 20px; margin-left: 20px"
            >民生资讯</span
          >
          <span style="float: right; color: #777777">查看全部</span>
        </div>
        <div class="huawei">
          <div @click="goinformation">
            <img src="../views/images/1_2.png" alt="" />
            <span>在获准保释的第二天 华为CEO孟晚舟出门了</span>
          </div>
          <div>
            <img src="../views/images/1_3.png" alt="" />
            <span>百岁奶奶创世界纪录 成全球最年长跳伞玩家</span>
          </div>
          <div>
            <img src="../views/images/1_4.png" alt="" />
            <span>南京大屠杀死难者国家公祭仪式今日举行</span>
          </div>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active" active-color="orange" route="true">
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active1 : icon.inactive1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/service">
        <span>社区服务</span>
        <template #icon="props">
          <img :src="props.active ? icon.active2 : icon.inactive2" />
        </template> </van-tabbar-item
      ><van-tabbar-item>
        <span>社区交流</span>
        <template #icon="props">
          <img :src="props.active ? icon.active3 : icon.inactive3" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span>个人中心</span>
        <template #icon="props">
          <img :src="props.active ? icon.active4 : icon.inactive4" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active1: "/test/icon_1_1.png",
      inactive1: "/test/icon_1.png",
      active2: "/test/icon_2_1.png",
      inactive2: "/test/icon_2.png",
      inactive3: "/test/icon_3.png",
      active4: "/test/icon_4_1.png",
      inactive4: "/test/icon_4.png",
    };
    return {
      icon,
      active,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* position: relative; */
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 220px;
}
.my-swipe img {
  height: 100%;
  width: 100%;
}
.head {
  width: 390px;
}
.picture {
  width: 390px;
  height: 220px;
}
.p1 {
  font-stretch: 2;
}
.foot {
  position: fixed;
  display: flex;
  left: 0px;
  bottom: 0px;
  width: 390px;
  z-index: 9999;
  height: 60px;
  background-color: white;
}
.foot ul {
  float: left;
  list-style: none;
  flex: 1;
  text-align: center;
}
.tongzhi img {
  /* margin: 0 auto; */
  width: 20px;
}
.tongzhi {
  margin-left: 20px;
  line-height: 45px;
  height: 45px;
}
.mid {
  width: 370px;
  height: 230px;
  /* border: 1px solid #ddd; */
  border-radius: 10px;
  background: white;
  margin: 0 auto;
  margin-top: 5px;
}
.four {
  width: 60px;
}
.list {
  width: 180px;
  float: left;
  margin-top: 20px;
  margin-left: 5px;
}
.list img {
  float: left;
}
.list div {
  float: left;
  margin-left: 10px;
  margin-top: 8px;
}
.bg {
  width: 390px;
  background: #f4f4f4;
}
.zixun {
  width: 380px;
  height: 40px;
  line-height: 45px;
}
.huawei {
  height: 300px;
  margin-bottom: 100px;
}
.huawei div {
  /* height: 33%; */
  margin-left: 10px;
  margin-right: 10px;
  background: #fff;
  margin-top: 8px;
  border-radius: 10px;
}
.huawei div img {
  /* height: 33%; */
  width: 120px;
  margin-top: 10px;
}
.huawei div span {
  display: inline-block;
  width: 230px;
  padding-left: 10px;
  line-height: 40px;
}
</style>
