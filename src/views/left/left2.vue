<template>
    <div class="card">
        <p class="title">机器人渠道占比及质量数据</p>
        <pieChart />
        <section class="flex">
            <div v-for="(i,index) in data.platform" :key="index">
                <p class="name">{{i.title}}</p>
                <div class="corner platform-wrap">
                    <p>
                        <span class="name">解决率: </span>
                        <span class="count">{{i.solved}}%</span>
                    </p>
                    <p>
                        <span class="name">满意度: </span>
                        <span class="count">{{i.satisfaction}}%</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import pieChart from '../../components/Echarts/PieChart'
export default {
    props: {
        data: Object
    },
    components: {
        pieChart
    }
}
</script>
<style lang="scss" scoped>
$text-blue: #00ECFF;
    .card {
        padding: 26px 50px 40px;
        text-align: center;
        color: $text-blue;
        .name {
            font-size: 24px;
            line-height: 1;
            margin: 10px 0 15px;
        }
        .platform-wrap {
            width: 180px;
            height: 99px;
            box-sizing: border-box;
            padding-top: 20px;
            background-size: 2px 16px, 16px 2px; // 指定边框像素
            font-size: 18px;
            line-height: 1;
            p {
                padding-bottom: 15px;
                line-height: 1;
            }
            .name {
                color: #fff;
            }
            .count {
            }
        }
        
    }
    
</style>