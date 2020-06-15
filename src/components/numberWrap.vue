<template>
  <div class="wrap">
    <div class="box-item" v-for="(item,index) in figures" :key="index">
      <span ref="numberItem">0123456789</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    figures: {
      type: Number,
      default: 1
    }
  },
  methods: {
    setNumberTransform(val) {
      let numArr = val.toString().split("");
      const numberItems = this.$refs.numberItem;
      if (this.figures - numArr.length < 0) {
        this.figures.forEach((i, index) => {
          numberItems[index].style.transform = `translate(-50%, 0)`;
        });
      } else {
        this.$nextTick(() => {
          let zeroArr = new Array(this.figures - numArr.length).fill(0);
          numArr = [...zeroArr, ...numArr];
          numArr.forEach((i, index) => {
            numberItems[index].style.transform = `translate(-50%, -${i * 10}%)`;
          });
        });
      }
    }
  },
  mounted() {
    this.setNumberTransform(this.number);
  },
  watch: {
    number(val) {
      //   console.log(val);
      this.setNumberTransform(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.box-item {
  display: inline-block;
  width: 54px;
  height: 82px;
  background: url(../assets/img/number.png) no-repeat;
  background-size: 100% 100%;
  font-size: 62px;
  line-height: 82px;
  text-align: center;
  position: relative;
  writing-mode: vertical-lr;
  text-orientation: upright;
  overflow: hidden;
}
.box-item span {
  position: absolute;
  top: 10px;
  left: 50%;
  letter-spacing: 10px;
  transition: transform 1s;
  transform: translate(-50%, 0);
  z-index: 3;
}
</style>