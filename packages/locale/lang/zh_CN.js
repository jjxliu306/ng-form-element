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

    select_item: '从左侧选择组件添加',

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
      script: '表达式',
      add: '新增'
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
      name: '名称',
      value: '值',

      datasource: '数据源',
      datasource_static: '静态数据',
      datasource_api: 'API接口',
      datasource_dict: '数据字典' ,
      method_type: '方法类型',
      post_data: 'Post携带数据' ,
      dict_type: '字典分类',

      api_path: 'API地址' ,
      data_path: '数据路径' ,
      filed_value: '值字段',
      filed_label: '标签字段',

      multiple: '多选',
      search: '搜索',
      clearable: '可清除',

      linkage: '联动关联',
      linkage_title: '联动',

      yes: '是',
      no: '否',
      left: '左',
      center: '居中',
      right: '右',
      add: '新增',
      copy: '复制',
      delete: '删除',

      local: '本地',
      remote: '远程',
      linkage_column: '关联字段' ,

      max_length: '最大长度' ,

      style: '样式Style',
      class: '样式Class',
      bordered: '边框',

      application: '应用组件',
      basic: '基础组件',
      decorate: '装饰组件',
      layout: '布局组件',
      custom_components: '自定义组件',


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
      },
      checkbox: {
        name: '多选框'
      },
      date: {
        name: '日期',
        date_type: '日期类型',
        date_format: '日期格式',
        year: '年',
        month: '月份',
        date: '日期'

      },
      datePicker: {
        name: '日期时间'
      },
      daterange: {
        name: '日期区间'
      },
      input: {
        name: '输入框',
        input_type: '输入类型',
        prepend: '前缀',
        append: '后缀'
      },
      number: {
        name: '数字输入框',
        precision: '精度',
        step: '步长',
        min: '最小值',
        max: '最大值',
        append: '后缀'
      },
      radio: {
        name: '单选框'
      },
      rate: {
        name: '评分',
        max: '最大值',
        allow_half: '允许半选'
      },
      select: {
        name: '下拉选择器',
        selectCb: '选择后回调',
        clearCb: '清除后回调'
      },
      slider: {
        name: '滑动输入条',
        min: '最小值',
        max: '最大值',
        show_input: '输入框',
        marks: '标记',
        step: '步长',

      },
      switch: {
        name: '开关',
        active_text: '选中标签',
        inactive_text: '未选中标签'
      },
      textarea: {
        name: '文本框',
        rows: '行数',
        autosize: '自动高度' 
      },
      time: {
        name: '时间',
        time_format: '时间格式'
      },
      upload: {
        file_name: '上传文件',
        img_name: '上传图片',
        upload_url: '上传地址',
        file_type: '文件类型',
        file_url_path: 'EPL地址',
        limit_size: '文件大小',
        limit: '文件数量',
        header: '携带头信息',
        style: '样式'
      },
      alert: {
        name: '提示',
        title: '标题',
        default: '提示标题',
        description: '辅助文字',
        type: '类型',
        success: '成功',
        warning: '告警',
        info: '信息',
        error: '异常',
        
        effect: '主题',
        light: '高亮',
        dark: '暗黑',
        closable: '可关闭',
        close_text: '关闭文本',
        close_text_placeholder: '不需要则不填',
        center: '居中',
        show_icon: '显示图标',

      },
      divider: {
        name: '分割线',
        direction: '方向',
        horizontal: '横向',
        vertical: '竖向',
        orientation: '标签位置',
      
      },
      text: {
        text_align: '对齐方式',
        font_size: '字体大小',
        required_mark: '必选标记',
        required_mark_script: '动态必选',
        bold: '加粗'
      },
      controller: {
        name: '容器', 
        
        can_add: '可新增',
        can_copy: '可复制',
        can_remove: '可删除',
        

      },
      grid: {
        name: '栅格布局',
        columns: '栅格',
        gutter: '间隔',
      
        config: '列配置'
      },
      table: {
        name: '表格',
        bright: '移动高亮',
        small: '紧凑',
        style: '样式配置',
        unmerge: '解除合并',
        merge_down: '向下合并',
        merge_right: '向右合并',
        add_col: '增加一列',
        add_row: '增加一行',
        delete_col: '删除当前列',
        delete_row: '删除当前行',
        cell_style_config: '表内单元格样式配置',
        class_placeholder: '请输入class名称',
        css_placeholder: '请输入css样式',
        cancel: '取消',
        ok: '确定'
      },
      tab: {
        name: '选项卡',
        tab: '标签页',
        tab_first: '标签页1',
        style: '风格类型',
        position: '选项卡位置'
      },
      state: {
        name: '区划选择',
        max_level: '区划层级',
        province: '省',
        city: '地市',
        district: '区县',
        one_by_one: '递进式显示',
        all_path: '回显路径',
        separator: '分隔符',

        province_placeholder: '请选择省份',
        city_placeholder: '请选择省地市',
        district_placeholder: '请选择区县',
         
      }


    },
     

  }
}