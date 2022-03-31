<template>
<Navbar />

  <div class="oper_container">
    <div class="oper_wrap">
      <div>
      <h2 class="oper_text">운영관리</h2>
        <router-link to="/LogCheck"><span class="logcheck_btn">로그확인</span></router-link>
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
        <button type="button" class="oper_shop_btn" data-bs-toggle="modal" data-bs-target="#NoticeModal">정상설정</button>
        <button type="button" class="oper_shop_btn" data-bs-toggle="modal" data-bs-target="#NoticeModal">영업중</button>
        <button type="button" class="oper_shop_btn" data-bs-toggle="modal" data-bs-target="#NoticeModal">준비중</button>
        <button type="button" class="oper_shop_btn" data-bs-toggle="modal" data-bs-target="#NoticeModal">노출정지</button>
        <button type="button" class="oper_shop_btn" data-bs-toggle="modal" data-bs-target="#NoticeModal">딩동오더 정지</button>
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
      <div class="oper_box1">
        <div class="oper_btn_box">
        </div>
        <!--/////영업시간///// 화면에 최대 7개 추가가능 -->
        <div class="oper_title" @click=" step = 0">영업시간</div>
          <div class="oper_wrapper">
            <div class="oper_wrap1">
              <div class="oper_left">
                {{ form.dayCheck[0] }}
                {{ form.dayCheck[1] }}
                {{ form.dayCheck[2] }}
                {{ form.dayCheck[3] }}
                {{ form.dayCheck[4] }}
                {{ form.dayCheck[5] }}
                {{ form.dayCheck[6] }}
                </div>
            </div>
          <div class="oper_wrap2">
            <div class="oper_right">
              {{ form.operTime }} ~
              {{ form.operTimeT }}
            </div>
            <div class="oper_right">
              {{ form.operHoly }} ~
              {{ form.operHolyT }}
            </div>
          </div>
        </div>
      </div>
      <!--/////준비시간/////-->
      <div class="oper_box1">
        <div class="oper_btn_box">
        <div class="oper_title" @click=" step = 1">준비시간</div><!--클릭시 자식 데이터가 나옴-->
        </div>
          <div class="preparation_text" >
            <p class="preparation_text_inner">평일 시작 및 종료</p>
            {{ form.breakTime }} ~ {{ form.breakTimeT}}
          </div>
          <div class="preparation_textTwo" >
            <p class="preparation_text_inner_two">주말 시작 및 종료</p>
            {{ form.holyTime }} ~ {{ form.holyTimeT}}
          </div>     
      </div>
      <!--/////정기휴무/////-->
      <div class="oper_box1">
        <div class="oper_title"  @click=" step = 2">정기휴무</div>
          <div class="oper_wrapper">
            <div class="oper_wrap2">

                <span class="oper_left"> {{ form.salutation }}</span>

              <!-- <div class="oper_left">{{week.week}}</div>
              <div class="oper_left">{{week.day}}</div> -->
            </div>
          <div class="oper_wrap2">
                <span class="oper_right"> {{ form.weekDay }}</span>
          </div>
        </div>
      </div>      
      <!--/////임시휴무/////-->
      <div class="oper_box1">
        <div class="oper_title" @click=" step = 3">임시휴무</div>
          <div class="holiday">{{ form.reasonDate }} {{ form.reasonTime }}~ </div>
          <!-- <div class="holiday">(설정없음)</div> -->
          <div class="holidayTwo">{{ form.reasonDateT }} {{ form.reasonTimeT }}</div>
          <div class="holiday_text">{{form.reasonCheck}}</div>
      </div>      
      <!--/////매장상태/////-->
      <div class="oper_box1" v-for="(a, i) in $store.state.OperationData" :key="i">
        <div class="oper_title">매장상태</div>
          <div class="oper_condition">{{ $store.state.OperationData[i].condition }}</div>
      </div>  
      </div>    
  </div>

  <!--/////매장상태 모달창/////-->
<!-- Modal -->
<div class="modal fade" id="NoticeModal" tabindex="-1" aria-labelledby="NoticeModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="NoticeModalLabel">매장상태 변경</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        적용하시겠습니까?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        <button type="button" class="btn btn-primary">확인</button>
      </div>
    </div>
  </div>
</div>
<OperationSetting :step = "step"                  
  v-model:salutation="form.salutation"
  v-model:weekDay="form.weekDay"
  v-model:breakTime="form.breakTime"
  v-model:breakTimeT="form.breakTimeT"
  v-model:holyTime="form.holyTime"
  v-model:holyTimeT="form.holyTimeT"
  v-model:reasonCheck="form.reasonCheck"
  v-model:reasonDate="form.reasonDate"
  v-model:reasonDateT="form.reasonDateT"
  v-model:operTime="form.operTime"
  v-model:operTimeT="form.operTimeT"
  v-model:dayCheck="form.dayCheck"
  v-model:operHoly="form.operHoly"
  v-model:operHolyT="form.operHolyT"
  @sandParam="sandParam"
/>
<!-- <OperationSetting :step = "step" :datepicker ="datepicker" /> -->
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import OperationSetting from '../operationmanagement/OperationSetting.vue';
import { reactive } from 'vue'

  export default {
  components:{
    Navbar,
    OperationSetting,
  },
  data() {
    return {
      show:false,
      step: 0,
      textShow:false,
      leftShow:false,
    }
  },
  setup() {
    const form = reactive({
      salutation: '',
      weekDay:'',
      breakTime:'',
      breakTimeT:'',
      date:'',
      dateT:'',
      reasonCheck:'',
      reasonDate:'',
      reasonDateT:'',
      reasonTime:'',
      operTime:'',
      operTimeT:'',
      operHoly:'',
      operHolyT:'',
      dayCheck:[],

    })
    function sandParam(_value){
      Object.assign(form,_value)
      console.log(form) 
    }
    
    return {
      form,
      sandParam,
    }
  },
  methods: {
    notice: function(evt) {
      alert('상태를 변경하시겠습니까?')
    },
    //     setInput(dayCheck) {
    //   this.value = dayCheck;
    //   console.log("자식 컴포넌트에게 값을 받았어요 :)", dayCheck);
    // },
    // isDate:function(value) {
    //   if (value == "" || value == null || undefined || ( value != null && typeof value == "object" && !Object.keys(value).length)){
    //     console.log(this.value)
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    // setInput(weekday) {
    //   this.value = weekday;
    //   console.log("자식 컴포넌트에게 값을 받았어요 :)", weekday);
    // }
    }
    
}




</script>
<style>
@import '../../assets/css/OperationManagement/OperationManagement.css';
</style>

