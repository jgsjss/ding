<template>
<Navbar />
<BreakTime />

  <div class="oper_container">
    <div class="oper_wrap">
    <h2 class="oper_text">운영관리</h2>  
      <div class="oper_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>  
      <!--/////가게상태/////-->
      <p class="operation_text">◆가게상태</p>
      <div class="oper_all_wrap">
      <div class="oper_box1" v-for="(a, i) in $store.state.OperationData" :key="i">
        <div class="oper_btn_box">
          <router-link to="/OperationModal"><button type="button" class="oper_title_btn" >영업시간</button></router-link>
        </div>
        <!--/////영업시간/////-->
          <div class="oper_wrapper">
            <div class="oper_wrap1">
              <div class="oper_left">평일</div>
              <div class="oper_left">주말</div>
              <div class="oper_left">토</div>
              <div class="oper_left">일</div>
            </div>
          <div class="oper_wrap2">
            <div class="oper_right">{{ $store.state.OperationData[i].time1 }}</div>
            <div class="oper_right">{{ $store.state.OperationData[i].time2 }}</div>
            <div class="oper_right">{{ $store.state.OperationData[i].time3 }}</div>
            <div class="oper_right">{{ $store.state.OperationData[i].time4 }}</div>
          </div>
        </div>
      </div>
      <!--/////준비시간/////-->
      <div class="oper_box1">
        <div class="oper_btn_box">
          <button type="button" class="oper_title_btn" data-bs-toggle="modal" data-bs-target="#breaktime">준비시간</button>
        </div>
          <div class="preparation_text">(설정없음)</div>
      </div>
      <!--/////정기휴무/////-->
      <div class="oper_box1" v-for="(a, i) in $store.state.OperationData" :key="i">
        <div class="oper_title">정기휴무</div>
          <div class="oper_wrapper">
            <div class="oper_wrap2">
              <div class="oper_left">매월 첫째주</div>
              <div class="oper_left">매월 셋째주</div>
            </div>
          <div class="oper_wrap2">
            <div class="oper_right">{{ $store.state.OperationData[i].day }}</div>
            <div class="oper_right">{{ $store.state.OperationData[i].day }}</div>
          </div>
        </div>
      </div>      
      <!--/////임시휴무/////-->
      <div class="oper_box1" v-for="(a, i) in $store.state.OperationData" :key="i">
        <div class="oper_title">임시휴무</div>
          <div class="holiday">{{ $store.state.OperationData[i].date }}</div>
          <div class="holiday_text">개인사정으로 인해 쉽니다.</div>
      </div>      
      <!--/////매장상태/////-->
      <div class="oper_box1" v-for="(a, i) in $store.state.OperationData" :key="i">
        <div class="oper_title">매장상태</div>
          <div class="oper_condition">{{ $store.state.OperationData[i].condition }}</div>
      </div>  
      </div>    
  </div>





</template>
<script>
import Navbar from '@/components/Navbar.vue'
import BreakTime from '../components/BreakTime.vue';
  export default {

  components:{
    Navbar,
    BreakTime,
  },

}


</script>
<style>
@import '../assets/css/OperationManagement/OperationManagement.css';
</style>
