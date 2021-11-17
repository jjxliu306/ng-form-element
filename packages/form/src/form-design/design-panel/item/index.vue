<!--
 表单设计器内容展示操作组件 
-->
<template>
 
  <div class="form-panel" > 
    
    <p class="hint-text" v-show="data.list.length === 0">
      从左侧选择组件添加
    </p>
    <el-form 
      :label-width="data.config.labelWidth + 'px'" 
      class="a-form-box form-build"
      :label-position="data.config.labelPosition"
      :hide-required-asterisk="data.config.hideRequiredMark" 
      ref="form" 
      :style="data.config.customStyle" 
      :size="data.config.size"
    >
      <draggable
        tag="div"
        class="draggable-box"
        v-bind="{
          group: 'form-draggable',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        }"
       :force-fallback="true"
        v-model="data.list" 
        @add="deepClone"
        @start="dragStart($event, data.list)"
      >
        <transition-group tag="div" name="list" class="list-main">
          <layoutItem
            class="drag-move"
            v-for="record in data.list"
            :key="record.key"
            :record="record"
            :config="data.config"
            :selectItem.sync="selectItem"
            :startType="startType"
            :insertAllowedType="insertAllowedType"
            :hideModel="hideModel"
            @dragStart="dragStart"
            @handleSelectItem="handleSelectItem"
            @handleCopy="handleCopy"
            @handleDetele="handleDetele"
            @handleColAdd="handleColAdd"
            @handleShowRightMenu="handleShowRightMenu"
          />
        </transition-group>
      </draggable>
    </el-form>
    <!-- 右键菜单 start -->
    <div
      v-show="showRightMenu"
      :style="{ 'top': menuTop + 'px', 'left': menuLeft + 'px' }"
      class="right-menu"
      id="rightMenu"
    >
      <ul>
        <li @click="handleSettingStyle" ><i class="el-icon-magic-stick" />样式配置</li> 
         <hr>
        <template v-if="isMergeCol">
          <li @click="handleDropMerge" ><i class="el-icon-delete" />解除合并</li> 
          <hr>
        </template> 
        <li @click="handleDownMerge"><i class="el-icon-bottom" />向下合并</li>
        <li @click="handleRightMerge"><i class="el-icon-right" />向右合并</li>
        <li @click="handleAddCol"><i class="el-icon-zoom-in" />增加一列</li>
        <li @click="handleAddRow"><i class="el-icon-zoom-in" />增加一行</li>
        <hr>
        <li @click="handleRemoveRow"><i class="el-icon-zoom-out" />删除当前行</li>
        <li @click="handleRemoveCol"><i class="el-icon-zoom-out" />删除当前列</li>

      </ul>
    </div>


    <el-dialog
      title="表内单元格样式配置"
      :visible.sync="styleVisible" 
      style="top:20px;" 
      :append-to-body="true"  
    > 
      <el-form size="mini" :model="tdStyle" label-width="80px"> 
        <el-form-item  label="class" >
          <el-input v-model="tdStyle.class" placeholder="请输入class名称" />
        </el-form-item>
        <el-form-item  label="style" >
          <el-input type="textarea" :rows="3" v-model="tdStyle.style" placeholder="请输入css样式" />
        </el-form-item>

      </el-form>
     
      <span slot="footer" class="dialog-footer">
        <el-button @click="styleVisible = false">取 消</el-button> 
        <el-button type="primary" @click="settingStyle">确 定</el-button>
      </span>
   
    </el-dialog>



  </div>
