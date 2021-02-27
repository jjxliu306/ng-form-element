<template>
  <!-- 栅格布局 -->
  <el-row
    v-if="record.type === 'grid' && dynamicVisibleItem"
    class="grid-row"
    :gutter="record.options.gutter"
  >
    <el-col
      class="grid-col"
      v-for="(colItem, idnex) in record.columns"
      :key="idnex"
      :span="colItem.span || 0"
    >
      <buildBlocks
        ref="nestedComponents"
        @handleReset="$emit('handleReset')"
        @change="handleChange"
         @forceUpdate="forceUpdate"
        v-for="item in colItem.list"
        :disabled="disabled"
        :renderPreview="renderPreview"
        :models.sync="models"  
        :key="item.key"
          :data="data"
        :record="item"
        :formConfig="formConfig"
        :config="config"
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
          <buildBlocks
            ref="nestedComponents"
            @handleReset="$emit('handleReset')"
            @change="handleChange"
             @forceUpdate="forceUpdate"
            v-for="item in tdItem.list"
            :disabled="disabled"
              :data="data"
            :renderPreview="renderPreview"
            :models.sync="models"  
            :key="item.key"
            :record="item"
            :formConfig="formConfig"
            :config="config"
          />
        </td>
      </tr>
    </template>
   
  </table>
 
    
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
          :data="data"
          :key="record.key"
          :record="record"
          :formConfig="formConfig"
          :config="config"
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
        :data="data"
        :key="record.key"
        :record="record"
        :formConfig="formConfig"
        :config="config"
      />
      
   
</template>
<script>
 
import  FormItem  from "../form-item";
import {dynamicFun} from '../utils'
export default {
  name: "buildBlocks",
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
      required: true
    },
    config: {
      type: Object,
      default: () => ({})
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    },
    data: {// 整个事项实体
      type: Object,
      default: () => ({})
    },
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

    }
  }
};
</script>
