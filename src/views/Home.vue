<!-- 首页 -->
<template>
  <div>
    <img class="head" src="../views/images/header.png" alt="" />

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
              <p>{{ item.lock }}</p>
            </div>
          </div>
        </div>
      </div>
      <!--民生资讯部分-->
      <div>
        <div class="zixun">
          <span style="font-weight: 700; font-size: 25px; margin-left: 20px"
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
    <!--底部-->
    <div class="foot">
      <ul>
        <li><img src="../views/images/icon_1_1.png" alt="" /></li>
        <li style="color: orange">首页</li>
      </ul>
      <ul @click="goservice">
        <li><img src="../views/images/icon_2.png" alt="" /></li>
        <li>社区服务</li>
      </ul>
      <ul>
        <li><img src="../views/images/icon_3.png" alt="" /></li>
        <li>社区交流</li>
      </ul>
      <ul @click="gomine">
        <li><img src="../views/images/icon_4.png" alt="" /></li>
        <li>个人中心</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: "src/views/images/1.png",
          title: "智慧开门",
          lock: "手机控制门锁",
        },
        {
          image: "src/views/images/2.png",
          title: "智慧安防",
          lock: "实时监控保卫",
        },
        {
          image: "src/views/images/3.png",
          title: "社区停车",
          lock: "快速寻找车位",
        },
        {
          image: "src/views/images/4.png",
          title: "物业服务",
          lock: "物业保修缴费",
        },
      ],
    };
  },
  methods: {
    goservice() {
      this.$router.replace("/service");
    },
    gomine() {
      this.$router.replace("/mine");
    },
    goinformation() {
      this.$router.replace("/information");
    },
    select(i) {
      if (i === 0) {
        this.$router.push("/smartdoor");
      } else if (i === 1) {
        this.$router.push("/security");
      } else if (i === 2) {
        this.$router.push("/parking");
      } else if (i === 3) {
        this.$router.push("/property");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* position: relative; */
}
.head {
  width: 390px;
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
  height: 45px;
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
