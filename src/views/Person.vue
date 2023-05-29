<template>
  <div>
    <div class="main">
      <div class="person">
        <p style="font-size: 26px;font-weight: 700;">李一菲</p>
        <p style="color: #999;font-size: 20px;margin-top: 10px;">139****7666</p>
        <img src="./images/home/icon_1.png" alt="">
      </div>
      <div class="person">
        <p style="font-size: 26px;font-weight: 700;">刘芳</p>
        <p style="color: #999;font-size: 20px;margin-top: 10px;">177****5678</p>
        <img src="./images/home/icon_2.png" alt="">
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
*{
  margin: 0;
  padding: 0;
}
.main{
  margin-top: 40px;
  width: 390px;
}
.person{
  width: 375px;
  padding-left: 15px;
  position: relative;
  margin-bottom: 20px;
}
.person img{
  position: absolute;
  top: 20px;
  left: 340px;
}
</style>