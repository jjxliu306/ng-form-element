<template>
  <div  class="esign"   v-if="!preview && !disabled">
    <div class="esign-box" ref="esignBox">
    
      <Esign class="esignature" ref="esign" v-if="boxWidth > 0" :disabled="disabled || isDragPanel"  :height="esignHeight" :width="boxWidth" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor" :isClearBgColor="false" :bgColor.sync="bgColor" @change="change" :value="models[record.model]"/>
    </div>
    <div class="esigh-btns" v-if="record.options.clearable">
      <el-button type="text" @click="handleReset">{{t('ngform.item.signature.clear')}}</el-button>  
    </div> 
  </div>
  <div v-else :style="{height: esignHeight + 'px'}">
    <img :src="models[record.model]" alt="">
  </div>
</template>

<script>
import Esign from './esign.vue'
import mixin from '../../mixin.js'
export default { 
  mixins: [mixin],
  components: {
    Esign
  },
  data () {
    return {
      //lineWidth: 6,
      //lineColor: '#000000',
      //bgColor: '',
      resultImg: '',
      boxWidth: 0,
      //isCrop: false
    }
  },
  computed: {
    esignHeight() {
      return  this.record.options.height || 300 
    },
    lineWidth() {
      return this.record.options.lineWidth || 4
    },
    lineColor() {
      return this.record.options.lineColor || '#000000'
    },
    bgColor() {
      return this.record.options.bgColor 
    },
    isCrop() {
      return this.record.options.ifCrop && this.record.options.ifCrop == true
    },
    labelWidth() {
      return this.record.labelWidth
    }
  },
  watch: {
    labelWidth(val) {
      const esignBox = window.getComputedStyle(this.$refs.esignBox)
      this.boxWidth = parseFloat(esignBox.width ) 
    }
  },
  mounted() {
    const esignBox = window.getComputedStyle(this.$refs.esignBox)
    this.boxWidth = parseFloat(esignBox.width ) 
    //const boxHeight = esignBox.height 

     
  },
  methods: {
    handleReset () {
      this.$set(this.models , this.record.model , '')
      this.$refs.esign.reset()
      
    }, 
    change() {
      // 保存值
      this.$refs.esign.generate().then(res => {
        //this.resultImg = res

        
        this.$set(this.models , this.record.model , res)

      }).catch(err => {
        this.$set(this.models , this.record.model , '')
        console.error('generate signature error' , err)
        //alert(err)
      })
    }
  }
}
</script>

<style scoped>
.esign {
  max-width: 1000px;
  margin: auto;
  padding: 10px;
}
 
.esigh-btns { 
  text-align: right;
}
 
.esignature { 
  border: 2px solid #ccc;
}
</style>