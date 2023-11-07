<template>
  <div class="ng-form-editor">
    <div :id="id" >
    </div>
    <div v-if="show" class="wangEditor_html-content">
      <div class="wangEditor_html-header">
        <span class="wangEditor_html-close" style="cursor:pointer ;" @click="closeDialog">
          x
        </span>
      </div>
      <textarea v-model="text" />
    </div>
    <div v-if="previewVisible" class="wangEditor_html-content">
      <div class="wangEditor_html-header">
        <span class="wangEditor_html-close" style="cursor:pointer ;" @click="previewVisible = false">
          x
        </span>
      </div>
      <div style="overflow-y: auto;height: 100%;" v-html="text">

      </div>
    </div>
  </div>
</template>
<script>
//import { HTMLFormat } from './utils.js'
import { getUUID } from '../../../../utils/index.js'
import EditorPreview from './editor-preview.js'
import EditorHtml from './editor-html.js'
import E from 'wangeditor'
export default {
  name: 'ng-form-editor',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: ''
    }, 
    preview: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    html: {
      type: Boolean,
      default: true
    } 
  },
  data() {
    return {
      id: 'ng-form-editor-' + getUUID(),
      text: '',
      show: false,
      previewVisible: false,
      editor: ''
    }
  },
  computed: {

    domId() {
      return '#' + this.id
    }
  },
  watch: {

    value(val) {
      if (val !== this.editor.txt.html()) {
        this.text = val;
        this.editor.txt.html(val)
      }
      try {
        this.editor.selection.moveCursor(this.phoneEditor.$textElem.elems[0], false);
      } catch (err) {
        console.error(err)
      }
    },
    text(val) {
      if (this.value != val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    placeholder(val) {
      if(this.editor)
        this.editor.config.placeholder = val
    },
    html(val) {
      if(!this.editor) return
      const findex = this.editor.config.menus.findIndex(t=>t == 'editor-html')
      if(val) {
        // 判断是否包含 不包含则添加
        if(findex < 0) { 
          this.editor.config.menus = this.editor.config.menus.concat('editor-html')
        }  
         
      } else {
        // 判断是否包含 包含则删除
        if(findex >= 0) {
           this.editor.config.menus.splice(findex , 1)
        }
        
      }

      console.log('menus' , this.editor.config.menus)

    } 
  },
  mounted() {
    this.initEdit()
  },
  methods: {
    closeDialog() {
      //this.text = HTMLFormat(this.text)
      this.handleChange(true)
      this.show = false
    },
    handleChange(update = false) {
      if (update) {
        this.$emit('input', this.text)
        this.$emit('change', this.text)
      }
    },
    initEdit() {
      this.editor = new E(this.domId)
      // if (this.isHtml) {
      //   E.registerMenu('Plugin', Plugin(this))
      // }
      this.editor.config.zIndex = 100
      this.editor.config.menuTooltipPosition = 'down'
      this.editor.config.placeholder = this.placeholder
      this.editor.config.showFullScreen = true
      this.editor.config.onfocus = () => {
        this.$emit('focus', this.text)
      }
      this.editor.config.onblur = (html) => {
        this.$emit('blur', html)
      }
      this.editor.config.onchange = (html) => {
        this.text = html
        this.handleChange()
      }
      this.editor.config.emotions = [
        {
          title: 'emoji',  // tab 的标题
          type: 'emoji', // 'emoji' / 'image'
          // emoji 表情，content 是一个数组即可
          content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/),
        }
      ]
      

      // 注册菜单
      if (this.preview) {
        this.editor.menus.extend('editor-preview', EditorPreview(this))
        this.editor.config.menus = this.editor.config.menus.concat('editor-preview')

      }

      // html
      if (this.html) {
        this.editor.menus.extend('editor-html', EditorHtml(this))
        this.editor.config.menus = this.editor.config.menus.concat('editor-html')
      }

     //  const this_ = this 
     //  this.editor.config.menus = this.editor.config.menus.map(this.editor.config.menus, function(item, key) {
     //     if (item == "editor-html" && !this_.html) {
     //         return null;
     //     }
        
     //     return item;
     // });


      this.editor.create()
      this.editor.txt.html(this.value)
      if (this.disabled == true) this.editor.disable()
    },
    doPreview() {
      // if(this.previewHandle) {
      //   this.previewHandle()
      // }
      this.previewVisible = true
    },
    doHtml() {
      //this.text = HTMLFormat(this.text)
      this.show = true
    },
     

  }
}
</script>
<style>
.wangEditor_html {
  color: #999;
  font-size: 14px;
  font-weight: bold;
}
.wangEditor_html-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2048;
  padding: 0 20px;
  background-color: #fff;
  box-sizing: border-box;
}
.wangEditor_html-content textarea {
  width: 100%;
  height: 90%;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}
.wangEditor_html-header {
  padding: 5px 0;
  text-align: right;
}
.wangEditor_html-close {
  color: #333;
  font-weight: bold;
  font-size: 22px;
}
</style>
