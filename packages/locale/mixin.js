import { t } from './index';
import { cloneDeepAndFormat } from '../utils/index.js'
 
 
export default {
  methods: {
    cloneDeepAndFormat,
    t(...args) {
      return t.apply(this, args);
    },
    getLabel(v) { 
      if(typeof v == 'function') {
          const label = v()
          return label 
      } 
      return v
    }
  }
};


