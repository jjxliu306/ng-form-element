<template>  
	<svg :id="id" ref="barcode"></svg>
</template>
<script>

import JsBarcode from "jsbarcode";
import mixin from '../../mixin.js'
import { getUUID } from '../../../../utils/index.js'
export default {
	mixins: [mixin],
	data() {
		return {
			id: getUUID() 
		}
		
	},
	computed: { 
	    barOptions() {
	    	return {
			  fontSize: this.record.options.fontSize,
			  format: this.record.options.format,
			  width: this.record.options.width,
			  height: this.record.options.height,
			  displayValue: this.record.options.displayValue ,
			  fontOptions: this.record.options.fontOptions,
			  textAlign: this.record.options.textAlign || 'center',
			  textPosition: this.record.options.textPosition,
			  textMargin: this.record.options.textMargin,
			  //fontSize: this.record.options.fontSize ,
			  //background: this.record.options.background || '#FFFFFF',
			  lineColor: this.record.options.lineColor || '#000000',
			  margin: this.record.options.margin || 10,
			  background: this.record.options.background || '#FFFFFF'
			}
	    },
	    info() {
	    	return this.record.options.info
	    }
	},
	watch: {
		barOptions: {
			handler(val) {
				if(val) {
					this.initBarcode()
				}
			} ,
      		deep: true,
      		immediate: false
			
		},
		info(val) {
			this.$nextTick(()=> {
				this.initBarcode()
			})
			
		}
	},
	mounted() {
		if(this.barOptions && this.info) {
			this.$nextTick(()=> {
				this.initBarcode()
			})
			
		}
	},
	methods: {
		initBarcode() {
			const barcode = this.$refs.barcode 
			JsBarcode(barcode, this.record.options.info , this.barOptions); 
		}
	}
}
</script>
 