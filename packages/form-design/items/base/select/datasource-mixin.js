import mixin from "../../mixin.js"
import { dynamicFun } from "../../../../utils/index.js"
export default {
  mixins: [mixin],
  data() {
    return {
      // 2021-03-13 如果该字段带有本地数据过滤,则这里保存本地过滤的过滤条件
      localFilter: [],
      remoteFilter: {} // 远程过滤搜索 结构 {key:xx,value:xx}
    }
  },
  computed: {
    // 2022-03-14 lyf 针对select radio checkbox这些数据的动态来源修改后进行刷新
    dynamicOption() {
      // 只在表单模板拖拽绘制的时候生效

      if (!this.isDragPanel || !["select", "radio", "checkbox"].includes(this.record.type)) {
        return null
      }
      if (this.record.options.dynamic == 0) {
        return null
      }
      if (this.record.options.dynamic == 1) {
        return (
          this.record.options.dynamic +
          this.record.options.remoteFunc +
          this.record.options.dataPath +
          this.record.options.remoteValue +
          this.record.options.remoteLabel
        )
      } else if (this.record.options.dynamic == 2) {
        return this.record.options.dynamic + this.record.options.dictType
      }

      return null
    },
    linkageData() {
      if (!this.isDragPanel && this.record.options.linkage) {
        const linkData = this.record.options.linkData
        if (!linkData) return null

        let vs = []
        for (let i = 0; i < linkData.length; i++) {
          // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
          const ld = linkData[i]
          if (ld.model) {
            // local script
            // vs.push(this.models[ld.model])
            vs.push(get(this.models, ld.model)) // zzg 可以监听深层的model
          }
        }
        return vs.join(",")
      }
      return null
    },
    // 联动关联的所有类型
    linkageTypes() {
      if (!this.isDragPanel && this.record.options.linkage) {
        const linkData = this.record.options.linkData
        if (!linkData) return null

        let vs = []
        for (let i = 0; i < linkData.length; i++) {
          // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
          const ld = linkData[i]
          if (ld.model) {
            // local script
            vs.push(ld.vtype)
          }
        }
        return vs
      }
      return null
    }
  },
  watch: {
    // 2022-03-14 lyf 监听下拉、多选、单选配置变化后如果当前是表单模板编辑状态 则刷新
    dynamicOption: {
      handler(val, oldVal) {
        if (val != oldVal) this.initDynamicValue()
      },
      deep: true
    },
    // 监听关联字段
    linkageData: {
      handler(val, oldVal) {
        if (val == oldVal) {
          return
        }

        this.linkageDataHandle()
      }
    }
  },
  methods: {
    // 关联数据变动后触发
    linkageDataHandle(resetValue = true) {
      if (this.record.options.linkage) {
        const linkData = this.record.options.linkData
        if (!linkData) return

        // 本地搜索
        let localScript = []
        let remoteQuery = {}
        for (let i = 0; i < linkData.length; i++) {
          // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
          const ld = linkData[i]
          if (ld.vtype == 1) {
            // local script
            localScript.push(ld.script)
          } else if (
            ld.vtype == 2 &&
            // 确定有远程搜索
            this.record.options.dynamic == 1 &&
            this.record.options.remoteFunc &&
            // 确定搜索的key 和value存在
            ld.queryKey &&
            ld.queryValue
          ) {
            // remote 远程过滤

            // 解析queryValue
            const queryValue = dynamicFun(ld.queryValue, this.models, undefined, undefined, undefined, this)

            remoteQuery[ld.queryKey] = queryValue
          }
        }

        this.localFilter = localScript
        this.remoteFilter = remoteQuery

        // 将当前选中值设置为空 防止选择的值目前展示不出来后永远不能反选
        if (resetValue) {
          if ((this.record.type === "select" && this.record.options.multiple) || this.record.type === "checkbox") {
            this.models[this.record.model] = []
          } else {
            this.$set(this.models, this.record.model, null)
          }
        }

        if (this.remoteFilter) {
          this.getRemoteData()
        }
      }
    },
    handleChange(value) {
      let labels = []
      // 获取数据 判断从ajax 还是本地默认配置
      let datas = this.record.options.dynamic > 0 ? this.checkValues : this.record.options.options
      if (!datas) {
        datas = []
      }

      // 回填数据

      let as = []

      if (!(value instanceof Array)) {
        as = [value]
      } else {
        as = value
      }

      for (let i = 0; i < as.length; i++) {
        const v = as[i]
        const fs = datas.filter((t) => t[this.itemProp.value] == v)
        if (fs && fs.length > 0) {
          const label = fs[0][this.itemProp.label]

          labels.push(label)
        }
      }

      const modelLabel = this.record.model + "_label"
      //this.models[modelLabel] = labels.join(',')
      this.$set(this.models, modelLabel, labels.join(","))

      // 2020-08-01 如果有远程调用并且有选择回调 再这里进行回调
      if (this.record.options.selectCb) {
        // 找到当前选择的数据实体
        // 获取数据
        const cvalues = this.record.options.dynamic == 1 && this.record.options.remoteFunc ? this.checkValues : this.record.options.options

        const fs = cvalues.filter((t) => t[this.itemProp.value] == value)

        if (fs && fs.length > 0) {
          const select = fs[0]

          // 构建函数 去执行
          this.$nextTick(() => {
            const scriptFunc = this.record.options.selectCb
            const func = "{" + scriptFunc + "}"
            const Fn = new Function("$", "$select", func).bind(this)

            Fn(this.models, select)
          })
        }
      }
    },
    itemDisabled(item) {
      if (!this.record.options.disableItemScript) {
        return false
      }

      const cbScript = this.record.options.disableItemScript
      try {
        const Fn = eval(cbScript)
        return Fn.call(this, item, this.models)
      } catch (error) {
        console.error("select item disabled script error", error)
        return false
      }
    }
  }
}
