<template>
  <div class="wrap" :class="show?'start':''">
    <div class="top">
      <img src="../assets/img/lenovo.png" alt class="lenovo" />
      <img src="../assets/img/cube_logo.png" alt class="cube-logo" />
      <div class="title">
        <p>A.I.——服务智能化的内在驱动</p>
      </div>
      <div class="cube-all-wrap">
        <div class="cube-wrap1 cube-wrap cube"></div>
        <div class="cube-wrap2 cube-wrap cube"></div>
        <div class="cube-wrap3 cube-wrap cube"></div>
        <div class="cube-wrap4 cube-wrap cube"></div>
        <div class="cube-box">
          <div class="point rotate"></div>
          <div class="cube-logo-wrap">
            <div class="cube-item scale"></div>
          </div>
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="content left-con">
        <section class="con-left">
          <img src="../assets/img/left_icon.png" alt />
          <div class="corner2">A.I. 服务客户</div>
        </section>
        <section>
          <p class="con-left left2">
            <span>语义理解</span>
            <span>采用自然语言处理技术,自动理解用户问题,7x24小时不间断服务</span>
          </p>
          <p class="con-left left3">
            <span>多轮对话</span>
            <span style="letter-spacing:-1px;">通过多轮交互形式,明确用户意图,自动完成“开单”、“预定”等任务</span>
          </p>
          <p class="con-left left4">
            <span>智能回访</span>
            <span style="letter-spacing:-1px;">语音机器人对用户进行服务回访,收集反馈,形成数据闭环,提升服务流程体验</span>
          </p>
        </section>
      </div>
      <div class="content right-con con-right">
        <section class="con-left">
          <img src="../assets/img/right_icon.png" alt />
          <div class="corner2">A.I. For 服务坐席</div>
        </section>
        <section>
          <p class="con-left left2">
            <span>智能路由</span>
            <span>利用大数据算法识别用户,为每一位用户精准匹配坐席,提供个性化的客户服务体验</span>
          </p>
          <p class="con-left left3">
            <span>智能解决</span>
            <span>自动识别用户问题,精准推荐解决方案,实时分析数据,助力服务资源调度决策、服务质检</span>
          </p>
          <p class="con-left left4">
            <span>智能感知</span>
            <span>自研情绪识别引擎实时分析服务对话,帮助坐席了解用户情绪波动,降低客诉,把握销售商机</span>
          </p>
        </section>
      </div>
    </div>
    <div class="bottom">
      <p class="bottom-title">数据</p>
      <section class="flex">
        <div class="bottom-left bottom-con">
          <div>
            <span>语义理解率：</span>
            <p>
              <span style="width:93%" class="progress"></span>
            </p>
            <span>93%</span>
          </div>
          <div style="color:#32C5FF;">
            <span>服务解决率：</span>
            <p>
              <span style="width:52%;background-color:#32C5FF;" class="progress"></span>
            </p>
            <span>52%</span>
          </div>
          <div>
            <span>用户满意度：</span>
            <p>
              <span style="width:85%" class="progress"></span>
            </p>
            <span>85%</span>
          </div>
        </div>
        <div class="bottom-right bottom-con">
          <div>
            <span>解决方案推荐率：</span>
            <p>
              <span style="width:100%" class="progress"></span>
            </p>
            <span>113%</span>
          </div>
          <div>
            <span>方案采纳率：</span>
            <p>
              <span style="width:57%" class="progress"></span>
            </p>
            <span>57%</span>
          </div>
          <div>
            <span style="color:#32C5FF;">全局提效：</span>
            <p>
              <span style="width:17%;background-color:#32C5FF;" class="progress"></span>
            </p>
            <span style="color:#32C5FF;">17%</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  activated() {
    this.show = true;
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  color: #fff;
  .top {
    position: relative;
    overflow: hidden;
    width: 3840px;
    height: 1441px;
    padding-top: 84px;
    box-sizing: border-box;
    background: url(../assets/img/con_bg.jpg) no-repeat;
    background-size: 100% auto;
    & > img {
      position: absolute;
      display: block;
      &.lenovo {
        width: 449px;
        top: 62px;
        left: 140px;
      }
      &.cube-logo {
        width: 336px;
        top: 46px;
        right: 122px;
      }
    }
    .title {
      position: relative;
      height: 175px;
      font-size: 108px;
      font-weight: 800;
      padding-top: 24px;
      box-sizing: border-box;
      line-height: 132px;
      background: url(../assets/img/title2.png) no-repeat;
      background-size: 100% auto;
      z-index: 5;
    }
    .cube-all-wrap {
      width: 100%;
      position: absolute;
      height: 1182px;
      overflow: hidden;
    }

    .cube-wrap1 {
      width: 1922px;
      height: 1922px;
      opacity: 0.25;
    }
    .cube-wrap2 {
      width: 1454px;
      height: 1454px;
      opacity: 0.5;
    }
    .cube-wrap3 {
      width: 1168px;
      height: 1168px;
      opacity: 0.3;
    }
    .cube-wrap4 {
      width: 1064px;
      height: 1064px;
      background: url(../assets/img/bg3.jpg) no-repeat center;
      background-size: 100% auto;
      opacity: 0.3;
    }
    .cube-wrap {
      border-radius: 50%;
      box-sizing: border-box;
      background-color: rgba(21, 35, 65, 0.41);
      border: 2px solid rgba(86, 167, 226, 0.41);
    }
    .cube-box,
    .cube-wrap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    .cube-box {
      width: 768px;
      height: 768px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(../assets/img/point_bg.png) no-repeat center;
      background-size: 100% auto;
      box-shadow: 0 20px 37px 8px rgba(18, 29, 47, 0.5);

      .point {
        position: absolute;
        width: 800px;
        height: 800px;
        margin: auto;
        background: url(../assets/img/point.png) no-repeat center;
        background-size: 100% auto;
        z-index: 3;
        opacity: 0;
      }
      .cube-logo-wrap {
        width: 556px;
        height: 556px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(../assets/img/cube_box_bg.png) no-repeat center;
        background-size: 100% auto;
      }
      .cube-item {
        width: 427px;
        height: 458px;
        background: url(../assets/img/cube3.jpg) no-repeat center;
        background-size: 100% auto;
      }
    }
    .left,
    .right {
      position: absolute;
      top: 405px;
      width: 200px;
      height: 606px;
      background: url(../assets/img/left.png) no-repeat center;
      background-size: 100% auto;
      opacity: 0;
    }
    .left {
      left: 1378px;
    }
    .right {
      right: 1377px;
      transform: rotateY(180deg);
    }
    .content {
      position: absolute;
      display: flex;
      flex-direction: column;
      font-size: 56px;
      line-height: 100px;
      letter-spacing: 3px;
      font-weight: bold;
      top: 376px;
      img {
        width: 155px;
        margin-bottom: 37px;
      }
      .corner2 {
        width: 720px;
        height: 86px;
        line-height: 86px;
        font-size: 62px;
        text-align: center;
        margin-bottom: 100px;
      }
      p {
        margin-bottom: 102px;
        display: flex;
        span {
          display: block;
          font-size: 85px;
          &:last-child {
            width: 605px;
            font-size: 35px;
            line-height: 56px;
            color: rgba(255, 255, 255, 0.59);
            letter-spacing: 0;
            text-align: justify;
          }
        }
      }
    }
    .left-con {
      left: 140px;
      img {
        margin-left: 283px;
      }
      p {
        flex-direction: row-reverse;
        span {
          &:last-child {
            margin-right: 42px;
            text-align: right;
          }
        }
      }
    }
    .right-con {
      align-items: flex-end;
      right: 124px;
      text-align: right;
      img {
        margin-right: 283px;
      }
      p {
        span {
          &:last-child {
            width: 643px;
            margin-left: 30px;
            letter-spacing: -2px;
          }
        }
      }
    }
  }
  .bottom {
    width: 3840px;
    height: 719px;
    background: url(../assets/img/con_bg2.jpg) no-repeat,
      linear-gradient(360deg, rgba(5, 16, 35, 1) 0%, rgba(5, 4, 9, 1) 100%);
    .bottom-title {
      color: #fff;
      font-size: 55px;
      font-weight: bold;
      text-align: center;
      padding: 75px 0 143px;
      line-height: 66px;
    }
    .flex {
      padding: 0 122px 0 140px;
    }
    .bottom-con {
      position: relative;
      div {
        display: flex;
        align-items: center;
        font-size: 45px;
        text-align: right;
        padding-bottom: 45px;
        font-weight: bold;

        & > span:first-child {
          flex: 1;
        }
        & > span:last-child {
          width: 138px;
        }
        p {
          position: relative;
          width: 1157px;
          height: 25px;
          margin: 0 24px 0 29px;
          background: rgba(34, 43, 94, 0.62);
          border-radius: 0px 100px 100px 0px;
          span {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            height: 25px;
            background: #0566ad;
            border-radius: 0px 100px 100px 0px;
          }
        }
      }
      &::before {
        content: "";
        height: 100%;
        width: 5px;
        background: #222b5e;
        position: absolute;
        top: -21px;
        left: 294px;
      }
    }
    .bottom-right {
      &::before {
        left: 384px;
      }
    }
  }
}

