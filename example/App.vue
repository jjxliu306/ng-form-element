<template>
  <!-- <transition name="fade">
    <router-view></router-view>
  </transition> -->
   <Design /> 
  <!--  <Fill/>  -->
 <!-- <Edit/>-->
</template>
<style> 
html , body {
  overflow: auto;
}
</style>
<script> 
import Edit from './build/edit'
import Fill from './build/fill.vue'
import Design from './design.vue'
import Vue from "vue" 
export default {
  components: {
    Design,Fill,Edit
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
