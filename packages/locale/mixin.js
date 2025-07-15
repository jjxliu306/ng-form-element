import { t, $t } from "./index"
import { cloneDeepAndFormat, dynamicFun } from "../utils/index.js"

export default {
  methods: {
    cloneDeepAndFormat,
    $t,
    t(...args) {
      return t.apply(this, args)
    },
    getLabel(v) {
      if (typeof v == "function") {
        const label = v()
        return label
      }
      return v
    },
    getDynamicLabel(v, models,topModels) {
      if (typeof v == "function") {
        const label = v()
        return label
      } else {
        // 尝试转换为函数
        try {
          const label = dynamicFun(v, models , topModels)
          return label
        } catch (error) {
          //console.error('get dynamic label error , script: ' + v , error)
          return v
        }
      }
    }
  }
}
