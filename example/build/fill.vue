
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
	"province": "2",
	"city": null,
	"province_label": "下拉框2"
},
    		form: {
	"list": [
		{
			"type": "select",
			"options": {
				"defaultValue": "",
				"placeholder": "请输入",
				"dynamic": 0,
				"options": [
					{
						"value": "1",
						"label": "下拉框1"
					},
					{
						"value": "2",
						"label": "下拉框2"
					}
				],
				"methodType": "get",
				"dynamicPostData": "",
				"remoteFunc": "",
				"dataPath": "",
				"remoteValue": "",
				"remoteLabel": "",
				"dictType": "",
				"multiple": false,
				"showSearch": false,
				"clearable": false,
				"hidden": false,
				"disabled": false,
				"selectCb": "",
				"clearCb": "",
				"linkage": false,
				"linkData": []
			},
			"label": "下拉选择器",
			"labelWidth": -1,
			"width": "100%",
			"span": 24,
			"model": "province",
			"key": "select_16942303175332",
			"rules": [
				{
					"required": false,
					"message": "必填项",
					"trigger": [
						"blur"
					]
				}
			]
		},
		{
			"type": "select",
			"options": {
				"defaultValue": "",
				"placeholder": "请输入",
				"dynamic": 1,
				"options": [
					{
						"value": "1",
						"label": "下拉框1"
					},
					{
						"value": "2",
						"label": "下拉框2"
					}
				],
				"methodType": "get",
				"dynamicPostData": "",
				"remoteFunc": "https://netopt.net/api/bbs/api/hotTopic",
				"dataPath": "data",
				"remoteValue": "id",
				"remoteLabel": "title",
				"dictType": "",
				"multiple": false,
				"showSearch": false,
				"clearable": false,
				"hidden": false,
				"disabled": false,
				"selectCb": "",
				"clearCb": "",
				"linkage": true,
				"linkData": [
					{
						"vtype": 2,
						"model": "province",
						"script": "",
						"queryKey": "province",
						"queryValue": "$.province"
					}
				],
				"listenModel": false,
				"listenModelData": "province"
			},
			"label": "下拉选择器",
			"labelWidth": -1,
			"width": "100%",
			"span": 24,
			"model": "city",
			"key": "select_16942303194132",
			"rules": [
				{
					"required": false,
					"message": "必填项",
					"trigger": [
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
		"hideRequiredMark": false,
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