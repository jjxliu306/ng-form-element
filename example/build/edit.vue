
<template>
    <div style="padding: 20px;"> 
        <ng-form-build  ref="formBuild" :models="models" :config="config" :formTemplate="form" />

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
    			
    		},
    		// 标记历史数据 
    		models: {
    			sex: '2'
    		}
    	} 
    },
    created(){
    	this.$nextTick(()=> {
    		const dict = [
		          {type: 'sex' , label: '男' , value: '1'},
		          {type: 'sex' , label: '女' , value: '2'}
		        ]

		    this.$set(this.config , 'dict' , dict)

		    //this.keys++
    	})
    },
    methods: {
    	dataFormSubmit() {
    		const models = this.$refs.formBuild.getData(false)

    		console.log('表单提交:' , JSON.stringify(models))
    	}
    }
}
</script>