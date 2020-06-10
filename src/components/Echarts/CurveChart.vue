<template>
  <!-- 曲线图 -->
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
        color:['#F6F600','#809DFF'],
        title: {
          text: "时段服务明细",
          textStyle: {
            color: "#00ECFF",
            fontSize: 24
          }
        },
        legend: {
          data: ["时段服务量","时段预测服务量", "放弃率"],
          right: 0,
          textStyle: {
            color: "#fff",
            fontSize: 14,
            padding: [0, 0, 0, 20]
          },
          itemGap: 60,
          icon: 'rect',
          itemWidth: 60,
          itemHeight: 3,
        },
        xAxis: {
          boundaryGap: false,
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
          data: [
            "0:00",
            "2:00",
            "4:00",
            "6:00",
            "8:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00",
            "24:00"
          ]
        },
        yAxis: [
          {
            position: "left",
            splitNumber: 3,
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
            position: "right",
            splitNumber: 3,
            scale: false,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12
              },
              formatter: "{value}%",
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
          }
        ],
        series: [
          {
            name: "时段服务量",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 12,
            itemStyle: {
              color: "#00ECFF"
            },
            lineStyle: {
              color: "#00ECFF",
              width: 3
            },
            data: [
              "-",
              "-",
              { value: 90, symbolSize: 0 },
              100,
              120,
              140,
              200,
              350,
              400,
              360,
              { value: 300, symbolSize: 0 },
              "-",
              "-"
            ]
          },
          {
            name: "时段预测服务量",
            type: "line",
            showSymbol: false,
            smooth: true, //关键点，为true是不支持虚线，实线就用true
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3,
                  color: "#F6F600",
                  type: "dotted" //'dotted'虚线 'solid'实线
                }
              }
            },

            data: [
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              "-",
              300,
              234,
              250
            ]
          },
          {
            name: "放弃率",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              opacity: 0
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
            data: [null, 0, 2, 3, 4, 5, 6, 6.5, 6.8, 4, 4.8, 5, 3]
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