<template>
    <div class="card">
        <p class="title">机器人业务量统计</p>
        <barChart />
    </div>
</template>
<script>
import barChart from '../../components/Echarts/BarChart'
export default {
    props: {
        data: Object
    },
    components: {
        barChart
    }
}
</script>
<style lang="scss" scoped>
.card {
    padding: 30px 0 0;
}
</style>