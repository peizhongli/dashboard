<template>
  <!-- 水球图 -->
  <div class="wrap">
      <div ref="main" style="width:256px;height:257px;"></div>
      <p class="number" :style="'color:'+ color">{{parseInt(value*total)}}</p>
  </div>
</template>
<script>
let echarts = require("echarts"); // 引入 ECharts 主模块
import "echarts-liquidfill/src/liquidFill.js"; // 引入 水球图
// let value = null;
// let label = null;
export default {
  props: {
    value: Number,
    type: String,
    total: Number
  },
  data() {
      return {
          color: ''
      }
  },
  methods: {
    init() {
        let that = this
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
              that.value,
              {
                value: that.value,
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
                borderColor: that.color,
                borderType: "solid"
              }
            },
            label: {
              show: false,
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
    // value = this.value;
    // console.log(this.total)
    // label = parseInt(this.value * this.total);
    this.color = this.type == "high" ? "#23E3F4" : "#FFDF1E";
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.wrap {
    position: relative;
}
.number {
    font-size: 60px;
    position: absolute;
    top: 88px;
    width: 100%;
    text-align: center;
}
    
</style>