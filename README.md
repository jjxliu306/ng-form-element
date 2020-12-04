# vue-form-design 致力打造开源最强vue动态表单组件
VUE-FORM-DESIGN

![组件一览](http://cdn.opgis.com/11.png "11.png")
 

 **在线示例**
 http://211.159.185.23/vue-drag-formdesign/

##示例

 **基础表单** 
 ![基础表单](http://cdn.opgis.com/basic.gif "basic.gif")


 **表单验证和组件动态显示** 
![表单验证和组件动态显示](http://cdn.opgis.com/validator1.gif "validator1.gif")


 **动态表格** 
![动态表格](http://cdn.opgis.com/tablebatch.gif "tablebatch.gif")


## 简介

基于vue和element-ui实现的表单设计器。通过拖拽方式快速生成一个表单页面，表单可以导出json格式,也可以将其他人绘制的表单通过json导入方式进行还原。

## 和其他开源表单的差异
 
- 每个组件可以动态隐藏和显示，并且提供除了“必填”以外的多种规则验证，支持表达式验证和正则验证
- 针对选择性控件（radio，select，checkbox）提供选择后触发调用，支持表达式
- 动态表格提供单独的弹框进行填写和编辑
- 布局方式多样化，提供栅格，表格等多种布局方式 
- 支持表单预览模式，表单内容全部非组件化，全部文本显示
- 针对选择性控件（radio，select，checkbox）选择后将对应的label进行单独存储，方便展示
 

## 组件
- FormDesign 表单设计器（基于可视化操作快速设计出表单页面，生成配置json或页面）
- FormBuild 表单构建器（根据设计器中获取的配置json数据，快速构建出表单页面，添加readonly属性后展现预览表单）


## 安装
```
npm install --save  vue-drag-formdesign 

```
## 引用
```
 // 导入组件库
import VueDragFormdesign from 'vue-drag-formdesign'
import 'vue-drag-formdesign/lib/vue-drag-formdesign.css'
```

## 注册
``` 
// 注册组件库
Vue.use(VueDragFormdesign) 

```

### 页面引用
```
<div id="app"> 
    <VueDragFormdesign  />
</div>
```
 
### API 说明
#1.  VueDragFormdesign 

Methods:

|  方法名称 | 参数| 说明  |
|-----------|--------|-------------------------|
| initModel | json |  初始化动态表单内容，参数为动态表单json模板|
| getModel| N/A|  返回当前正在编辑得动态表单信息|


Slot:
|  插槽名称 | 说明  |
|-----------|-------------------------|
| drag |  左侧组件面板插槽，可以在组件面板上面填充一个区域展示内容|
| formName |  当前动态表单名称|
| controlButton | 功能区按钮,如果需要自定义功能按钮可以在这里自定义 |
 

 插槽示例:
 ```
	<VueDragFormdesign >
        <template slot="controlButton" >
            <el-button   type="text" size="medium"  @click="initDemo(1)">示例1</el-button>
            <el-button   type="text" size="medium"  @click="initDemo(2)">示例2</el-button>
            <el-button   type="text" size="medium"  @click="initDemo(3)">示例3</el-button>
        </template>
        <template  slot="formName">
            <span> vue-drag-formdesign 示例 </span>
        </template>
    </VueDragFormdesign> 
 ```

