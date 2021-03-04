<template>
  <!-- 表单验证的示例 -->
  <div id="app"> 
    <el-collapse v-model="activeNames" >
      <el-collapse-item v-for="(item ,index) in formTemplate" :title="'表单' + index" :key="index" :name="index + ''">
        <VueDragFormBuild ref="formbuild" :formTemplate="item" :models="models" />
      </el-collapse-item>
       
    </el-collapse> 
    <el-button   type="primary" size="medium"  @click="validator()">验证</el-button> 
  </div>
</template>

<script>
   
export default {
  name: 'App',
  data(){
    return {
      activeNames: ['0' , '1'],
      models: {} ,
      formTemplate: [ {
  "list": [
    {
      "type": "textarea",
      "label": "地址",
      "index": "B",
      "options": {
        "width": "100%",
        "maxLength": 0,
        "defaultValue": "",
        "rows": 4,
        "clearable": false,
        "tooptip": "",
        "hidden": false,
        "disabled": false,
        "placeholder": "请输入",
        "dynamicHide": false,
        "dynamicHideValue": ""
      },
      "model": "address",
      "key": "textarea_1614755144853",
      "rules": [
        {
          "required": true,
          "message": "必填项",
          "trigger": [
            "change",
            "blur"
          ]
        }
      ]
    }
  ],
  "config": {
    "labelPosition": "left",
    "labelWidth": 100,
    "size": "mini",
    "hideRequiredMark": false,
    "customStyle": ""
  }
}, {
  "list": [
    {
      "type": "input",
      "label": "名称",
      "index": "A",
      "options": {
        "type": "text",
        "width": "100%",
        "defaultValue": "",
        "placeholder": "请输入",
        "clearable": false,
        "maxLength": 0,
        "prepend": "",
        "append": "",
        "tooptip": "",
        "hidden": false,
        "disabled": false,
        "dynamicHide": false,
        "dynamicHideValue": ""
      },
      "model": "name",
      "key": "input_1614755073311",
      "rules": [
        {
          "required": true,
          "message": "必填项",
          "trigger": [
            "change",
            "blur"
          ]
        }
      ]
    },
    {
      "type": "number",
      "label": "年龄",
      "index": "C",
      "options": {
        "width": "100%",
        "defaultValue": 0,
        "min": 0,
        "max": 100,
        "precision": 0,
        "tooptip": "",
        "prepend": "",
        "append": "",
        "step": 1,
        "hidden": false,
        "disabled": false,
        "placeholder": "请输入",
        "dynamicHide": false,
        "dynamicHideValue": ""
      },
      "model": "age",
      "key": "number_1614755085903",
      "rules": [
        {
          "required": true,
          "message": "必填项",
          "trigger": [
            "change",
            "blur"
          ]
        }
      ]
    }
  ],
  "config": {
    "labelPosition": "left",
    "labelWidth": 100,
    "size": "mini",
    "hideRequiredMark": false,
    "customStyle": ""
  }
} ]
    }
  } ,

  created() {
     
  },
  methods: {
   
    validator() {
       
      const formbuilds = this.$refs.formbuild
      
      let validators = []

      for(let i in formbuilds) {
        validators.push(formbuilds[i].validator())
      }
      
      Promise.all(validators).then( (res) =>{ 
        for(let i in res) {
          if(!res[i]) {
           this.$message.error('验证不通过')
            return
          }
        }
        
      })
 
    }
  }
}
</script>
 