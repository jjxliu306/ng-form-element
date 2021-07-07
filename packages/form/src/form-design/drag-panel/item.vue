<!--
 * author lyf
 * date 2020-07-06
 * description 拖拽元素
 -->
<template>
	<div class="components-list">
		<draggable
	    tag="ul"
	    :value="list"
	    v-bind="{
	      group: { name: 'form-draggable', pull: 'clone', put: false },
	      sort: false,
	      animation: 180,
	      ghostClass: 'moving'
	    }"
	    :force-fallback="true"
	    @start="handleStart($event, list)" >  
		    <li
		      class="form-edit-widget-label"
		      v-for="(val, index) in list"
		      :key="index" 
		      @click="$emit('handleListPush', val)">
	    		<a> 
                	<span>{{val.label}}</span>
            	</a> 
	   	 	</li>
	  </draggable>
	</div>
  
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "dragItem",
  props: {
  	list: {
  		type: Array,
  		default: ()=> []
  	}
  },
  components: {
    draggable
  },
  methods: {
    handleStart(e, list) {
      //this.$emit("start", list ,[e.oldIndex].type);
      this.$emit('start', list, e.oldIndex)
    }
  }
};
</script>
