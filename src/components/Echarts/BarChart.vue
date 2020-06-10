<template>
  <!-- 水平方向条形图 -->
  <div ref="main" style="width:100%;height:275px;"></div>
</template>
<script>
let echarts = require("echarts");

export default {
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        // grid: {
        //   x: 50,
        //   y: 0,
        //   x2: 217,
        //   y2: 50
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          }
        },
        xAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#80C3F5',
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
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
          ]
        },
        legend: {
          type: "plain",
          orient: "horizontal",
          icon: "rect",
          top: 22,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: ["桌面网站", "移动网站", "微信小程序"]
        },
        series: [
          {
            name: "桌面网站",
            type: "bar",
            stack: "1",
            barMaxWidth: 8,
            itemStyle: {
              color: "#00ECFF"
            },
            data: [
              200000,
              150000,
              240000,
              330000,
              200000,
            ]
          },
          {
            name: "移动网站",
            type: "bar",
            stack: "1",
            barMaxWidth: 8,
            itemStyle: {
              color: "#64FC91"
            },
            data: [
              200000,
              150000,
              240000,
              330000,
              200000,
              330000
            ]
          },
          {
            name: "微信小程序",
            type: "bar",
            stack: "1",
            barMaxWidth: 8,
            itemStyle: {
              color: "#F0A137"
            },
            data: [
              200000,
              150000,
              240000,
              330000,
              200000,
            ]
          },
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