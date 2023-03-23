
<template>
    <div style="padding: 20px;"> 
        <ng-form-build ref="formBuild" :preview="true" :models="models"  :formTemplate="form" />

        
    </div> 
</template>
<script>
export default { 
   	data() {
    	return {
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
						"label": "姓名",
						"labelWidth": -1,
						"width": "100%",
						"span": 24,
						"model": "name",
						"key": "input_1679557329971",
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
			 
    		}, 
    		// 标记历史数据 
    		models: {
    			name: '小明' 
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