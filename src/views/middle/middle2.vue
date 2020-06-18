<template>
  <div class="card">
    <p class="title">客户旅程</p>
    <div class="legend-wrap flex">
      <p>整体满意度：</p>
      <p>
        <span class="high"></span>高
      </p>
      <p>
        <span class="middle"></span>中
      </p>
      <p>
        <span class="low"></span>低
      </p>
    </div>
    <section class="flex">
      <div v-for="(i,index) in data.list" :key="index" class="item-wrap">
        <warterChart :value="i.value" :type="i.type" :total="i.total" />
        <p class="des-wrap flex">
          <span class="icon"></span>
          <span class="des">{{i.des}}</span>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import warterChart from "../../components/Echarts/WaterChart";
export default {
  props: {
    data: Object
  },
  components: {
    warterChart
  }
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  padding: 41px 0 70px;
  .title {
    margin-bottom: 100px;
  }
  & > .flex {
    padding: 0 120px;
  }
  .des-wrap {
    margin-top: 4px;
    justify-content: flex-start;
    align-items: center;
    .icon {
      width: 60px;
      height: 60px;
      margin-right: 19px;
    }
    .des {
      font-size: 30px;
      color: #fff;
    }
  }
  .item-wrap {
    &:first-child .icon {
      background-image: url(../../assets/img/icon1.png);
      background-size: 30px auto;
    }
    &:nth-child(2) .icon {
      background-image: url(../../assets/img/icon2.png);
      background-size: 32px auto;
    }
    &:nth-child(3) .icon {
      background-image: url(../../assets/img/icon3.png);
      background-size: 29px auto;
    }
    &:nth-child(4) .icon {
      background-image: url(../../assets/img/icon4.png);
      background-size: 29px auto;
    }
    &:nth-child(5) .icon {
      background-image: url(../../assets/img/icon5.png);
      background-size: 31px auto;
    }
  }
  .legend-wrap {
    padding: 0;
    position: absolute;
    right: 0;
    top: 52px;
    justify-content: flex-start;
    p {
      margin-right: 52px;
      font-size: 24px;
      color: #fff;
      &:first-child {
        margin-right: 36px;
      }
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #23e3f4;
        margin-right: 14px;
        &.middle {
          background-color: #ffdf1e;
        }
        &.low {
          background-color: #f0a137;
        }
      }
    }
  }
}
</style>