<template>
	<div>

		<el-input
		  type="textarea"
		  autosize
		  placeholder="请输入图片地址"
		  v-model="models[record.model]" :disabled="disabled">
		</el-input>

		 <el-image
	      :style="record.options.style ? record.options.style : null"
	      :src="models[record.model]"
	      fit="scale-down"></el-image>

	<!-- 	<el-select v-if="!preview" v-model="models[record.model]" placeholder="请选择" :disabled="disabled" @change="change">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		</el-select>
		<div>
			{{models[record.model + '_label']}}
		</div> -->

	</div>


</template>
<script>
  export default {
    data() {
      return {
         
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
    	 
    }
  }
</script>