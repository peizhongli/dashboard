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
        <right1 :data="right1" />
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
    right3,
  },
  data() {
    return {
      left1: [
        {
          title: "业务量",
          number: [3, 5, 6, 2, 8]
        },
        {
          title: "用户数",
          number: [3, 5, 6, 2, 8]
        }
      ],
      left2: {
        platform: [
          {
            title: "桌面网站",
            solved: 22.1,
            satisfaction: 27.3
          },
          {
            title: "移动网站",
            solved: 22.1,
            satisfaction: 27.3
          },
          {
            title: "微信小程序",
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
        online: 678,
        scene: 567,
        mapList: [
          {
            name: "北京",
            value: 1000
          },
          {
            name: "天津",
            value: 999
          },
          {
            name: "河北",
            value: 888
          },
          {
            name: "山西",
            value: 777
          },
          {
            name: "内蒙古",
            value: 666
          },
          {
            name: "辽宁",
            value: 200
          },
          {
            name: "吉林",
            value: 678
          },
          {
            name: "黑龙江",
            value: 666
          },
          {
            name: "上海",
            value: 200
          },
          {
            name: "江苏",
            value: 200
          },
          {
            name: "浙江",
            value: 888
          },
          {
            name: "安徽",
            value: 200
          }
        ],
        cityList: [
          {
            name: "北京",
            value: 1000
          },
          {
            name: "天津",
            value: 999
          },
          {
            name: "河北",
            value: 888
          },
          {
            name: "山西",
            value: 777
          },
          {
            name: "内蒙古",
            value: 666
          }
        ],
        progress: [
          { title: "30秒接起率", value: 98 },
          { title: "机器人转人工", value: 88 },
          { title: "满意度", value: 92 }
        ]
      },
      middle2: [
          {des:'线上服务',value:218,type:'high'},
          {des:'人员准备',value:234,type:'middle'},
          {des:'备件准备',value:422,type:'high'},
          {des:'上门服务',value:235,type:'high'},
          {des:'未修复长尾',value:500,type:'high'},
      ],
      right1: {},
      right2: {},
      right3: {},
    };
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