.rotate {
  transform-origin: center;
  animation: rotate 6s 0.8s linear infinite;
}
.scale {
  transform-origin: center;
  animation: scale 2s;
}
.start .cube {
  transform-origin: center;
  animation: cube 1.5s;
}
.start .left {
  transform-origin: center;
  animation: moveLeft 0.2s 1.2s;
  animation-fill-mode: forwards;
}
.start .right {
  transform-origin: center;
  animation: moveRight 0.2s 1.2s;
  animation-fill-mode: forwards;
}
.start .con-left {
  opacity: 0;
  transform-origin: center;
  animation: moveTopContent 1.2s;
  animation-fill-mode: forwards;
}
.start .con-left.left2 {
  animation-delay: 0.4s;
}
.start .con-left.left3 {
  animation-delay: .8s;
}
.start .con-left.left4 {
  animation-delay: 1.2s;
}
.start .con-right {
  transform-origin: center;
  animation: moveTopContent 2s;
  animation-fill-mode: forwards;
}
.start .progress {
  transform-origin: left center;
  animation: progress 2s;
  animation-fill-mode: forwards;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    opacity: 1;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.8);
  }
  60% {
    transform: scale(1);
    background-image: url(../assets/img/cube2.jpg);
  }
  100% {
    background-image: url(../assets/img/cube3.jpg);
  }
}
@keyframes cube {
  0% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes moveLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes moveRight {
  0% {
    opacity: 0;
    transform: translateX(100px) rotateY(180deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotateY(180deg);
  }
}
// @keyframes moveBottomContent {
//   0% {
//     opacity: 0;
//     transform: translateY(-300px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
@keyframes moveTopContent {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes progress {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
</style>