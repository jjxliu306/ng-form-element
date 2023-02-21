 
<template> 
		<el-collapse class="drag-panel" v-model="actives" accordion > 

			<template v-for="(colItem,colIndex) in dataList"> 
				<el-collapse-item :key="colIndex" :title="colItem.name" :name="colIndex + 1" v-if="colItem && colItem.list && colItem.list.length > 0">
					<template slot="title">
					    <span class="title">{{colItem.name}}</span>
					</template>
			  		<DragItem 
		                :list="itemInitArray(colItem.list)"
                    	:title="colItem.name"
		                @generateKey="generateKey"  
		                @dragend="handleEnd"/>
			  	</el-collapse-item>
			</template> 
		</el-collapse>  
</template>
<script>
import itemIndex from "../items/index.js"
import DragItem from './drag-item.vue'
import cloneDeep from 'lodash/cloneDeep' 
export default {
	components: {
		DragItem
	},
	data(){
		return {
			actives:[1], 
		    startType: "",
		    dataList: itemIndex ,
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
	methods: {
		// 组件初始化
		itemInitArray(list = []) {
			const nlist = cloneDeep(list)
	    	if(nlist && nlist.length > 0) {
	    		nlist.forEach(t=>{ 
	        		if(!t.key) { 
	        		 	const key = t.type + "_" + new Date().getTime()
	        		 	t['key'] = key 
	        		 	t['model'] = key

	        		 	delete t.component
	        		 	delete t.properties 
	        		}
		      	}) ;

	    	} 
	    	
	      	return nlist
		},
		generateKey(list, index) {
			 
	      // 生成key值 
	      const key = list[index].type + "_" + new Date().getTime();
	      this.$set(list, index, {
	        ...list[index],
	        key,
	        model: key
	      })
	    },
	    handleStart(list,index) {
	    	this.generateKey(list,index) 
	    },
	    handleEnd(list,index){ 
	    	this.generateKey(list,index) 
	    }
	}
}

</script> 
<style lang="scss">
.drag-panel {
	height: 100%;
    overflow-y: hidden;

    .title {
    	width: 100%;
	    text-align: center;
	    font-weight: 600;
	    font-size: 13px;
    }
}

</style>