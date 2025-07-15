<template>
  <div>
    <el-table
      :data="dataList"
      :border="record.options.border || false"
      :stripe="record.options.stripe || false"
      v-loading="dataListLoading"
      :key="refreshKey"
      :size="record.size"
      :height="record.height ? record.height : undefined"
      :max-height="record.maxHeight ? record.maxHeight : undefined"
      :row-style="rowStyle"
      :header-row-style="headerStyle"
      :style="record.style"
    >
      <el-table-column type="index" width="50" header-align="center" align="center" v-if="record.options.showIndex"></el-table-column>

      <template v-for="(item, itemIdx) in columns">
        <ng-table-column :column="item" :key="itemIdx" :models="models">
          <template slot-scope="{ col, row, index, prop }" slot="expand">
            <span v-if="col.formater" v-html="formaterColumn(col.formater, row, row[prop])"></span>
            <span v-else>{{ row[prop] }}</span>
          </template>
        </ng-table-column>
      </template>
    </el-table>
    <el-pagination
      :style="{ textAlign: record.options.pageAlign }"
      v-if="page"
      :small="record.options.smallPage"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-size="pageSize"
      :total="totalCount"
      :layout="record.options.smallPage ? 'prev, pager, next' : 'total, prev, pager, next, jumper'"
    >
    </el-pagination>
  </div>
</template>
<script>
import mixin from "../../mixin.js"
import NgTableColumn from "./table-column.vue"
import request from "../../../../utils/request.js"
export default {
  mixins: [mixin],
  components: {
    NgTableColumn
  },
  data() {
    return {
      dataListLoading: false,
      totalCount: 0,
      dataList: [],
      pageIndex: 1,

      refreshKey: 1
    }
  },
  props: {
    record: {
      //组件数据
      type: Object,
      required: true
    },
    models: {
      // 表单数组
      type: Object,
      required: true
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    preview: {
      // 是否当前是预览
      type: Boolean,
      default: false
    }
  },
  computed: {
    columns() {
      return this.record && this.record.options ? this.record.options.columns : []
    },
    recordOptions() {
      return JSON.stringify(this.record.options)
    },
    // 是否分页
    page() {
      return this.record && this.record.options ? this.record.options.page : false
    },
    pageSize() {
      return this.record && this.record.options ? this.record.options.pageSize : 10
    },
    // 过滤查询条件
    query() {
      if (this.record && this.record.options) {
        const queryList = this.record.options.queryData

        // 判断其中是否有需要解析的数据
        const query = {}
        for (let i = 0; i < queryList.length; i++) {
          const name = queryList[i].label
          let value = queryList[i].value

          if (value.indexOf("$") >= 0) {
            // 解析
            try {
              value = this.dynamicFun(value, this.models)
            } catch (error) {
              console.error("parse script error", error)
            }
          }
          if (!value) {
            continue
          }
          query[name] = value
        }

        return query
      }
      return null
    }
  },
  watch: {
    recordOptions() {
      this.refreshKey++
      //this.init()
    },
    query() {
      this.refreshKey++
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    dynamicFun(script, model, key = "$") {
      if (!script) return undefined
      const func = script.indexOf("return") >= 0 ? "{" + script + "}" : "return (" + script + ")"

      const Fn = new Function(key , '$top', func)
      return Fn.call(this, model , this.topModels)
    },
    init() {
      this.pageIndex = 1

      this.dataListLoading = false
      this.getDataList()
    },
    formaterColumn(script, row, columnValue) {
      if (script && columnValue) {
        const fn = eval(script)
        const html_ = fn(row, this.models)
        return html_
        //return dynamicFun(script, this.models, columnValue)
      }
      return columnValue
    },
    getDataList() {
      // 如果是静态数据 直接赋予
      if (!this.record || !this.record.options) return

      const dbType = this.record.options.dbType
      if (dbType == 1) {
        let staticList = this.record.options.datasourceStatic

        // 判断是否有过滤条件  如果有则静态数据过滤
        if (this.query) {
          // 静态数据过滤 先复制一遍数据
          staticList = JSON.parse(JSON.stringify(staticList))
          const queryData = this.query
          const keys = Object.keys(queryData)
          // 数据过滤
          staticList = staticList.filter((t) => {
            // 全部先采用包含
            for (let k = 0; k < keys.length; k++) {
              const key = keys[k]
              const kvalue = queryData[key]
              console.log("queryData", queryData, key, kvalue)
              // 列表中没有此字段直接false
              if (!t[key]) return false

              // 如果过滤的的组件是多选,则判断任意一个值必须等于
              if (kvalue instanceof Array) {
                const inc = kvalue.includes(t[key])
                if (!inc) {
                  return false
                }
              } else {
                // 其他判断包含
                let index = (t[key] + "").indexOf(kvalue)
                if (index < 0) {
                  return false
                }
              }
            }

            return true
          })
        }

        // 静态数据
        this.totalCount = staticList.length

        // 判断是否分页
        if (this.page) {
          // 分页 按照页码截取
          let startIndex = (this.pageIndex - 1) * this.pageSize
          let endIndex = startIndex + this.pageSize
          if (endIndex > this.totalCount) {
            endIndex = this.totalCount
          }
          this.dataList = staticList && staticList.length > 0 ? staticList.slice(startIndex, endIndex) : []
        } else {
          //不分页  静态数据一次加载
          this.dataList = staticList
        }
      } else if (dbType == 2) {
        // API 请求
        // 拼接数据请求
        const url = this.record.options.apiPath
        const parseScript = this.record.options.apiDataScript
        const methodType = this.record.options.methodType
        const pageSizeKey = this.record.options.pageSizeKey
        const pageIndexKey = this.record.options.currentPageKey

        const parseFun = eval(parseScript)

        const queryData = this.query ? this.query : {}

        // 判断是否有分页 有分页则带上分页的请求数据
        if (this.page) {
          queryData[pageSizeKey] = this.pageSize
          queryData[pageIndexKey] = this.pageIndex
        }

        const requsetData = {
          url: url,
          method: methodType
        }

        if (queryData) {
          if (methodType == "get") {
            requsetData.params = queryData
          } else if (methodType == "post") {
            requsetData.data = queryData
          }
        }

        this.dataListLoading = true
        request(requsetData)
          .then(({ data }) => {
            console.log("request data", data)
            const dataInfo = parseFun(data)
            if (dataInfo) {
              if (dataInfo instanceof Array) {
                this.dataList = dataInfo
                this.totalCount = dataInfo.length
              } else {
                this.dataList = dataInfo.list
                this.totalCount = dataInfo.total
              }
            } else {
              this.dataList = []
              this.totalCount = 0
            }
          })
          .finally(() => {
            this.dataListLoading = false
          })
      }
    },

    // 每页数
    // sizeChangeHandle (val) {
    //   this.pageSize = val;
    //   this.pageIndex = 1;
    //   this.getDataList();
    // },
    // // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val
      this.getDataList()
    },
    // 处理行高
    rowStyle() {
      if (this.record.options.rowHeight) {
        return { height: this.record.options.rowHeight + "px" }
      }
      return ""
    },
    // 处理标题高
    headerStyle() {
      if (this.record.options.headerHeight) {
        return { height: this.record.options.headerHeight + "px" }
      }
      return ""
    }
  }
}
</script>
