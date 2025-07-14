
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
			  
                    "data": [
                        {
                            "dataTable_17429751524972": [
                                { xfsjc: '20250101', orgName: 'A部门', dfhz: 100 },
                                { xfsjc: '20250101', orgName: 'B部门', dfhz: 200 } 
                              ]
                        }
                    ]
                
 
			},
    		form: {
 
    "list": [
        {
            "type": "controller",
            "layout": true,
            "event_": false,
            "listen_": false,
            "options": {
                "customStyle": "",
                "customClass": "",
                "bordered": false,
                "add": true,
                "copy": true,
                "remove": true,
                "hidden": false,
                "model": ""
            },
            "label": "容器",
            "labelWidth": 0,
            "width": "100%",
            "span": 24,
            "model": "data",
            "key": "controller_17429751501062",
            "list": [
                {
                    "type": "dataTable",
                    "options": {
                        "dbType": "1",
                        "datasourceStatic": [],
                        "methodType": "get",
                        "queryData": [],
                        "apiPath": "",
                        "columns": [
                            {
                                "label": "xfsjc",
                                "column": "xfsjc",
                                "width": "",
                                "formater": "",
                                "align": "center",
                                "id": 1742975865293
                            },
                            {
                                "label": "orgName",
                                "column": "orgName",
                                "width": "",
                                "formater": "",
                                "align": "center",
                                "id": 1742975612235
                            },
                            {
                                "label": "dfhz",
                                "column": "dfhz",
                                "width": "",
                                "formater": "",
                                "align": "center",
                                "id": 1742975447323
                            }
                        ],
                        "apiDataScript": "",
                        "rowHeight": 0,
                        "headerHeight": 0,
                        "page": true,
                        "smallPage": false,
                        "pageAlign": "center",
                        "currentPageKey": "pageIndex",
                        "pageSizeKey": "pageSize",
                        "pageSize": 10,
                        "border": false,
                        "stripe": false,
                        "showIndex": false,
                        "hidden": false
                    },
                    "label": "数据表格",
                    "labelWidth": 0,
                    "width": "100%",
                    "span": 24,
                    "model": "dataTable_17429751524972",
                    "key": "dataTable_17429751524972",
                    "size": "medium",
                    "height": 0,
                    "maxHeight": 0,
                    "dynamicLabel": false
                }
            ],
            "dynamicLabel": false
        }
    ],
    "config": {
        "labelPosition": "top",
        "labelWidth": 80,
        "size": "mini",
        "outputHidden": true,
        "hideRequiredMark": false,
        "syncLabelRequired": false,
        "labelSuffix": "",
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