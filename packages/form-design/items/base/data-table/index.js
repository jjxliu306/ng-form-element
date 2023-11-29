// 对外输出 包含组件的对外json定义、属性配置页面、展示页面 三部分
import { t, $t } from '../../../../locale/index.js'

import BaseIndex from './index.vue'
import BaseProperties from './properties.vue'
 
//const icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQzIDM4SDVWMTdhMSAxIDAgMCAxIDEtMWgzNmExIDEgMCAwIDEgMSAxdjIxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01IDM1aDM4djFhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJ2LTFaIiBmaWxsPSIjREVERURFIi8+PHBhdGggZD0iTTEyIDM4VjExTTI4IDM4VjExTTUgMjJoMzhNNSAyOWgzOE0yMCAzOFYxMU0zNiAzOFYxMSIgc3Ryb2tlPSIjREVERURFIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxwYXRoIGQ9Ik00MyAxNkg1di01YTEgMSAwIDAgMSAxLTFoMzZhMSAxIDAgMCAxIDEgMXY1WiIgZmlsbD0iI0RFREVERSIvPjxyZWN0IHg9IjQuOCIgeT0iMTAuOCIgd2lkdGg9IjM4LjQiIGhlaWdodD0iMjcuNCIgcng9IjIuMiIgc3Ryb2tlPSIjNzU3NTc1IiBzdHJva2Utd2lkdGg9IjEuNiIvPjwvc3ZnPgo='



const obj = {}
 
obj.type = 'dataTable'//, // 表单类型  
obj.component = BaseIndex 
obj.properties = BaseProperties
// 序号 实际在json中删除
obj.seq = 7

// 补充配置样式
obj.options = {
  config: {
    size: 'mini',
    labelWidth: 80
  },
  columns: [
    {
      label: $t('ngform.item.label'),
      prop: 'label',
      default: $t('ngform.item.dataTable.name'),//'多选框',
      span: 24
    },
    {
      label: $t('ngform.item.label_width'),
      prop: 'labelWidth',
      type: 'number', 
      show: false,
      default: 0,
      span: 24
    },
    {
      label: $t('ngform.item.width'),
      prop: 'width',
      default: '100%',
      span: 24
    },
    {
      label: $t('ngform.item.span'),//'所占栅格',
      type: 'spanGroup',
      prop: 'span',
      min: 1,
      max: 24,
      default: 24,
      span: 24
    },
    {
      label: $t('ngform.item.model'), //'数据字段',
      prop: 'model',
      show: false,
      span: 24
    },
    {
      label: $t('ngform.item.key'), //'数据KEY',
      prop: 'key',
      show: false,
      span: 24
    } 
  ],
  group: [
    {
      label: $t('ngform.item.options'),//'属性',
      prop: 'options',
      alone: true, // 是否独立与columns之外展示 false则和columns一起，不另外显示
      collapse: false, // 是否启用 collapse 必须alone=true
      column: [


    //    border: false, // 边框
    // stripe: false , //斑马线
    // showIndex: false, // 显示下标
    // dbType: 1 , // 1-静态 2-api
    // datasourceStatic: [] ,// 静态数据
    // methodType: 'get', // API模式下请求方法类型 get post
    // apiPath: '' , // API模式下请求地址
    // queryData: [] , // API请求下要携带的数据
    // apiDataScript: '' , // 请求到的数据转列表数组方法 自定义脚本
    // columns: [] ,// 字段配置 格式: {field: '' , label: '' , width: '10%' , align: 'center'}
    // page: false , // 是否分页 在分页模式下需要配置每页数据量 和当前页字段key和每页数据量字段key
    // currentPageKey: 'pageIndex', // 当前页key
    // pageSizeKey: 'pageSize' ,// 也没数据量KEY
    // pageSize: 10 // 每页数据量

        {
          label: $t('ngform.item.dataTable.db_type'),// 1-静态 2-api
          prop: 'dbType',
          default: '1',
          type: 'select',
          dicData: [
            { label: $t('ngform.item.dataTable.static'), value: '1' },
            { label: $t('ngform.item.dataTable.api'), value: '2' } 
          ],
          span: 24
        },
        {
          label: $t('ngform.item.dataTable.static_data'),// 静态数据
          prop: 'datasourceStatic',
          default: [],
          type: 'button',
          label: '配置',
          buttonType: 'primary' ,
          event: 'dataTableStaticData',
          // show: false,
          span: 24
        },
        {
          label: $t('ngform.item.dataTable.method_type'),// 
          prop: 'methodType',
          type: 'radio',
          default: 'get',
          dicData: [
            { label: 'GET', value: 'get' },
            { label: 'POST', value: 'post' } 
          ],
          show: '$.options.dbType == 2',
          span: 24
        },
         { 
          label: $t('ngform.item.dataTable.query_data'),// 查询条件
          prop: 'queryData',
          default: [],
          type: 'kv',
           show: '$.options.dbType == 2',
          span: 24
        }, 
        {
          label: $t('ngform.item.dataTable.api_path'),// 
          prop: 'apiPath',
          type: 'textarea',
          show: '$.options.dbType == 2',
          span: 24
        }, 
       
        { 
          prop: 'columns',
          default: [],
          show: false,
          span: 24
        }, 
        {
          label: $t('ngform.item.dataTable.api_data_script'),//'默认值',
          prop: 'apiDataScript', 
          type: 'textarea',
          show: '$.options.dbType == 2',
          span: 24
        }, 
        

        {
          label: $t('ngform.item.dataTable.page'),// 
          prop: 'page',
          type: 'switch',
          default: true,
          span: 24
        },
        {
          label: $t('ngform.item.dataTable.page_index_key'),// 
          prop: 'currentPageKey', 
          default: 'pageIndex',
          show: '$.options.page && $.options.dbType == 2',
          span: 24
        },
         {
          label: $t('ngform.item.dataTable.page_size_key'),// 
          prop: 'pageSizeKey', 
          default: 'pageSize',
          show: '$.options.page && $.options.dbType == 2',
          span: 24
        },
        {
          label: $t('ngform.item.dataTable.page_size'),// 
          prop: 'pageSize', 
          default: 10,
          type: 'number',
          show: '$.options.page',
          span: 24
        },
        {
          label: $t('ngform.item.bordered'),// 
          prop: 'border',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.dataTable.stripe'),// 
          prop: 'stripe',
          type: 'switch',
          default: false,
          span: 24
        },
        {
          label: $t('ngform.item.dataTable.show_index'),// 
          prop: 'showIndex',
          type: 'switch',
          default: false,
          span: 24
        },  
       // border: false, // 边框
    // stripe: false , //斑马线
    // showIndex: false, // 显示下标
        {
          label: $t('ngform.item.if_hidden'),//'是否隐藏',
          prop: 'hidden',
          type: 'switch',
          default: false,
          span: 24
        } 

      ]
    }
  ]
}

export default obj


 
