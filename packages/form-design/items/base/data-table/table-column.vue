<template>
  <el-table-column
    :prop="column.column"
    :width="column.width"
    :show-overflow-tooltip="true" 
    :align="column.align || 'center'"
    :label="column.label"
    >

    <template v-if="column.children && column.children.length > 0">
      <ng-table-column
        v-for="(item,index) in column.children"
        :column="item"
        :key="index" :models="models"> 
        <template slot="expand" slot-scope="{row}">
          <slot :row="row" :prop="item.column" :col="item" :index="row.$index" name="expand"></slot>
        </template>
      </ng-table-column>
    </template> 
    <template slot-scope="{row}">
      <slot :row="row" :col="column" :prop="column.column" :index="row.$index" name="expand"></slot>
    </template>
  </el-table-column>

</template>
<script>
export default {
  name: "ng-table-column",
  props: {
    column: {
      type: Object
    },
    models: {
      type: Object,
      required: true
    },
  },
  methods: {
     
  }
};
</script>
