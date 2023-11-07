// 引入 wangEditor
import E from 'wangeditor' // npm 安装
// const E = window.wangEditor // CDN 引入的方式

// 获取必要的变量，这些在下文中都会用到
const { $, BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip } = E



export default (safe) => {
  return class Plugin extends BtnMenu {
    constructor(editor) {
      const $elem = E.$(
       		`<div class="w-e-menu" data-title="html查看" >
                <span >html</span>
            </div>`
      )
      super($elem, editor)
    }
    clickHandler () {
      
      safe.doHtml()
    }
    tryChangeActive () {
      this.active()
    }
  }
} 

// 【注意】如果版本 <= v4.0.5 需要这样写：
// const { $ } = E
// const { BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip } = E.menuConstructors