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
     <div class="json-box"> 
      <el-input style="min-height:300px;height: 300px;max-height: 290px;overflow: auto;" autosize  readonly ref="myEditor" type="textarea" :value="editorJson"> 
      </el-input> 
    </div>
    <div class="copy-btn-box"> 
      <el-button size="mini" @click="handleExportJson" type="primary">
        导出代码
      </el-button>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取 消</el-button>
      <el-button size="mini" type="primary" @click="visible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script> 
 
export default {
  name: "ng-preview-code",
  data() {
    return {
      visible: false,
      editorJson: "",
      fileFormat: 'json',
      jsonData: {}
    };
  },
  
  components: {
     
  },
  methods: {
    init(model){
      this.visible = true 
      this.$nextTick(()=>{
        this.editorJson = JSON.stringify(model, null, "\t");
      })
       
    },
    handleCancel() {
      this.visible = false;
    },
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
  }
};
</script>
