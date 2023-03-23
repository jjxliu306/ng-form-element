
<template>
    <div style="padding: 20px;"> 
        <ng-form-build ref="formBuild" :formTemplate="form" />

        <div style="text-align: center;"> 
      		<el-button type="primary" size="mini" @click="dataFormData1()">直接获取数据</el-button>
      		<el-button type="primary" size="mini" @click="dataFormData2()">效验后获取数据</el-button>
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
						"label": "名称",
						"labelWidth": -1,
						"width": "100%",
						"span": 24,
						"model": "name",
						"key": "input_1679559030288",
						"rules": [
							{
								"required": true,
								"message": "姓名不能为空",
								"trigger": [
									"blur"
								]
							}
						]
					},
					{
						"type": "textarea",
						"options": {
							"defaultValue": "",
							"rows": 4,
							"placeholder": "请输入",
							"maxLength": 0,
							"clearable": false,
							"autosize": false,
							"hidden": false,
							"disabled": false
						},
						"label": "地址",
						"labelWidth": -1,
						"width": "100%",
						"span": 24,
						"model": "address",
						"key": "textarea_1679559030288",
						"rules": [
							{
								"required": true,
								"message": "地址不能为空",
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
    	dataFormData1() {
    		const data = this.$refs.formBuild.getData() 
 			
    		this.$message('获取到数据:' + JSON.stringify(data))

    	},
    	dataFormData2() {
    		this.$refs.formBuild.getData(false).then((data)=> {
    			this.$message('晓燕后获取到数据:' + JSON.stringify(data))
    		}).catch(()=> {
    			this.$message('效验未通过' )
    		}) 
    	}
    }
}
</script>