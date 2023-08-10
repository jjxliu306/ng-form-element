<template>
  <!-- <transition name="fade">
    <router-view></router-view>
  </transition> -->
   <Design />  
  <!-- <Fill/> --> 
</template>
<style> 
html , body {
  overflow: auto;
}
</style>
<script> 
import Fill from './build/fill.vue'
import Design from './design.vue'
import Vue from "vue" 
export default {
  components: {
    Design,Fill
  },
  computed: { 
  },
  activated() {
    
  },
  created() { 
     
  },
  beforeCreate(){
     
  },
  mounted() {
     
  },
  methods: {
     
  }
};
</script>
