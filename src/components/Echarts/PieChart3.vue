<template>
<!-- 饼形图 -->
    <div ref="main" style="width:55%;height:330px;"></div>
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
          type: "plain",
          orient: "horizontal",
          right: "0",
          top: "0",
          icon: "rect",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: ["电商", "微博", "微信",]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: [70, 100],
            legendHoverLink: false,
            position: 'outside',
            margin: '20%',
            label: {
              formatter: `{b|{b}}占比: {d|{d}%}`,
              fontSize: 18,
              color: "#fff",
              rich: {
                d: {
                  color: "#00ECFF",
                  fontSize: 18,
                }
              }
            },
            labelLine: {
              lineStyle: {
                color: "#00ECFF"
              },
            },
            emphasis: {
              label: {
                show: true,
                formatter: `{b|{b}}占比: {d|{d}%}`,
                fontWeight: "bold",
                color: "#fff",
                fontSize: 20,
                rich: {
                  d: {
                    color: "#00ECFF",
                  }
                }
              }
            },
            data: [
              {
                value: 100,
                name: "微博",
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
                        color: "#56D09D" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#64FC91" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 300,
                name: "微信",
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
                        color: "#F7B500" // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: "#E1F18A" // 100% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#F6F600" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 400,
                name: "电商",
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
                        color: "#5EC0EF" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
            ]
          },
          {
            name: "图例背景",
            type: "pie",
            selectedMode: "single",
            hoverAnimation: false,
            radius: [0, 51],
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
      this.init()
  }
};
</script>