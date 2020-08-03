<template>
  <div>
    <div class="json-box">
      <codemirror
        style="height:100%;"
        ref="myEditor"
        :value="editorJson"
      ></codemirror>
    </div>
    <div class="copy-btn-box">
      <el-button
        @click="handleCopyJson"
        type="primary"
        class="copy-btn"
        data-clipboard-action="copy"
        :data-clipboard-text="editorJson"
      >
        复制数据
      </el-button>
      <el-button @click="handleExportJson" type="primary">
        导出代码
      </el-button>
    </div>
  </div>
</template>
<script>
// 剪切板组件
import Clipboard from "clipboard";
import { codemirror } from "vue-codemirror-lite";
export default {
  name: "PreviewCode",
  props: {
    fileFormat: {
      type: String,
      default: "json"
    },
    editorJson: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      visible: false
    };
  },

  components: {
    codemirror
  },
  methods: {
    exportData(data, fileName = `demo.${this.fileFormat}`) {
      let content = "data:text/csv;charset=utf-8,";
      content += data;
      var encodedUri = encodeURI(content);
      var actions = document.createElement("a");
      actions.setAttribute("href", encodedUri);
      actions.setAttribute("download", fileName);
      actions.click();
    },
    handleExportJson() {
      // 导出JSON
      this.exportData(this.editorJson);
    },
    handleCopyJson() {
      // 复制数据
      let clipboard = new Clipboard(".copy-btn");
      clipboard.on("success", () => {
        this.$message.success("复制成功");
      });
      clipboard.on("error", () => {
        this.$message.error("复制失败");
      });
      setTimeout(() => {
        // 销毁实例
        clipboard.destroy();
      }, 122);
    }
  }
};
</script>
