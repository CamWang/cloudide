<template>
  <Header v-model:mode="mode"></Header>
  <Main v-model:mode="mode"></Main>
</template>

<script>
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import { useNotification } from 'naive-ui';
import { ref } from 'vue';

  export default {
    components: {
      Header,
      Main
    },
    setup() {
      let mode = ref("text/x-csrc");
      const notification = useNotification();
      try {
        window.socket = io();
        socket.on("connect", () => {
          console.log(socket.id);
          socket.on("judge compile", msg => {
            let result = JSON.parse(msg);
            if (result && result.success) {
              notification['success']({
                title: result.title,
                duration: 5000
              })
            }
          });
        });
      } catch(err) {
        notification['error']({
          title: "Socket.io Error",
          content: "Counldn't put up a connection to the WebSocket server.",
          duration: 5000
        });
      }
      return {
        mode
      }
    }
  }
</script>

<style>

</style>
