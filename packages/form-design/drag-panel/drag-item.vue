<template>
  <div class="drag-item">
    <draggable
      tag="ul"
      :value="list"
      v-bind="{
        group: { name: 'form-draggable', pull: 'clone', put: true },
        sort: false,
        animation: 180,
        ghostClass: 'moving'
      }"
      :force-fallback="true" 
      @end="handleEnd($event, list)">  
        <li
          class="form-edit-widget-label"
          v-for="(val, index) in list"
          :key="index"  >
          <a> 
            <span>{{val.label}}</span><br>
            <span>{{val.key}}</span>
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
    handleEnd(e, list){ 
      this.$emit('dragend' ,list,  e.oldIndex)
    }
  }
};
</script>
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
      width: 45%;
      line-height: 26px;
      position: relative;
      float: left;
      left: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1%;
      color: #333;
      border: 1px solid #F4F6FC;
      text-align: center;

      &:hover {
        color: #409EFF;
        border: 1px dashed #409EFF;
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

 
</style>