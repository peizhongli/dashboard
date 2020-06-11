<template>
  <div class="card">
    <mapChart :data="data.mapList" />
    <section class="service-wrap flex">
      <div class="flex">
        <span class="icon"></span>
        <p>
          <!-- <span class="service-count">{{data.online}}</span> -->
          <numberWrap
            class="service-count"
            :number="data.online"
            :figures="data.online.toString().length"
          />

          <span class="service-des">今日线上服务量</span>
        </p>
      </div>
      <div class="flex">
        <span class="icon"></span>
        <p>
          <!-- <span class="service-count">{{data.scene}}</span> -->
          <numberWrap
            class="service-count"
            :number="data.scene"
            :figures="data.scene.toString().length"
          />
          <span class="service-des">今日现场服务量</span>
        </p>
      </div>
    </section>
    <section class="rate-wrap">
      <progressChart :data="item" v-for="(item,index) in data.progress" :key="index" />
    </section>
    <section class="corner city-wrap">
      <p class="city-title">地区接入排行</p>
      <p v-for="(item,index) in data.cityList" :key="index" class="flex">
        <span class="city-name">{{item.name}}</span>
        <span class="city-count">{{item.value}}</span>
      </p>
    </section>
  </div>
</template>
<script>
import mapChart from "../../components/Echarts/MapChart";
import progressChart from "../../components/Echarts/ProgressChart";
import numberWrap from "../../components/numberWrap";

export default {
  props: {
    data: Object
  },
  components: {
    mapChart,
    progressChart,
    numberWrap
  }
};
</script>
<style lang="scss" scoped>
$text-blue: #00ecff;
.card {
  position: relative;
  padding: 153px 272px 0 208px;
  text-align: center;
  color: $text-blue;
  .name {
    font-size: 24px;
    line-height: 1;
    margin: 31px 0 15px;
  }
  .service-wrap {
    position: absolute;
    top: 60px;
    left: 83px;
    justify-content: flex-start;
    .flex {
      margin-right: 115px;
      text-align: left;
    }
    .icon {
      width: 123px;
      height: 123px;
      margin-right: 28px;
      background-image: url(../../assets/img/service.png);
      background-size: 55px auto;
    }
    & > div:nth-child(2) {
      .icon {
        background-image: url(../../assets/img/scene.png);
        background-color: #23e3f4;
        background-size: 61px auto;
      }
    }
    span {
      display: block;
    }
    .service-count {
      color: #fff;
      font-weight: bold;
      font-size: 96px;
      /deep/ .box-item {
        font-size: 96px;
        width: 58px;
        background: none;
        height: 110px;
      }
    }
    .service-des {
      font-size: 36px;
      color: #b0b4bc;
      margin-top: -15px;
    }
  }
  .rate-wrap {
    position: absolute;
    right: 72px;
    bottom: 39px;
  }
  .city-wrap {
    position: absolute;
    bottom: 39px;
    left: 62px;
    width: 198px;
    height: 336px;
    box-sizing: border-box;
    padding-top: 29px;
    background-size: 2px 16px, 16px 2px; // 指定边框像素
    z-index: 1;
    .city-title {
      color: #fff;
      font-size: 24px;
      margin-bottom: 34px;
    }
    .flex {
      padding: 0 30px;
      margin-bottom: 13px;
      justify-content: space-between;
      font-size: 18px;
    }
    .city-name {
      color: #fff;
    }
  }
}
</style>