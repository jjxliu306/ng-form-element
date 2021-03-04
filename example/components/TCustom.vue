<template>
	<div>

		<el-select v-if="!preview" v-model="models[record.model]" placeholder="请选择" :disabled="disabled" @change="change">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		</el-select>
		<div>
			{{models[record.model + '_label']}}
		</div>

	</div>


</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    props: {    
	     // 表单数组 
	    record: {
	      type: Object,
	      required: true
	    }, 
	    models: {
	      type: Object,
	      required: true
	    }, 
	    disabled: {
	      type: Boolean,
	      default: false
	    } ,
	      // 是否预览结果表单
	    preview: {
	      type: Boolean ,
	      default: false
	    } 
    },
    methods: {
    	change(v) {

    		const labels = this.options.filter(t=>t.value == v)
    		const ds = labels.map(t=>t.label).join(',')

    		this.$set(this.models , this.record.model + '_label' , ds)
    	}
    }
  }
</script>