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
      read_mode: '查看模式',
      prompt: '提示',
      clear_prompt: '是否要清空当前面板?',
      content_not_empty: '内容不能为空',
      content_parse_error: '内容解析异常，请检查文本内容',
    },
    close: '关闭',
    confirm: '确定',
    cancel: '取消',
    import: '导入',
    validator: '效验',
    open_properties_panel: '打开属性配置面板',
    close_properties_panel: '隐藏属性配置面板',

    select_item: '从左侧选择组件拖入',

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
      dynamic_visible_tip: '请输入显示条件,$表示当前整个表单的绑定数据',
      dynamic_disabled: '动态禁用',
      dynamic_disabled_tip: '请输入禁用条件,$标识当前整个表单的绑定数据',
      dynamic_visible_script: '显示条件',
      disabled_visible_script: '禁用条件',


      data: '数据',
      data_config: '数据配置' ,
      method_post_tip: 'post请求需要携带的数据(JSON格式)' ,
      script: '表达式',
      add: '新增',
      edit_hidden: '编辑时隐藏'
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
      dynamicLabel: '动态标签' ,
      label: '标签',
      label_width: '标签宽度',
      width: '填充宽度',
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
      filed_children: '下级字段',

      multiple: '多选',
      search: '搜索',
      online_search: '在线搜索',
      online_search_query: '参数KEY',
      clearable: '可清除',
      editable: '可编辑',

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
      edit: '修改',
      view: '查看',

      local: '本地',
      remote: '远程',
      linkage_column: '关联字段' ,

      max_length: '最大长度' ,

      style: '样式Style',
      class: '样式Class',
      bordered: '边框',

      application: '应用组件',
      basic: '基础组件',
      decorate: '展示组件',
      layout: '布局组件',
      custom_components: '自定义组件',

      height: '高度',
      max_height: '最大高度',

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
        lineConfig: '字段宽度',
        seq: '序号',
        operate: '操作',
        seq_label: '排序号',
        operation_success: '更新成功',
        delete_prompt: '确定删除此数据?',
        fixed_operate: '操作固定'
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
      button: {
        name: '按钮',
        size: '尺寸',
        align: '排列方式',
        type: '类型',
        plain: '朴素',
        round: '圆角',
        circle: '圆形',
        click_control: '点击功能',
        reset: '重置表单',
        custom: '自定义',
        event: '事件',
        event_name: '事件名称',
        script: '执行脚本'
      },
      editor: {
        name: '富文本框',
        if_html: 'Html预览'
      },
      radio: {
        name: '单选框',
        clear_default_tip: '清空默认值'
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
        upload_type: '上传类型',
        file_name: '上传文件',
        bucket: '存储桶' ,
        img_name: '上传图片',
        upload_url: '上传地址',
        file_type: '文件类型',
        file_url_path: 'URL地址',
        file_id_path: 'ID地址' ,
        file_url_path_placeholder: '必填,上传成功后解析文件url的epl地址' ,
        file_id_path_placeholder: '选填,上传成功后解析文件ID的epl地址' ,
        limit_size: '最大(Mb)',
        multiple: '多文件',
        limit: '文件数量',
        header: '携带头信息',
        style: '样式',
        upload_hidden: '上传后隐藏',
        select: '选择文件',
        error_max_size: '上传文件大小不能超过',
        error_not_found_file: '找不到文件下载路径',
        error_img_filetype: '当前图片格式只支持:'
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
      barcode: {
        name: '条形码',
        info: '内容',
        width: '宽度',
         height: '高度',
        margin: '边距',
        format: '格式',
        display_value: '显示文字',
        font_size: '字体大小',
        font_options: '字体',
        text_align: '对齐方式',
        text_position: '文本位置',
        text_margin: '文本间距',
        background: '背景色',
        line_color: '条码颜色'
      },
      qrcode: {
        name: '二维码',
        info: '内容',
        height: '高度',
        margin: '边距',
        color_dark: '实点颜色',
        color_light: '亮点颜色',
        bg_src: '背景图片',
        bg_color: '背景颜色',
        logo_src: 'LOGO图片',
        logo_scale: 'LOGO缩放比',
        logo_margin: 'LOGO边距',
        logo_bg_color: 'LOGO背景色',
        logo_radius: 'LOGO圆角',
        white_margin: '空白边框'

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
      link: {
        name: '文字链接',
        href: '跳转链接',
        type: '类型',
        underline: '下滑线',
        icon: '图标'
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

        no_right_merge: '当前表格无法向右合并',
        no_bottom_merge: '当前表格无法向下合并',
        no_del_by_merge: '当前单元格已合并，无法删除',
        no_del_by_endrow: '当前是最后一行,无法删除',
        no_del_by_endcol: '当前只剩下最后一列,无法删除',

        cancel: '取消',
        ok: '确定'
      },
      tableGrid: {
        name: '网格布局'
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

        select_type: '样式',
        select: '下拉框' ,
        cascader: '级联选择',
        any_select: '任意可选'

      },
      collapse: {
        name: '折叠面板',
        item: '折叠面板',
        title_font_size: '标题字号',
        title_background: '标题背景',
        title_font_color: '标题颜色',
        item_first: '面板1', 
        accordion: '手风琴模式'
      },
      card: {
        name: '卡片', 
        title_font_size: '标题字号',
        title_background: '标题背景',
        title_font_color: '标题颜色',
        shadow: '阴影'
      },
      signature: {
         name: '签名',
         image_type: '图片类型',
         quality: '图片质量',
         line_width: '画笔粗度',
         line_color: '画笔颜色',
         bg_color: '背景颜色',
         if_crop: '是否裁剪',
         clear: '清空画板' 

      },
      slot: {
        name: '插槽',
        slot_name: '插槽名称',
        name_placeholder: '扩展插槽的名称,英文'
      },
      iframe: {
        name: 'Iframe',
        url: '地址',
        url_placeholder: '输入iframe的网页地址',
        marginheight: '上下边距',
        marginwidth: '左右边距',
        sandbox: '沙箱',
        scrolling: '滚动条'
      },
      dataTable: {
        name: '数据表格',
        db_type: '数据来源',
        static: '静态数据',
        api: 'API',
        static_data: '静态数据',
        method_type: '方法类型',
        query_data: '查询条件',
        api_path: 'API地址',
        // queryData: '查询参数',
        columns: '字段',
        api_data_script: '解析方法',
        page: '分页',
        page_align: '分页位置',
        page_index_key: '页码KEY',
        page_size_key: '数量KEY',
        page_size: '每页数据',
        stripe: '斑马线',
        show_index: '显示下标',
        // columns: '字段',
        row_height: '行高度',
        header_height: '标题高度',
        small_page: '小型分页',
        static_json_data: '静态JSON数据',
        column_align: '对齐方式',
        width: '宽度',
        column_formatter: '字段格式化',
        column_formatter_tip: '字段格式化说明',
        label_empty_error: '标签不能为空',
        no_column_tip: '暂无配置字段，请点击左下角加号进行字段添加'

      },
      code: {
        name: '编码',
        script: '规则',
        script_placeholder: '请输入规则函数,返回具体编码',
        api_path: 'API路径',
        api_path_placeholder: '请输入后台API地址',
        data_url_path: '数据路径',
        data_url_path_placeholder: '必填,上传成功后解析数据的epl地址'
      }


    },


  }
}
