
<template>
    <div style="padding: 20px;"> 
    	
        <ng-form-build ref="formBuild" :formTemplate="form" :models="model"/>

        <div style="text-align: center;"> 
      		<el-button type="primary" size="mini" @click="dataFormSubmit()">提交</el-button>
        </div>
    </div> 
</template>
<script>
export default { 
   	data() {
    	return {
    		model: {} ,
    		form: { 
				 
				"list": [
					{
						"type": "input",
						"options": {
							"defaultValue": "",
							"prepend": "",
							"append": "",
							"placeholder": "请输入",
							"maxLength": 0,
							"clearable": false,
							"hidden": false,
							"disabled": false
						},
						"label": "输入框",
						"labelWidth": -1,
						"width": "100%",
						"span": 24,
						"model": "name1",
						"key": "input_1679577822316",
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
						"type": "input",
						"options": {
							"defaultValue": "",
							"prepend": "",
							"append": "",
							"placeholder": "请输入",
							"maxLength": 0,
							"clearable": false,
							"hidden": false,
							"disabled": false,
							"listenModel": true,
							"listenModelData": "name1",
							"listenModelScript": "$.name2=$.name1"
						},
						"label": "输入框",
						"labelWidth": -1,
						"width": "100%",
						"span": 24,
						"model": "name2",
						"key": "input_1679577823555",
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
    		const models = this.$refs.formBuild.getData(false)

    		console.log('表单提交:' , JSON.stringify(models))
    	}
    }
}
</script>