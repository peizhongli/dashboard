<template>
  <!-- 水球图 -->
  <div ref="main" style="width:256px;height:257px;"></div>
</template>
<script>
let echarts = require("echarts"); // 引入 ECharts 主模块
import "echarts-liquidfill/src/liquidFill.js"; // 引入 水球图
let value = null;
let color = null;
let label = null;
export default {
  props: {
    value: Number,
    type: String
  },
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        tooltip: {
          show: true
        },
        series: [
          {
            type: "liquidFill",
            radius: "98%",
            amplitude: "4%",
            waveLength: "80%",
            center: ["50%", "50%"],
            color: [
              {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#5DB1FF"
                  },
                  {
                    offset: 1,
                    color: "#007DF1"
                  }
                ],
                globalCoord: false
              }
            ],
            data: [
              value,
              {
                value,
                itemStyle: {
                  opacity: 0.5
                }
              }
            ],
            backgroundStyle: {
              color: "#20315e"
            },
            tooltip: {
              show: false
            },
            outline: {
              itemStyle: {
                borderWidth: 5,
                borderColor: color,
                borderType: "solid"
              }
            },
            label: {
              insideColor: color,
              color: color,
              fontSize: 60,
              formatter: function() {
                return label;
              }
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
    value = (this.value / 500).toFixed(2);
    label = this.value;
    color = this.type == "high" ? "#23E3F4" : "#FFDF1E";
    this.init();
  }
};
</script>