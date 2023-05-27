<template>
  <div>
    <div class="bg">
      <div class="info">
        <p style="font-size: 29px;font-weight: 600;">在获准保释第二天 华为CFO孟晚舟出门了</p>
        <p style="color: #777;">2018-12-31</p>
        <img src="./images/information/1_1.png" alt="">
        <p style="font-size: 15px;color: #333;">据温哥华加西周末报道，当地时间13日，在获准保释第二天，孟晚舟出门了。</p>
      </div>
      <div class="comment">
        <h4>全部回复</h4>
        <div class="comment1">
          <img src="./images/information/1_2.png" alt="">
          <div class="comment1-inter">
            <div style="margin-bottom: 10px;">
              <h4>流浪猫</h4>
              <p style="color: #999;display: inline-block;">3小时前</p>
              <img style="float: right" src="./images/information/icon_1.png" alt="">
              <p style="margin-top: 10px;">评论放在这里评论放在这里评论放在这里，评论放在这里评论放在这里。</p>
            </div>
            <div class="call">
              <img src="./images/information/1_2.png" alt="">
              <div class="call-main">
                <h4>流浪猫2</h4>
                <p style="color: #999;display: inline-block;">3小时前</p>
                <img style="float: right" src="./images/information/icon_1.png" alt="">
                <p style="margin-top: 10px;">回复内容放在这里，回复内容放在这里回复内容放在这里。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="comment2">
          <img src="./images/information/1_2.png" alt="">
          <div class="comment1-inter">
            <div style="margin-bottom: 10px;">
              <h4>流浪猫</h4>
              <p style="color: #999;display: inline-block;">3小时前</p>
              <img style="float: right" src="./images/information/icon_1.png" alt="">
              <p style="margin-top: 10px;">评论放在这里评论放在这里评论放在这里，评论放在这里评论放在这里。</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },

}
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
}

.bg {
  background-color: #f3f3f3;
}

.info {
  width: 360px;
  /* height: ; */
  margin: 0 auto;
}

.info p {
  margin-top: 10px;
  margin-bottom: 20px;
}

.info img {
  width: 360px;
}

.comment {
  width: 360px;
  height: 380px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  padding-top: 10px;
}

.comment>h4 {
  padding-left: 10px;
  padding-bottom: 10px;
}

.comment1 {
  height: 220px;
  padding-top: 10px;
  padding-left: 10px;
  border-top: 1px solid #eee;
}

.comment1>img {
  float: left;
  width: 50px;
}

.comment1-inter {
  float: left;
  width: 280px;
  padding-left: 10px;
}

.call {
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.call>img {
  float: left;
  width: 50px;
}

.call-main {
  width: 220px;
  float: left;
  padding-left: 10px;
}
.comment2 {
  padding-top: 10px;
  padding-left: 10px;
  border-top: 1px solid #eee;
  height: 100px;
}
.comment2>img {
  float: left;
  width: 50px;
}
</style>