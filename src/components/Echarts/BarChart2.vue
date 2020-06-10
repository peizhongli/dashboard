<template>
  <!-- 水平方向条形图 -->
  <div ref="main" style="width:45%;height:275px;"></div>
</template>
<script>
let echarts = require("echarts");

export default {
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        xAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#80C3F5"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 12,
            rotate: 30,
            margin: 20
          },
          data: [
            "品牌相关",
            "产品体验",
            "服务体验",
            "市场营销",
            "营销渠道",
            "电商相关",
            "内部效率"
          ]
        },
        yAxis: {
          position: "left",
          splitNumber: 3,
          axisLine: {
            lineStyle: {
              color: "#80C3F5"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 12,
            showMinLabel: false,
            showMaxLabel: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#80C3F5",
              type: "dashed"
            }
          }
        },
        legend: {
          type: "plain",
          orient: "horizontal",
          icon: "rect",
          top: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: ["中性", "正向", "负面"]
        },
        series: [
          {
            name: "中性",
            type: "bar",
            stack: "1",
            barWidth: 15,
            itemStyle: {
              color: "#00ECFF"
            },
            data: [200, 150, 240, 330, 200, 200, 200]
          },
          {
            name: "正向",
            type: "bar",
            stack: "1",
            barWidth: 15,
            itemStyle: {
              color: "#64FC91"
            },
            data: [200, 150, 240, 330, 200, 200, 200]
          },
          {
            name: "负面",
            type: "bar",
            stack: "1",
            barWidth: 15,
            itemStyle: {
              color: "#F0A137"
            },
            data: [200, 150, 240, 330, 200, 200, 200]
          }
        ]
      });

      window.onresize = function() {
        myChart.resize();
      };
    }
  },
  mounted() {
    this.init();
  }
};
</script>