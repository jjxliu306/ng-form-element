import defaultLang from './lang/zh_CN.js';
import Vue from 'vue';
import deepmerge from 'deepmerge';
import Format from './format';

const format = Format(Vue);
let lang = defaultLang;
let merged = false;
let i18nHandler = function() {
  //console.log('lang' , lang)
  const vuei18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vuei18n === 'function' && !!Vue.locale) {
    if (!merged) {
      merged = true;
      Vue.locale(
        Vue.config.lang,
        deepmerge(lang, Vue.locale(Vue.config.lang) || {}, { clone: true })
      );
    }
    return vuei18n.apply(this, arguments);
  }
};

export const t = function(path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) {
      //console.log('path , value' , path , value)
      if(!value) {
        return path
      }

      return format(value, options);
    }
    if (!value) return '';
    current = value; 
  }
  return '';
};

export const $t = function(path, options) {
 return ()=> {
      return t(path , options)
    }
   
};

export const use = function(l) {
 

  if(typeof l == 'string') {

    // 扫描下面目录中所有的index.js 然后穷举后返回 
    const langFile = require('./lang/' + l + '.js')
    if(langFile && langFile.default) {
       
      lang = langFile.default || lang;
    }
     
  } else {
    
    lang = l || lang;
  }

  console.log('lang' , lang)
     

  
};

export const currentLang = function() {
  return lang 
}

export const i18n = function(fn) {
  i18nHandler = fn || i18nHandler;
};

export default { use, $t , t, i18n };
