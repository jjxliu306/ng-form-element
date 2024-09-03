
<template>
    <div style="padding: 20px;"> 
    	models:{{models}}
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
			"key": "input_17241288461882",
			"span": 12,
			"type": "input",
			"label": "事项",
			"model": "input_17241288461882",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"options": {
				"type": "text",
				"hidden": false,
				"disabled": false,
				"clearable": false,
				"placeholder": "请输入"
			},
			"labelWidth": -1
		},
		{
			"key": "textarea_17241288717692",
			"span": 12,
			"type": "textarea",
			"label": "详情",
			"model": "textarea_17241288717692",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"options": {
				"rows": 4,
				"hidden": false,
				"autosize": false,
				"disabled": false,
				"placeholder": "请输入"
			},
			"labelWidth": -1
		},
		{
			"key": "daterange_17241288917282",
			"span": 12,
			"type": "daterange",
			"label": "日期区间",
			"model": "daterange_17241288917282",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"options": {
				"format": "YYYY-MM-DD",
				"hidden": false,
				"dateType": "date",
				"disabled": false,
				"editable": true,
				"clearable": false,
				"rangeEndPlaceholder": "请输入",
				"rangeStartPlaceholder": "请输入"
			},
			"labelWidth": -1
		},
		{
			"key": "slider_17241289033752",
			"span": 24,
			"type": "slider",
			"label": "合格率",
			"model": "slider_17241289033752",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"options": {
				"max": 10,
				"min": 1,
				"step": 1,
				"marks": [],
				"hidden": false,
				"disabled": false,
				"showInput": false,
				"defaultValue": 0
			},
			"labelWidth": -1
		},
		{
			"key": "uploadImg_17241289466412",
			"span": 24,
			"type": "uploadImg",
			"label": "上传图片",
			"model": "uploadImg_17241289466412",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"event_": false,
			"listen_": false,
			"options": {
				"limit": 7,
				"action": "http://58.247.255.86:9900/admin-api/cp/infra/file/upload",
				"hidden": false,
				"headers": [],
				"disabled": false,
				"listType": "picture-card",
				"multiple": true,
				"limitSize": 200,
				"defaultValue": [],
				"uploadHidden": false,
				"responseFileUrl": "data"
			},
			"labelWidth": -1
		},
		{
			"key": "uploadFile_17241289594972",
			"span": 24,
			"type": "uploadFile",
			"label": "上传文件",
			"model": "uploadFile_17241289594972",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"event_": false,
			"listen_": false,
			"options": {
				"limit": 10,
				"action": "http://58.247.255.86:9900/admin-api/cp/infra/file/upload",
				"hidden": false,
				"headers": [],
				"disabled": false,
				"multiple": true,
				"limitSize": 200,
				"defaultValue": [],
				"uploadHidden": false,
				"responseFileUrl": "data"
			},
			"labelWidth": -1
		},
		{
			"key": "rate_17241289781432",
			"span": 24,
			"type": "rate",
			"label": "评分",
			"model": "rate_17241289781432",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur"
					],
					"required": false
				}
			],
			"width": "100%",
			"options": {
				"max": 5,
				"hidden": false,
				"disabled": false,
				"allowHalf": false
			},
			"labelWidth": -1
		},
		{
			"key": "cascader_17241289910742",
			"span": 24,
			"type": "cascader",
			"label": "级联选择器",
			"model": "cascader_17241289910742",
			"rules": [
				{
					"message": "必填项",
					"trigger": [
						"blur",
						"change"
					],
					"required": false
				}
			],
			"width": "100%",
			"options": {
				"hidden": false,
				"dynamic": 0,
				"options": [
					{
						"label": "等级",
						"value": "0",
						"children": [
							{
								"label": "一",
								"value": "1"
							},
							{
								"label": "二",
								"value": "2"
							}
						]
					},
					{
						"label": "三",
						"value": "3"
					},
					{
						"label": "四",
						"value": "4"
					},
					{
						"label": "五",
						"value": "5"
					}
				],
				"disabled": false,
				"multiple": false,
				"clearable": false,
				"methodType": "get",
				"showSearch": false,
				"placeholder": "请输入",
				"defaultValue": []
			},
			"labelWidth": -1
		}
	],
	"config": {
		"labelPosition": "left",
		"labelWidth": 100,
		"size": "default",
		"outputHidden": true,
		"hideRequiredMark": false,
		"syncLabelRequired": true,
		"labelSuffix": "",
		"customStyle": ""
	}
},

    		config: {
    			
    		},
    		// 标记历史数据 
    		models: {

    		}
    	} 
    },
    created(){
    	 

    	const this_ = this 
    	setTimeout(()=> {
    		const ms = {
    			  "rate_17241289781432": 5, "input_17241288461882": "请问", "slider_17241289033752": 1, "cascader_17241289910742": ["3"], "textarea_17241288717692": "阿尔冯绍峰", "daterange_17241288917282": ["2024-08-20", "2024-09-28"], "uploadImg_17241289466412": [{"url": "http://58.247.255.86:9900/admin-api/infra/file/26/get/f016ea6352aa8530b7ea4a010778a55bffb37225bd4ea6ec1f954a7390627149.jpeg", "name": "284a0007c2c9e73207ff885f70fa4c40.jpeg", "size": 109502}], "uploadFile_17241289594972": [{"url": "http://58.247.255.86:9900/admin-api/infra/file/26/get/bb29b3f16797b691cdf8c6fd78a0985fd85a72f63603ef241cf63aa434728fac.xls", "name": "角色列表.xls", "size": 85}], "cascader_17241289910742_label": "三" 
    		}

    		this_.models = ms

    	} , 2000)
    },
    methods: {
    	dataFormSubmit() {
    		const models = this.$refs.formBuild.getData()

    		console.log('表单提交:' , JSON.stringify(models))
    	}
    }
}
</script>