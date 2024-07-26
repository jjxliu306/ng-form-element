export default {
  ngform: {
    header: {
      imp: "Import",
      exp: "Export",
      clear: "Clear",
      preview: "Preview",
      export_code: "Export code",
      template_data: "Template data",
      get_data: "Get data",
      write_mode: "Write mode",
      read_mode: "Read mode",
      prompt: "Prompt",
      clear_prompt: "Do you want to clear the current panel?",
      content_not_empty: "Content cannot be empty",
      content_parse_error: "Content parsing exception, please check the text content"
    },
    close: "Close",
    confirm: "Confirm",
    cancel: "Cancel",
    import: "Import",
    validator: "Validator",
    open_properties_panel: "Open the Property Configuration Panel",
    close_properties_panel: "Hidden the Property Configuration Panel",

    select_item: "Select components from the left and drag them in",

    properties: {
      feature_property: "Item",
      form_property: "Form",

      select: "Please Select",

      size: "Size",
      label_position: "Label position",
      left: "Left",
      right: "Right",
      top: "Top",
      label_width: "Label width",
      label_suffix: "Label suffix",
      validate_prompt: "Validate tip",
      validate_prompt_tip:
        "Do you want to turn on the hide_required_asterisk switch in the element-ui, that is, whether to hide the red asterisk next to the label of the required field",
      open: "Open",
      close: "Close",
      dynamics_validate_label: "Dynamics validate label",
      dynamics_validate_label_tip:
        "Does this switch display the red asterisk next to the label along with the verification rules of the component when turning on the hide required asterisk",
      output_hidden: "Output hidden",
      output_hidden_tip:
        "When there are dynamically hidden components, this switch determines whether the values in the hidden components will be ignored and deleted",
      form_style: "Form style",
      tip: "Tip",
      result_tip: "Please click on the preview to view the actual preview effect",

      no_feature: "Please select freature",
      event: "Event",
      listen: "Listen",
      dynamics: "Dynamics",

      focus_event: "Focus",
      blur_event: "Blur",
      listen_model: "Listen",
      feature_model: "Models",
      feature_model_tip: "Multiple feature usage, segmentation",
      listen_script: "Script",

      dynamic_visible: "Visible",
      dynamic_visible_tip: "Please enter the visible script to identify the binding data for the current entire form",
      dynamic_disabled: "Disabled",
      dynamic_disabled_tip: "Please enter the disabled script to identify the binding data for the current entire form",
      dynamic_visible_script: "Visible script",
      disabled_visible_script: "Disabled script",

      data: "Data",
      data_config: "Config Data",
      method_post_tip: "Post Data (JSON)",
      script: "Script",
      add: "Add",
      edit_hidden: "Edit Hidden",
      preview_hidden: "Preview Hidden"
    },

    rules: {
      required: "Required",
      required_message: "Required message",
      regular: "Regular",
      regular_tip: "Regular expressions do not include /",
      regular_placeholder: "Regular expressions",
      script: "Script",
      script_tip: "In the expression, $represents global form data, and $row represents data in a single row within a dynamic table",
      script_placeholder: "Script",
      message_tip: "Message",
      add_rule: "Add"
    },

    item: {
      dynamicLabel: "Dynamic Label",
      label: "Label",
      label_width: "Label width",
      width: "Width",
      span: "Grid num",
      model: "Model",
      key: "Key",
      options: " Property",
      if_hidden: "Hidden",
      if_disabled: "Disabled",
      validate_rule: "Rule",
      required: "Required",
      default_value: "Default",
      placeholder: "Placeholder",
      placeholder_input: "please input",
      name: "Name",
      value: "Value",

      datasource: "Datasource",
      datasource_static: "Static",
      datasource_api: "API",
      datasource_dict: "Dict",
      dict_type: "Dict Group",
      method_type: "Method",
      post_data: "Post Data",

      api_path: "API Path",
      data_path: "Data Path",
      filed_value: "Value",
      filed_label: "Label",
      filed_children: "Chilren",

      multiple: "Multiple",
      search: "Search",
      online_search: "OnlineSearch",
      online_search_query: "Query Key",
      clearable: "Clearable",
      editable: "Editable",

      linkage: "Linkage",
      linkage_title: "Linkage",

      yes: "Yes",
      no: "No",
      left: "Left",
      center: "Center",
      right: "Right",
      add: "Add",
      copy: "Copy",
      delete: "Delete",
      edit: "Edit",
      view: "View",

      local: "Local",
      remote: "Remote",
      linkage_column: "Column",

      max_length: "MaxLength",

      style: "Style",
      class: "Class",
      bordered: "Bordered",

      application: "Application",
      basic: "Basic",
      decorate: "Decorate",
      layout: "Layout",
      custom_components: "Custom",

      height: "Height",
      max_height: "Max Height",

      batch: {
        name: "Batch",
        scroll_height: "Scroll height",
        custom_style: "Style",
        custom_class: "Class",
        no_data_label: "No data label",
        no_data: "No data",
        copy_row: "Copy row",
        hide_seq: "Hide sequence",
        show_border: "Show border",
        add_type: "Add type",
        add_type_line: "Line",
        add_type_dialog: "Dialog",
        columns: "Columns",
        dialogConfig: "ShowColumn",
        lineConfig: "ColumnWidth",
        seq: "#",
        operate: "Operate",
        seq_label: "Sequence",
        operation_success: "Operation success",
        delete_prompt: "Are you sure to delete this data?",
        fixed_operate: "Operate Fixed"
      },
      cascader: {
        name: "Cascader"
      },
      checkbox: {
        name: "Checkbox"
      },
      date: {
        name: "Date",
        date_type: "Date Type",
        date_format: "Format",
        value_format: "Value Format",
        value_format_placehoder: "Default Type Is Date",
        align: "align",
        year: "Year",
        month: "Month",
        date: "Date"
      },
      datePicker: {
        name: "DatePicker"
      },
      daterange: {
        name: "DateRange"
      },
      input: {
        name: "Input",
        input_type: "Type",
        prepend: "Prepend",
        append: "Append"
      },
      number: {
        name: "Number",
        precision: "Precision",
        step: "Step",
        min: "Min",
        max: "Max",
        append: "Append"
      },
      button: {
        name: "Button",
        size: "Size",
        type: "Type",
        align: "Align",
        plain: "Plain",
        round: "Round",
        circle: "Circle",
        click_control: "Click Control",
        reset: "ResetForm",
        custom: "Custom",
        event: "Event",
        event_name: "EventName",
        script: "Script"
      },
      editor: {
        name: "Editor",
        if_html: "Html Preview"
      },
      radio: {
        name: "Radio",
        clear_default_tip: "Clear default value"
      },
      rate: {
        name: "Rate",
        max: "Max",
        allow_half: "AllowHalf"
      },
      select: {
        name: "Select",
        selectCb: "Select Callback",
        clearCb: "Clear Callback"
      },
      slider: {
        name: "Slider",
        min: "Min",
        max: "Max",
        show_input: "Input",
        marks: "Mark",
        step: "Step"
      },
      switch: {
        name: "Switch",
        active_text: "ActiveText",
        inactive_text: "InactiveText"
      },
      textarea: {
        name: "Textarea",
        rows: "Rows",
        autosize: "AutoHeight"
      },
      time: {
        name: "Time",
        time_format: "Format"
      },
      upload: {
        upload_type: "Type",
        bucket: "BucketName",
        file_name: "FileUpload",
        img_name: "ImageUpload",
        upload_url: "Upload Url",
        file_type: "File Type",
        file_url_path: "Url Path",
        file_id_path: "ID Path",
        file_url_path_placeholder: "Required,Parse the EPL address of the file URL after successful upload",
        file_id_path_placeholder: "Parse the epl address of the file ID after successful upload",
        limit_size: "MaxSize(Mb)",
        multiple: "Multiple",
        limit: "LimitSize",
        header: "Headers",
        style: "Style",
        upload_hidden: "Uploaded Hide",
        select: "Select File",
        error_max_size: "The size of the uploaded file cannot exceed ",
        error_not_found_file: "Unable to find file download path",
        error_img_filetype: "The current image format only supports:"
      },
      alert: {
        name: "Alert",
        title: "Title",
        default: "Default Title",
        description: "Description",
        type: "Type",
        success: "success",
        warning: "warning",
        info: "info",
        error: "error",

        effect: "Effect",
        light: "Light",
        dark: "Dark",
        closable: "Closable",
        close_text: "Close Text",
        close_text_placeholder: "Do not fill in if not required",
        center: "Center",
        show_icon: "Icon"
      },
      barcode: {
        name: "Barcode",
        info: "Data",
        width: "Width",
        height: "Height",
        margin: "Margin",
        format: "Format",
        display_value: "Display Value",
        font_size: "Fontsize",
        font_options: "Font",
        text_align: "TextAlign",
        text_position: "TextPosition",
        text_margin: "TextMargin",
        background: "Background",
        line_color: "LineColor"
      },
      qrcode: {
        name: "Qrcode",
        info: "Data",
        height: "Height",
        margin: "Margin",
        color_dark: "ColorDark",
        color_light: "ColorLight",
        logo_margin: "LogoMargin",
        bg_src: "BGImage",
        bg_color: "BGColor",
        logo_src: "Logo",
        logo_scale: "Logo Scale",
        logo_bg_color: "Logo BgColor",
        logo_radius: "Logo Radius",
        white_margin: "White margin"
      },
      divider: {
        name: "Divider",
        direction: "Direction",
        horizontal: "Horizontal",
        vertical: "Vertical",
        orientation: "Location"
      },
      text: {
        text_align: "TextAlign",
        font_size: "Fontsize",
        required_mark: "RequiredMark",
        required_mark_script: "Script",
        bold: "Bold"
      },
      link: {
        name: "Link",
        href: "Href",
        type: "Type",
        underline: "Underline",
        icon: "Icon"
      },
      controller: {
        name: "Control",

        can_add: "Add",
        can_copy: "Copy",
        can_remove: "Delete"
      },
      grid: {
        name: "Grid",
        columns: "Grid",
        gutter: "Gutter",

        config: "Cols"
      },
      table: {
        name: "Table",
        bright: "HoverLight",
        small: "Small",
        style: "Style",
        unmerge: "Unmerge",
        merge_down: "Merge Down",
        merge_right: "Merge Right",
        add_col: "Add Col",
        add_row: "Add Row",
        delete_col: "Delete Col",
        delete_row: "Delete Row",
        cell_style_config: "Table Cell Style Configuration",
        class_placeholder: "Please Input Class Name",
        css_placeholder: "Please Input css Style",

        no_right_merge: "The current table cannot be merged to the right",
        no_bottom_merge: "The current table cannot be merged to the bottom",
        no_del_by_merge: "The current cell has been merged and cannot be deleted",
        no_del_by_endrow: "Currently the last row cannot be deleted",
        no_del_by_endcol: "Currently the last col cannot be deleted",

        cancel: "Cancel",
        ok: "Confirm"
      },
      tableGrid: {
        name: "TableGrid"
      },
      tab: {
        name: "Tabs",
        tab: "Tabs",
        tab_first: "Tab1",
        style: "Style",
        position: "Position"
      },
      state: {
        name: "State",
        max_level: "MaxLevel",
        province: "Province",
        city: "City",
        district: "District",
        one_by_one: "OneByOne",
        all_path: "ShowPath",
        separator: "Separator",

        province_placeholder: "Select Province",
        city_placeholder: "Select City",
        district_placeholder: "Select District",

        select_type: "Type",
        select: "Select",
        cascader: "Cascader",
        any_select: "Any select"
      },
      collapse: {
        name: "Collapse",
        item: "Collapse",
        title_font_size: "Title FontSize",
        title_background: "Title Background",
        title_font_color: "Title Color",
        item_first: "CollapseFirst",
        accordion: "Accordion"
      },
      card: {
        name: "Card",
        title_font_size: "Title FontSize",
        title_background: "Title Background",
        title_font_color: "Title Color",
        shadow: "Shadow"
      },
      signature: {
        name: "Signature",
        image_type: "ImageType",
        quality: "Quality",
        line_width: "LineWidth",
        line_color: "LineColor",
        bg_color: "Background",
        if_crop: "Crop",
        clear: "Clear"
      },
      slot: {
        name: "Slot",
        slot_name: "Slot Name",
        name_placeholder: "English sloat name"
      },
      iframe: {
        name: "Iframe",
        url: "Url",
        url_placeholder: "Enter the web url of the iframe",
        marginheight: "Marginheight",
        marginwidth: "Marginwidth",
        sandbox: "Sandbox",
        scrolling: "Scrolling"
      },
      dataTable: {
        name: "DataTable",
        db_type: "Datasource",
        static: "StaticData",
        api: "API",
        static_data: "StaticData",
        method_type: "Method",
        query_data: "Query Data",
        api_path: "Api Path",
        // queryData: '查询参数',
        columns: "Column",
        api_data_script: "Parse Script",
        page: "Page",
        page_align: "Page Align",
        page_index_key: "Page key",
        page_size_key: "PageSize key",
        page_size: "PageSize",
        stripe: "Stripe",
        show_index: "Show Index",

        row_height: "Row Height",
        header_height: "Header Height",
        small_page: "Small Page",
        static_json_data: "staic json data",
        column_align: "Align",
        width: "Width",
        column_formatter: "Formatter",
        column_formatter_tip: "Formatter Description",
        label_empty_error: "Label is not null",
        no_column_tip: "Please click on the plus sign in the bottom left corner to add the fields"
      },
      code: {
        name: "Code",
        script: "Rule",
        script_placeholder: "Please input the rule function to return the specific code",
        api_path: "API",
        api_path_placeholder: "Please input the API path",
        data_url_path: "Data Url",
        data_url_path_placeholder: "Required, the EPL address for parsing data after successful "
      }
    }
  }
}
