<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // mainPage1,
    // mainPage2
  },
  mounted() {
    console.log(this.$route.path);
    // this.$socket.emit('onmessage',1);
    // this.$socket.emit("connect", 1);
    document.onkeydown = event => {
      let path = this.$route.path == "/" ? "page2" : "/";
      if (event && event.keyCode == 13) {
        //回车键的键值为13

        this.$router.push({
          path
        });
      }
    };
    
    // let width = document.body.clientWidth
  }
  // sockets: {
  //   //在此接收又服务器发送过来的数据 ps：注意此处的方法名要与服务器的发送的事件保持一致才能接收到
  //   connect: function(data) {
  //     console.log("连接成功",data);
  //   },
  //   onmessage: function(value) {
  //     console.log(value); //监听login(后端向前端emit login的回调)
  //   }
  // }
};
</script>
<style lang="scss">
body {
  width: 3840px;
  height: 2160px;
  background-color: #0d0c2a;
  transform-origin: top left;
}

@media only screen and (max-width: 1920px) {
  body {
    transform: scale(0.5);
  }
}
</style>
