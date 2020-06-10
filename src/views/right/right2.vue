<template>
  <div class="card">
    <p class="title">服务销售平台</p>
    <div class="flex money">
      <div>
        <p>今日销售额</p>
        <p class="corner">¥ 54,300</p>
      </div>
      <div>
        <p>累计销售数据</p>
        <p class="corner">¥ 4000万</p>
      </div>
    </div>
    <section class="flex">
      <curveChart />
      <pieChart />
    </section>
  </div>
</template>
<script>
import pieChart from "../../components/Echarts/PieChart2";
import curveChart from "../../components/Echarts/CurveChart2";
export default {
  props: {
    data: Object
  },
  components: {
    pieChart,
    curveChart
  }
};
</script>
<style lang="scss" scoped>
$text-blue: #00ecff;
.card {
  padding: 30px 25px 40px;
  text-align: center;
  color: $text-blue;
  position: relative;
  .title {
      margin-bottom: 16px;
  }
  .money {
      position: absolute;
      top: 110px;
      left: 37px;
      width: 50%;
      &>div {
          width: 222px;
      }
      p{
          &:first-child {
              font-size: 24px;
              text-align: center;
          }
          &:last-child {
              color: #fff;
              font-size: 36px;
              text-align: center;
          }
          &.corner {
              width: 222px;
              margin-top: 18px;
          }
      }
  }
}
</style>