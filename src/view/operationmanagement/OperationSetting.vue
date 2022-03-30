<template>
<!--운영관리 가게설정 자식컴포넌트-->
  <div class="oper_set_container">
    <h2 class="operset_text">◆가게설정</h2>
    <div class="oper_set_wrap">
      <!--/////영업시간 고정/////-->
      <div class="oper_modal_container" v-if="step == 0">
        <div class="oper_modal_wrapper">
          <div class="oper_modal_one">
            <div class="oper_modal_text">영업시간</div>
            <p>- 요일별 하나의 영업시간만 등록할 수 잇습니다.</p>
            <p>- 영업시간이 등록되지 않은 요일은 24시간 영업으로 보여집니다.</p>
            <p>- 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
          </div>
          <div class="oper_sub_modal_wrap">
            <div class="oper_modal_two">
              <form>
                <!--요일 체크박스 시작-->
                <input 
                  type="checkbox" 
                  class="day_btn1" id="dayBtn1" 
                  v-model="dayBtnList" value="월"
                  @change="$emit('sandParam', { dayCheck1: $event.target.value})"
                >
                <label for="dayBtn1" class="day_label1"></label>
                <input 
                  type="checkbox" 
                  class="day_btn2" id="dayBtn2" 
                  v-model="dayBtnList" value="화"
                  @change="$emit('sandParam', { dayCheck2: $event.target.value})"
                >
                <label for="dayBtn2" class="day_label2"></label>
                <input 
                  type="checkbox" 
                  class="day_btn3" id="dayBtn3" 
                  v-model="dayBtnList" value="수"
                  @change="$emit('sandParam', { dayCheck3: $event.target.value})"
                >
                <label for="dayBtn3" class="day_label3"></label>
                <input
                  type="checkbox" 
                  class="day_btn4" id="dayBtn4" 
                  v-model="dayBtnList" value="목"
                  @change="$emit('sandParam', { dayCheck4: $event.target.value})"
                >
                <label for="dayBtn4" class="day_label4"></label>
                <input 
                  type="checkbox" 
                  class="day_btn5" id="dayBtn5" 
                  v-model="dayBtnList" value="금"
                  @change="$emit('sandParam', { dayCheck5: $event.target.value})"
                >
                <label for="dayBtn5" class="day_label5"></label>
                <input 
                  type="checkbox" 
                  class="day_btn6" id="dayBtn6" 
                  v-model="dayBtnList" value="토"
                  @change="$emit('sandParam', { dayCheck6: $event.target.value})"
                >
                <label for="dayBtn6" class="day_label6"></label>
                <input 
                  type="checkbox" 
                  class="day_btn7" id="dayBtn7" 
                  v-model="dayBtnList" value="일"
                  @change="$emit('sandParam', { dayCheck7: $event.target.value})"
                >
                <label for="dayBtn7" class="day_label7"></label>
                <!--요일 체크박스 끝-->
                <div class="oper_switch">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked" >24시간</label>
                  </div>
                </div>
                <div class="oper_modal_oper_box">
                  <form>
                    <label for="input_day" class="input_day">평일 시작 및 종료시간</label>
                    <input
                      type="time"
                      min="00:00"
                      class="oper_time"
                      @change="$emit('sandParam', { operTime: $event.target.value})"
                    /> ~
                    <input
                      type="time"
                      min="00:00"
                      class="oper_time"
                      @change="$emit('sandParam', { operTimeT: $event.target.value})"
                    />
                    <i class="xi-minus-circle-o oper_time_icon"></i>
                    <label for="input_day" class="input_day">주말 시작 및 종료시간</label>
                    <input 
                      type="time"
                      min="00:00"
                      class="oper_time"
                    /> ~
                    <input 
                      type="time"
                      min="00:00"
                      class="oper_time"
                    />
                    <i class="xi-minus-circle-o oper_time_icon"></i>
                  </form>
                </div>
              </form>
              <div class="time_btn_wrap">
                <button class="time_btn" @click="isDayBtn">저장</button>
                <button class="time_btntwo">닫기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/////준비시간 평소에는 hidden/////-->
      <div id="break_container" v-if="step == 1">
        <div class="break_wrapper">
          <div class="break_wrap">
            <div class="break_text">준비시간</div>
            <div class="break_one">
              <div class="break_switch">
                <div class="form-check form-switch">
                  <div class="wrapper">
                    준비시간
                    <input type="checkbox" id="switch" checked />
                    <label for="switch" class="switch_label">
                      <span class="onf_btn"></span>
                    </label>
                  </div>
                  <!-- <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="flexSwitchCheckChecked" 
                    checked 
                    @click="regularBtn=!regularBtn"
                    v-model="regularBtn"
                    /> -->
                </div>
              </div>
              <div class="break_box">
                <form>
                  <label for="input_day" class="input_day">평일 시작 및 종료시간</label>
                  <input
                    type="time"
                    class="time_input"
                    @change="$emit('sandParam', { breakTime: $event.target.value })"
                  />
                  <input
                    type="time"
                    class="time_inputTwo"
                    @change="$emit('sandParam', { breakTimeT: $event.target.value })"
                  />

                  <label for="input_day" class="input_day">주말 시작 및 종료시간</label>
                  <div style="display: block">
                    <input
                      type="time"
                      class="date_input"
                      @change="$emit('sandParam', { holyTime: $event.target.value })"
                    />
                    <input
                      type="time"
                      class="date_inputTwo"
                      @change="$emit('sandParam', { holyTimeT: $event.target.value })"
                    />
                  </div>
                </form>
              </div>
              <div class="break_time_btn_wrap">
                <button type="button" class="break_add_btn" @click="onEmit">저장</button>
                <button type="button" class="break_close_btn">닫기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/////정기휴무 평소에는 hidden/////-->
      <div class="regular_container" v-if="step == 2">
        <div class="regular_wrapper">
          <div class="regular_one">
            <div class="regular_text">정기휴무</div>
            <p>- 공휴일 휴무를 설정하시면 법정 공휴일이 휴무일로 설정됩니다.</p>
            <p>- 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
          </div>
          <div class="regular_wrap">
            <div class="regular_two">
              <form>
                <div class="regular_switch">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked">공휴일 휴무</label>
                  </div>
                </div>
                <!--//////휴무1//////-->
                <div class="regular_wrap">
                  <div class="regular_box">
                    <!--:value="week"-->
                    <select
                      class="Rday"
                      name="salutation"
                      @change="$emit('sandParam', { salutation: $event.target.value })"
                    >
                      <option v-for="item of salutations" :value="item" :key="item" :selected="salutation == item">
                        {{ item }}
                      </option>
                    </select>
                    <select class="Rday" name="weekDay" @change="$emit('sandParam', { weekDay: $event.target.value })">
                      <option v-for="day of weekDays" :value="day" :key="day" :selected="weekDay == day">
                        {{ day }}
                      </option>
                    </select>
                  <i class="xi-minus-circle-o regular_circle" @click="selectDelete(event)"></i>                    
                  </div>
                  <!--//////휴무2//////-->
                  <!-- <div class="regular_box">
                    <select 
                        class="Rday" 
                        name="day"
                        @change="temporary($event)"
                        @input="myChange($event)"
                        v-model="day"
                    >
                      <option value="첫째주">매월 첫째주</option>
                      <option value="둘째주">매월 둘째주</option>
                      <option value="셋째주">매월 셋째주</option>
                      <option value="넷째주">매월 넷째주</option>
                      <option value="다섯째주">매월 다섯째주</option>
                    </select>
                    <select 
                        id="time" 
                        className="Rday" 
                        @change="temporary" 
                        v-model="rdaySelect"
                        >
                      <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
                    </select>
                  </div> -->
                </div>
              </form>
              <div class="regular_btn_wrap">
                <button class="regular_add_btn" @click="onEmit">저장</button>
                <button class="regular_close_btn">저장안함</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/////임시휴무 평소에는 hidden/////-->
      <div class="temporary_container" v-if="step == 3">
        <div class="temporary_wrapper">
          <div class="temporary_one">
            <div class="temporary_text">임시휴무</div>
            <p>- 하루종일 설정하시면 날짜별 설정이 가능합니다.</p>
            <p>- 정해놓은 시간(날짜)가 지나면 자동으로 휴무가 풀립니다.</p>
            <div class="temporary_reason">
              <p class="temporary_reason_text">사유</p>
              <div class="temporary_form_box">
                <input
                  class="form-check-input"
                  type="radio"
                  value="개인사정으로 인해 쉬어갑니다!"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="picked"
                  @change="$emit('sandParam', { reasonCheck : $event.target.value })"
                />
                <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                  개인사정으로 인해 쉬어갑니다!
                </label>
              </div>
              <div class="temporary_form_box">
                <input
                  class="form-check-input"
                  type="radio"
                  value="매장 내 주문만 가능합니다! 카운터에서 주문해주세요!"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="picked"
                  @change="$emit('sandParam', { reasonCheck : $event.target.value })"
                />
                <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                  매장 내 주문만 가능합니다! 카운터에서 주문해주세요!
                </label>
              </div>
              <div class="temporary_form_box">
                <input
                  class="form-check-input"
                  type="radio"
                  value="직접입력"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="picked"
                  @change="$emit('sandParam', { reasonCheck : $event.target.value })"
                />
                <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1"> 직접입력 </label>
              </div>
              <input
                type="text"
                class="temporary_form_text"
                placeholder="입력한대로 어플에 노출됩니다."
                v-model="picked"
                @change="$emit('sandParam', { reasonCheck : $event.target.value })"
              />
            </div>
          </div>
          <div class="temporary_wrap">
            <div class="temporary_two">
              <form>
                <div class="temporary_switch">
                  <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked">
                      하루종일
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    </label>
                  </div>
                </div>
                <div class="temporary_day_box">
                  <p>날짜 선택하기</p>
                  <input
                    type="date"
                    class="temporary_date"
                    min="2022-01-01"
                    max="2042-01-01"       
                    @change="$emit('sandParam', { reasonDate : $event.target.value })"
                  />
                   ~ 
                  <input
                    type="date"
                    class="temporary_date"
                    min="2022-01-01"
                    max="2042-01-01"
                    @change="$emit('sandParam', { reasonDateT : $event.target.value })"
                  />
                  <p class="temporary_time_text">시작 및 종료시간</p>
                  <input
                    type="time" 
                    class="temporary_time"
                    min="08:00"
                    max="24:00"                    
                    @change="$emit('sandParam', { reasonTime : $event.target.value })"
                    />
                    ~
                  <input
                    type="time" 
                    class="temporary_time"
                    min="08:00"
                    max="24:00"
                    @change="$emit('sandParam', { reasonTimeT : $event.target.value })"
                    />
                </div>
                <!-- <div class="temporary_timebtn_box">
                <lebel class="tbtn_inner_text">시작</lebel>
                <button type="button" class="temporary_timebtn">
                    <i class="xi-minus-circle-o"></i>                    
                    2022년 01월 26일 (수)
                </button>
                </div>
                <div class="temporary_timebtn_box">
                <lebel class="tbtn_inner_text">종료</lebel>                
                <button type="button" class="temporary_timebtn">
                    <i class="xi-minus-circle-o"></i>
                    2022년 01월 27일 (목)                    
                </button>
                </div> -->
                <!--//////시작시간//////-->
                <!-- <div class="temporary_wrap">
                <div class="temporary_box">
                    <label for="temporarytime" class="temporarytime">시작</label>  
                        <select id="time" className="Ttime" @change="temporarytime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>

                                    </select>           
                        <select id="time" className="Ttime" @change="temporarytime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>                     -->
                <!--//////종료시간//////-->
                <!-- <div class="temporary_box">
                    <label for="temporarytime" class="temporarytime">종료</label>  
                        <select id="time" className="Ttime" @change="temporarytime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>

                                    </select>           
                        <select id="time" className="Ttime" @change="temporarytime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>   
                </div>                                                                           -->
              </form>
              <div class="temporary_btn_wrap">
                <button class="temporary_add_btn">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from "vue";

