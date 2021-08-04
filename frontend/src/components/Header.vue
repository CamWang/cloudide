<template>
  <div class="header">
    <div class="title">
      <code>
        Cloud IDE
      </code>
    </div>
    <div class="select">
      <n-dropdown trigger="hover" @select="handleSelect" :options="options">
        <n-button class="lang-button">{{ language.label }}</n-button>
      </n-dropdown>
      <n-button @click="submit" class="run-button" type="primary">RUN</n-button>
    </div>
  </div>
</template>

<script>
import { NDropdown, NButton } from 'naive-ui'
import { ref } from 'vue'
import { Submit } from '../api/ide';

  export default {
    props: {
      mode: {
        type: String,
        required: true,
        default: "text/x-csrc"
      }
    },
    components: {
      NDropdown,
      NButton
    },
    setup(props, { emit }) {
      let language = ref({label: 'C', key: 'c', mode: 'text/x-csrc'});
      let options = ref([
          {
            label: 'C',
            key: 'c',
            mode: 'text/x-csrc'
          },
          {
            label: 'C++',
            key: 'cpp',
            mode: 'text/x-c++src'
          },
          // {
          //   label: 'Java',
          //   key: 'java',
          //   mode: 'text/x-java'
          // },
          // {
          //   label: 'JavaScript',
          //   key: 'js',
          //   mode: 'text/javascript'
          // }
        ]);
      
      return {
        options,
        language,
        handleSelect (key) {
          language.value = options.value.find(element => element.key === key);
          emit('update:mode', language.value.mode);
        },
        submit() {
          Submit({
            uid: window.socket.id
          })
        }
      }
    }
  }
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 1rem;
}

.header {
  height: 3rem;
  width: 100%;
  background: #333;
  display: flex;
  align-items: center;
}

.select {
  margin-left: auto;
  margin-right: 1.5rem;
}

.lang-button {
  padding: 0 1rem;
}

.run-button {
  padding: 0 1rem;
  margin-left: 1rem;
}
</style>
