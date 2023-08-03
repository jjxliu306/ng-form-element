export default {
  ngform: {
    header: {
      imp: '导入',
      exp: '导出',
      clear: '清空',
      preview: '预览',
      export_code: '导出代码',
      template_data: '模板数据' ,
      get_data: '获取数据',
      write_mode: '填写模式',
      read_mode: '查看默认'
    },
    close: '关闭',
    confirm: '确定',
    cancel: '取消',
    import: '导入',
    validator: '效验',

    properties: {
      feature_property: '要素属性',
      form_property: '表单属性',

      select: '请选择' ,

      size: '尺寸',
      label_position: '对齐方式',
      left: '左对齐',
      right: '右对齐',
      top: '顶部对齐',
      label_width: '标签宽度',
      label_suffix: '标签后缀',
      validate_prompt: '效验提示',
      validate_prompt_tip: '是否打开element-ui中hide-required-asterisk开关，即 是否隐藏必填字段的标签旁边的红色星号',
      open: '打开',
      close: '关闭',
      dynamics_validate_label: '动态校验标签',
      dynamics_validate_label_tip: '此开关在打开hide-required-asterisk时，是否将标签旁边的红色星号跟随组件的校验规则一起显示' ,
      output_hidden: '输出隐藏组件值',
      output_hidden_tip: '当存在动态隐藏的组件时，此开关决定隐藏的组件中的值是否将被忽略删除' ,
      form_style: '表单样式',
      tip: '提示',
      result_tip: '实际预览效果请点击预览查看',
      no_feature: '请先从面板中选择组件',
      event: '事件',
      listen: '监听',
      dynamics: '动态配置',
      focus_event: '获取焦点',
      blur_event: '失去焦点',
      listen_model: '监听组件',
      feature_model: '组件model',
      feature_model_tip: '多个组件使用,分割',
      listen_script: '触发表达式',

      dynamic_visible: '动态显示',
      dynamic_visible_tip: 'Please enter the visible script to identify the binding data for the current entire form',
      dynamic_disabled: '动态禁用',
      dynamic_disabled_tip: 'Please enter the disable script to identify the binding data for the current entire form',
      dynamic_visible_script: '显示条件',
      disabled_visible_script: '禁用条件',


      data: '数据',
      data_config: '数据配置' ,
      method_post_tip: 'post请求需要携带的数据(JSON格式)' ,

    },

    rules: {
      required: '必填',
      required_message: '必填校验提示信息',
      regular: '正则',
      regular_tip: '正则表达式不要带前后的/',
      regular_placeholder: '正则表达式pattern' ,
      script: '表达式',
      script_tip: '表达式中$表示全局表单数据,$row表示在动态表格内单行的数据',
      script_placeholder: '条件表达式' ,
      message_tip: '提示信息',
      add_rule: '增加效验'
    },
     
    item: {
      label: '标签',
      label_width: '标签宽度',
      width: '宽度',
      span: '所占栅格',
      model: '数据字段',
      key: '数据key',
      options: '属性',
      if_hidden: '是否隐藏',
      if_disabled: '是否禁用',
      validate_rule: '效验规则' ,
      required: '必填项',
      default_value: '默认值',
      placeholder: '输入提示',
      placeholder_input: '请输入',

      datasource: '数据源',
      datasource_static: '静态数据',
      datasource_api: 'API接口',
      datasource_dict: '数据字典' ,
      method_type: '方法类型',
      post_data: 'Post携带数据' ,

      api_path: 'API地址' ,
      data_path: '数据路径' ,
      filed_value: '值字段',
      filed_label: '标签字段',

      multiple: '多选',
      search: '搜索',
      clearable: '可清除',



      batch: {
        name: '动态表格' ,
        scroll_height: '滚动高度' ,
        custom_style: '自定义样式',
        custom_class: '自定义Class',
        no_data_label: '空内容提示' ,
        no_data: '暂无数据' ,
        copy_row: '行复制',
        hide_seq: '隐藏序号',
        show_border: '显示边框',
        add_type: '新增方式',
        add_type_line: '增加行',
        add_type_dialog: '弹出框',
        columns: '字段',
        dialogConfig: '外部展示字段',
        lineConfig: '字段宽度'

      },
      cascader: {
        name: '级联选择器'
      }

    },
     

  }
}