<template>
  <div id="app">

    <el-tabs v-model="activeName" style="padding: 20px;" @tab-click="changeTab">
        <el-tab-pane label="表单绘制" name="first">
            <form-design ref="formDesign" :custom-components="customComponents" :config="formConfig">
                <template slot="controlButton" >
                    <el-button   type="text" size="medium"  @click="initDemo(1)">示例1</el-button>
                    <el-button   type="text" size="medium"  @click="initDemo(2)">示例2</el-button>
                    <el-button   type="text" size="medium"  @click="initDemo(3)">示例3</el-button>
                </template>
                <!-- 自定义属性配置 -->
                <template slot="custom-properties" slot-scope="{selectItem}"> 
                     <Properties :selectItem="selectItem"/>
                </template> 
                <template  slot="formName">
                    <span> form-design 示例 </span>
                </template>
                <template slot="extend-tab" slot-scope="{data }"> 
                  <el-tab-pane label="扩展属性" name="select"> 
                    扩展测试插槽-加tab::  (组件数量):: {{data.list.length}}
                  </el-tab-pane>  
                </template> 
                <template slot="form-extend-properties" slot-scope="{ data}">  
                    扩展测试插槽(组件数量):: {{data.list.length}}
                </template> 

            </form-design> 
        </el-tab-pane>
        <el-tab-pane label="表单查看" name="second">
            <el-alert
            title="测试表单预览"
            type="warning">
          </el-alert>
            <form-build ref="formbuild" :formTemplate="formTemplate" :models="models" :custom-components="customComponents" :config="formConfig"/>

             <el-button   type="primary" size="mini"  @click="validator()">验证</el-button>
             <el-button   type="primary" size="mini"  @click="getData()">获取数据</el-button>
        </el-tab-pane> 
      </el-tabs>

  
  </div>
</template>

<script>
import CustomT from './components/TCustom'
import Properties from './components/properties'
export default {
  name: 'App',
  components: {CustomT , Properties},
  data(){
    return {
      activeName: 'first',
      models: {} ,
      formTemplate: {} ,
      formConfig: {
        httpConfig: (config)=>{
          config.headers['aaaa'] = 'bbbb'
          return config 
        }
      },
      customComponents: [
        { 
          type: 'customT' ,
          label: "自定义图片展示", // 标题文字 
          component: CustomT ,
          options: {
            style: 'width:100px;height:100px'
          },
          model: "DDD",
          key: "DDD",
          rules: [
            {
              required: false,
              message: "必填项"
            }
          ]
        },
      ]
    }
  } ,

  created() {
   // this.formTemplate = require('./data/basic.json')
  },
  methods: {
    initDemo(index){
        let json = null 
        if(index == 1) {
            json = require('./data/basic.json')
        } else if(index == 2) {
            json = require('./data/tablebatch.json')
        } if(index == 3) {
            json = require('./data/validator1.json')
        } 

        if(json) {
            this.$refs.formDesign.initModel(json)

            this.formTemplate = json
        }

    },
    validator() {
      this.$refs.formbuild.validator().then((valid)=>{
        if(valid){
          this.$message.info('验证通过')
        } else {
          this.$message.error('验证不通过')
        }
      })
    },
    changeTab(v) {
      if(v && v.name == 'second') {
       
        this.formTemplate =  this.$refs.formDesign.getModel()
        const list = this.formTemplate.list 
        if(list) {
          const templateModels = list.map(t=>t.model)
          for(let i in this.models) {
            if(!templateModels.includes(i)) {
              delete this.models[i]
            }
          }
         // 2021-04-06 顺带重置models 将
        }
        //this.models = {}
      } 
    },
    getData() {
      this.$refs.formbuild.getData().then((data)=>{
        console.log('data' , data)
      })
    }
  }
}
</script>

<style>
#app {
    height: 100%;
    width: 100%;
    position: absolute;
}



body{
    height: 100%;
    width: 100%;
    overflow: auto;
    /* position: relative; */
    position: absolute;
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-variant: tabular-nums;
    line-height: 1.5;
    background-color: #fff;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
 
}
</style>
