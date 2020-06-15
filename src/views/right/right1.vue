<template>
  <div class="card">
    <p class="title">呼叫中心运营监控</p>
    <section class="flex">
      <div class="left">
        <!-- <p class="count">{{data}}</p> -->
        <numberWrap class="count" :number="data" :figures="data.toString().length" />
        <p class="des">呼叫中心</p>
      </div>
      <div class="flex count-wrap">
        <p class="corner">
          <span>156</span>
          <span>
            <img src="../../assets/img/service.png" alt />
            业务服务量
          </span>
        </p>
        <p class="corner">
          <span>5.12%</span>
          <span>
            <img src="../../assets/img/abandonment.png" alt />实时放弃率
          </span>
        </p>
        <p class="corner">
          <span>18</span>
          <span>
            <img src="../../assets/img/queue.png" alt />排队量
          </span>
        </p>
        <p class="corner">
          <span>00:23</span>
          <span>
            <img src="../../assets/img/queue_time.png" alt />平均排队时长
          </span>
        </p>
        <p class="corner">
          <span>06:12</span>
          <span>
            <img src="../../assets/img/talk_time.png" alt />AHT
          </span>
        </p>
        <p class="corner">
          <span>5</span>
          <span>
            <img src="../../assets/img/angry.png" alt />当前愤怒会话
          </span>
        </p>
      </div>
    </section>
    <curveChart />
  </div>
</template>
<script>
import curveChart from "../../components/Echarts/CurveChart";
import numberWrap from "../../components/numberWrap";
export default {
  props: {
    data: Number
  },
  components: {
    curveChart,
    numberWrap
  }
};
</script>
<style lang="scss" scoped>
$text-blue: #00ecff;
.card {
  padding: 26px 50px 9px;
  text-align: center;
  color: $text-blue;
  .title {
    margin-bottom: 58px;
  }
  .left {
    flex-shrink: 0;
    width: 310px;
    height: 310px;
    box-sizing: border-box;
    padding-top: 88px;
    border-radius: 50%;
    margin: 0 114px 0 23px;
    background: linear-gradient(to bottom right, #00ecff, #1890ff);
    box-shadow: 0 0 0 15px #1c203a, 0 0 0 25px #283d66;
    .count {
      color: #f6f600;
      /deep/ .box-item {
        font-size: 60px;
        width: 36px;
        background: none;
        height: 70px;
      }
    }
    .des {
      color: #fff;
      font-size: 36px;
    }
  }
  & > .flex {
    justify-content: flex-start;
    margin-bottom: 75px;
  }
  .count-wrap {
    width: 492px;
    flex-wrap: wrap;
    .corner {
      width: 233px;
      height: 90px;
      margin-bottom: 30px;
      box-sizing: border-box;
    //   padding-top: 5px;
      img {
        width: 16px;
        margin-right: 10px;
      }
      span {
        display: block;
        &:first-child {
          font-size: 36px;
        }
        &:last-child {
          font-size: 16px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      &:nth-child(4) {
        img {
          width: 13px;
        }
      }
    }
  }
}
</style>