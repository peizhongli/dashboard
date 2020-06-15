<template>
  <!-- 地图 -->
  <div ref="main" style="width:1390px;height:1139px;" class="main"></div>
</template>
<script>
let echarts = require("echarts"); // 引入 ECharts 主模块
import geoCoordMap from "../../assets/js/geoCoord";
import "echarts/map/js/china"; // 引入中国地图
const convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
const areaData = ["北京", "四川", "广东", "上海", "深圳","浙江", "辽宁", "江苏", "陕西", "山东","湖北",'山西','吉林','黑龙江','内蒙古','河北','湖南','江西','贵州','云南','福建','安徽','广西','青海','甘肃','宁夏','河南','重庆','海南'];
export default {
  props: {
    data: Array
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.name + " : " + params.value[2];
          }
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          left: 0,
          right: 0,
          top: 0,
          itemStyle: {
              
            areaColor: "rgba(43,98,193,0.27)",
            borderWidth: 1,
            borderColor: "#00ECFF",
            emphasis: {
              areaColor: "rgba(43,87,193,0.7)"
            },
            shadowColor: "rgba(0,236,255, 0.27)",
            shadowBlur: 7
          },
          regions: areaData.map(i => {
            return {
              name: i,
              itemStyle: {
                areaColor: "rgba(43,87,193,0.7)"
              }
            };
          })
        },
        series: [
          {
            name: "Top5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              this.data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 5)
            ),
            symbolSize: 10,
            showEffectOn: "render",
            hoverAnimation: true,
            label: {
              normal: {
                formatter: function(params) {
                  return `+${params.value[2]}`;
                },
                position: "right",
                show: true,
                fontSize: 14
              },
              emphasis: {
                show: true
              }
            },
            rippleEffect: {
              period: 3,
              scale: 10,
              brushType: "fill"
            },
            itemStyle: {
              normal: {
                color: "#F6F600",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          },
          {
            name: "Top10",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              this.data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(5, 8)
            ),
            symbolSize: 10,
            showEffectOn: "render",
            hoverAnimation: true,
            label: {
              normal: {
                formatter: function(params) {
                  return `${params.value[2]}`;
                },
                position: "right",
                show: true,
                fontSize: 14
              },
              emphasis: {
                show: true
              }
            },
            rippleEffect: {
              period: 3,
              scale: 7,
              brushType: "fill"
            },
            itemStyle: {
              normal: {
                color: "#F6F600",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          },
          {
            name: "Top15",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              this.data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(8, 12)
            ),
            symbolSize: 10,
            showEffectOn: "render",
            hoverAnimation: true,
            label: {
              normal: {
                formatter: function(params) {
                  return `${params.value[2]}`;
                },
                position: "right",
                show: true,
                fontSize: 14
              },
              emphasis: {
                show: true
              }
            },
            rippleEffect: {
              period: 3,
              scale: 5,
              brushType: "fill"
            },
            itemStyle: {
              normal: {
                color: "#F6F600",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          },
          {
            name: "Top15",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              this.data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(12, this.data.length+1)
            ),
            symbolSize: 10,
            showEffectOn: "render",
            hoverAnimation: true,
            label: {
              normal: {
                formatter: function(params) {
                  return `${params.value[2]}`;
                },
                position: "right",
                show: true,
                fontSize: 14
              },
              emphasis: {
                show: true
              }
            },
            rippleEffect: {
              period: 3,
              scale: 5,
              brushType: "fill"
            },
            itemStyle: {
              normal: {
                color: "#F6F600",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          },
        ]
      });
    }
  },
  mounted() {
    console.log(this.data)

    this.init();
  }
};
</script>
<style lang="scss" scoped>
.main {
  background: url(../../assets/img/map.png) no-repeat;
  background-size: 100% auto;
}
</style>