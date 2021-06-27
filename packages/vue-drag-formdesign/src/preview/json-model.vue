<!--
生成json Modal
-->
<template>
  <el-dialog
    title="JSON数据" 
    :visible.sync="visible"
    :append-to-body="true"
    style="top:20px;"
    width="850px"
  >
    <previewCode :editorJson="editorJson" />
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取 消</el-button>
      <el-button size="mini" type="primary" @click="visible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script> 
import previewCode from "./preview-code";
export default {
  name: "JsonModal",
  data() {
    return {
      visible: false,
      editorJson: "",
      jsonData: {}
    };
  },
  watch: {
    visible(val) {
      if (val) { 
        this.editorJson = JSON.stringify(this.jsonData, null, "\t");
      }
    }
  },
  components: {
    previewCode
  },
  methods: {
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
