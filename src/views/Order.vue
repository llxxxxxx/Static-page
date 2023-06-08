<!-- 订单页面 -->
<template>
  <div>
    <div class="main">
      <div class="head">
        <img @click="goback" src="./images/changeArea/icon_1.png" alt="" />
        <span>我的订单</span>
      </div>
      <van-tabs
        v-model:active="active"
        swipeable="true"
        title-active-color="orange"
        line-width="70px"
        color="orange"
      >
        <van-tab title=" 全部">
          <div class="mid">
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
          </div></van-tab
        >
        <van-tab title="未处理">
          <div class="mid">
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
          </div></van-tab
        >
        <van-tab title="处理中">
          <div class="mid">
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
          </div></van-tab
        >
        <van-tab title="已完成">
          <div class="mid">
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
            <div class="midd">
              <div class="midd-top">
                <img src="./images/order/icon-shop.png" alt="" />
                <span>&nbsp百果园&nbsp</span>
                <img src="./images/icon_0.png" alt="" />
                <span style="float: right; color: orange">已完成</span>
              </div>
              <div class="midd-mid">
                <ul>
                  <li><img src="./images/1_3.png" alt="" /></li>
                  <li style="width: 160px; margin-left: 10px; margin-top: 10px">
                    <p>宝贝的标题放在这里，宝贝的标题放在这里</p>
                    <p style="color: #999; font-size: 12px; margin-top: 5px">
                      宝贝的规格
                    </p>
                  </li>
                  <li style="width: 70px; margin-left: 20px; margin-top: 10px">
                    <p>￥150.00</p>
                    <p style="margin-left: 50px; color: #999; font-size: 12px">
                      x1
                    </p>
                  </li>
                </ul>
              </div>
              <div class="midd-bottom">
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: #666;
                    background-color: white;
                    border: 1px solid #999;
                    border-radius: 5px;
                    margin-right: 10px;
                  "
                >
                  删除订单
                </button>
                <button
                  style="
                    width: 80px;
                    height: 25px;
                    color: white;
                    background-color: #ea5e07;
                    border: 0px;
                    border-radius: 5px;
                  "
                >
                  确认订单
                </button>
              </div>
            </div>
          </div></van-tab
        >
        <van-tab title="已取消">已取消</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
    };
  },
  methods: {
    goback() {
      this.$router.replace("/mine");
    },
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
  width: 11px;
}

.head span {
  font-size: 23px;
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
  width: 60px;
  margin-left: 9px;
  margin-right: 9px;
  float: left;
  list-style: none;
  text-align: center;
  line-height: 50px;
  color: #666;
}
.mid {
  width: 390px;
  margin-top: 5px;
}
.midd {
  width: 370px;
  height: 150px;
  padding: 10px;
  background-color: white;
}
.midd-top {
  margin-bottom: 8px;
}
.midd-top img {
  width: 18px;
}
.midd-mid {
  height: 90px;
}
.midd-mid img {
  width: 100px;
  border-radius: 5px;
  overflow: hidden;
}
.midd-mid li {
  float: left;
  list-style: none;
}
.midd-bottom {
  float: right;
}
</style>
