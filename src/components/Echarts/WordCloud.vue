<template>
  <!-- 词云 -->
  <div class="tag-wrap">
    <p class="tag" v-for="(item,index) in data" :key="index">
      <span class="tag-name">{{item.name}}</span>
      <span class="tag-value">{{item.value}}</span>
    </p>
  </div>
</template>
<script>
const colors = [
  "rgba(0,236,255,0.8)",
  "#00ECFF",
  "rgba(0,236,255,0.9)",
  "#00ECFF",
  "#00ECFF",
  "rgba(255,255,255,0.9)",
  "#fff",
  "#fff",
  "#fff",
  "rgba(255,255,255,0.8)"
];
const RADIUS = 166; // 3d球的半径
const FALLLENGTH = 420;
let CX = null;
let CY = null;

class Tag {
  constructor(el, x, y, z) {
    this.el = el;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  move() {
    let scale = FALLLENGTH / (FALLLENGTH - this.z);
    let alpha = (this.z + RADIUS) / (2 * RADIUS);
    let left = this.x + CX - this.el.offsetWidth / 2 + 40 + "px"; // 水平偏移
    let top = this.y + CY - this.el.offsetHeight / 2 + 10 + "px"; // 竖直偏移
    this.el.style.opacity = alpha;
    this.el.style.zIndex = parseInt(scale * 100);
    this.el.style.transform = `translate(${left},${top}) scale(${scale})`;
  }
}
export default {
  props: {
    data: Array
  },
  data() {
    return {
      tagList: []
    };
  },
  methods: {
    init() {
      const tags = document.querySelectorAll(".tag");
      const wrap = document.querySelector(".tag-wrap");

      let len = tags.length;
      let valueList = Array.from(new Set(this.data.map(i => i.value)));
      let min = Math.min(...valueList);
      CX = wrap.offsetWidth / 2;
      CY = wrap.offsetHeight / 2;

      tags.forEach((i, index) => {
        let fontScale = this.data[index].value / min * 16;
        i.style.fontSize = fontScale > 30 ? '30px' : fontScale + 'px';
        i.style.color = colors[parseInt(Math.random() * 10)];

        let k = -1 + (2 * (index + 1) - 1) / len;
        let a = Math.acos(k);
        let b = a * Math.sqrt(len * Math.PI);
        let x = RADIUS * 1.15 * Math.sin(a) * Math.cos(b);
        let y = RADIUS * Math.sin(a) * Math.sin(b);
        let z = RADIUS * Math.cos(a);
        let tag = new Tag(i, x, y, z);
        this.tagList.push(tag);
      });
    },
    rotateX() {
      let angleX = Math.PI / 500;
      let cos = Math.cos(angleX);
      let sin = Math.sin(angleX);
      this.tagList.forEach(i => {
        i.y = i.y * cos - i.z * sin;
        i.z = i.z * cos + i.y * sin;
      });
    },
    rotateY() {
      let angleY = Math.PI / 500;
      let cos = Math.cos(angleY);
      let sin = Math.sin(angleY);
      this.tagList.forEach(i => {
        i.x = i.x * cos - i.z * sin;
        i.z = i.z * cos + i.x * sin;
      });
    },
    animate() {
      this.rotateX();
      this.rotateY();
      this.tagList.forEach(i => {
        i.move();
      });
      requestAnimationFrame(this.animate);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>
<style lang="scss" scoped>
.tag-wrap {
  position: relative;
  width: 100%;
  height: 395px;
  background: url(../../assets/img/cloud.png) no-repeat;
  background-size: 100% 100%;
  .tag {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    will-change: transform;
    color: #fff;
    span {
      display: inline-block;
    }
    .tag-value {
      opacity: 0;
      height: 35px;
      padding: 0 30px 0 20px;
      color: #f6f600;
      line-height: 35px;
      margin-left: 5px;
      visibility: middle;
      font-size: 14px;
      transition: all 0.2s;
      background: linear-gradient(
        90deg,
        rgba(216, 255, 0, 0.7) 0%,
        rgba(58, 51, 255, 0) 100%
      );
    }
    &:hover {
      .tag-value {
        opacity: 1;
      }
    }
  }
}
</style>