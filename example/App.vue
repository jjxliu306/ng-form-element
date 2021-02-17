<template>
  <div id="app">

    <el-tabs v-model="activeName" style="padding: 20px;">
        <el-tab-pane label="表单绘制" name="first">
            <VueDragFormdesign ref="formDesign">
                <template slot="controlButton" >
                    <el-button   type="text" size="medium"  @click="initDemo(1)">示例1</el-button>
                    <el-button   type="text" size="medium"  @click="initDemo(2)">示例2</el-button>
                    <el-button   type="text" size="medium"  @click="initDemo(3)">示例3</el-button>
                </template>
                <template  slot="formName">
                    <span> vue-drag-formdesign 示例 </span>
                </template>
            </VueDragFormdesign> 
        </el-tab-pane>
        <el-tab-pane label="表单查看" name="second">
            <el-alert
            title="测试表单预览"
            type="warning">
          </el-alert>
            <VueDragFormBuild  :formTemplate="formTemplate" :models="models"/>
        </el-tab-pane> 
      </el-tabs>

  
  </div>
</template>

<script>
   
export default {
  name: 'App',
  data(){
    return {
      activeName: 'first',
      models: {} ,
      formTemplate: {}
    }
  } ,

  created() {
    this.formTemplate = require('./data/basic.json')
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
        }

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
