<template>
  <section class="flex wrap">
    <img src="../assets/img/lenovo.png" alt class="lenovo" />
    <section class="title-wrap flex">
      <img src="../assets/img/logo.png" alt />
      <span>联想魔方服务数据总览</span>
    </section>
    <p class="time flex">
        <img src="../assets/img/clock.png" alt="">
        <span>{{date}} | {{time}}</span>
    </p>
  </section>
</template>
<script>
const now = new Date();
export default {
  data() {
    return {
      date: `${now.getFullYear()}-${now.getMonth() - 1}-${now.getDate()}`,
      time: `${now.getHours()}:${now.getMinutes()}`
    };
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  padding: 0 60px;
  &>img {
    width: 400px;
  }
  .time {
    width: 442px;
    height: 60px;
    padding-left: 14px;
    box-sizing: border-box;
    justify-content: flex-start;
    background: linear-gradient(
      198deg,
      rgba(13, 12, 42, 1) 0%,
      rgba(43, 87, 193, 0.7) 100%
    );
    border-radius: 30px;
    font-size: 24px;
    color: #fff;
    img {
        width: 38px;
        margin-right: 20px;
    }
  }
}
.title-wrap {
  width: 2510px;
  height: 160px;
  justify-content: center;
  width: 2178px;
  height: 155px;
  margin: 0 auto;
  font-size: 75px;
  color: #0087ec;
  background: url(../assets/img/title_bg.png) no-repeat;
  background-size: 100% 100%;
  img {
    width: 90px;
    margin-right: 34px;
  }
}
</style>