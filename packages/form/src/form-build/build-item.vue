<template>
  <!-- 栅格布局 -->
  <el-row
    v-if="record.type === 'grid' && dynamicVisibleItem"
    class="grid-row"
    :gutter="record.options.gutter"
  >
    <el-col
      class="grid-col"
      v-for="(colItem, index) in record.columns"
      :key="index"
      :span="colItem.span || 0"
    >
      <ng-form-build-item
        ref="nestedComponents"
        @handleReset="$emit('handleReset')"
        @change="handleChange"
         @forceUpdate="forceUpdate"
        v-for="item in colItem.list"
        :disabled="disabled"
        :renderPreview="renderPreview"
        :models.sync="models"  
        :key="item.key" 
        :record="item"
        :formConfig="formConfig"
        
      />
    </el-col>
  </el-row> 
  <!-- 表格布局 -->
  <table
    v-else-if="record.type === 'table' && dynamicVisibleItem" 
    :class="[
      'table-layout','form-table',
      record.options.customClass ? record.options.customClass : '' ,
      record.options.bright ? 'bright' : '' ,
      record.options.small ? 'small' : '' ,
      record.options.bordered ? 'bordered' : '' 
    ]" 
    :style="record.options.customStyle"
    >
    <template v-for="(trItem, trIndex) in record.trs">
      <tr  :key="trIndex" v-if="showTr(trItem , models)">
        <td
          :class="['table-td', tdItem.class]"
          :style="tdItem.style"
          v-for="(tdItem, tdIndex) in trItem.tds"
          :key="tdIndex"
          :colspan="tdItem.colspan"
          :rowspan="tdItem.rowspan"
        >
          <ng-form-build-item
            ref="nestedComponents"
            @handleReset="$emit('handleReset')"
            @change="handleChange"
             @forceUpdate="forceUpdate"
            v-for="item in tdItem.list"
            :disabled="disabled" 
            :renderPreview="renderPreview"
            :models.sync="models"  
            :key="item.key"
            :record="item"
            :formConfig="formConfig"
             
          />
        </td>
      </tr>
    </template>
   
  </table>
  <!-- 2021-06-27 lyf 弹性容器 -->
 
    <div 
     v-else-if="record.type === 'control' && dynamicVisibleItem" 
      :id="record.model" :name="record.model"
     >   
     <div v-for="(mdata, idx) in models[record.model]"  :key="idx"
      :class="[
        'table-layout','form-table',
        record.options.customClass ? record.options.customClass : '' ,
        record.options.bright ? 'bright' : '' ,
        record.options.small ? 'small' : '' ,
        record.options.bordered ? 'form-table-bordered' : '' 
      ]" 
      :style="record.options.customStyle"
       @contextmenu.prevent="handleShowRightMenu($event , idx) "
     >
      <div  
        v-for="(item, index) in record.list"  
        :key="index"  
        >
       <ng-form-build-item
          ref="nestedComponents"
          @handleReset="$emit('handleReset')"
          @change="handleChange"
           @forceUpdate="forceUpdate" 
          :disabled="disabled"
          :renderPreview="renderPreview"
          :models.sync="mdata"   
          :record="item"
          :formConfig="formConfig" 
          :prop-prepend="record.model + '.' + idx + '.'"
        />
      </div> 
         
        

     </div>
      <!-- 右键里的删除和复制 下方的新增 -->
      <el-button v-if="!renderPreview && !record.options.noAdd" type="dashed" size="mini" :disabled="disabled" @click="addControl">
        <i class="el-icon-circle-plus-outline" />增加
      </el-button>
      <div
        v-show="!renderPreview && showRightMenu"
        :style="{ 'top': menuTop + 'px', 'left': menuLeft + 'px' }"
        class="right-menu"
        id="rightMenu"
      >
        <ul> 
         <li v-if="!record.options.noCopy" @click="handleCopy"><i class="el-icon-document" />复制</li>
          <hr v-if="!record.options.noCopy && !record.options.noRemove">
          <li v-if="!record.options.noRemove" @click="handleRemove"><i class="el-icon-delete" />删除</li> 
        </ul>
      </div>
    </div> 
  
    
      <el-tooltip 
        class="item" 
        effect="light" 
        :enterable="false"
        :open-delay="500"
        v-else-if="dynamicVisibleItem && record.options.tooptip && record.options.tooptip.trim()"
          
        placement="top-start">
        <div slot="content" class="tooltip-content"> {{record.options.tooptip}}</div>
        <form-item
          ref="nestedComponents"
          @handleReset="$emit('handleReset')"
          @change="handleChange" 
          @forceUpdate="forceUpdate"
          :disabled="disabled" 
          :renderPreview="renderPreview"
          :models.sync="models"  
          :key="record.key"
          :record="record"
          :formConfig="formConfig"
          :prop-prepend="propPrepend"
        />
      </el-tooltip> 
     
      <form-item
        v-else-if="dynamicVisibleItem"
        ref="nestedComponents"
        @forceUpdate="forceUpdate"
        @handleReset="$emit('handleReset')"
        @change="handleChange" 
        :disabled="disabled" 
        :renderPreview="renderPreview"
        :models.sync="models"  
        :key="record.key"
        :record="record"
        :formConfig="formConfig"
        :prop-prepend="propPrepend"
      />
      
   
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import  FormItem  from "../form-item";
import {dynamicFun} from '../utils'
export default {
  name: "ng-form-build-item",
  data() {
    return {
      menuTop: 0,
      menuLeft: 0,
      selectControlIndex: -1,
      showRightMenu: false
    }
  },
  props: {
    record: {
      type: Object,
      required: true
    },
    models: {
      type: Object , 
      required: true
    },
    formConfig: {
      type: Object,
      default: ()=> ({
        labelWidth: 120
      })
      //required: true
    }, 
    propPrepend: {
      // form-item的 prop前缀 默认不需要
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    } 
  },
  components: {
    FormItem
  },
  computed: { 
    // 是否动态显示当前元素 
    // 返回true 显示 false 不显示
    dynamicVisibleItem(){
      
      if(!this.record.options || !this.record.options.dynamicVisible){
        return true
      }
      if(!this.record.options.dynamicVisibleValue){
        return true
      }
      let fstr = this.record.options.dynamicVisibleValue;
      // 打开了开关 这里获取函数内容
  
      const ret = dynamicFun(fstr,this.models) 
      return ret ;
    }
  },
  created() {
   
    // 如果是control 则默认初始化就有一份空数据,control 下的list所有组件初始一个 
    if(this.record.type == 'control' && !this.renderPreview && (!Object.prototype.hasOwnProperty.call(this.models, this.record.model) || !this.models[this.record.model] )) {
      const data_ = {} 

      this.record.list.forEach(t=> {
        if(t && t.model)
          data_[t.model] = null
      })  
      this.$set(this.models , this.record.model , [data_])
    }

  },
  mounted() {
    // 添加监听取消右键菜单
    document.addEventListener("click", this.handleRemoveRightMenu, true);
    document.addEventListener("contextmenu", this.handleRemoveRightMenu, true);

    
  },
  destroyed() {
    // 移除监听
    document.removeEventListener("click", this.handleRemoveRightMenu, true);
    document.removeEventListener(
      "contextmenu",
      this.handleRemoveRightMenu,
      true
    );
  },
  methods: {
    validationSubform() {
      // 验证动态表格
      if (
        typeof this.$refs.nestedComponents === "undefined" ||
        typeof this.$refs.nestedComponents.validationSubform === "undefined"
      )
        return true;

      return this.$refs.nestedComponents.validationSubform();
    },
    handleChange(value, key) { 
      this.$emit("change", value, key);
    },
    forceUpdate(){ 
       this.$emit("forceUpdate" );
    },
     showTr(trItem , model){
      // 判断tr中是否还存在需要显示的td数据 
      const tds = trItem.tds; 
      let fs = tds.map(t=>{
        const tdlist = t.list 
         // 判断list中每个数据是否需要显示
        for(let i in tdlist){
          const tdRecord = tdlist[i]

          if(!tdRecord.options || !tdRecord.options.dynamicVisible){
            return tdRecord
          }
          // 没有配置动态显示隐藏的函数
          if(!tdRecord.options.dynamicVisibleValue){
            return true
          }

          let fstr = tdRecord.options.dynamicVisibleValue;

           // 打开了开关 这里获取函数内容 
          const fvalue = dynamicFun(fstr,model)  

          if(fvalue) {
            return tdRecord
          }

        } 
 
      })

      for(let j in fs) {
        if(fs[j]){
          return true
        }
      }

      return false 

    },
    // 容器添加一行数据
    addControl() {

      // 将当前数据复制一份 压入
      const data_ = {} 

      this.record.list.forEach(t=> {
        data_[t.model] = ''
      })
      console.log('models' , this.models[this.record.model])
      this.models[this.record.model].push(data_) 

    },
    handleShowRightMenu(e, idx) {
      // 显示右键菜单
      e.stopPropagation();

      // 判断是否有复制和删除 如果没有直接返回
      if(this.record.options.noRemove && this.record.options.noCopy) {
        this.showRightMenu = false
        return false
      }

      // this.fileItem = item
      // 显示
      this.showRightMenu = true;
 

      // 计算rightMenu得高度和宽度 和当前屏幕对比 来决定菜单出现得起始位置
      let height = 210;// document.getElementById('rightMenu').clientHeight ;
      let width = 280 ;//document.getElementById('rightMenu').clientWidth ;

      // 获取屏幕高度和宽度 比对
      const bodyHeight = document.body.clientHeight  ;
      const bodyWidth = document.body.clientWidth ;
 
        
      // 定位 
      if(e.clientY + height > bodyHeight) {
        this.menuTop = e.clientY - height;
      } else {
        this.menuTop = e.clientY;
      }

      if(e.clientX + width > bodyWidth) {
        this.menuLeft = e.clientX - width;
      } else {
        this.menuLeft = e.clientX + 20 ;
      }
      
      this.selectControlIndex = idx

      return false;
    },
    handleCopy() {
      if(this.selectControlIndex == undefined || this.selectControlIndex < 0) {
        return 
      }

      if(!this.models[this.record.model] || this.models[this.record.model].length < this.selectControlIndex) {
        return 
      }

      const cloneData = cloneDeep(this.models[this.record.model][this.selectControlIndex])

      this.models[this.record.model].push(cloneData)

    },
    handleRemove() {
      if(this.selectControlIndex == undefined || this.selectControlIndex < 0) {
        return 
      }

      if(!this.models[this.record.model] || this.models[this.record.model].length < this.selectControlIndex) {
        return 
      }

      if(this.models[this.record.model].length == 1) {
        
        this.$message.error(this.record.label + '内仅存的一条数据不能删除')
        return
      }

      this.models[this.record.model].splice(this.selectControlIndex,1)

    },
    handleRemoveRightMenu() {
      // 取消右键菜单
      this.showRightMenu = false;
    }
  }
};
</script>
