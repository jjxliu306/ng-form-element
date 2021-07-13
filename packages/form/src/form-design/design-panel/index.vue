<template>
	 
		<FormPanel     
            :data="data"
            :selectItem="selectItem"
            :noModel="noModel"
            :hideModel="hideModel"
            :selectForm="selectForm"
            :startType="startType" 
            @handleSetSelectItem="handleSetSelectItem"> 
		</FormPanel> 
 
</template>
<script>
import FormPanel from './item/index'
import {noModelList} from '../config'
export default {
	components:{
		FormPanel 
	},
	data(){
		return {
			updateTime: 0,
			hideModel: false, 
			 
			noModel: noModelList,
		    startType: "", 
		    selectItem: {}, 
		}
	},
	props: {
		data: {
			type: Object ,
			required: true
		},
		selectForm: {
			type: Object
		}
	}, 
	methods: {
		handleSetSelectItem(record) {

	      // 操作间隔不能低于100毫秒
	      let newTime = new Date().getTime();
	      if (newTime - this.updateTime < 100) {
	        return false;
	      }

	      this.updateTime = newTime;

	      // 设置selectItem的值
	      this.selectItem = record; 

	      this.$emit('changeSelectItem' , this.selectItem)

	      // 判断是否选中控件，如果选中则弹出属性面板，否则关闭属性面板
	      if (record.key) {
	        this.startType = record.type; 
	      }  
	    },
	   
	}
}
</script>