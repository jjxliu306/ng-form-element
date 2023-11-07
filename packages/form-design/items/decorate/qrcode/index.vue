<template>  

	<vue-qr :style="{height: height + 'px'}" 
		:margin="record.options.margin"
		:logoSrc="logo" 
		:color-dark="record.options.colorDark"
		:color-light="record.options.colorLight"
		:bg-src="record.options.bgSrc"
		:background-color="record.options.bgColor"
		:logo-scale="record.options.logoScale"
		:logo_margin="record.options.logoMargin"
		:logo-background-color="record.options.logoBgColor"
		:logo-cornet-radius="record.options.logoRadius"
		:white-margin="!record.options.whiteMargin"
		:text="record.options.info" 
		:size="height"></vue-qr> 
 
</template>
<script>
import VueQr from 'vue-qr'
 
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	components: {
		VueQr
	},
	computed: {
		height() {
			return this.record.options.height || 200
		},
		logo() {
			if(!this.record.options.logoSrc) {
				return undefined
			}
			return this.record.options.logoSrc
		},
		 
	}
}
</script>
 