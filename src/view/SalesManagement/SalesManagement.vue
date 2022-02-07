<template>
<Navbar />

  <div class="dis_container">
    <div class="dis_wrap">
      <h2 class="dis_text">매출관리</h2>
      <div class="dis_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>  
      <hr />
      <div class="dis_component_bar">
        <router-link to="/SalesManagement/SalesManagementOne"><span class="component_name first">월별매출</span></router-link>
        <router-link to="/SalesManagement/SalesManagementTwo"><span class="component_name">기간설정</span></router-link>
      </div>
      <hr/>
  </div>
  <router-view> </router-view>



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
@import '../../assets/css/SalesManagement/SalesManagement.css';
</style>
