<template>
  <div id="app">

       <ng-form-design ref="formDesign" :config="formConfig" />
  
  </div>
</template>

<script> 
export default {
  name: 'App',
   
  data(){
    return {
      formConfig: {
        httpConfig: (config)=>{
          config.headers['aaaa'] = 'bbbb'
          return config 
        },
        // 新增数据字典配置
        dict: [
          {type: 'sex' , label: '男' , value: '1'},
          {type: 'sex' , label: '女' , value: '2'},
          {type: 'yes_or_no' , label: '是' , value: '1'},
          {type: 'yes_or_no' , label: '否' , value: '2'},
          {type: 'nation' , label: '汉族' , value: '1'},
          {type: 'nation' , label: '蒙古族' , value: '2'},
          {type: 'nation' , label: '藏族' , value: '3'},
          {type: 'nation' , label: '壮族' , value: '4'}
        ]
      },
    }
  } ,

  created() {
   // this.formTemplate = require('./data/basic.json')
  },
  methods: {
     
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
