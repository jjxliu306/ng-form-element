<template>
<iframe :src="record.url"
        :width="record.width" 
        :height="record.height" 
        :frameborder="!record.options.frameborder"
        :sandbox="record.options.sandbox"
        :marginheight="marginwidth"
        :marginwidth="marginwidth"
        :scrolling="record.options.scrolling"
        allowfullscreen >
 
</iframe>
</template>
<script>
import mixin from '../../mixin.js'
export default {
	mixins: [mixin],
	computed: {
		marginheight() {
			if(this.record && this.record.options && this.record.options.marginheight) {
				return this.record.options.marginheight + 'px'
			}
			return null
		},
		marginwidth() {
			if(this.record && this.record.options && this.record.options.marginwidth) {
				return this.record.options.marginwidth + 'px'
			}
			return null
		}
	}
}
</script>