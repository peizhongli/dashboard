<template>
  <div class="card">
    <p class="title">机器人实时累计数据</p>
    <section class="flex">
      <div v-for="(i,index) in data" :key="index">
        <p class="name">{{i.title}}</p>
        <div class="flex number-wrap corner">
          <!-- <span v-for="(num,index) in i.number" :key="index" class="number">{{num}}</span> -->
          <numberWrap class="number" :number="i.number" :figures="5" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import numberWrap from "../../components/numberWrap";
export default {
  props: {
    data: Array
  },
  components: {
    numberWrap
  }
};
</script>
<style lang="scss" scoped>
$text-blue: #00ecff;
.card {
  padding: 26px 50px;
  text-align: center;
  color: $text-blue;
  .name {
    font-size: 24px;
    line-height: 1;
    margin: 26px 0 15px;
  }
  .number-wrap {
    width: 294px;
    box-sizing: border-box;
    height: 72px;
    padding: 0 12px;
    align-items: center;
    background-size: 2px 16px, 16px 2px; // 指定边框像素
    .number {
      display: flex;
      align-items: center;
      /deep/.box-item {
        width: 41px;
        height: 53px;
        font-size: 40px;
        line-height: 53px;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
        span {
          top: 8px;
          letter-spacing: 8px;
        }
      }
      //   position: relative;
      //   width: 30px;
      //   line-height: 41px;
      //   height: 41px;
      //   font-size: 30px;
      //   background: url(../../assets/img/number.png);
      //   background-size: 100% 100%;
      // border: 1px solid #306db3;
      // background-color: #294ea0;
      // box-sizing: border-box;
      // border-radius: 1px;
      // &::before,&::after {
      //     content: '';
      //     display: block;
      //     position: absolute;
      //     top: 0;
      //     bottom: 0;
      //     margin: auto;
      //     width: 8px;
      //     height: 8px;
      //     border: 1px solid #306db3;
      //     background-color: #20315e;
      //     border-radius: 50%;
      // }
      // &::before {
      //     left: -6px;
      //     border-left: 0;
      // }
      // &::after {
      //     right: -6px;
      // }
    }
  }
}
</style>