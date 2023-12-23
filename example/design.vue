<template>
  <div id="app">
  <ng-form-design ref="formDesign"  :config="formConfig">
     
    <template slot="controlButton" >
     <el-popover
        placement="bottom-start"
        :title="t('ngform.example')"
        width="240"
        trigger="hover" >
        <div>
          <el-row :gutter="20">
            <el-col :span="11" v-for="item in  examples" :key="item.name" class="example-col">
              <span class="example-span" @click="initDemo(item)">{{item.name}}</span>
            </el-col>

          </el-row>

        </div> 
         <el-button style="margin: 0px 10px;" icon="el-icon-document" slot="reference" type="text" size="medium" >{{t('ngform.example')}}</el-button>
      </el-popover>
      <el-select v-model="i18n" style="width: 100px;" placeholder="语言" size="mini">
        <el-option
          v-for="item in i18nList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>
    

  </ng-form-design> 
  
  <!--
    只想显示部分组件，可参考
  -->
 <!-- 
   <ng-form-design ref="formDesign" :config="formConfig" :decorate-item="false" :layout-item="['table','grid']" :basic-item="['input' , 'textarea']"   :application-item="true"/>   -->
 
  </div>
</template>

<script> 
import Vue from 'vue'
//import NgComponents from './components/index.js'
import deepmerge from 'deepmerge';

import zh from '../packages/locale/lang/zh_CN'
import en from '../packages/locale/lang/en'

import ngEn from './locale/en.js'
import ngZh from './locale/zh_CN.js'

import { LocalMixin } from '../packages/index.js'
export default {
  mixins: [LocalMixin],
  name: 'App', 
  data(){
    return {
      i18n: 'zh_CN',
      i18nList: [
        {label: '中文简体' , value: 'zh_CN'},
        {label: 'English' , value: 'en'}
      ],
      examples: [
        {name:'基础示例' , path: 'basic.json'},
        {name:'select远程联动' , path: 'select远程联动.json'},
        {name:'动态表格' , path: 'tablebatch.json'},
        {name:'效验' , path: 'validator1.json'},
        {name:'组件联动' , path: '组件联动.json'},
        {name:'焦点事件' , path: '组件获取焦点事件.json'},
      ],
      // 自定义组件列表
      //custemComponents: NgComponents ,
      formConfig: {
        httpConfig: (config)=>{ 
          config.headers['aaaa'] = 'bbbb'
          return config 
        },
        // 新增数据字典配置
        dict: [
         
        ]
      },
    }
  } ,
  watch: {
    i18n(val) {
      //console.log("i18n" , val)
      //console.log('this.$locale' , this.$locale)
      //this.$locale.use(val)

      let merge = {} 

      if(val == 'zh_CN') {
        const deep =  
        merge = deepmerge(zh, ngZh, { clone: true }) //Object.assign({},  zh , ngZh);
      } else {
         merge = deepmerge(en, ngEn, { clone: true }) //Object.assign({}, en , ngEn);
      }

  
      //import locale from '../packages/locale/index'
      // 注册组件库
      //Vue.use(FormDesign , {locale: mergeZh})

      this.$refs.formDesign.useLocale(merge)
    }
  },
  created() {
   // this.formTemplate = require('./data/basic.json')

   this.$nextTick(()=> {
    const dicts = [
      {type: 'sex' , label: '男' , value: '1'},
          {type: 'sex' , label: '女' , value: '2'},
          {type: 'yes_or_no' , label: '是' , value: '1'},
          {type: 'yes_or_no' , label: '否' , value: '2'},
          {type: 'nation' , label: '汉族' , value: '1'},
          {type: 'nation' , label: '蒙古族' , value: '2'},
          {type: 'nation' , label: '藏族' , value: '3'},
          {type: 'nation' , label: '壮族' , value: '4'}
      ]

      this.formConfig.dict = dicts
   })

    this.$ngform_bus.$on('form-event', (data)=>{ 
       console.log('form-event data' , data )
    }) 
  },
  methods: {
    initDemo(row) {
      const path =  row.path  

      const files = require.context('./data', true, /\.json$/)
 
      let formTemplate = undefined
      files.keys().forEach((key) => { 
        if(key.indexOf(path) >= 0) { 
          formTemplate = files(key);
          return
        }
        
      }) 
      if(formTemplate)
        this.$refs.formDesign.initModel(formTemplate)
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

.example-col {
  font-size: 12px;
  display: block;
  line-height: 26px;
  position: relative;
  float: left;
  left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px;
  color: #333;
  border: 1px solid #F4F6FC;
  text-align: center;
}

.example-col .example-span {
  cursor: pointer;
  background: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  height: 45px;
  position: relative;
  width: 100%;
  transition: 0.15s ease-in-out;
  transition-property: transform;
  will-change: transform;
}

</style>
<!-- 
<style lang="scss">
.example-col {
    font-size: 12px;
    display: block;
   
    line-height: 26px;
    position: relative;
    float: left;
    left: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 2px;
    color: #333;
    border: 1px solid #F4F6FC;
    text-align: center;


  .example-span {
    cursor: pointer;
    background: #f9f9f9;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    height: 45px;
    position: relative;
    width: 100%;
    transition: 0.15s ease-in-out;
    transition-property: transform;
    will-change: transform;
  }
}
</style> -->