<template>
  <div class="main">
    <title-wrap />
    <div class="content-wrap flex">
      <section class>
        <left1 :data="left1" />
        <left2 :data="left2" />
        <left3 :data="left3" />
        <left4 :data="left4" />
      </section>
      <section class>
        <middle1 :data="middle1" />
        <middle2 :data="middle2" />
      </section>
      <section class>
        <right1 :data="middle1.online" />
        <right2 :data="right2" />
        <right3 :data="right3" />
      </section>
    </div>
  </div>
</template>
<script>
import titleWrap from "./title";
import left1 from "./left/left1";
import left2 from "./left/left2";
import left3 from "./left/left3";
import left4 from "./left/left4";
import middle1 from "./middle/middle1";
import middle2 from "./middle/middle2";
import right1 from "./right/right1";
import right2 from "./right/right2";
import right3 from "./right/right3";

function getRandomNumberByRange(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

export default {
  components: {
    titleWrap,
    left1,
    left2,
    left3,
    left4,
    middle1,
    middle2,
    right1,
    right2,
    right3
  },
  data() {
    return {
      left1: [
        {
          title: "服务量",
          number: 0
        },
        {
          title: "UV",
          number: 0
        }
      ],
      left2: {
        platform: [
          {
            title: "微信",
            solved: 22.1,
            satisfaction: 27.3
          },
          {
            title: "桌面网站",
            solved: 22.1,
            satisfaction: 27.3
          },
          {
            title: "移动网站",
            solved: 22.1,
            satisfaction: 27.3
          }
        ]
      },
      left3: {},
      left4: [
        { name: "主机", value: 200 },
        { name: "系统", value: 400 },
        { name: "保修", value: 600 },
        { name: "显示", value: 800 },
        { name: "驱动", value: 2000 },
        { name: "服务", value: 350 },
        { name: "安装", value: 666 },
        { name: "内存", value: 899 },
        { name: "一键恢复", value: 188 },
        { name: "笔记本", value: 178 },
        { name: "人工", value: 165 },
        { name: "试用", value: 33 },
        { name: "游戏", value: 44 },
        { name: "配置", value: 222 },
        { name: "声音", value: 333 },
        { name: "启动", value: 233 },
        { name: "office", value: 778 },
        { name: "显卡", value: 999 },
        { name: "升级", value: 888 },
        { name: "还原", value: 456 },
        { name: "键盘", value: 789 }
      ],
      middle1: {
        online: 0,
        scene: 0,
        mapList: [
          {
            name: "北京",
            value: 1113
          },
          {
            name: "上海",
            value: 678
          },
          {
            name: "广州",
            value: 584
          },
          {
            name: "深圳",
            value: 420
          },
          {
            name: "成都",
            value: 492
          },
          {
            name: "南京",
            value: 200
          },
          {
            name: "沈阳",
            value: 342
          },
          {
            name: "杭州",
            value: 666
          },
          {
            name: "西安",
            value: 200
          },
          {
            name: "江苏",
            value: 200
          },
          {
            name: "武汉",
            value: 333
          },
          {
            name: "青岛",
            value: 200
          },
          {
            name: "长春",
            value: 232
          },

          {
            name: "西宁",
            value: 13
          },
          {
            name: "兰州",
            value: 13
          },
          {
            name: "昆明",
            value: 52
          },
          {
            name: "贵阳",
            value: 32
          },
          {
            name: "长沙",
            value: 32
          },
          {
            name: "南宁",
            value: 43
          },
          {
            name: "呼和浩特",
            value: 37
          },
          {
            name: "太原",
            value: 86
          },
          {
            name: "西安",
            value: 39
          },
          {
            name: "郑州",
            value: 37
          },
          {
            name: "南昌",
            value: 68
          },
          {
            name: "重庆",
            value: 232
          },
          {
            name: "哈尔滨",
            value: 245
          },
          {
            name: "厦门",
            value: 189
          },
          {
            name: "海口",
            value: 48
          }
        ],
        cityList: [
          {
            name: "北京",
            value: 1113
          },
          {
            name: "上海",
            value: 678
          },
          {
            name: "广州",
            value: 584
          },
          {
            name: "深圳",
            value: 492
          },
          {
            name: "成都",
            value: 420
          }
        ],
        progress: [
          { title: "30秒接起率", value: 98 },
          { title: "机器人转人工", value: 48 },
          { title: "满意度", value: 92 }
        ]
      },
      middle2: {
        list: [
          { des: "线上服务", value: 240, type: "high", total: 400 },
          { des: "人员准备", value: 698, type: "middle", total: 1000 },
          { des: "备件准备", value: 326, type: "high", total: 1000 },
          { des: "上门服务", value: 757, type: "high", total: 1000 },
          { des: "未修复长尾", value: 122, type: "high", total: 1000 }
        ]
      },
      right1: {},
      right2: {},
      right3: {}
    };
  },
  methods: {
    roll(total, name) {
      let time = getRandomNumberByRange(1, 3) * 300;
      //   console.log(time, "后roll", name, this.middle1[name], total);
      window.setTimeout(() => {
        this.middle1[name]++;
        if (this.middle1[name] < total) {
          this.roll(total, name);
        } else {
          this.setTimer(name);
        }
      }, time);
    },
    setTimer(name) {
      let addCount = 0;
      if (name == "online") {
        addCount = getRandomNumberByRange(3, 9);
      } else {
        addCount = getRandomNumberByRange(1, 3);
      }
      let time = getRandomNumberByRange(1, 5) * 1000;
      //   console.log("新增", name, addCount);
      //   console.log(time, "后");
      window.setTimeout(() => {
        this.roll(this.middle1[name] + addCount, name);
      }, time);
    },
    setSocket() {
      var url = "ws://10.120.115.71:8093";
      //建立websocket连接
      var io = new WebSocket(url);
      io.onopen = function() {
        console.log("连接成功");
      };
      //连接错误
      io.onerror = function(e) {
        console.log("连接错误", e);
      };
      //推送消息
      io.onmessage = res => {
        let data = JSON.parse(res.data);
        console.log("收到数据", data);
        if(data.online==0) {
          location.reload()
        }
        this.middle1.online = data.online;
        this.middle1.scene = data.scene;
        this.left1[0].number = data.bv;
        this.left1[1].number = data.uv;
        this.middle2.list[0].value = data.ol;
      };
      //关闭连接
      io.onclose = () => {
        this.setSocket();
      };
    }
  },
  mounted() {
    // this.setTimer("online");
    // this.setTimer("scene");
    this.setSocket();
  },
  created() {
    console.log("初始化了");
  }
};
</script>

<style lang="scss" scoped>
.content-wrap {
  padding: 35px 60px 0;
  &.flex {
    justify-content: space-between;
  }
  section {
    &.flex {
      height: 100%;
      flex-direction: column;
    }
    &:first-child {
      width: 732px;
    }
    &:nth-child(2) {
      width: 1870px;
    }
    &:nth-child(3) {
      width: 1039px;
    }
  }
}
</style>