<!--
表单控件属性设置组件,因为配置数据是引用关系，所以可以直接修改
-->
<template>
  <div class="properties-centent kk-checkbox">
  
    <div class="properties-body"> 
      <p class="hint-box" v-show="selectItem.key === ''">未选择控件</p>
      <el-form v-show="selectItem.key !== ''" size="mini">
        <el-form-item
          v-if="typeof selectItem.label !== 'undefined'"
          label="标签"
        >
          <el-input v-model="selectItem.label" placeholder="请输入" />
        </el-form-item>

        <el-form-item
          v-if="!hideModel && typeof selectItem.model !== 'undefined'"
          label="数据字段"
        >
          <el-input v-model="selectItem.model" placeholder="请输入" />
        </el-form-item>
        <!-- input type start -->
        <el-form-item v-if="selectItem.type === 'input'" label="输入框type">
          <el-input v-model="options.type" placeholder="请输入" />
        </el-form-item>
        <!-- input type end -->
        <template v-if="selectItem.type === 'switch'">
          <el-form-item   label="打开标签值">
            <el-input placeholder="请输入" v-model="options.activeText" /> 
          </el-form-item>
           <el-form-item   label="关闭标签值" >
            <el-input placeholder="请输入" v-model="options.inactiveText" /> 
          </el-form-item>
        </template>
       

        <el-form-item
          v-if="selectItem.type == 'date' && options.range "
          label="占位内容"
        >
          <el-input placeholder="请输入" v-model="options.rangeStartPlaceholder" />
          <el-input placeholder="请输入" v-model="options.rangeEndPlaceholder" />
        </el-form-item>

        <el-form-item
          v-else-if="typeof options.placeholder !== 'undefined'"
          label="占位内容"
        >
          <el-input placeholder="请输入" v-model="options.placeholder" />
        </el-form-item>
        <el-form-item
          v-if="selectItem.type === 'textarea'"
          label="输入框行数"
        >
          <el-input-number
            style="width:100%"
            v-model="options.rows"
            placeholder="输入框行数"
          />
         
        </el-form-item>
        <el-form-item v-if="typeof options.width !== 'undefined'" label="宽度">
          <el-input placeholder="请输入" v-model="options.width" />
        </el-form-item>
        <el-form-item v-if="typeof options.height !== 'undefined'" label="高度">
          <el-input-number v-model="options.height" />
        </el-form-item>
        <el-form-item v-if="typeof options.step !== 'undefined'" label="步长">
          <el-input-number v-model="options.step" placeholder="请输入" />
        </el-form-item>
        <el-form-item v-if="typeof options.min !== 'undefined'" label="最小值">
          <el-input-number v-model="options.min" placeholder="请输入" />
        </el-form-item>
        <el-form-item v-if="typeof options.max !== 'undefined'" label="最大值">
          <el-input-number v-model="options.max" placeholder="请输入" @change="(v)=>{ 
              if(selectItem.type == 'rate'){ 
                if(options.defaultValue > v){
                  options.defaultValue = v
                }
              }
             
            }"/>
        </el-form-item>
        <el-form-item
          v-if="typeof options.precision !== 'undefined'"
          label="数值精度"
        >
          <el-input-number
            :min="0"
            :max="50"
            v-model="options.precision"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item
          v-if="typeof options.dictCode !== 'undefined'"
          label="dictCode"
        >
          <el-input v-model="options.dictCode"></el-input>
        </el-form-item>
        <!-- 选项配置及动态数据配置 start -->
        <el-form-item
          v-if="typeof options.options !== 'undefined'"
          label="选项配置"
        >
          <el-radio-group   v-model="options.dynamic">
            <el-radio-button :label="false">静态数据</el-radio-button>
            <el-radio-button :label="true">动态数据</el-radio-button>
          </el-radio-group>
 
          <!-- 级联选择器远程赋值 -->
          
          <div v-if="options.dynamic && (selectItem.type == 'cascader' || selectItem.type == 'select' || selectItem.type == 'checkbox' || selectItem.type == 'radio')">
              <el-input size="mini" v-model="options.remoteFunc">
                <template slot="prepend">远端方法</template>
              </el-input>
              <el-input size="mini" v-model="options.remoteValue">
                <template slot="prepend">值字段</template>
              </el-input>
              <el-input size="mini" v-model="options.remoteLabel">
                <template slot="prepend">标签字段</template>
              </el-input>
              <el-input size="mini" v-model="options.remoteChildren" v-if="selectItem.type == 'cascader'">
                <template slot="prepend">下级字段</template>
              </el-input>
          </div>
          <div v-else>
            <el-input
              v-show="options.dynamic"
              v-model="options.dynamicKey"
              placeholder="动态数据变量名"
            ></el-input> 
          </div>
         

          <!-- 本地赋值 -->
          <ChangeOption v-show="!options.dynamic" :type="selectItem.type" v-model="options.options" />
        </el-form-item>
        <!-- select 本地配置才有默认值 -->
        <el-form-item v-if="selectItem.type === 'select' && !options.dynamic " label="默认值">
          <el-select v-model="options.defaultValue"  :clearable="true">
            <el-option
              v-for="item in options.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- checkbox 本地配置才有默认值 -->
        <el-form-item v-if="selectItem.type === 'checkbox' && !options.dynamic" label="默认值">
          <el-checkbox-group
            :options="options.options"
            v-model="options.defaultValue"
          >
            <el-checkbox  v-for="checkitem in  [].concat(options.options)" :label="checkitem.value" :key="checkitem.value"> 
              {{checkitem.label}}
            </el-checkbox>
        </el-checkbox-group>
        </el-form-item>

         <!-- radio 本地配置才有默认值 -->
        <el-form-item v-if="selectItem.type === 'radio' && !options.dynamic" label="默认值">
          <el-radio-group 
            v-model="options.defaultValue"
          >
            <el-radio v-for="radioitem in [].concat(options.options)" :label="radioitem.value" :key="radioitem.value">
              {{radioitem.label}}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 选项配置及动态数据配置 end -->
        <el-form-item v-if="selectItem.type === 'grid'" label="栅格间距">
          <el-input-number
            v-model="selectItem.options.gutter"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item v-if="selectItem.type === 'grid'" label="列配置项">
          <ChangeOption v-model="selectItem.columns" type="colspan" />
        </el-form-item>

        <el-form-item v-if="selectItem.type === 'switch'" label="默认值">
          <el-switch v-model="options.defaultValue" />
        </el-form-item>
        <el-form-item
          v-if="['number', 'slider'].indexOf(selectItem.type) >= 0"
          label="默认值"
        >
          <el-input-number
            :step="options.step"
            :min="options.min || -Infinity"
            :max="options.max || Infinity"
            v-model="options.defaultValue" 
          />
        </el-form-item>
        <el-form-item v-if="selectItem.type === 'rate'" label="默认值">
          <el-rate
            v-model="options.defaultValue"
            :allowHalf="options.allowHalf"
            :max="options.max"
          />
        </el-form-item>
       
       
        
        <!-- 日期选择器默认值 start -->
        <el-form-item v-if="selectItem.type === 'date'" label="默认值">
          <el-input
            v-if="!options.range"
            v-model="options.defaultValue"
            :placeholder="
              typeof options.format === 'undefined' ? '' : options.format
            "
          />
          <el-input
            v-if="options.range"
            v-model="options.rangeDefaultValue[0]"
            :placeholder="
              typeof options.format === 'undefined' ? '' : options.format
            "
          />
          <el-input
            v-if="options.range"
            v-model="options.rangeDefaultValue[1]"
            :placeholder="
              typeof options.format === 'undefined' ? '' : options.format
            "
          />
        </el-form-item>
        <!-- 日期选择器默认值 start -->
        <el-form-item
          v-if="
            ![
              'number',
              'radio',
              'checkbox',
              'date',
              'rate',
              'select',
              'switch',
              'slider',
              'html'
            ].includes(selectItem.type) &&
              typeof options.defaultValue !== 'undefined'
          "
          label="默认值"
        >
          <el-input
            v-model="options.defaultValue"
            :placeholder="
              typeof options.format === 'undefined' ? '请输入' : options.format
            "
          />
        </el-form-item>
        <!-- 修改html -->
        <el-form-item v-if="selectItem.type === 'html'" label="默认值">
          <el-input
            type="textarea"
            v-model="options.defaultValue"
            :autoSize="{ minRows: 4, maxRows: 8 }"
          />
        </el-form-item>
        <el-form-item
          v-if="typeof options.format !== 'undefined'"
          label="时间格式"
        >
          <el-input
            v-model="options.format"
            placeholder="时间格式如：YYYY-MM-DD HH:mm:ss"
          />
        </el-form-item>

        <el-form-item
          v-if="typeof options.orientation !== 'undefined'"
          label="标签位置"
        >
          <el-radio-group buttonStyle="solid" v-model="options.orientation">
            <el-radio-button label="left">左</el-radio-button>
            <el-radio-button label="">居中</el-radio-button>
            <el-radio-button label="right">右</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="selectItem.type === 'button'" label="类型">
          <el-radio-group   v-model="options.type">
            <el-radio label="primary">Primary</el-radio>
            <el-radio label="default">Default</el-radio>
            <el-radio label="dashed">Dashed</el-radio>
            <el-radio label="danger">Danger</el-radio>
          </el-radio-group>
        </el-form-item>
   
        <el-form-item v-if="selectItem.type === 'button'" label="按钮操作">
          <el-radio-group v-model="options.handle">
            <el-radio-button label="submit">提交</el-radio-button>
            <el-radio-button label="reset">重置</el-radio-button>
            <el-radio-button label="dynamic">动态函数</el-radio-button>
          </el-radio-group>
          <el-input
            v-show="options.handle === 'dynamic'"
            v-model="options.dynamicFun"
            placeholder="动态函数名"
          ></el-input>
        </el-form-item>
       
        <!-- 上传图片 -->
        <el-form-item v-if="selectItem.type === 'uploadImg'" label="样式">
          <el-radio-group buttonStyle="solid" v-model="options.listType">
            <el-radio-button label="text">text</el-radio-button>
            <el-radio-button label="picture">picture</el-radio-button>
            <el-radio-button label="picture-card">card</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <!-- 上传数量 -->
        <el-form-item
          v-if="typeof options.limit !== 'undefined'"
          label="最大上传数量"
        >
          <el-input-number :min="1" v-model="options.limit" />
        </el-form-item>

        <!-- scrollY -->
        <el-form-item
          v-if="typeof options.scrollY !== 'undefined'"
          label="scrollY"
        >
          <el-input-number :min="0" v-model="options.scrollY" />
        </el-form-item>

        <!-- 上传地址 -->
        <el-form-item
          v-if="typeof options.action !== 'undefined'"
          label="上传地址"
        >
          <el-input v-model="options.action" placeholder="请输入"></el-input>
        </el-form-item>

      
        <!-- 文字对齐方式 -->
        <el-form-item v-if="selectItem.type === 'text'" label="文字对齐方式">
          <el-radio-group buttonStyle="solid" v-model="options.textAlign">
            <el-radio-button label="left">左</el-radio-button>
            <el-radio-button label="center">居中</el-radio-button>
            <el-radio-button label="right">右</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="selectItem.type === 'text'" label="操作属性">
          <el-checkbox v-model="options.showRequiredMark" label="显示必选标记" />
        </el-form-item>

        <el-form-item
          v-if="
            typeof options.hidden !== 'undefined' ||
              typeof options.disabled !== 'undefined' ||
              typeof options.readonly !== 'undefined' ||
              typeof options.clearable !== 'undefined' ||
              typeof options.multiple !== 'undefined' ||
              typeof options.range !== 'undefined' || 
              typeof options.allowHalf !== 'undefined' ||
              typeof options.showInput !== 'undefined'
          "
          label="操作属性"
        >
          <el-checkbox
            v-if="typeof options.hidden !== 'undefined'"
            v-model="options.hidden"
            label="隐藏"
          />
          <el-checkbox
            v-if="typeof options.disabled !== 'undefined'"
            v-model="options.disabled"
            label="禁用"
          />
          <el-checkbox
            v-if="typeof options.readonly !== 'undefined'"
            v-model="options.readonly"
            label="只读"
          />
          <el-checkbox
            v-if="typeof options.clearable !== 'undefined'"
            v-model="options.clearable"
            label="可清除"
          />
          <el-checkbox
            v-if="typeof options.multiple !== 'undefined'"
            v-model="options.multiple"
            label="多选"
          />
          <el-checkbox
            v-if="typeof options.range !== 'undefined'"
            v-model="options.range"
            label="范围选择"
          />
           
          <el-checkbox
            v-if="typeof options.allowHalf !== 'undefined'"
            v-model="options.allowHalf"
            label="允许半选"
          />
          <el-checkbox
            v-if="typeof options.showInput !== 'undefined'"
            v-model="options.showInput"
            label="显示输入框"
          />
          <el-checkbox
            v-if="typeof options.showLabel !== 'undefined'"
            v-model="options.showLabel"
            label="显示Label"
          />
          <el-checkbox
            v-if="typeof options.chinesization !== 'undefined'"
            v-model="options.chinesization"
            label="汉化"
          />
          <el-checkbox
            v-if="typeof options.hideSequence !== 'undefined'"
            v-model="options.hideSequence"
            label="隐藏序号"
          />
          
          <el-checkbox
            v-if="typeof options.showSearch !== 'undefined'"
            v-model="options.showSearch"
            label="可搜索"
          />
          <el-checkbox
            v-if="typeof options.treeCheckable !== 'undefined'"
            v-model="options.treeCheckable"
            label="可勾选"
          />
        </el-form-item>

        <el-form-item
          v-if="
            typeof selectItem.rules !== 'undefined' &&
              selectItem.rules.length > 0
          "
          label="校验"
        >
          <el-checkbox v-model="selectItem.rules[0].required" label="必填" />
          <el-input
            v-model="selectItem.rules[0].message"
            placeholder="必填校验提示信息"
          />
          <ChangeOption v-model="selectItem.rules" type="rules" />
        </el-form-item>

        <!-- 表格选项 -->
        <el-form-item v-if="selectItem.type === 'table'" label="表格样式CSS">
          <el-input v-model="selectItem.options.customStyle" />
        </el-form-item>
        <el-form-item v-if="selectItem.type === 'table'" label="属性">
          <el-checkbox v-model="selectItem.options.bordered" label="显示边框" />
          <el-checkbox v-model="selectItem.options.bright" label="鼠标经过点亮" />
          <el-checkbox v-model="selectItem.options.small" label="紧凑型" />
        </el-form-item>

        <template v-if="selectItem && selectItem.options">
           <el-form-item label="动态显示">
            <!-- 每个元素都有隐藏条件 根据渲染数据的值来改变 --> 
            <el-switch
              v-model="selectItem.options.dynamicVisible"
              active-text="打开"
              inactive-text="关闭">
            </el-switch>
          </el-form-item>
          <el-form-item label="显示条件" v-if="selectItem.options.dynamicVisible">
            <!-- 每个元素都有隐藏条件 根据渲染数据的值来改变 -->
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入显示条件,$标识当前整个表单的绑定数据"
              v-model="selectItem.options.dynamicVisibleValue">
            </el-input>
          </el-form-item>

        </template>

       


        <el-form-item v-if="selectItem.type === 'table'" label="提示">
          <p style="line-height: 26px;">
            请点击右键增加行列，或者合并单元格
          </p>
        </el-form-item>

      </el-form>
    </div> 
  </div>
</template>
<script> 
import ChangeOption from "./change-option/index";
 
export default {
  name: "formItemProperties",
  data() {
    return {
      options: {}
    };
  },
  watch: {
    selectItem(val) { 
      this.options = val.options || {}; 
    }
  },
  props: {
    selectItem: {
      type: Object,
      required: true
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ChangeOption 
  }
};
</script>
