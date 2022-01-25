<template>
<Navbar />
  <div>
      <h4>운영관리 내 로그확인</h4>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
// import axios from 'axios';
export default {
  components: { 
    Navbar,
    },
};
</script>

<style>
@import '../assets/css/OperationManagement/LogCheck.css';
</style>
