<template>
  <!-- 曲线图 -->
  <div ref="main" style="width:50%;height:375px;"></div>
</template>
<script>
let echarts = require("echarts");

export default {
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        legend: {
          data: ["时段服务量", "放弃率"],
          right: 0,
          textStyle: {
            color: "#fff",
            fontSize: 14,
            padding: [0, 0, 0, 20]
          },
          itemGap: 60
        },
        grid: {
          top: 200,
        },
        xAxis: {
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#80C3F5"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 12,
            interval: 1
          },
          axisTick: {
            show: false
          },
          data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        },
        yAxis: [
          {
            name: "订单量(单)",
            nameTextStyle: {
              color: '#fff',
              fontSize: 16
            },
            splitNumber: 5,
            position: "left",
            scale: false,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12
              },
              showMinLabel: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#80C3F5"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#80C3F5",
                type: "dashed"
              }
            }
          },
          {
            name: "成交额(万)",
            nameTextStyle: {
              color: '#00ECFF',
              fontSize: 16
            },
            position: "right",
            scale: false,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12
              },
              showMinLabel: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#80C3F5"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
            }
          }
        ],
        series: [
          {
            name: "订单量",
            type: "line",
            symbol: "circle",
            symbolSize: 4,
            itemStyle: {
              color: "#00ECFF"
            },
            lineStyle: {
              color: "#00ECFF",
              width: 2
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(128,157,255,1)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(128,157,255,0)" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            data: [2, 4, 2, 6, 5, 7, 8, 7, 9, 4]
          },
          {
            name: "成交额",
            type: "bar",
            yAxisIndex: 1,
            barWidth: 15,
            lineStyle: {
              opacity: 0
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#00ECFF" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#1890FF" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            data: [1, 3, 1, 5, 4, 6, 7, 7, 8, 3]
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