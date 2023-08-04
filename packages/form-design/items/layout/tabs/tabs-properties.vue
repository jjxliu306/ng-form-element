<template>
<div>
	<div class="layout-tabs-col-pro" v-for="(val, index) in value" :key="index">
        <el-col :span="18">
        	<el-input
	            style="width:100%"
	            :max="24"
	            v-model="val.label"
	            :placeholder="t('ngform.item.name')"
        	/>
       	</el-col>
        <el-col :span="6">
        	<div @click="handleDelete(index)" class="delete" :title="t('ngform.item.delete')">
             	<i class="el-icon-delete" />
         	</div>
     	</el-col>
    </div>
    <div v-if="!disabled" :span="24">
    	<el-button type="primary" @click="handleAddCol">
    		{{t('ngform.item.add')}}
    	</el-button>
    </div>
</div>
</template>
<script>
import LocalMixin from '../../../../locale/mixin.js'
export default {
  mixins: [LocalMixin],
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
	      // 添加 
	      const name = this.t('ngform.item.tab.name')
	      const len = this.value.length + 1
	      const addData = this.value.concat([
	        { 
	        	label: name + (len),
	          list: []
	        }
	      ])
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
<style>
.layout-tabs-col-pro .delete {
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

</style>
<!-- 
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
</style> -->