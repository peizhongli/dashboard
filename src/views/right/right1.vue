<template>
  <div class="card">
    <p class="title">呼叫中心运营监控</p>
    <section class="flex">
      <div class="left">
        <p class="count">1245</p>
        <p class="des">呼叫中心</p>
      </div>
      <div class="flex count-wrap">
        <p class="corner">
          <span>999</span>
          <span>业务服务量</span>
        </p>
        <p class="corner">
          <span>999</span>
          <span>业务服务量</span>
        </p>
        <p class="corner">
          <span>999</span>
          <span>业务服务量</span>
        </p>
        <p class="corner">
          <span>999</span>
          <span>业务服务量</span>
        </p>
        <p class="corner">
          <span>999</span>
          <span>业务服务量</span>
        </p>
        <p class="corner">
          <span>999</span>
          <span>业务服务量</span>
        </p>
      </div>
    </section>
    <curveChart />
  </div>
</template>
<script>
import curveChart from "../../components/Echarts/CurveChart";
export default {
  props: {
    data: Object
  },
  components: {
    curveChart
  }
};
</script>
<style lang="scss" scoped>
$text-blue: #00ecff;
.card {
  padding: 30px 50px 20px;
  text-align: center;
  color: $text-blue;
  .title {
    margin-bottom: 58px;
  }
  .left {
    flex-shrink: 0;
    width: 256px;
    height: 256px;
    box-sizing: border-box;
    padding-top: 60px;
    border-radius: 50%;
    margin: 0 142px 0 20px;
    background: linear-gradient(to bottom right, #00ecff, #1890ff);
    box-shadow: 0 0 0 15px #1c203a, 0 0 0 25px #283d66;
    .count {
      color: #f6f600;
      font-size: 60px;
    }
    .des {
      color: #fff;
      font-size: 36px;
    }
  }
  & > .flex {
    justify-content: flex-start;
    margin-bottom: 75px;
  }
  .count-wrap {
    width: 492px;
    flex-wrap: wrap;
    .corner {
      width: 233px;
      height: 90px;
      margin-bottom: 30px;
      span {
        display: block;
        &:first-child {
          font-size: 36px;
        }
        &:last-child {
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
}
</style>