export default {
  ngform: {
    header: {
      imp: 'import',
      exp: 'export',
      clear: 'clear',
      preview: 'preview',
      export_code: 'export code',
      template_data: 'template data' ,
      get_data: 'get data',
      write_mode: 'write mode',
      read_mode: 'read mode'
    },
    close: 'close',
    confirm: 'confirm',
    cancel: 'cancel',
    import: 'import',
    validator: 'validator',

    properties: {
      feature_property: 'Item',
      form_property: 'Form',

      select: 'Please Select' ,

      size: 'size',
      label_position: 'label position',
      left: 'left',
      right: 'right',
      top: 'top',
      label_width: 'label width',
      label_suffix: 'label suffix',
      validate_prompt: 'validate tip',
      validate_prompt_tip: 'Do you want to turn on the hide_required_asterisk switch in the element-ui, that is, whether to hide the red asterisk next to the label of the required field',
      open: 'open',
      close: 'close',
      dynamics_validate_label: 'dynamics validate label',
      dynamics_validate_label_tip: 'Does this switch display the red asterisk next to the label along with the verification rules of the component when turning on the hide required asterisk' ,
      output_hidden: 'output hidden',
      output_hidden_tip: 'When there are dynamically hidden components, this switch determines whether the values in the hidden components will be ignored and deleted' ,
      form_style: 'form style',
      tip: 'tip',
      result_tip: 'Please click on the preview to view the actual preview effect',
    
      no_feature: 'please select freature',
      event: 'event',
      listen: 'listen',
      dynamics: 'dynamics',

      focus_event: 'focus',
      blur_event: 'blur',
      listen_model: 'listen',
      feature_model: 'models',
      feature_model_tip: 'Multiple feature usage, segmentation',
      listen_script: 'script',

      dynamic_visible: 'visible',
      dynamic_visible_tip: 'Please enter the visible script to identify the binding data for the current entire form',
      dynamic_disabled: 'disabled',
      dynamic_disabled_tip: 'Please enter the disabled script to identify the binding data for the current entire form',
      dynamic_visible_script: 'visible script',
      disabled_visible_script: 'disabled script',


      data: 'data',
      data_config: 'Config Data' ,
      method_post_tip: 'Post Data (JSON)' ,
      script: 'Script',
      add: 'Add'
    },

    rules: {
      required: 'required',
      required_message: 'required message',
      regular: 'regular',
      regular_tip: 'Regular expressions do not include /',
      regular_placeholder: 'Regular expressions' ,
      script: 'script',
      script_tip: 'In the expression, $represents global form data, and $row represents data in a single row within a dynamic table',
      script_placeholder: 'script' ,
      message_tip: 'message',
      add_rule: 'Add'
    },

    item: {
      label: 'label',
      label_width: 'label width',
      width: 'width',
      span: 'grid num',
      model: 'model',
      key: 'key',
      options: ' property',
      if_hidden: 'hidden',
      if_disabled: 'disabled',
      validate_rule: 'rule' ,
      required: 'required',
      default_value: 'default',
      placeholder: 'placeholder',
      placeholder_input: 'please input',

      datasource: 'datasource',
      datasource_static: 'static',
      datasource_api: 'API',
      datasource_dict: 'Dict' ,
      dict_type: 'Dict Group',
      method_type: 'method',
      post_data: 'Post Data' ,

      api_path: 'API Path' ,
      data_path: 'Data Path' ,
      filed_value: 'value',
      filed_label: 'label',

      multiple: 'multiple',
      search: 'search',
      clearable: 'clearable',

      linkage: 'Linkage',
      linkage_title: 'Linkage',

      yes: 'Yes',
      no: 'No',
      left: 'Left',
      center: 'Center',
      right: 'Right',

      local: 'Local',
      remote: 'Remote',
      linkage_column: 'Column' ,
    
      max_length: 'MaxLength' ,

      batch: {
        name: 'batch' ,
        scroll_height: 'scroll height' ,
        custom_style: 'style',
        custom_class: 'class',
        no_data_label: 'no data label' ,
        no_data: 'no data' ,
        copy_row: 'copy row',
        hide_seq: 'hide sequence',
        show_border: 'show border',
        add_type: 'add type',
        add_type_line: 'line',
        add_type_dialog: 'dialog',
        columns: 'columns',
        dialogConfig: 'showColumn',
        lineConfig: 'columnWidth'

      },
      cascader: {
        name: 'Cascader'
      },
      checkbox: {
        name: 'Checkbox'
      },
      date: {
        name: 'Date',
        date_type: 'Date Type',
        date_format: 'Format',
        year: 'Year',
        month: 'Month',
        date: 'Date'
      },
      datePicker: {
        name: 'DatePicker'
      },
      daterange: {
        name: 'DateRange'
      },
      input: {
        name: 'Input',
        input_type: 'Type',
        prepend: 'Prepend',
        append: 'Append'
      },
      number: {
        name: 'Number',
        precision: 'Precision',
        step: 'step',
        min: 'Min',
        max: 'Max',
        append: 'Append'
      },
      radio: {
        name: 'Radio'
      },
      rate: {
        name: 'Rate',
        max: 'Max',
        allow_half: 'AllowHalf'
      },
      select: {
        name: 'Select',
        selectCb: 'SelectCallback',
        clearCb: 'SelectCallback'
      },
      slider: {
        name: 'Slider',
        min: 'Min',
        max: 'Max',
        show_input: 'Input',
        marks: 'Mark',
        step: 'Step',
        
      },
      switch:{
        name: 'Switch',
        active_text: 'ActiveText',
        inactive_text: 'InactiveText'
       
      },
      textarea: {
        name: 'Textarea',
        rows: 'Rows',
        autosize: 'AutoHeight' 
      },
      time: {
        name: 'Time',
        time_format: 'Format'
      },
      upload: {
        file_name: 'FileUpload',
        img_name: 'ImageUpload',
        upload_url: 'Upload Url',
        file_type: 'File Type',
        file_url_path: 'EPL Path',
        limit_size: 'LimitSize',
        limit: 'MaxSize',
        header: 'Headers',
        style: 'Style'
      },
      alert: {
        name: 'Alert',
        title: 'Title',
        default: 'Default Title',
        description: 'description',
        type: 'Type',
        success: 'success',
        warning: 'warning',
        info: 'info',
        error: 'error',
        
        effect: 'Effect',
        light: 'Light',
        dark: 'Dark',
        closable: 'Closable',
        close_text: 'Close Text',
        close_text_placeholder: 'Do not fill in if not required',
        center: 'Center',
        show_icon: 'Icon',

      },
      divider: {
        name: 'Divider',
        direction: 'Direction',
        horizontal: 'Horizontal',
        vertical: 'Vertical',
        orientation: 'Location',
       
      },
      text: {
        text_align: 'TextAlign',
        font_size: 'Fontsize',
        required_mark: 'RequiredMark',
        required_mark_script: 'Script',
        bold: 'Bold'
      }

    },

  }
}