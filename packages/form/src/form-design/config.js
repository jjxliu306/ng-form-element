
import {http_get_file_list_url,http_upload_file_url} from '../utils'

/**
* 不需要回填属性 model的组件 
*/
export const noModelList = [
  "button",
            "divider",
            "card",
            'control',
            "grid",
            "table",
            "alert",
            "text",
            "html"
]
 
/*
 * author lyf
 * date 2020-07-06
 * description 表单控件配置
 */
// 基础控件
export const basicsList = [
  {
    type: "input", // 表单类型
    label: "输入框", // 标题文字  
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      prepend: '', // 前缀
      append: '', // 后缀
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据字段
    key: "",
    rules: [
      //验证规则
      {
        required: false, // 必须填写
        message: "必填项",
        trigger: ['blur']
      }
    ]
  },
  {
    type: "textarea", // 表单类型
    label: "文本框", // 标题文字  
    options: {
      width: "100%", // 宽度 
      maxLength: null,
      defaultValue: "",
      rows: 4,
      clearable: false,
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      placeholder: "请输入"
    },
    model: "", // 数据字段
    key: "",
    rules: [
      {
        required: false,
        message: "必填项",
        trigger: ['blur']
      }
    ]
  },
  {
    type: "number", // 表单类型
    label: "数字输入框", // 标题文字  
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值
      min: 0, // 可输入最小值
      max: 100, // 可输入最大值
      precision: null,
      tooptip: '', // 提示
      prepend: '', // 前缀
      append: '', // 后缀
      step: 1, // 步长，点击加减按钮时候，加减多少
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false, //是否禁用
      placeholder: "请输入"
    },
    model: "", // 数据字段
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "select", // 表单类型
    label: "下拉选择器", // 标题文字  
    options: {
      width: "100%", // 宽度
      defaultValue: undefined, // 下拉选框请使用undefined为默认值
      multiple: false, // 是否允许多选
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      hidden: false, // 是否隐藏，false显示，true隐藏
      placeholder: "请选择", // 默认提示文字
      valueKey: 'value',
      tooptip: '', // 提示
      dynamic: 0, // 数据获取方式
      remoteFunc: '',//远程获取数据链接
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      linkage: false,
      options: [
        // 下拉选择项配置
        {
          value: "1",
          label: "下拉框1"
        }
      ],
      showSearch: false // 是否显示搜索框，搜索选择的项的值，而不是文字
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "checkbox",
    label: "多选框",  
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: [], 
      dynamic: 0,
      tooptip: '', // 提示
      remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      linkage: false,
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "radio", // 表单类型
    label: "单选框", // 标题文字  
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: "", // 默认值 
      dynamic: 0,
      tooptip: '', // 提示
      remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      linkage: false,
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "date", // 表单类型
    label: "日期选择框", // 标题文字  
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      rangeDefaultValue: [], // 默认值，字符串 12:00:00
      range: false, // 范围日期选择，为true则会显示两个时间选择框（同时defaultValue和placeholder要改成数组），
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      tooptip: '', // 提示
      rangeStartPlaceholder: "开始时间",
      rangeEndPlaceholder: "结束时间",
      format: "yyyy-MM-dd" // 展示格式  （请按照这个规则写 YYYY-MM-DD HH:mm:ss，区分大小写）
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "time", // 表单类型
    label: "时间选择框", // 标题文字  
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      disabled: false, // 是否禁用
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      format: "HH:mm:ss" // 展示格式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "datePicker", // 表单类型
    label: "日期时间选择框", // 标题文字  
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      rangeDefaultValue: [], // 默认值，字符串 12:00:00
      range: false, // 范围日期选择，为true则会显示两个时间选择框（同时defaultValue和placeholder要改成数组），
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      tooptip: '', // 提示
      rangeStartPlaceholder: "开始时间",
      rangeEndPlaceholder: "结束时间",
      format: "yyyy-MM-dd HH:mm:ss" // 展示格式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  }, 
  {
    type: "rate", // 表单类型
    label: "评分", // 标题文字  
    options: {
      defaultValue: 0,
      max: 5, // 最大值
      tooptip: '', // 提示
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      allowHalf: false // 是否允许半选
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "alert", // 提示
    label: "提示", // 标题 
    options: { 
      tooptip: '',  // 提示 
      title: '' ,  //title
      type: 'info', //类型
      description: '',
      closable: true , // 是否可关闭
      center: true , // 是否居中
      showIcon: false, //  是否西安市图标
      effect: 'light' , // 主题 light/dark
      closeText: '' , //关闭按钮自定义文本 
    }, 
    key: "" 
  },
  {
    type: "slider", // 表单类型
    label: "滑动输入条", // 标题文字  
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值， 如果range为true的时候，则需要改成数组,如：[12,15]
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      min: 0, // 最小值
      tooptip: '', // 提示
      max: 100, // 最大值
      step: 1, // 步长，取值必须大于 0，并且可被 (max - min) 整除
      showInput: false, // 是否显示输入框，range为true时，请勿开启
      marks: [] , //标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式
      // range: false // 双滑块模式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
 /* {
    type: "uploadFile", // 表单类型
    label: "上传文件", // 标题文字  
    options: {
      defaultValue: "[]",
      multiple: false,
      disabled: false,
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏 
      width: "100%",
      limit: 3, 
      headers: {},
      action: http_upload_file_url,
      placeholder: "上传"
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "uploadImg",
    label: "上传图片",  
    options: {
      defaultValue: "[]",
      multiple: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      width: "100%", 
      tooptip: '', // 提示
      limit: 3,
      placeholder: "上传", 
      headers: {},
      action: http_upload_file_url,
      listType: "picture-card"
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  }, */
  {
    type: "cascader", // 表单类型
    label: "级联选择器", // 标题文字  
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: undefined, // 默认值
      showSearch: false, // 是否显示搜索框，搜索选择的项的值，而不是文字
      placeholder: "请选择",
      multiple: false,
      clearable: false, // 是否显示清除按钮 
      dynamic: 0,
      tooptip: '', // 提示
      remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      options: [
        {
          value: "1",
          label: "选项1",
          children: [
            {
              value: "11",
              label: "选项11"
            }
          ]
        },
        {
          value: "2",
          label: "选项2",
          children: [
            {
              value: "22",
              label: "选项22"
            }
          ]
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  
  {
    type: "switch", // 表单类型
    label: "开关", // 标题文字   
    options: {
      defaultValue: false, // 默认值 Boolean 类型
      activeText: '',
      inactiveText: '',
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "button", // 表单类型
    label: "按钮", // 标题文字  
    options: {
      type: "primary",
      handle: "submit",
      textAlign: 'left',
      dynamicFun: "",
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    key: ""
  } ,
  {
      type: "batch",
      label: "动态表格",  
      list: [],
      options: {
        scrollY: 0,
        disabled: false,
        hidden: false, // 是否隐藏，false显示，true隐藏
        showLabel: false,
        hideSequence: false,
        labelWidth: "100",
        addType: 'dialog', // 默认增加一条数据的方式为弹出框
        labelPosition: 'left',
        customStyle: "",
        customClass: '',
        showItem:[] ,
        colWidth:{},
        width: "100%"
      },
      model: "",
      key: ""
  }, 
  {
      type: "text",
      label: "标签", 
      options: {
        textAlign: "left",
        tooptip: '', // 提示
        hidden: false, // 是否隐藏，false显示，true隐藏
        showRequiredMark: false
      },
      key: ""
  },
  {
      type: "html",
      label: "HTML", 
      options: {
        tooptip: '', // 提示
        hidden: false, // 是否隐藏，false显示，true隐藏
        defaultValue: "<strong>HTML</strong>"
      },
      key: ""
  },
];
 
  
// 布局控件
export const layoutList = [
  {
    type: "divider",
    label: "分割线", 
    options: {
      tooptip: '', // 提示
      orientation: "left",
      direction: 'horizontal'
    },
    key: "",
    model: ""
  },
   {
    type: "control",
    label: "弹性容器", 
    list: [],
    options: {  
      width: "100%",
      bordered: true,
      disabled: false,
      
      customStyle: "",
      customClass: '',
      noCopy: false,
      noAdd: false,
      noRemove: false
    },
    key: "",
    model: ""
  }, 
  {
    type: "grid",
    label: "栅格布局", 
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0
    },
    key: "",
    model: ""
  },
  {
    type: "table",
    label: "表格布局", 
    trs: [
      {
        tds: [
          {
            colspan: 1,
            rowspan: 1,
            list: []
          },
          {
            colspan: 1,
            rowspan: 1,
            list: []
          }
        ]
      },
      {
        tds: [
          {
            colspan: 1,
            rowspan: 1,
            list: []
          },
          {
            colspan: 1,
            rowspan: 1,
            list: []
          }
        ]
      }
    ],
    options: {
      width: "100%",
      bordered: true,
      bright: false,
      small: true,
      customStyle: "",
      customClass: ''
    },
    key: "",
    model: ""
  }
];
