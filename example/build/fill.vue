
<template>
    <div style="padding: 20px;"> 
        <ng-form-build ref="formBuild" :formTemplate="form" />

        <div style="text-align: center;"> 
      		<el-button type="primary" size="mini" @click="dataFormSubmit()">提交</el-button>
        </div>
    </div> 
</template>
<script>
export default { 
   	data() {
    	return {
    		form: {
	"list": [
		{
			"type": "table",
			"layout": true,
			"options": {
				"customStyle": "",
				"customClass": "",
				"bordered": true,
				"bright": true,
				"small": true,
				"hidden": false
			},
			"label": "表格布局",
			"labelWidth": 0,
			"width": "100%",
			"span": 24,
			"key": "table_16909703413130",
			"model": "table_16909703413130",
			"trs": [
				{
					"tds": [
						{
							"colspan": 1,
							"rowspan": 1,
							"list": [
								{
									"type": "input",
									"options": {
										"defaultValue": "",
										"type": "text",
										"prepend": "",
										"append": "",
										"placeholder": "请输入",
										"maxLength": "",
										"clearable": false,
										"hidden": false,
										"disabled": false
									},
									"label": "输入框",
									"labelWidth": -1,
									"width": "100%",
									"span": 24,
									"model": "input_16909703429150",
									"key": "input_16909703429150",
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
							]
						},
						{
							"colspan": 1,
							"rowspan": 1,
							"list": [
								{
									"type": "input",
									"options": {
										"defaultValue": "",
										"type": "text",
										"prepend": "",
										"append": "",
										"placeholder": "请输入",
										"maxLength": "",
										"clearable": false,
										"hidden": false,
										"disabled": false
									},
									"label": "输入框",
									"labelWidth": -1,
									"width": "100%",
									"span": 24,
									"model": "input_1690970343763",
									"key": "input_1690970343763",
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
							]
						}
					]
				},
				{
					"tds": [
						{
							"colspan": 1,
							"rowspan": 1,
							"list": []
						},
						{
							"colspan": 1,
							"rowspan": 1,
							"list": []
						}
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