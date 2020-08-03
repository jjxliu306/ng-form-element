<!-- 
  动态表格 用于批量填入数据
 -->
<template>
 <div> 
    <el-table 
      :class="[
        'form-table',
        record.options.customClass ? record.options.customClass : '' 
      ]" 
      :rowKey="record => record.key" 
      :data="models[record.model]" 
      bordered
      :scroll="{
        x:
          record.list.length * 190 +
          80 +
          (!record.options.hideSequence ? 60 : 0),
        y: record.options.scrollY
      }"
    > 
      <template  v-if="isVisible">
        <el-table-column 
          v-if="!record.options.hideSequence"
          label="序号"
          align="center"
          type="index"
          width="50" >  
        </el-table-column>
        <TableFormItem 
              v-for="(item,index) in record.list"
              :key="item.key + '1'"
              :parent="record"
              :record="item"
              :config="config"
              :parentDisabled="disabled"
              :index="index"
              :domains="models[record.model]" 
              v-model="record[item.model]"
              :renderPreview="renderPreview"
              @input="handleInput"
        />
        <el-table-column  
          label="操作"
          align="center"
          v-if="!renderPreview"
          width="100">
          <template  slot-scope="scope"> 
            <el-button type="danger"   @click="removeDomain(scope.$index)">
              <i class="el-icon-delete" />删除 
            </el-button>
          </template> 
        </el-table-column> 
      </template> 
      
    </el-table>
    <el-button v-if="!renderPreview" type="dashed" :disabled="disabled" @click="addDomain">
      <i class="el-icon-circle-plus-outline" />增加
    </el-button>
  </div>
</template>

<script>
import TableFormItem from "./table-form-item";
export default {
  name: "TableBatch",
  props:{
    record: {
      type: Object,
      required : true
    },
    value: {
      type: Object,
      required : false
    },
    models: {
      type: Object,
      required : true
    }, 
    config: {
      type: Object,
      required : false
    },
    parentDisabled: {
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
    TableFormItem
  },
  watch: {
    value: {
      // value 需要深度监听及默认先执行handler函数
      handler(val) { 
        if(val instanceof Array){ 
           this.models[this.record.model] = val || [];
        }
  
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      isVisible: true 
    };
  },
  computed: { 
    disabled() {
      return this.record.options.disabled || this.parentDisabled;
    }
  },
  methods: {
    validationSubform() { 
      return true ;
    },
    resetForm() {
      this.$refs.dynamicValidateForm.resetFields();
    },
    removeDomain(index) { 
      let domains = this.models[this.record.model] 
      if(domains) { 
        if (index !== -1) {
          domains.splice(index, 1);
        }
      }
      
    },
    addDomain() {
      let data = {};
      this.isVisible = false
      this.record.list.forEach(item => {
        if(item.options.defaultValue)
          data[item.model] = item.options.defaultValue;
        else 
          data[item.model] = null
      }); 
      
      let domains = this.models[this.record.model]
      if(!domains || !(domains instanceof Array)){ 
        this.models[this.record.model] = []
      }
 
      this.models[this.record.model].push({
        ...data,
        key: Date.now()
      });
      this.handleInput();

       this.isVisible = true
 
    },
    handleInput() {
      this.$emit("change", this.models);
    }
  }
};
</script>
<style scoped>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #e89;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
