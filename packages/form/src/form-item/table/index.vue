<!-- 
  动态表格 用于批量填入数据
 -->
<template>
 <div  :id="record.model" :name="record.model" class="form-table-index">  
   
    <el-table
      :class="[
        'form-table',
        record.options.customClass ? record.options.customClass : '' 
      ]" 
      :style="record.options.customStyle"
      :rowKey="record => record.key" 
      :data="models[record.model]" 
      :border="record.options.showBorder"
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
        <template  v-for="(item,index) in record.list">
          <el-table-column   
          v-if="record.options.addType != 'dialog' || (record.options.showItem && record.options.showItem.includes(item.model) )"
          :key="index"
          :label="item.label"
          :width="record.options.colWidth && record.options.colWidth[item.model] ? record.options.colWidth[item.model] : undefined"
          align="center">
          <template  slot-scope="scope"> 
            <!-- 这里就要判断类型了 -->   
            <!-- 2021-03-14 判断新增数据方式，如果是怎加航 这里就不能预览了 -->
            <TableItem :record="item" :renderPreview="renderPreview || record.options.addType == 'dialog'" :domains="models[record.model][scope.$index]" /> 
          </template>  
        </el-table-column>
        </template> 
        <el-table-column  
          label="操作"
          align="center" 
          v-if="!renderPreview || record.options.addType == 'dialog'"
          :width="controlWidth ">
          <template  slot-scope="scope"> 
            <el-button type="success"  v-if="renderPreview && record.options.addType == 'dialog'"  @click="updateDomain(scope.row)">
              <i class="el-icon-eye" />查看
            </el-button>
            <el-button type="primary"  v-if="!renderPreview && record.options.addType == 'dialog'"  @click="updateDomain(scope.row)">
              <i class="el-icon-edit" />修改
            </el-button>
            <el-button type="primary"  v-if="!renderPreview && record.options.copyRow"  @click="copyDomain(scope.row)">
              <i class="el-icon-copy-document" />复制
            </el-button>
            <el-button type="danger"   v-if="!renderPreview" @click="removeDomain(scope.$index)">
              <i class="el-icon-delete" />删除 
            </el-button>
          </template> 
        </el-table-column> 
      </template> 

      
    </el-table>
    <el-button v-if="!renderPreview" type="dashed" :disabled="disabled" @click="addDomain">
      <i class="el-icon-circle-plus-outline" />增加
    </el-button>

    <AddOrUpdate ref="addOrUpdate" v-if="addOrUpdateVisible" :formConfig="config" :formTemplate="templateData" :renderPreview="renderPreview" @formAdd="formAdd"  @formUpdate="formUpdate"/>

  </div>
</template>

<script>
//import TableFormItem from "./table-form-item";
import TableItem from './table-item'
import AddOrUpdate from './add-or-update'
export default {
  name: "TableBatch",
  props:{
    record: {
      type: Object,
      required : true
    },
    value: {
      type: [Object , Array],
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
    TableItem,AddOrUpdate
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
      addOrUpdateVisible: false,
      isVisible: true 
    };
  },
  computed: { 
    disabled() {
      return this.record.options.disabled || this.parentDisabled;
    },
    templateData() {
      return {list: this.record.list, config: { "labelPosition": this.record.options.labelPosition ? this.record.options.labelPosition : "right", "labelWidth": this.record.options.labelWidth, "size": "mini", "hideRequiredMark": false } }
    },
     controlWidth() {
      let w = 100 
     
      if(this.renderPreview) { 
        return w
      }
      if(this.record.options.copyRow) {
        w += 80
      }
      if(this.record.options.addType == 'dialog') {
        w += 80
      } 
       
      return w 
    } 
  },
  mounted(){ 
    // 2021-05-10 lyf 只要没有默认值都先给回填一个  这个可以处理初始化么有值，导致后面很多联动没法做，必须要通过v-if刷新 
    if(!Object.prototype.hasOwnProperty.call(this.models, this.record.model)  ) {
      this.$set(this.models , this.record.model , [])
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

      this.$confirm(`确定删除此数据?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        let domains = this.models[this.record.model] 
        if(domains) { 
          if (index !== -1) {
            domains.splice(index, 1);

            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000 
            })
          }
        }
      }) 
      
    },
    updateDomain(data) {
      this.addOrUpdateVisible = true
      
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(data)
      })
    },
    // 行复制 2021-02-17 lyf
    copyDomain(data) {
      let copyData = {...data}
      copyData._id = null
      if(this.record.options.addType == 'dialog') {
        this.addOrUpdateVisible = true 
        
        this.$nextTick(() => {
           this.$refs.addOrUpdate.init(copyData) 
        })
      } else {
        // 直接添加一行数据
        this.isVisible = false 
        
        let domains = this.models[this.record.model] 
        
        domains.push(copyData)   
         this.isVisible = true 
      }
      
    },
    addDomain() {  
      if(this.record.options.addType == 'dialog') {
        this.addOrUpdateVisible = true 
        this.$nextTick(() => {
           this.$refs.addOrUpdate.init() 
        })
      } else {
        // 直接添加一行数据
        this.isVisible = false 
        const items = this.record.list

        const itemObject = {} 
        items.forEach(t=>{
          itemObject[t.model] = ''
        })
 
        let domains = this.models[this.record.model] 
        if(!domains) {
          const ds = [itemObject] 

          domains = ds
        } else {
          domains.push(itemObject)  
        }

        this.$set(this.models , this.record.model , domains)
         this.isVisible = true 
      } 
    },
    formAdd(form){
      this.isVisible = false 
      let domains = this.models[this.record.model] 
      if(!domains) {
        const ds = [form]
        this.models[this.record.model]  = ds
        domains = this.models[this.record.model]
      } else {
        domains.push(form)  
      }

      // 排序
      domains.sort(function(a, b){
        return a.seq - b.seq
      });
      this.isVisible = true
      this.$message({
        message: '添加成功',
        type: 'success',
        duration: 1000 
      })

      
    },
    formUpdate(form){ 
      let domains = this.models[this.record.model] 

      for(var i in this.models[this.record.model] ){
        if(this.models[this.record.model] [i]._id == form._id){
          this.models[this.record.model].splice(i,1,form)
          break
        }
      } 

       this.models[this.record.model].sort(function(a, b){
          return a.seq - b.seq
        });
      this.$message({
        message: '更新成功',
        type: 'success',
        duration: 1000 
      }) 

    },
    handleInput() {
      this.$emit("change", this.models);
    }
  }
};
</script>
 
