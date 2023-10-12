
<template>
    <div style="padding: 20px;"> 
    
        <ng-form-build ref="formBuild" :models="models" :formTemplate="form" />

        <div style="text-align: center;"> 
      		<el-button type="primary" size="mini" @click="dataFormSubmit()">提交</el-button>
        </div>
    </div> 
</template>
<script>
export default { 
   	data() {
    	return {
    		models: {
				"categorys": "6c1ce7771063b2cbda63b8808dc52074",
				"docs": "7263c76969d643fc9903b583517674b4",
				"categorys_label": "职场面试",
				"docs_label": "LTE网络优化经典案例-重要.docx"
			},
    		form: {

    			 
	"list": [
		{
			"type": "select",
			"label": "分类",
			"index": "D",
			"options": {
				"width": "100%",
				"multiple": false,
				"disabled": false,
				"clearable": false,
				"hidden": false,
				"placeholder": "请选择",
				"valueKey": "value",
				"tooptip": "",
				"dynamic": 1,
				"remoteFunc": "https://www.netopt.net/netopt-admin/doc/api/selectCategory",
				"dataPath": "data",
				"remoteValue": "id",
				"remoteLabel": "name",
				"linkage": false,
				"options": [
					{
						"value": "1",
						"label": "下拉框1"
					}
				],
				"showSearch": false,
				"dynamicHide": false,
				"dynamicHideValue": ""
			},
			"model": "categorys",
			"key": "select_1620375951136",
			"rules": [
				{
					"required": false,
					"message": "必填项",
					"trigger": [
						"change",
						"blur"
					]
				}
			]
		},
		{
			"type": "select",
			"label": "文章",
			"index": "D",
			"options": {
				"width": "100%",
				"multiple": false,
				"disabled": false,
				"clearable": false,
				"hidden": false,
				"placeholder": "请选择",
				"valueKey": "value",
				"tooptip": "",
				"dynamic": 1,
				"remoteFunc": "https://www.netopt.net/netopt-admin/doc/api/listPage",
				"dataPath": "data.list",
				"remoteValue": "id",
				"remoteLabel": "name",
				"linkage": true,
				"options": [
					{
						"value": "1",
						"label": "下拉框1"
					}
				],
				"showSearch": false,
				"dynamicHide": false,
				"dynamicHideValue": "",
				"linkData": [
					{
						"vtype": 2,
						"model": "categorys",
						"script": "",
						"queryKey": "categoryId",
						"queryValue": "$.categorys"
					}
				]
			},
			"model": "docs",
			"key": "select_1620375952166",
			"rules": [
				{
					"required": false,
					"message": "必填项",
					"trigger": [
						"change",
						"blur"
					]
				}
			]
		}
	],
	"config": {
		"labelPosition": "left",
		"labelWidth": 100,
		"size": "mini",
		"outputHidden": true,
		"hideRequiredMark": true,
		"syncLabelRequired": false,
		"customStyle": ""
	}
 

    		}
	
    	} 
    },
    methods: {
    	dataFormSubmit() {
    		const models = this.$refs.formBuild.getData()

    		console.log('表单提交:' , JSON.stringify(models))
    	}
    }
}
</script>