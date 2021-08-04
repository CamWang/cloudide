<template>
  <div class="main">
    <textarea ref="ide" class="ide" v-model="code"></textarea>
  </div>
</template>

<script>
  import { ref, toRefs, onMounted, watch } from 'vue'
  import "codemirror-minified/theme/material-darker.css"
  import "codemirror-minified/lib/codemirror.css";
  import "codemirror-minified/addon/hint/show-hint.css";

  import CodeMirror from "codemirror-minified/lib/codemirror";
  import "codemirror-minified/addon/edit/matchbrackets";
  import "codemirror-minified/addon/selection/active-line";
  import "codemirror-minified/addon/hint/show-hint";
  // import "codemirror-minified/addon/hint/javascript-hint";
  // import "codemirror-minified/mode/javascript/javascript";
  import "codemirror-minified/mode/clike/clike";

  export default {
    props: {
      mode: {
        type: String,
        required: true,
        default: "text/x-csr"
      }
    },
    components: {
      
    },
    setup(props) {
      let code = ref("");
      let { mode } = toRefs(props);
      const ide = ref(null);
      let editor;

      let initEditor = function () {
        if (editor) {
          editor.toTextArea();
        }
        editor = CodeMirror.fromTextArea(ide.value, {
          theme: 'material-darker',
          mode: mode.value,
          lineNumbers: true,
          matchBrackets: true,
          hintOptions: {
            completeSingle: false
          }
      });
      editor.on("inputRead", () => {
        editor.showHint();
      });
      }
      onMounted(initEditor);
      watch(mode, initEditor);
      return {
        code,
        ide,
        editor
      }
    }
  }
</script>

<style scoped>
.main {
  height: calc(100% - 3rem);
  width: 100%;
  background: #888;
  overflow-x: hidden;
}

.ide {
  height: 100%;
  font-size: 11pt;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
</style>
<style>
.CodeMirror {
  height: 100%;
}
</style>
