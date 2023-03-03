<template>
<div>
	<div class="layout-grid-col-pro" v-for="(val, index) in value" :key="index">
        <el-col :span="18">
        	<el-input-number
	            style="width:100%"
	            :max="24"
	            v-model="val.span"
	            placeholder="名称"
        	/>
       	</el-col>
        <el-col :span="6">
        	<div @click="handleDelete(index)" class="delete" title="删除">
             	<i class="el-icon-delete" />
         	</div>
     	</el-col>
    </div>
    <div v-if="!disabled" :span="24">
    	<el-button type="primary" @click="handleAddCol">添加</el-button>
    </div>
</div>
</template>
<script>
export default {
	props: {
		value: {
			type: Array
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleAddCol() {
	      // 添加栅格Col
	      let addData = [
	        ...this.value,
	        {
	          span: 12,
	          list: []
	        }
	      ];
	      this.$emit("input", addData);
	    },
		handleDelete(deleteIndex) {
	      // 删除
	      this.$emit(
	        "input",
	        this.value.filter((val, index) => index !== deleteIndex)
	      );
    	},
	}
}
</script>
<style lang="scss">
.layout-grid-col-pro {
	.delete {
    	margin-left: 10px;
	    background: #ffe9e9;
	    color: #f22;
	    width: 28px;
	    height: 28px;
	    line-height: 28px;
	    text-align: center;
	    border-radius: 50%;
	    overflow: hidden;
	    transition: all 0.3s;
	    cursor: pointer;
  	}
}
</style>