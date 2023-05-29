<template>
  <div>
    <div class="main">
      <div class="head">
        <img src="./images/changeArea/icon_1.png" alt="">
        <span>切换小区</span>
      </div>
      <div class="yes">
        白水芊城上水坊
        <img src="./images/changeArea/icon_2.png" alt="">
      </div>
      <div class="select">
        <div class="select1">
          白水芊城上水坊
          <span style="color: #666;">点击切换</span>
          <img src="./images/changeArea/icon_3.png" alt="">
        </div>
        <div class="select2">
          上新河小区
          <span style="color: #666;">点击切换</span>
          <img src="./images/changeArea/icon_3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

}
</script>

<style scoped >
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
}

.head img {
  width: 15px;
}

.head span {
  font-size: 29px;
  display: inline-block;
  width: 335px;
  height: 40px;
  text-align: center;
}

.yes {
  width: 375px;
  height: 70px;
  background-color: white;
  line-height: 70px;
  padding-left: 15px;
  margin-top: 10px;
  font-size: 20px;
}

.yes img {
  float: right;
  padding-top: 25px;
  padding-right: 10px;
}
.select{
  margin-top: 10px;
  width: 375px;
  padding-left: 15px;
  background-color: white;
  font-size: 20px;
}
.select img{
  width: 10px;
  float: right;
  padding-top: 25px;
  padding-right: 10px;
}
.select1 span{
  margin-left: 120px;
}
.select1{
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #ccc;
}
.select2{
  height: 70px;
  line-height: 70px;
}
.select2 span{
  margin-left: 160px;
}
</style>