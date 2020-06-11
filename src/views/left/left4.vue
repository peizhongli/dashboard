<template>
    <div class="card">
        <p class="title">机器人TOP50词云</p>
        <wordCloud :data="data"/>
    </div>
</template>
<script>
import wordCloud from '../../components/Echarts/WordCloud'
export default {
    props: {
        data: Array
    },
    components: {
        wordCloud
    }
}
</script>
<style lang="scss" scoped>
.card {
    padding: 40px 48px 47px 50px;
    .title {
        margin-bottom: 50px;
    }
}
</style>