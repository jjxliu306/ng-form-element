
<template>
    <div style="padding: 20px;"> 
        <ng-form-build ref="formBuild" :config="config" :formTemplate="form" />

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
					},
					{
						"type": "radio",
						"options": {
							"defaultValue": "",
							"placeholder": "请输入",
							"dynamic": 2,
							"options": [
								{
									"value": "1",
									"label": "选项1"
								},
								{
									"value": "2",
									"label": "选项2"
								}
							],
							"remoteFunc": "",
							"dataPath": "",
							"remoteValue": "",
							"remoteLabel": "",
							"dictType": "sex",
							"hidden": false,
							"disabled": false,
							"linkage": false,
							"linkData": []
						},
						"label": "性别",
						"labelWidth": -1,
						"width": "100%",
						"span": 24,
						"model": "sex",
						"key": "radio_1679557329971",
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

    		config: {
    			httpConfig: (config)=>{ 
		          config.headers['aaaa'] = 'bbbb'
		          return config 
		        },
    			dict: [
		          {type: 'sex' , label: '男' , value: '1'},
		          {type: 'sex' , label: '女' , value: '2'},
		          {type: 'yes_or_no' , label: '是' , value: '1'},
		          {type: 'yes_or_no' , label: '否' , value: '2'},
		          {type: 'nation' , label: '汉族' , value: '1'},
		          {type: 'nation' , label: '蒙古族' , value: '2'},
		          {type: 'nation' , label: '藏族' , value: '3'},
		          {type: 'nation' , label: '壮族' , value: '4'}
		        ]

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