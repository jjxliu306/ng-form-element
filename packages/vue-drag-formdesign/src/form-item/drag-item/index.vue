<!--
 * author lyf
 * date 2020-07-06
 * description 可拖拽元素的列表 包含基础组件和布局组件
 --> 
<template>
	<el-card header="组件列表" class="box-card form-item ">
		<el-collapse v-model="actives"  >
		  	<el-collapse-item title="基础组件" name="1">
		  		<DragItem 
	                :list="basicsArray"
	                @generateKey="generateKey"
	                @handleListPush="handleListPush"
	                @start="handleStart"/>
		  	</el-collapse-item>
		  	<el-collapse-item title="布局组件" name="2">
		  		<DragItem 
	                :list="layoutArray"
	                @generateKey="generateKey"
	                @handleListPush="handleListPush"
	                @start="handleStart"/>
		  	</el-collapse-item>

		</el-collapse> 
	</el-card>
</template>
<script>
import {
  basicsList,
  // highList,
  layoutList,
  customComponents
} from "../config/form-item-config.js";
import DragItem from './module/dragItem'
export default {
	components: {
		DragItem
	},
	data(){
		return {
			actives:['1','2','3'],
			noModel: [
		        "button",
		        "divider",
		        "card",
		        "grid",
		        "table",
		        "alert",
		        "text",
		        "html"
		    ],
		    startType: "",
		    data: {
		        list: [],
		        config: {
		          layout: "horizontal",
		          labelCol: { span: 4 },
		          wrapperCol: { span: 18 },
		          hideRequiredMark: false,
		          customStyle: ""
		        }
		      },
		      previewOptions: {
		        width: 850
		    },
		    selectItem: {
		       key: ""
		    } 
		}
	},
	computed: {
	    basicsArray() {
	      	// 计算需要显示的基础字段
	      	const blist = basicsList
	      	blist.forEach(t=>{
	      		t.options.dynamicHide = false
        		t.options.dynamicHideValue = ''
	      	}) ;
	      	return blist
	    },
	    layoutArray(){ 
	    	const llist = layoutList
	    	llist.forEach(t=>{
	      		t.options.dynamicVisible = false
        		t.options.dynamicVisibleValue = ''
	      	}) ;
	      	return llist
	    }
	},
	methods: {
		generateKey(list, index) {
	      // 生成key值
	      const key = list[index].type + "_" + new Date().getTime();
	      this.$set(list, index, {
	        ...list[index],
	        key,
	        model: key
	      });
	      if (this.noModel.includes(list[index].type)) {
	        // 删除不需要的model属性
	        delete list[index].model;
	      }
	    },
	    handleListPush(item) {
	      // 双击控件按钮push到list
	      // 生成key值
	      if (!this.selectItem.key) {
	        // 在没有选择表单时，将数据push到this.data.list
	        const key = item.type + "_" + new Date().getTime();
	        item = {
	          ...item,
	          key,
	          model: key
	        };
	        if (this.noModel.includes(item.type)) {
	          // 删除不需要的model属性
	          delete item.model;
	        }
	        const itemString = JSON.stringify(item);
	        const record = JSON.parse(itemString);
	        // 删除icon及compoent属性
	        delete record.icon;
	        delete record.component;
	        this.data.list.push(record);
	        this.handleSetSelectItem(record);
	        return false;
	      }
	      this.$refs.KFCP.handleCopy(false, item);
	    },
	    handleStart(type) {
	      this.startType = type;
	    },
	}
}

</script>
<style >
.form-item{ 
	height: 100%; 

}

</style>