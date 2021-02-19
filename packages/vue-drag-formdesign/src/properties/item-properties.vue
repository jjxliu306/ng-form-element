<!--
表单控件属性设置组件,因为配置数据是引用关系，所以可以直接修改
-->
<template>
  <div class="properties-centent">
   
    <div class="properties-body"> 
      <p class="hint-box" v-show="!selectItem.key">未选择控件</p>
      <el-form v-show="selectItem.key" size="mini" :disabled="disabled">
 

        <!-- 公共部分 标签 字段key 数据key start -->
        <el-form-item  label="标签" v-if="!hideModel">
          <el-input v-model="selectItem.label" placeholder="请输入" />
        </el-form-item>
       
        <el-form-item  label="数据字段" v-if="!hideModel && !['table','grid','divider','label','html','button',].includes(selectItem.type)" >
          <el-input v-model="selectItem.model" placeholder="请输入" :disabled="(selectItem.item != undefined && selectItem.item.id != undefined) "/>
        </el-form-item>
         <el-divider ></el-divider>
        <!-- 公共部分 标签 字段key 数据key end -->

        <!-- input textarea start -->
        <template v-if="selectItem.type == 'input' || selectItem.type == 'textarea'">
          <el-form-item  label="占位内容"  >
            <el-input placeholder="请输入" v-model="options.placeholder" />
          </el-form-item>
          
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
           
          <el-form-item label="默认值" >
            <el-input  v-model="options.defaultValue"
              :placeholder=" typeof options.format === 'undefined' ? '请输入' : options.format"
            />
          </el-form-item>  
            
          <el-form-item  label="最大长度"  >
            <el-input-number  v-model="options.maxLength" placeholder="最大长度"  :min="1"/>  
           
          </el-form-item>
          
          <el-form-item  label="前后缀"  v-if="selectItem.type === 'input'">
            <el-input placeholder="前缀标签" v-model="options.prepend">
              <template slot="prepend">前缀</template>
            </el-input>
            <el-input placeholder="后缀标签" v-model="options.append"  >
               <template slot="append">后缀</template>
            </el-input> 
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item  v-if="selectItem.type === 'textarea'" label="输入框行数" >
            <el-input-number  style="width:100%" v-model="options.rows" placeholder="输入框行数"  /> 
          </el-form-item>
          
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.clearable" label="可清除" /> 
          </el-form-item>
        </template>
        <!-- input textarea end -->

        <!-- number start -->
        <template v-if="selectItem.type == 'number'">
          <el-form-item  label="占位内容"  >
            <el-input placeholder="请输入" v-model="options.placeholder" />
          </el-form-item>
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>

          <el-form-item  label="步长">
            <el-input-number v-model="options.step" placeholder="请输入" />
          </el-form-item>
          <el-form-item  label="最小值">
            <el-input-number v-model="options.min" placeholder="请输入" />
          </el-form-item>
          <el-form-item  label="最大值">
            <el-input-number v-model="options.max" placeholder="请输入"/>
          </el-form-item>
          <el-form-item  label="数值精度" >
            <el-input-number :min="0"  :max="5"  v-model="options.precision"  placeholder="请输入" />
          </el-form-item> 
          <el-form-item  label="默认值" >
            <el-input-number
              :step="options.step"
              :min="options.min || -Infinity"
              :max="options.max || Infinity"
              v-model="options.defaultValue" 
            />
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item  label="后缀">
          <!--   <el-input placeholder="前缀标签" v-model="options.prepend">
              <template slot="prepend">前缀</template>
            </el-input> -->
            <el-input placeholder="后缀标签" v-model="options.append"  >
               <template slot="append">后缀</template>
            </el-input>
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" />  
          </el-form-item>
        </template>
        <!-- number end -->

        <!-- select start -->
        <template v-if="selectItem.type == 'select'">
          <el-form-item  label="占位内容"  >
            <el-input placeholder="请输入" v-model="options.placeholder" />
          </el-form-item>
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item  label="选项配置" >
            <el-radio-group   v-model="options.dynamic">
              <el-radio-button :label="0">静态数据</el-radio-button>
              <el-radio-button :label="1">动态数据</el-radio-button>
            
            </el-radio-group>
   
            <!-- 远程赋值配置 --> 
            <div v-if="options.dynamic == 1">
                <el-input size="mini" v-model="options.remoteFunc">
                  <template slot="prepend">远端方法</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteValue">
                  <template slot="prepend">值字段</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteLabel">
                  <template slot="prepend">标签字段</template>
                </el-input> 
            </div>  
            <!-- 本地赋值 -->
            <ChangeOption v-show="options.dynamic == 0" :type="selectItem.type" v-model="options.options" />
          </el-form-item>
          
          <!-- select 本地配置才有默认值 -->
          <el-form-item v-if="options.dynamic == 0" label="默认值">
            <el-select v-model="options.defaultValue"  :clearable="true">
              <el-option
                v-for="item in options.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.clearable" label="可清除" />
            <el-checkbox v-model="options.multiple" label="多选" />
            <el-checkbox v-model="options.showSearch" label="可搜索" @change="(v)=>{
              if(!v){
                options.onlineSearch = false
              }
            }"/>
            <el-checkbox v-model="options.onlineSearch" v-if="options.showSearch" label="实时搜索"  />
          </el-form-item> 
          <el-divider ></el-divider>
          <el-form-item   label="实时搜索回调" v-if="options.showSearch && options.onlineSearch"> 
             <el-input type="textarea" placeholder="搜索带参,eg: name=$, $表示当前输入关键字" v-model="options.onlineParams" />
          </el-form-item> 
          <el-divider ></el-divider>
          <el-form-item   label="选择后回调"  > 
             <el-input type="textarea" placeholder="选择后回调方法,eg: $.A004=$select.name, $表示当前表单数据,$select标示当前选择元素实体" v-model="options.selectCb" />
          </el-form-item> 

        </template>
         <!-- select end -->

        <!-- checkbox start -->
        <template v-if="selectItem.type == 'checkbox'">
          <el-form-item  label="选项配置" >
            <el-radio-group   v-model="options.dynamic">
              <el-radio-button :label="0">静态数据</el-radio-button>
              <el-radio-button :label="1">动态数据</el-radio-button>
             
            </el-radio-group>
   
            <!-- 远程赋值配置 --> 
            <div v-if="options.dynamic == 1">
                <el-input size="mini" v-model="options.remoteFunc">
                  <template slot="prepend">远端方法</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteValue">
                  <template slot="prepend">值字段</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteLabel">
                  <template slot="prepend">标签字段</template>
                </el-input> 
            </div> 
           

            <!-- 本地赋值 -->
            <ChangeOption v-show="options.dynamic == 0" :type="selectItem.type" v-model="options.options" />
          </el-form-item>

          <!-- select 本地配置才有默认值 -->
          <el-form-item v-if="options.dynamic == 0" label="默认值">
            <el-checkbox-group
              :options="options.options"
              v-model="options.defaultValue"
            >
              <el-checkbox  v-for="checkitem in  [].concat(options.options)" :label="checkitem.value" :key="checkitem.value"> 
                {{checkitem.label}}
              </el-checkbox>
          </el-checkbox-group>
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" />    
          </el-form-item> 
        </template>
        <!-- checkbox end -->

         <!-- radio start -->
        <template v-if="selectItem.type == 'radio'">
          <el-form-item  label="选项配置" >
            <el-radio-group   v-model="options.dynamic">
              <el-radio-button :label="0">静态数据</el-radio-button>
              <el-radio-button :label="1">动态数据</el-radio-button>
             
            </el-radio-group>
   
            <!-- 远程赋值配置 --> 
            <div v-if="options.dynamic == 1">
                <el-input size="mini" v-model="options.remoteFunc">
                  <template slot="prepend">远端方法</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteValue">
                  <template slot="prepend">值字段</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteLabel">
                  <template slot="prepend">标签字段</template>
                </el-input> 
            </div> 
           

            <!-- 本地赋值 -->
            <ChangeOption v-show="options.dynamic == 0" :type="selectItem.type" v-model="options.options" />
          </el-form-item>
          <!-- select 本地配置才有默认值 -->
          <el-form-item v-if="options.dynamic == 0" label="默认值">
            <el-radio-group
              :options="options.options"
              v-model="options.defaultValue"
            >
              <el-radio  v-for="checkitem in  [].concat(options.options)" :label="checkitem.value" :key="checkitem.value"> 
                {{checkitem.label}}
              </el-radio>
          </el-radio-group>
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" />    
          </el-form-item> 
        </template>
        <!-- radio end -->

         <!-- date start -->
        <template v-if="selectItem.type == 'date' || selectItem.type == 'time'">
          
          <el-form-item  v-if="selectItem.type == 'date' && options.range " label="占位内容" >
          <el-input placeholder="请输入" v-model="options.rangeStartPlaceholder" />
          <el-input placeholder="请输入" v-model="options.rangeEndPlaceholder" />
          </el-form-item>
          <el-form-item v-else label="占位内容"  >
            <el-input placeholder="请输入" v-model="options.placeholder" />
          </el-form-item>

          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item> 
           <el-divider ></el-divider>
          <el-form-item label="默认值" >
            <el-input
              v-if="selectItem.type == 'time' || !options.range"
              v-model="options.defaultValue"
              :placeholder="
                typeof options.format === 'undefined' ? '' : options.format
              "
            />
            <el-input
              v-if="selectItem.type == 'date' && options.range"
              v-model="options.rangeDefaultValue[0]"
              :placeholder="
                typeof options.format === 'undefined' ? '' : options.format
              "
            />
            <el-input
              v-if="selectItem.type == 'date' && options.range"
              v-model="options.rangeDefaultValue[1]"
              :placeholder="
                typeof options.format === 'undefined' ? '' : options.format
              "
            /> 
            <!-- <el-input  v-model="options.defaultValue"
              :placeholder=" typeof options.format === 'undefined' ? '请输入' : options.format"
            /> -->
          </el-form-item> 
          <el-form-item  label="时间格式" >
            <el-input  v-model="options.format"  :placeholder="selectItem.type == 'date' ? 'YYYY-MM-DD' : 'HH:mm:ss'" />
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.clearable" label="可清除" /> 
            <el-checkbox v-if="selectItem.type == 'date'" v-model="options.range" label="范围选择" />
          </el-form-item>
        </template>
        <!-- date end -->

        <!-- rate start -->
        <template v-if="selectItem.type == 'rate'">
          <el-form-item v-if="typeof options.max !== 'undefined'" label="最大值">
          <el-input-number v-model="options.max" placeholder="请输入" @change="(v)=>{  
                if(options.defaultValue > v){
                  options.defaultValue = v
                } 
            }"/>
          </el-form-item>
          <el-form-item label="默认值">
            <el-rate  v-model="options.defaultValue"  :allowHalf="options.allowHalf" :max="options.max"  />
          </el-form-item>
        
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.allowHalf" label="允许半选" />
          </el-form-item>
        </template>
        <!-- date end -->

        <!--  rate start -->
        <template v-if="selectItem.type == 'slider'">
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
           <el-form-item  label="步长">
            <el-input-number v-model="options.step" placeholder="请输入" />
          </el-form-item>
          <el-form-item  label="最小值">
            <el-input-number v-model="options.min" placeholder="请输入" />
          </el-form-item>
          <el-form-item  label="最大值">
            <el-input-number v-model="options.max" placeholder="请输入"/>
          </el-form-item>
          <el-form-item label="默认值"  >
            <el-input-number
              :step="options.step"
              :min="options.min || -Infinity"
              :max="options.max || Infinity"
              v-model="options.defaultValue"  />
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="标记marks">
            <br>
            <ChangeOption style="width: 100%;" :keyNumber="true" type="keyvalue" v-model="options.marks" />
          </el-form-item> 
            
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.showInput"  label="显示输入框" />
          </el-form-item>
        </template>
        <!-- date end -->

        <!-- 上传文件 start -->
        <template v-if="selectItem.type == 'uploadFile'">
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
          <!-- 上传数量 -->
          <el-form-item  label="最大上传数量" >
            <el-input-number :min="1" v-model="options.limit" />
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.multiple"  label="多选" />
          </el-form-item> 
        </template> 
        <!-- 上传文件 end -->


        <!-- 上传图片 start -->
        <template v-if="selectItem.type == 'uploadImg'">
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
          <!-- 上传数量 -->
          <el-form-item  label="最大上传数量" >
            <el-input-number :min="1" v-model="options.limit" />
          </el-form-item>
           <el-divider ></el-divider>
          <!-- 上传图片样式 -->
          <el-form-item  label="样式">
            <el-radio-group  v-model="options.listType">
              <el-radio-button label="text">text</el-radio-button>
              <el-radio-button label="picture">picture</el-radio-button>
              <el-radio-button label="picture-card">card</el-radio-button>
            </el-radio-group>
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.multiple"  label="多选" />
          </el-form-item> 
        </template> 
        <!-- 上传图片 end -->

        <!-- 级联选择器 start -->
        <template v-if="selectItem.type == 'cascader'">
          <el-form-item  label="选项配置" >
            <el-radio-group   v-model="options.dynamic">
              <el-radio-button :label="0">静态数据</el-radio-button>
              <el-radio-button :label="1">动态数据</el-radio-button> 
            </el-radio-group>
   
            <!-- 远程赋值配置 --> 
            <div v-if="options.dynamic == 1">
                <el-input size="mini" v-model="options.remoteFunc">
                  <template slot="prepend">远端方法</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteValue">
                  <template slot="prepend">值字段</template>
                </el-input>
                <el-input size="mini" v-model="options.remoteLabel">
                  <template slot="prepend">标签字段</template>
                </el-input> 
                <el-input size="mini" v-model="options.remoteChildren" >
                  <template slot="prepend">下级字段</template>
                </el-input>
            </div>  

            <!-- 本地赋值 -->
            <ChangeOption v-show="options.dynamic == 0" :type="selectItem.type" v-model="options.options" />
          </el-form-item>
             <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" />   
            <el-checkbox v-model="options.clearable" label="可清除" />
            <el-checkbox v-model="options.multiple" label="多选" />
            <el-checkbox v-model="options.showSearch" label="可搜索" /> 
          </el-form-item> 
        </template>
        <!-- 级联选择器 end -->


        <!-- 动态表格 start -->
        <template v-if="selectItem.type == 'batch'">
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
          <el-form-item  label="对话框标签宽度">
            <el-input placeholder="请输入" v-model="options.labelWidth" />
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item label="标签对齐方式">
            <el-radio-group v-model="options.labelPosition">
              <el-radio-button label="left">左对齐</el-radio-button>
              <el-radio-button label="right">右对齐</el-radio-button>
              <el-radio-button label="top">顶部对齐</el-radio-button>
            </el-radio-group>
          </el-form-item>

           <el-divider ></el-divider>
          <!-- 上传数量 -->
          <el-form-item  label="滚动高度" >
            <el-input-number :min="0" v-model="options.scrollY" />
          </el-form-item>
           <!-- 表格 -->
          <el-form-item  label="表格样式Class名称">
            <el-input v-model="selectItem.options.customClass" />
          </el-form-item>
            
          <el-form-item  label="表格样式CSS">
            <el-input type="textarea" v-model="selectItem.options.customStyle" />
          </el-form-item>
          <el-divider ></el-divider>
           <el-form-item  label="外部展示字段">
            <el-checkbox-group v-model="selectItem.options.showItem" >
              <!-- 获取当前内部已经包含的要素 -->
              <el-checkbox v-for="item in selectItem.list" :label="item.model" :key="item.model">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
           <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" /> 
            <el-checkbox v-model="options.showLabel" label="显示Label" />
            <el-checkbox v-model="options.hideSequence" label="隐藏序号" />
            <el-checkbox v-model="options.copyRow" label="行复制" />
          </el-form-item> 
        </template> 
        <!-- 动态表格 end -->


         <!-- 开关 switch start-->
        <template v-if="selectItem.type == 'switch'"> 
          <!-- 开关的label -->
          <el-form-item   label="打开标签值">
            <el-input placeholder="请输入" v-model="options.activeText" /> 
          </el-form-item>
           <el-form-item   label="关闭标签值" >
            <el-input placeholder="请输入" v-model="options.inactiveText" /> 
          </el-form-item>
          <el-form-item  label="默认值">
            <el-switch v-model="options.defaultValue" />
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" />  
          </el-form-item> 
        </template> 
        <!-- 开关 switch  end -->


         <!-- 按钮 start-->
        <template v-if="selectItem.type == 'button'"> 
          <!-- 按钮类型 -->
          <el-form-item label="类型">
            <el-radio-group v-model="options.type">
              <el-radio label="primary">Primary</el-radio>
              <el-radio label="default">Default</el-radio>
              <el-radio label="dashed">Dashed</el-radio>
              <el-radio label="danger">Danger</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item  label="按钮操作"> 
            <el-input type="textarea" v-model="options.dynamicFun" placeholder="动态JS,表单数据绑定值符号$" ></el-input>
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />
            <el-checkbox v-model="options.disabled"  label="禁用" />   
          </el-form-item> 
        </template> 
        <!-- 按钮  end -->

        <!-- 标签 start-->
        <template v-if="selectItem.type == 'text'"> 
          <!-- 按钮类型 -->
          <el-form-item  label="文字对齐方式">
            <el-radio-group v-model="options.textAlign">
              <el-radio-button label="left">左</el-radio-button>
              <el-radio-button label="center">居中</el-radio-button>
              <el-radio-button label="right">右</el-radio-button>
            </el-radio-group>
          </el-form-item> 
          <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" /> 
            <el-checkbox v-model="options.showRequiredMark" label="显示必选标记" />
          </el-form-item> 
          <el-divider ></el-divider>
          <el-form-item   label="动态必选" >
           <el-input type="textarea" v-model="options.showRequiredMarkScript" :rows="4" placeholder="请输入表达式或者动态函数,数据实体以$标识"/>
          </el-form-item> 
        </template> 
        <!-- 标签  end -->

        <!-- html start-->
        <template v-if="selectItem.type == 'html'">  
          <el-form-item label="默认值">
            <el-input type="textarea" v-model="options.defaultValue" :rows="4" />
          </el-form-item>
          <el-divider ></el-divider>
          <el-form-item   label="操作属性" >
            <el-checkbox v-model="options.hidden"  label="隐藏" />  
          </el-form-item> 
        </template> 
        <!-- html  end -->


        <!-- ################### 布局  start ################################  -->
        <!-- 分割线 start-->
        <template v-if="selectItem.type == 'divider'">  
          

          <el-form-item  label="方向" >
            <el-radio-group  v-model="options.direction">
              <el-radio-button label="horizontal">横向</el-radio-button>
              <el-radio-button label="vertical">竖向</el-radio-button> 
            </el-radio-group>
          </el-form-item>  
          <el-divider ></el-divider>
          <el-form-item  label="标签位置" v-if="options.direction && options.direction == 'horizontal'">
            <el-radio-group  v-model="options.orientation">
              <el-radio-button label="left">左</el-radio-button>
              <el-radio-button label="center">居中</el-radio-button>
              <el-radio-button label="right">右</el-radio-button>
            </el-radio-group>
          </el-form-item> 
        </template> 
        <!-- 分割线  end -->

        <!-- 栅格布局 start-->
        <template v-if="selectItem.type == 'grid'">   
          <el-form-item  label="栅格间距">
            <el-input-number  v-model="selectItem.options.gutter"  placeholder="请输入" />
          </el-form-item>
          <el-form-item label="列配置项">
            <ChangeOption v-model="selectItem.columns" type="colspan" />
          </el-form-item>
        </template> 
        <!-- 栅格布局  end -->

        <!-- 表格布局 start-->
        <template v-if="selectItem.type == 'table'">   
          <el-form-item  label="宽度">
            <el-input placeholder="请输入" v-model="options.width" />
          </el-form-item>
          <!-- 表格 -->
          <el-form-item  label="表格样式Class名称">
            <el-input v-model="selectItem.options.customClass" />
          </el-form-item>
          <el-form-item  label="表格样式CSS">
            <el-input type="textarea" v-model="selectItem.options.customStyle" />
          </el-form-item>
         <el-divider ></el-divider>
          <el-form-item label="操作属性">
            <el-checkbox v-model="options.bordered" label="显示边框" />
            <el-checkbox v-model="options.bright" label="鼠标经过点亮" />
            <el-checkbox v-model="options.small" label="紧凑型" />
          </el-form-item>
        </template> 
        <!-- 表格布局  end -->
 

        <!-- ################### 布局  end ################################  -->

         <!-- tooptip 提示 -->
        <el-form-item  v-if="[
          'input',
          'textarea',
          'number',
          'select',
          'checkbox',
          'radio',
          'date',
          'time',
          'rate',
          'slider',
          'uploadFile',
          'uploadImg',
          'cascader',
          'switch',
          'button',
          'text',
          'html',
          'divider' 
        ].includes(selectItem.type)" label="tooptip提示" > 
          <el-input type="textarea" v-model="options.tooptip"  placeholder="鼠标移动到组件上的提示信息" /> 
        </el-form-item> 
        <el-divider ></el-divider>

        <!-- ################### 校验   start ############################## -->
        <el-form-item  v-if="selectItem.rules  && selectItem.rules.length > 0 " label="校验" >
          <el-checkbox v-model="selectItem.rules[0].required" label="必填" />
          <el-input v-model="selectItem.rules[0].message"  placeholder="必填校验提示信息" />
          <ChangeOption v-model="selectItem.rules" type="rules" :disabled="disabled" />

          <el-divider ></el-divider>
        </el-form-item>
        <!-- ################### 校验   end ############################## -->

       

        <template v-if="!hideModel && selectItem && selectItem.options">
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
          <el-divider ></el-divider>
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ChangeOption 
  }
};
</script>
