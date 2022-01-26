<template>
<Navbar />

  <div class="oper_container">
    <div class="oper_wrap">
      <div>
      <h2 class="oper_text">운영관리</h2>
        <router-link to="/OperationManagement/LogCheck"><button type="button" class="logcheck_btn">로그확인</button></router-link>
      </div>
      <div class="oper_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>  
      <!--/////가게상태/////-->
      <div class="shop_condition">
      <p class="operation_text">◆가게상태</p>
      <div>
        <button type="button" class="oper_shop_btn">정상설정</button>
        <button type="button" class="oper_shop_btn">영업중</button>
        <button type="button" class="oper_shop_btn">준비중</button>
        <button type="button" class="oper_shop_btn">노출정지</button>
        <button type="button" class="oper_shop_btn">딩동오더 정지</button>
        <i class="xi-help-o" @click="show=!show"></i>
          <div class="shop_help" v-show="show">
            <span>- 매장상태를 임의로 변경 가능합니다.</span>
            <span>- 변경하신 매장상태는 다음날이 되면 정상상태로 변경됩니다.</span>
            <span>- 노출정지: 딩동오더에 가게가 나타나지 않습니다</span>
            <span>- 딩동오더 정지: 카운터 주문만 가능합니다.</span>
            <span>- 정상상태: 설정된 데이터에 맞게 운영되는 상태</span>
          </div>

      </div>
      </div>
      <div class="oper_all_wrap">
      <div class="oper_box1" v-for="(a, i) in $store.state.OperationData" :key="i">
        <div class="oper_btn_box">
        </div>
        <!--/////영업시간/////-->
        <div class="oper_title">영업시간</div>
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
        <div class="oper_title" @click="break_container">준비시간</div>
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




<OperationSetting />
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import OperationSetting from './OperationSetting.vue';
  export default {
  components:{
    Navbar,
    OperationSetting,
  },
  data() {
    return {
      show:false,
    }
  },
  methods: {

}

}


</script>
<style>
@import '../assets/css/OperationManagement/OperationManagement.css';
</style>
