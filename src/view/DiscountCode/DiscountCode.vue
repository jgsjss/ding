<template>
<Navbar />
  <div>
    할인코드 관리 페이지
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

    }
}

</script>

<style>

</style>