<!--
生成json Modal
-->
<template>
  <el-dialog
    title="模板数据" 
    :visible.sync="visible"
    :append-to-body="true"
    style="top:20px;"
    width="850px"
  >  
     <div class="json-box"> 
      <el-input style="min-height:300px;height: 300px;max-height: 290px;overflow: auto;" autosize  :readonly="!edit" ref="myEditor" type="textarea" v-model="jsonCode"> 
      </el-input> 
    </div>
    <div class="copy-btn-box" v-if="!edit"> 
      <el-button size="mini" @click="handleExportJson" type="primary">
        导出代码
      </el-button>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="handleCancel">关闭</el-button> 
      <el-button v-if="edit" size="mini" type="primary" @click="handleImp">导入</el-button>
    </span>
  </el-dialog>
</template>
<script> 
 
export default {
  name: "ng-form-code",
  data() {
    return {
      visible: false,
      jsonCode: "",
      fileFormat: 'json',
      edit: false // 是否可编辑
    };
  },
  methods: {
    init(model , edit = false){
      this.visible = true 
      this.edit = edit
      this.$nextTick(()=>{
        this.jsonCode = JSON.stringify(model, null, "\t");
      })
       
    },
    handleCancel() {
      this.visible = false;
    },
    handleImp() {
      if(!this.jsonCode) {
        alert('文本不能为空')
        return
      }  
      try {
        const importData = JSON.parse(this.jsonCode)
        
        if(importData && typeof importData == 'object'){
          this.$emit('imp' , importData)
          
          this.handleCancel()
        } else {
          this.$message.error('模板解析异常，请检查文本内容.')
          return
        }
        
      } catch (error) {
        this.$message.error('模板解析异常，请检查文本内容.')
        return
      }
    },
    exportData(data, fileName = `ng-form-template.${this.fileFormat}`) {
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
      this.exportData(this.jsonCode);
    },
  }
};
</script>
