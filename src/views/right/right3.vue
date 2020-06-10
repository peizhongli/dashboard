<template>
  <div class="card">
    <p class="title">舆情倾听</p>
    <section class="flex">
      <div class="left"></div>
      <div>
        <!-- <div v-for="(i,index) in data.platform" :key="index">
          <p class="count">{{i.count}}</p>
          <p class="des">{{i.des}}</p>
        </div>-->
      </div>
    </section>
    <section class="flex">
      <pieChart />
      <barChart />
    </section>
  </div>
</template>
<script>
import pieChart from "../../components/Echarts/PieChart3";
import barChart from "../../components/Echarts/BarChart2";

export default {
  props: {
    data: Object
  },
  components: {
    pieChart,
    barChart
  }
};
</script>
<style lang="scss" scoped>
$text-blue: #00ecff;
.card {
  padding: 30px 0 40px 10px;
  text-align: center;
  color: $text-blue;
  .title {
      margin-bottom: 12px;
  }
}
</style>