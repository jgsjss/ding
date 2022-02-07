<template>
<Navbar />
<div class="month_container">
  <div class="month_wrap">
    <div class="month_left">

    <Datepicker v-model="month" monthPicker />
    
    </div>
  </div>
</div>

</template>
<script>
import Navbar from '@/components/Navbar.vue'

  export default {
  components:{
    Navbar,
  },
  data() {
    return {
      show:false,
      step: 0,
    }
  },
  methods: {

    },
    // setup() {
    //     const month = ref({ 
    //         month: new Date().getMonth(),
    //         year: new Date().getFullYear()
    //     });
        
    //     return {
    //         month,
    //     }
    // }    
}




</script>
<style>
@import '../../assets/css/DiscountCode/DiscountCode.css';
</style>