</template>
<script>
import draggable from "vuedraggable";
import layoutItem from "./layout";
import cloneDeep from 'lodash/cloneDeep'
//import "codemirror/mode/javascript/javascript";
export default {
  name: "FormPanel",
  data() {
    return {
      form: this.$refs.form,
      insertAllowedType: [
        "input",
        "textarea",
        "number",
        "select",
        "batch",
        "checkbox",
        "radio",
        "date",
        "time",
        "rate",
        "slider",
        "uploadFile",
        "uploadImg",
        "cascader",
        "treeSelect",
        "switch",
        "text",
        "html",
        "control"
      ],
      rightMenuSelectValue: {},
      showRightMenu: false,
      isMergeCol: false,
      menuTop: 0,
      menuLeft: 0,
      trIndex: 0,
      tdIndex: 0,

      styleVisible: false,
      tdStyle: {
        style: '',
        class: ''
      }
    };
  },
  props: {
    noModel: {
      type: Array,
      required: true
    },
    startType: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      default: () => {}
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    draggable,
    layoutItem
  },
  methods: { 
    deepClone(evt) { 
      const newIndex = evt.newIndex; 

      // json深拷贝一次
      const listString = JSON.stringify(this.data.list);
      this.data.list = JSON.parse(listString);
      // 删除icon及compoent属性
      
      if(this.data.list && this.data.list.length > newIndex) {
        delete this.data.list[newIndex].icon;
        delete this.data.list[newIndex].component;
        this.$emit("handleSetSelectItem", this.data.list[newIndex]);
      }
      
    }, 
    handleColAdd(evt, columns, isCopy = false) {
      // 重置或者生成key值
      const newIndex = evt.newIndex;
     // if(!this.columns || this.columns.length < newIndex ){
     //   return
     // }
      const key = columns[newIndex].type + "_" + new Date().getTime();
      if (columns[newIndex].key === "" || isCopy) {
        this.$set(columns, newIndex, {
          ...columns[newIndex],
          key,
          model: key
        });
        if (this.noModel.includes(columns[newIndex].type)) {
          // 删除不需要的model属性
          delete columns[newIndex].model;
        }
        if (typeof columns[newIndex].options !== "undefined") {
          // 深拷贝options
          const optionsStr = JSON.stringify(columns[newIndex].options);
          columns[newIndex].options = JSON.parse(optionsStr);
        }
        if (typeof columns[newIndex].rules !== "undefined") {
          // 深拷贝rules
          const rulesStr = JSON.stringify(columns[newIndex].rules);
          columns[newIndex].rules = JSON.parse(rulesStr);
        }
        if (typeof columns[newIndex].list !== "undefined") {
          // list 不为空 则重置list下的组件model
          columns[newIndex].list.forEach(t=>{
            t.model = t.model + 1
            t.key = t.key + 1
          })
        }
        if (typeof columns[newIndex].columns !== "undefined") {
          // 深拷贝columns
          const columnsStr = JSON.stringify(columns[newIndex].columns);
          columns[newIndex].columns = JSON.parse(columnsStr);
          // 复制时，重置key和model
          columns[newIndex].columns.forEach(item => {
            if(item.list && item.list.length > 0) {
                item.list.forEach(t => {
                  t.model = t.model + 1
                  t.key = t.key + 1
                });
              }
            
          });
        }
        if (columns[newIndex].type === "table") {
          // 深拷贝trs
          const trsStr = JSON.stringify(columns[newIndex].trs);
          columns[newIndex].trs = JSON.parse(trsStr);
          // 复制时，重置key和model
          columns[newIndex].trs.forEach(item => {

            item.tds.forEach(val => {
              if(val.list && val.list.length > 0) {
                val.list.forEach(t => {
                  t.model = t.model + 1
                  t.key = t.key + 1
                });
              }
             
            });
          });
        }
      }
      // 深拷贝数据
      const listString = JSON.stringify(columns[newIndex]);
      columns[newIndex] = JSON.parse(listString);
      this.$emit("handleSetSelectItem", columns[newIndex]);
    },
    dragStart(evt, list) { 
      // if(!this.selectForm || !this.selectForm.id) {
      //   this.$message.error('请先选择具体的表单')
      //   return  
      // }

      // 拖拽结束,自动选择拖拽的控件项
      this.$emit("handleSetSelectItem", list[evt.oldIndex]);
    },
    handleSelectItem(record) {
      // 修改选择Item
      this.$emit("handleSetSelectItem", record);
    },
    handleCopy(isCopy = true, data) { 
      const traverse = array => {
        array.forEach((element, index) => { 
          if (element.key === this.selectItem.key) {
            if (isCopy) {
              // 复制添加到选择节点后面
              array.splice(index + 1, 0, cloneDeep(element)); 
            } else {
              // 双击添加到选择节点后面
              array.splice(index + 1, 0, cloneDeep(data));
            }
            // 复制完成，重置key值
            const evt = {
              newIndex: index + 1
            };
            this.handleColAdd(evt, array, true);
            return;
          }
          if (element.type === "grid") {
            // 栅格布局
            element.columns.forEach(item => {
              traverse(item.list);
            });
          } else if (element.type === "batch" || element.type === "control") {
            // 动态表格内复制
            traverse(element.list);
          } else if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                traverse(val.list);
              });
            });
          }
        
        });
      };
      traverse(this.data.list);
    },
    handleDetele() {
      // 删除已选择
      const traverse = array => {
        array = array.filter((element, index) => {
          if (element.type === "grid") {
            // 栅格布局
            element.columns.forEach(item => {
              item.list = traverse(item.list);
            });
          } else if (element.type === "control" || element.type === "batch") {
            // 动态表格布局，容器布局
            element.list = traverse(element.list);
          }else if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                val.list = traverse(val.list);
              });
            });
          }
          if (element.key !== this.selectItem.key) {
            return true;
          } else {
            if (array.length === 1) {
              this.handleSelectItem({ key: "" });
            } else if (array.length - 1 > index) {
              this.handleSelectItem(array[index + 1]);
            } else {
              this.handleSelectItem(array[index - 1]);
            }
            return false;
          }
        });
        return array;
      };

      this.data.list = traverse(this.data.list);
    },
    // 解除合并
    handleDropMerge(){ 

      const td = this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
 
      const colspan = td.colspan
      const rowspan = td.rowspan

      if(td && (colspan > 1 || rowspan > 1)) {
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex].colspan = 1
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex].rowspan = 1

        // 开始拆解
        let cols = []
        if(colspan > 1) { 
          for(var i = 0 ; i < colspan - 1 ; i++){
            cols.push({colspan:1 , rowspan:1,list:[]})
          }

          this.rightMenuSelectValue.trs[this.trIndex].tds.splice(this.tdIndex + 1, 0 ,...cols )

        } 
        if(rowspan > 1) {
          //cols + 1 
          cols.push({colspan:1 , rowspan:1,list:[]})  
          
          for(var j = this.trIndex + 1 ; j < this.trIndex + rowspan ; j++){
             
            this.rightMenuSelectValue.trs[j].tds.splice(this.tdIndex + 1, 0 ,...cols )
          }
        
        }

      
      }


    },
    handleDownMerge() {
      // 向下合并
      if (
        this.rightMenuSelectValue.trs.length -
          this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
            .rowspan <=
        this.trIndex
      ) {
        this.$message.error("当前是最后一行，无法向下合并");
        return false;
      }

      // 计算rowspan超过自身的td
      let rows = 0;
      this.rightMenuSelectValue.trs[this.trIndex].tds.forEach(
        (element, index) => {
          if (index >= this.tdIndex) {
            return false;
          }
          if (
            element.rowspan >
            this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
              .rowspan
          ) {
            rows += 1;
          }
        }
      );
      if (
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
          .colspan !==
        this.rightMenuSelectValue.trs[this.trIndex + 1].tds[this.tdIndex - rows]
          .colspan
      ) {
        this.$message.error("当前表格无法向下合并");
        return false;
      }

      // 可能会存在rowspan


      // 获取当前得rowspan 
      let rowspan =  this.rightMenuSelectValue.trs[this.trIndex].tds[ this.tdIndex ].rowspan

      // 获取当前要合并得row
      const mergeRowIndex =  this.trIndex + rowspan
      // 获取当前要合并行得tdindex之前是否

      // 获取带合并得行
      const mergeRow =  this.rightMenuSelectValue.trs[mergeRowIndex]
      const mergeCol = mergeRow.tds[ this.tdIndex ]


      this.rightMenuSelectValue.trs[this.trIndex].tds[ this.tdIndex ].rowspan = rowspan +  mergeCol.rowspan

      // 在rowspan行进行td得裁剪
      this.rightMenuSelectValue.trs[
        this.trIndex + rowspan
      ].tds = this.rightMenuSelectValue.trs[this.trIndex + rowspan].tds.filter(
        (item, index) => index != this.tdIndex //- rows
      );

     /* this.rightMenuSelectValue.trs[
        this.trIndex + 1
      ].tds = this.rightMenuSelectValue.trs[this.trIndex + rows].tds.filter(
        (item, index) => index != this.tdIndex //- rows
      );*/


      // }
    },
    handleRightMerge() {
      // 向右合并
      const sumCols = this.rightMenuSelectValue.trs[this.trIndex].tds
        .map(item => item.colspan)
        .reduce(function(partial, value) {
          return partial + value;
        });
      if (
        sumCols -
          this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
            .colspan <=
        this.tdIndex
      ) {
        this.$message.error("当前是最后一列，无法向右合并");
        return false;
      }
      if (
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
          .rowspan !==
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex + 1]
          .rowspan
      ) {
        this.$message.error("当前表格无法向右合并");
        return false;
      }

      this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex
      ].colspan += this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex + 1
      ].colspan;

      this.rightMenuSelectValue.trs[
        this.trIndex
      ].tds = this.rightMenuSelectValue.trs[this.trIndex].tds.filter(
        (item, index) => {
          return index !== this.tdIndex + 1;
        }
      );
      // }
    },
    handleAddCol() {
      // 增加列
      this.rightMenuSelectValue.trs.forEach(item => {
        item.tds.splice(this.tdIndex + 1, 0, {
          colspan: 1,
          rowspan: 1,
          list: []
        });
      });
    },
    handleAddRow() {
      // 增加行
      // 获取总col值
      const sumCols = this.rightMenuSelectValue.trs[0].tds
        .map(item => item.colspan)
        .reduce(function(partial, value) {
          return partial + value;
        });
      const rowJson = { tds: [] };
      for (let i = 0; i < sumCols; i++) {
        rowJson.tds.push({
          colspan: 1,
          rowspan: 1,
          list: []
        });
      }
      this.rightMenuSelectValue.trs.splice(this.trIndex + 1, 0, rowJson);
    },
    handleRemoveRow(){
      // 删除一行
      const tri = this.trIndex
      const len = this.rightMenuSelectValue.trs.length
      if(len <= 1) {
        this.$message.error("当前是最后一行,无法删除");
        return
      }
      this.rightMenuSelectValue.trs.splice(tri , 1)

    },
    handleRemoveCol(){
      // 删除一列
      const tdi = this.tdIndex
      // 存在任意行中的列数 <= 1 不允许删除
      
      for(let i in  this.rightMenuSelectValue.trs){
        let tds = this.rightMenuSelectValue.trs[i].tds
        if(tds.length <= 1){
          this.$message.error("当前只剩下最后一列,无法删除");
          return
        }
      }
        
      this.rightMenuSelectValue.trs.forEach(t=>{
        t.tds.splice(tdi , 1)
      })

    },
    handleSettingStyle(){
      // 样式配置
      const td = this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]

      const class_ = td.class 
      const style_ = td.style 

      this.tdStyle.style = style_
      this.tdStyle.class = class_

      this.styleVisible = true

    },
    settingStyle(){
      // 样式生效
      const td = this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
      td.style = this.tdStyle.style
      td.class = this.tdStyle.class

      // 重新绘制 修改数据
      this.rightMenuSelectValue.trs[this.trIndex].tds.splice(this.tdIndex , 1 , td)

      this.styleVisible = false

    },
    handleShowRightMenu(e, val, trIndex, tdIndex , mergeCol) {
      // 显示右键菜单
      e.stopPropagation();
      // this.fileItem = item
      // 显示
      this.showRightMenu = true;
 

      // 计算rightMenu得高度和宽度 和当前屏幕对比 来决定菜单出现得起始位置
      let height = 210;// document.getElementById('rightMenu').clientHeight ;
      let width = 280 ;//document.getElementById('rightMenu').clientWidth ;

      // 获取屏幕高度和宽度 比对
      const bodyHeight = document.body.clientHeight  ;
      const bodyWidth = document.body.clientWidth ;
 
        
      // 定位 
      if(e.clientY + height > bodyHeight) {
        this.menuTop = e.clientY - height;
      } else {
        this.menuTop = e.clientY;
      }

      if(e.clientX + width > bodyWidth) {
        this.menuLeft = e.clientX - width;
      } else {
        this.menuLeft = e.clientX + 20 ;
      }
       

      // this.rightMenuType = type
      // this.rightId = id
      this.activeArr = [val];
      this.rightMenuSelectValue = val;
      this.trIndex = trIndex;
      this.tdIndex = tdIndex;


      // 判断是否是已经合并过的单元格 isMergeCol 
      this.isMergeCol = mergeCol


      return false;
    },
    handleRemoveRightMenu() {
      // 取消右键菜单
      this.showRightMenu = false;
    }
  },
  mounted() {
    // 添加监听取消右键菜单
    document.addEventListener("click", this.handleRemoveRightMenu, true);
    document.addEventListener("contextmenu", this.handleRemoveRightMenu, true);
  },
  destroyed() {
    // 移除监听
    document.removeEventListener("click", this.handleRemoveRightMenu, true);
    document.removeEventListener(
      "contextmenu",
      this.handleRemoveRightMenu,
      true
    );
  }
};
</script>
