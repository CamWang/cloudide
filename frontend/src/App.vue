<template>
  <n-config-provider :theme="darkTheme">
    <n-notification-provider>
      <Ide></Ide>
    </n-notification-provider>
  </n-config-provider>
</template>

<script>
import 'vfonts/FiraCode.css'
import { darkTheme, NConfigProvider, NNotificationProvider } from 'naive-ui'
import { ref } from 'vue'
import Ide from './view/Ide.vue';

  export default {
    components: {
      NConfigProvider,
      NNotificationProvider,
      Ide
    },
    setup() {
      return {
        darkTheme,
      }
    }
  }
</script>

<style>
html, body {
  overflow: hidden;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;  
}

#app {
  height: 100%;
  box-sizing: border-box;
  font-family: v-mono, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.n-config-provider {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