const salutations = ["매월 첫째주", "매월 둘째주", "매월 셋째주", "매월 넷째주", "매월 다섯째주"];
const weekDays = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

export default {
  data() {
    return {
      picked: "",
      rdaySelect: null,
      rWeekSelect: null,
      selected: [],
      type: "select",
      time: "",
      date: "",
      pvalue: this.value,
      isShow: false,
      regularBtn: false,
      dayBtnList: [],
    };
  },
  props: {
    step: Number,
    name: String,
    datepicker: {
        type:String,
        default:'',
    },
    salutation: {
      type: String,
      default: "",
    },
    weekDay: {
      type: String,
      default: "",
    },
    breakTime: {
      type: String,
      default: "",
    },
    breakTimeT: {
      type: String,
      default: "",
    },
    holyTime: {
      type: String,
      default: "",
    },
    holyTimeT: {
      type: String,
      default: "",
    },
    reasonCheck: {
      type: String,
      default: "",
    },
    reasonDate: {
      type: String,
      default: "",
    },
    reasonDateT: {
      type: String,
      default: "",
    },
    reasonTime: {
      type: String,
      default: "",
    },
    reasonTimeT: {
      type: String,
      default: "",
    },
    operTime: {
      type: String,
      default: "",
    },
    operTimeT: {
      type: String,
      default: "",
    },
    dayCheck1: {
      type:String,
      default:'',
    },
    dayCheck2: {
      type:String,
      default:'',
    },
  },
  methods: {
    isDate() {
      let today = new Date().toISOString().substr(0,10);
      document.querySelector(".temporary_date").value = today
      console.log(this.date)
    },
    isDayBtn: function() {
      console.log(this.dayBtnList)
    },
    changeStat(step) {},
    titleUpdate(e) {
      console.log(e.target.value);
    },
    weekRegular(event) {
      console.log(event.target.value);
    },
    temporary(event) {
      console.log(event.target.value);
    },
    regular(event) {
      console.log(event.target.value);
    },
    setInput(weekday) {
      this.value = weekday;
      console.log("자식 컴포넌트에게 값을 받았어요 :)", weekday);
    },
    //정기휴무
    // myChange($event) {
    //     if ($event.target.name === 'week') {
    //         this.week = $event.target.value;
    //     } else if ($event.target.name === 'day') {
    //         this.day = $event.target.value;
    //     }
    //     this.$emit('week', this.value);
    // },
  },
  setup() {
    return {
      salutations,
      weekDays,
    };

    // const time = ref({
    //     hours: new Date().getHours(),
    //     minutes: new Date().getMinutes()
    // });
    // return {
    //     time,
    // }
  },
};
</script>

<style>
@import "../../assets/css/OperationManagement/OperationSetting.css";
</style>
