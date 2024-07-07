<template>
  <div class="drag-item">
    <draggable
      tag="ul"
      :value="list"
       
      v-bind="{
        group: { name: 'form-draggable', pull: 'clone', put: false },
        sort: false,
        animation: 180,
        ghostClass: 'moving'
      }" 
      @start="handleStart($event,list)"
      @end="handleEnd($event, list)">  
        <li
          class="form-edit-widget-label"
          v-for="(val, index) in list"
          :key="index"  >
         
          <div class="handle-widget-label"   draggable="true" :title="getLabel(val.label)">
            <div class="label-item"> 
              <img v-if="weightIcon(val)" draggable="false" class="item-img" :src="weightIcon(val)" :alt="getLabel(val.label)">
            </div>
            <div class="handle-label">{{getLabel(val.label)}}</div>
          </div>
        <!--   <a> 
            <span>{{val.label}}</span><br>
            <span>{{val.key}}</span>
          </a>  -->
        </li>
    </draggable>
  </div>
  
</template>
<script>
import { getItemIcon } from '../../utils/icons.js'
import draggable from "vuedraggable"
import LocalMixin from '../../locale/mixin.js'
export default {
  name: "dragItem",
  mixins: [LocalMixin],
  data() {
    return {
      formKey: '11'
    }
  },
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
    handleEnd(e, list){ 
      //console.log('dragend')
      this.$emit('dragend' ,list,  e.oldIndex)
    },
    handleStart(e , list) {
      //console.log('handleStart')
    },
    //组件图标
    weightIcon(item) {
      // 先判断全局是否有配置 或者是自定义组件 
      if(item.icon) return item.icon
      //return item.icon  
      return getItemIcon(item.type)
    }
  }
};
</script>
<style>
.drag-item {
  padding: 8px 0;
  width: 100%;
  max-height: 400px;
  overflow: auto;
}

.drag-item .widget-cate {
  padding: 8px 12px;
  font-size: 13px;
}

.drag-item ul {
  position: relative;
  overflow: hidden;
  padding: 0 10px 10px;
  margin: 0;
}

.drag-item ul .form-edit-widget-label {
  font-size: 12px;
  display: block;
  width: 30%;
  line-height: 26px;
  position: relative;
  float: left;
  left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px;
  color: #333;
  border: 1px solid #F4F6FC;
  text-align: center;
}

.drag-item ul .form-edit-widget-label:hover {
  color: #409EFF;
  border: 1px dashed #409EFF;
}

.drag-item ul .form-edit-widget-label .label-item {
  cursor: pointer;
  background: #f9f9f9;
  border-radius: 4px;
  border: 1px solid  #ebebeb;
  height: 45px;
  position: relative;
  width: 100%;
  -webkit-transition: .15s ease-in-out;
  transition: .15s ease-in-out;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
  will-change: transform;
}

.drag-item ul .form-edit-widget-label .label-item:hover {
  z-index: 1;
  -webkit-transform: scale(1.075);
  transform: scale(1.075);
}

.drag-item ul .form-edit-widget-label .item-img {
  height: 100%;
  -o-object-fit: none;
  object-fit: scale-down;
  width: 100%;
}

.drag-item ul .form-edit-widget-label .handle-label {
  font-size: 10px;
  font-weight: 500;
  line-height: 5px;
  height: 12px;
  margin: 4px -2px 0;
  text-align: center;
  color: #777;
}

.drag-item ul a {
  display: block;
  cursor: move;
  background: #F4F6FC;
  border: 1px solid #F4F6FC;
}

.drag-item ul a .icon {
  margin-right: 6px;
  margin-left: 8px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}

.drag-item ul a span {
  display: inline-block;
  vertical-align: middle;
}

</style>
<!-- 
<style lang="scss">

.drag-item {
  padding: 8px 0;
  width: 100%;
  height: 100%;

  .widget-cate {
    padding: 8px 12px;
    font-size: 13px;

  }

  ul {
    position: relative;
    overflow: hidden;
    padding: 0 10px 10px;
    margin: 0;

    .form-edit-widget-label {
      font-size: 12px;
      display: block;
      width: 30%;
      line-height: 26px;
      position: relative;
      float: left;
      left: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 2px;
      color: #333;
      border: 1px solid #F4F6FC;
      text-align: center;

      &:hover {
        color: #409EFF;
        border: 1px dashed #409EFF;
      }

      .label-item   { 
        cursor: pointer;
        background: #f9f9f9;
        border-radius: 4px;
        border: 1px solid  #ebebeb;
        height: 45px;
        position: relative;
        width: 100%;
        -webkit-transition: .15s ease-in-out;
        transition: .15s ease-in-out;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        transition-property: transform;
        transition-property: transform,-webkit-transform;
        will-change: transform;

        &:hover {
          z-index: 1;
          -webkit-transform: scale(1.075);
          transform: scale(1.075);
        }
      }
     
          

      .item-img {
        height: 100%;
        -o-object-fit: none;
        object-fit: scale-down;
        width: 100%;
      } 

      .handle-label {
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
        margin: 4px -2px 0;
        text-align: center;
        color: #777;
      }

    }

    a {
      display: block;
      cursor: move;
      background: #F4F6FC;
      border: 1px solid #F4F6FC;

      .icon {
        margin-right: 6px;
        margin-left: 8px;
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
      }

      span {
        display: inline-block;
        vertical-align: middle;
      }
    }

  }


}

 
</style> -->