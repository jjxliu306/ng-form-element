import mixin from '../../mixin.js'
export default {
  mixins: [mixin], 
  computed: {
    // 2022-03-14 lyf 针对select radio checkbox这些数据的动态来源修改后进行刷新
    dynamicOption() {

      // 只在表单模板拖拽绘制的时候生效

      if(!this.isDragPanel || !['select','radio','checkbox'].includes(this.record.type)) {
        return null 
      }
      if(this.record.options.dynamic == 0){
        return null
      }
      if(this.record.options.dynamic == 1) {
        return this.record.options.dynamic + this.record.options.remoteFunc + this.record.options.dataPath + this.record.options.remoteValue + this.record.options.remoteLabel
      } else if(this.record.options.dynamic == 2) {
        return this.record.options.dynamic + this.record.options.dictType
      }
      
      return null
    }
  }, 
  watch: {
     // 2022-03-14 lyf 监听下拉、多选、单选配置变化后如果当前是表单模板编辑状态 则刷新
    dynamicOption: {
      handler(val, oldVal){
         this.initDynamicValue()
      },
      deep:true 
    },
  },
  methods: {

  }
}