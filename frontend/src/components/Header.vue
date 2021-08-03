<template>
  <div class="header">
    <div class="title">
      <code>
        Cloud IDE
      </code>
    </div>
    <div class="select">
      <n-dropdown trigger="hover" @select="handleSelect" :options="options">
        <n-button>{{ language.label }}</n-button>
      </n-dropdown>
    </div>
  </div>
</template>

<script>
import { NDropdown, NButton } from 'naive-ui'
import { ref } from 'vue'

  export default {
    components: {
      NDropdown,
      NButton
    },
    setup() {
      let language = ref({label: 'C', key: 'c'});
      let options = ref([
          {
            label: 'C',
            key: 'c',
          },
          {
            label: 'C++',
            key: "cpp"
          },
          {
            label: 'Java',
            key: 'java'
          },
          {
            label: 'JavaScript',
            key: 'js'
          }
        ])
      return {
        options,
        language,
        handleSelect (key) {
          language.value = options.value.find(element => element.key === key);
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
</style>
