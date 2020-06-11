<template>
  <!-- 水平方向条形图 -->
  <div ref="main" style="width:100%;height:306px;"></div>
</template>
<script>
let echarts = require("echarts");

export default {
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        color: ["#00ECFF", "#64FC91", "#F0A137"],
        xAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#80C3F5"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#00ECFF"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 14
          }
        },
        yAxis: {
          position: "left",
          axisLine: {
            lineStyle: {
              color: "#00ECFF"
            }
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#00ECFF"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 14
          },
          data: ["1月", "2月", "3月", "4月", "5月"]
        },
        legend: {
          type: "plain",
          orient: "horizontal",
          icon: "rect",
          top: 10,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: ["桌面网站", "移动网站", "微信"]
        },
        series: [
          {
            name: "桌面网站",
            type: "bar",
            stack: "1",
            barMaxWidth: 8,
            data: [200000, 150000, 240000, 330000, 200000]
          },
          {
            name: "移动网站",
            type: "bar",
            stack: "1",
            barMaxWidth: 8,
            data: [200000, 150000, 240000, 330000, 200000, 330000]
          },
          {
            name: "微信",
            type: "bar",
            stack: "1",
            barMaxWidth: 8,
            data: [200000, 150000, 240000, 330000, 200000]
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