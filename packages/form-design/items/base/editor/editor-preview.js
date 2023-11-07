// 引入 wangEditor
import E from 'wangeditor' // npm 安装
// const E = window.wangEditor // CDN 引入的方式

// 获取必要的变量，这些在下文中都会用到
const { $, BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip } = E



export default (safe) => {
  return class Plugin extends BtnMenu {
    constructor(editor) {
      const $elem = E.$(
       		`<div class="w-e-menu" data-title="预览" >
                <span style="line-height: 14px;height: 14px;"><svg t="1687761275916" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2632" width="16" height="16"><path d="M185.856 258.2016L117.3504 189.7984c-48.2816-48.2816 24.1152-120.6784 72.3968-72.3968l86.3744 86.3232A554.6496 554.6496 0 0 1 460.8 155.7504L460.8 153.6V102.4a51.2 51.2 0 1 1 102.4 0v53.3504c66.6624 5.7344 129.3312 22.4768 184.6272 47.9744l86.3744-86.3232a51.2 51.2 0 0 1 72.3968 72.3968l-68.4032 68.4032C921.088 322.56 972.8 411.6992 972.8 512c0 201.6768-208.9984 358.4-460.8 358.4s-460.8-156.7232-460.8-358.4c0-100.3008 51.712-189.44 134.656-253.7984zM512 768c200.6016 0 358.4-118.3232 358.4-256s-157.7984-256-358.4-256-358.4 118.3232-358.4 256 157.7984 256 358.4 256z m0-51.2a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z m0-102.4a102.4 102.4 0 1 0 0-204.8 102.4 102.4 0 0 0 0 204.8z" fill="#666666" p-id="2633"></path></svg></span>
            </div>`
      )
      super($elem, editor)
    }
    clickHandler () {
      
      safe.doPreview()
    }
    tryChangeActive () {
      this.active()
    }
  }
} 

// 【注意】如果版本 <= v4.0.5 需要这样写：
// const { $ } = E
// const { BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip } = E.menuConstructors