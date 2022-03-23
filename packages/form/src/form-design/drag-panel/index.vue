<!--
 * author lyf
 * date 2020-07-06
 * description 可拖拽元素的列表 包含基础组件和布局组件
 --> 
<template>
	<el-card header="组件列表" class="box-card form-item ">
		<el-collapse v-model="actives" accordion >
		  	<el-collapse-item title="基础组件" name="1" v-if="basicItem == true || basicItem.length > 0">
		  		<DragItem 
	                :list="basicsArray"
	                @generateKey="generateKey"
	                @handleListPush="handleListPush"
	                @start="handleStart"
	                @end="handleEnd"/>
		  	</el-collapse-item>
		  		 <!-- 个性化控件 -->
            <el-collapse-item v-if="personalArray.length > 0 && (personalItem == true || personalItem.length > 0)" title="个性化组件" name="2" >
              <DragItem
                :list="personalArray"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
                @start="handleStart"
                @end="handleEnd"
              />
            </el-collapse-item>
		  	 <!-- 自定义控件 -->
            <el-collapse-item v-if="customComponents.length > 0" title="自定义组件" name="3" >
              <DragItem
                :list="customComponents"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
                @start="handleStart"
                @end="handleEnd"
              />
            </el-collapse-item>
		  	<el-collapse-item title="布局组件" name="4" v-if="layoutItem == true || layoutItem.length > 0">
		  		<DragItem 
	                :list="layoutArray"
	                @generateKey="generateKey"
	                @handleListPush="handleListPush"
	                @start="handleStart"
	                @end="handleEnd"/>
		  	</el-collapse-item>

		</el-collapse> 
	</el-card>
</template>
<script>
import { basicsList,  layoutList ,personalList, noModelList} from "../config.js";
import DragItem from './item'
export default {
	components: {
		DragItem
	},
	data(){
		return {
			actives:['1'],
			noModel: noModelList,
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
	props: {
		 // 基础组件需要展示的列表 或者false全部不展示
	    basicItem: {
	      type: [Boolean , Array] 
	    }, 
	    // 个性化组件需要展示的列表 或者false全部不展示
	    personalItem: {
	      type: [Boolean , Array] 
	    },
	     //布局组件需要展示的列表 或者false全部不展示
	    layoutItem: {
	      type: [Boolean , Array] 
	    } 
	},
	computed: {
	    basicsArray() {
	    	if(this.basicItem == false) {
	    		return []
	    	}
	      	// 计算需要显示的基础字段
	      	let blist = basicsList
	      	if(this.basicItem && this.basicItem instanceof Array && this.basicItem.length > 0) {
	      		blist = blist.filter(t=> this.basicItem.indexOf(t.type) >= 0)
	      	}
	      	blist.forEach(t=>{
	      		t.options.dynamicHide = false
        		t.options.dynamicHideValue = ''
        		if(!t.key) { 
        		 	const key = t.type + "_" + new Date().getTime()
        		 	t['key'] = key 
        		 	t['model'] = key
        		}

	      	}) ;
	      	return blist
	    },
	    personalArray(){
	    	if(this.personalItem == false) {
	    		return []
	    	}
	    	// 计算需要显示的基础字段
	      	let blist = personalList
	      	if(this.personalItem && this.personalItem instanceof Array && this.personalItem.length > 0) {
	      		blist = blist.filter(t=> this.personalItem.indexOf(t.type) >= 0)
	      	}
	      	blist.forEach(t=>{
	      		t.options.dynamicHide = false
        		t.options.dynamicHideValue = ''
        		if(!t.key) { 
        		 	const key = t.type + "_" + new Date().getTime()
        		 	t['key'] = key 
        		 	t['model'] = key
        		}

	      	}) ;
	      	return blist
	    },
	    layoutArray(){ 
	    	if(this.layoutItem == false) {
	    		return []
	    	}
	    	let llist = layoutList
	    	if(this.layoutItem && this.layoutItem instanceof Array && this.layoutItem.length > 0) {
	      		llist = llist.filter(t=> this.layoutItem.indexOf(t.type) >= 0)
	      	}
	    	llist.forEach(t=>{
	      		t.options.dynamicVisible = false
        		t.options.dynamicVisibleValue = ''
        		if(!t.key) { 
        		 	const key = t.type + "_" + new Date().getTime()
        		 	t['key'] = key 
        		 	t['model'] = key
        		}
	      	}) ;
	      	return llist
	    } 
	},
	created() { 
		  

		// 2021-05-17 lyf 初始化回填默认key和model
		if(this.customComponents && this.customComponents.length > 0) {
				this.customComponents.forEach(t=>{
					if(!t.key) { 
	        		 	const key = t.type + "_" + new Date().getTime()
	        		 	t['key'] = key 
        		 		t['model'] = key
	        		}
				})
		}
		 
		 
	},
	inject: {
	    customComponents: {
	      from: 'customC',
	      default: ()=>[]
	    },
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
	       
	        this.$emit('handleSetSelectItem' , record)
	        return false;
	      }
	     
	    },
	    handleStart(list,index) {
	    	this.generateKey(list,index)
	      	const type = list[index].type
	      	this.startType = type;

	      	//console.log('startType' , this.startType)

	      	this.$emit('handleDragType' , type)

	    },
	    handleEnd(){
	    	this.startType = null
	    	this.$emit('handleDragType' , null)
	    }
	}
}

</script> 