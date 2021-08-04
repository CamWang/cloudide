<template>
  <n-config-provider :theme="darkTheme">
    <Header v-model:mode="mode"></Header>
    <Main v-model:mode="mode"></Main>
  </n-config-provider>
</template>

<script>
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import { darkTheme, NConfigProvider } from 'naive-ui'
import { ref } from 'vue'

  export default {
    components: {
      NConfigProvider,
      Header,
      Main
    },
    setup() {
      let mode = ref("text/x-csrc");
      return {
        darkTheme,
        mode
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
  font-family: v-sans, v-mono, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.n-config-provider {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
