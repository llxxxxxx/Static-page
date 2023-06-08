<!-- 社区服务页面 -->
<template>
  <div>
    <div class="head">
      <img src="./images/service/search.png" alt="" />
      <input type="text" name="" id="" placeholder="关键字" />
    </div>
    <div class="mid">
      <div class="image">
        <img src="./images/service/1_1.png" alt="" />
      </div>
      <div class="kind">
        <ul v-for="item in kind">
          <li><img :src="item.image" alt="" /></li>
          <li>{{ item.title }}</li>
        </ul>
      </div>
      <div class="content">
        <h5>热门推荐</h5>
        <div>
          <div v-for="item in content" class="inter">
            <img :src="item.image" alt="" />
            <ul>
              <li style="font-weight: 800">{{ item.title }}</li>
              <li style="color: #777; font-size: 12px">{{ item.info }}</li>
              <li style="color: red; float: right; margin-right: 10px">
                {{ item.price }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="foot">
      <ul @click="gohome">
        <li><img src="../views/images/icon_1.png" alt="" /></li>
        <li>首页</li>
      </ul>
      <ul>
        <li><img src="../views/images/service/icon_2_1.png" alt="" /></li>
        <li style="color: orange">社区服务</li>
      </ul>
      <ul>
        <li><img src="../views/images/icon_3.png" alt="" /></li>
        <li>社区交流</li>
      </ul>
      <ul @click="gomine">
        <li><img src="../views/images/icon_4.png" alt="" /></li>
        <li>个人中心</li>
      </ul>
    </div> -->
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
  data() {
    return {
      kind: [
        {
          image: "src/views/images/service/2_1.png",
          title: "房产交易",
        },
        {
          image: "src/views/images/service/2_2.png",
          title: "跳蚤市场",
        },
        {
          image: "src/views/images/service/2_3.png",
          title: "小区商家",
        },
      ],
      content: [
        {
          image: "src/views/images/service/1_2.png",
          title: "日默瓦旅行箱26寸",
          info: "26寸德国RIMOWA日默瓦登机箱拉杆箱新款ESSENTIAL旅行箱 原SALSA升级款",
          price: "￥ 4999.00",
        },
        {
          image: "src/views/images/service/1_2.png",
          title: "日默瓦旅行箱26寸",
          info: "26寸德国RIMOWA日默瓦登机箱拉杆箱新款ESSENTIAL旅行箱 原SALSA升级款",
          price: "￥ 4999.00",
        },
      ],
    };
  },
  methods: {
    gohome() {
      this.$router.replace("/home");
    },
    gomine() {
      this.$router.replace("/mine");
    },
  },
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
}

ul {
  list-style: none;
}

.head {
  width: 390px;
  height: 80px;
  background-color: orange;
  position: relative;
}

.head input {
  width: 320px;
  height: 30px;
  border-radius: 15px;
  margin-top: 40px;
  margin-left: 15px;
  border: 0px;
  padding-left: 40px;
}

.head img {
  width: 15px;
  position: absolute;
  left: 28px;
  top: 48px;
}

.mid {
  height: 700px;
  background-color: #f3f3f3;
}

.image img {
  width: 390px;
}

.kind {
  margin-top: 20px;
  width: 390px;
  height: 150px;
  display: flex;
}

.kind ul {
  float: left;
  flex: 1;
  text-align: center;
}
.content {
  width: 390px;
}
h5 {
  margin-left: 10px;
  margin-bottom: 10px;
}
.inter {
  width: 370px;
  height: 90px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: white;
  margin-bottom: 10px;
  overflow: hidden;
}

.inter img {
  width: 90px;
  float: left;
}

.inter ul {
  float: left;
  width: 270px;
  margin-left: 10px;
  margin-top: 8px;
}
.foot {
  position: fixed;
  display: flex;
  left: 0px;
  bottom: 0px;
  width: 399px;
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
</style>
