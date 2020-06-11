<template>
  <div id="app">
    <main-page />
  </div>
</template>

<script>
import mainPage from './views/mainPage'

export default {
  name: 'App',
  components: {
    mainPage
  },
  mounted() {
    // let width = document.body.clientWidth
  }
}
</script>
<style lang="scss">
body {
  width: 3840px;
  height: 2160px;
  background-color: #0D0C2A;
  transform-origin: top left;
}

@media only screen and (max-width: 1920px) {
    body {
      transform: scale(0.5);
    }
}
</style>
