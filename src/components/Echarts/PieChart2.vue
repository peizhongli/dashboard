<template>
  <!-- 饼形图 -->
  <div ref="main" style="width:50%;height:340px;"></div>
</template>
<script>
let echarts = require("echarts");

export default {
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "累计销售商品",
          textStyle: {
            color: "#00ECFF",
            fontSize: 24,
          },
          left: 'center',
          top: 15,
        },
        legend: {
          type: "plain",
          orient: "vertical",
          right: 20,
          bottom: "0",
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: "#fff",
            fontSize: 18
          },
          data: ["产品1", "产品2", "产品3", "产品4", "产品5"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            top: 90,
            radius: [79, 125],
            startAngle: -90,
            legendHoverLink: false,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                formatter: `{b|{b}}{d|{d}%}`,
                fontWeight: "bold",
                fontSize: 20,
                color: "#fff",
                rich: {
                  b: {
                    color: "#fff",
                    align: "center",
                    lineHeight: 22,
                    fontWeight: "bold"
                  },
                  d: {
                    color: "#00ECFF",
                    fontWeight: "bold"
                  }
                }
              }
            },
            data: [
              {
                value: 400,
                name: "产品1",
                itemStyle: {
                  color: "#00ECFF"
                }
              },
              {
                value: 100,
                name: "产品2",
                itemStyle: {
                  color: "#64FC91"
                }
              },
              {
                value: 100,
                name: "产品3",
                itemStyle: {
                  color: "#EDFF13"
                }
              },
              {
                value: 100,
                name: "产品4",
                itemStyle: {
                  color: "#F0A137"
                }
              },
              {
                value: 800,
                name: "产品5",
                itemStyle: {
                  color: "#2B57C1"
                }
              }
            ]
          },
          {
            name: "图例背景",
            type: "pie",
            top: 90,
            selectedMode: "single",
            hoverAnimation: false,
            radius: [0, 50],
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 1, name: "" }],
            itemStyle: {
              color: "rgba(43,98,193,0.27)"
            }
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