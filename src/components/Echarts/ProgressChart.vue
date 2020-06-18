<template>
  <!-- 仪表盘进度条 -->
  <div class="wrap">
    <div ref="main" style="width:140px;height:70px;margin: 0 auto;"></div>
    <p class="rate">{{data.value}}%</p>
    <p class="title">{{data.title}}</p>
  </div>
</template>
<script>
let echarts = require("echarts");

let data = [
  {
    value: 40,
    itemStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: "#2A69D6" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#74D7EE" // 100% 处的颜色
          }
        ],
        
      },
    }
  },
  {
    value: 10,
    itemStyle: {
      color: '#2B62C1'
    },
    label: {
      show: false,
    }
  },
  {
    value: 50,
    itemStyle: {
      color: 'transparent'
    },
    label: {
      show: false,
    }
  }
];

export default {
  props: {
    data: Object,
  },
  methods: {
    init() {
      const myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: "",
            type: "pie",
            startAngle: -180,
            top: '70px',
            radius: ['70px', '58px'],
            labelLine: {
                  show: false
            },
            label: {
              show: false,
            },
            hoverAnimation: false,
            data: data,
          },
          
        ]
      });

      window.onresize = function() {
        myChart.resize();
      };
    }
  },
  mounted() {
    data[0].value = this.data.value / 2
    data[1].value = 50 - this.data.value / 2
    this.init();
  }
};
</script>
<style lang="scss" scoped>
  .wrap {
    width:156px;
    margin-top: 60px;
    .rate {
      font-size: 36px;
      margin-top: -40px;
    }
    .title {
      font-size: 24px;
      margin-top: 20px;
    }
  }
</style>