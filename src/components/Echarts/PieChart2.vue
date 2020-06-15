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
        color: ["#00ECFF","#64FC91","#EDFF13","#F0A137","#2B57C1",],
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
          right: 0,
          bottom: "0",
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: "#fff",
            fontSize: 18
          },
          data: ["整机延保", "专家上门服务", "PC故障检修", "即刻达", "重装系统服务"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            top: 90,
            left: -40,
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
                show: false,
                // formatter: `{b|{b}}{d|{d}%}`,
                // fontWeight: "bold",
                // fontSize: 20,
                // color: "#fff",
                // rich: {
                //   b: {
                //     color: "#fff",
                //     align: "center",
                //     lineHeight: 22,
                //     fontWeight: "bold"
                //   },
                //   d: {
                //     color: "#00ECFF",
                //     fontWeight: "bold"
                //   }
                // }
              }
            },
            data: [
              {
                value: 400,
                name: "整机延保",
              },
              {
                value: 100,
                name: "专家上门服务",
              },
              {
                value: 100,
                name: "PC故障检修",
              },
              {
                value: 100,
                name: "即刻达",
              },
              {
                value: 800,
                name: "重装系统服务",
              }
            ]
          },
          {
            name: "图例背景",
            type: "pie",
            top: 90,
            left: -40,
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