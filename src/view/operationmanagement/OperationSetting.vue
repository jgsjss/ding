<template>
  <div class="oper_set_container">
      <h2 class="operset_text">
          ◆가게설정
      </h2>
      <div class="oper_set_wrap">
          <!--/////영업시간 고정/////-->
    <div class="oper_modal_container" v-if="step == 0">
        <div class="oper_modal_wrapper">
        <div class="oper_modal_one">
        <div class="oper_modal_text">영업시간</div>    
        <p> - 요일별 하나의 영업시간만 등록할 수 잇습니다.</p>
        <p> - 영업시간이 등록되지 않은 요일은 24시간 영업으로 보여집니다.</p>
        <p> - 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>

        </div>
        <div class="oper_sub_modal_wrap">
        <div class="oper_modal_two">
            <form>
                <button type="checkbox" class="day_btn">월</button>
                <button type="checkbox" class="day_btn">화</button>
                <button type="checkbox" class="day_btn">수</button>
                <button type="checkbox" class="day_btn">목</button>
                <button type="checkbox" class="day_btn">금</button>
                <button type="checkbox" class="day_btn">토</button>
                <button type="checkbox" class="day_btn">일</button>
                <div class="oper_switch">
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked">24시간</label>
                    </div>                  
                </div>
            <div class="oper_modal_oper_box">
                <form>
                    <label for="input_day" class="input_day">평일 시작 및 종료시간</label>
                    <Datepicker v-model="time" timePicker range />
                    <label for="input_day" class="input_day">주말 시작 및 종료시간</label>
                    <Datepicker v-model="time" timePicker range />    
                </form>
            </div>
                <!--//////시작시간//////-->
                <!-- <div class="startime_wrap">
                <div class="starttime_box">
                    <label for="starttime" class="starttime">시작시간</label>  
                        <select id="time" className="Stime" @change="starttime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>
                        </select>           
                        <select id="time" className="Stime" @change="starttime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                        </select>  
                </div>                -->
                <!--//////종료시간//////-->  
                <!-- <div class="starttime_box">
                    <label for="starttime" class="starttime">종료시간</label>  
                        <select id="time" className="Stime" @change="starttime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>
                                    </select>           
                        <select id="time" className="Stime" @change="starttime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>   
                </div>                                                                           -->
            </form>
            <div class="time_btn_wrap">
            <button type="button" class="time_btn">저장</button>
            <button type="button" class="time_btntwo">닫기</button>
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
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked">준비시간 설정</label>
                    </div>                  
                </div>
                <div class="break_box">
                    <form>
                        <label for="input_day" class="input_day">평일 시작 및 종료시간</label>
                        <Datepicker v-model="time" timePicker range />
                        <label for="input_day" class="input_day">주말 시작 및 종료시간</label>
                        <Datepicker v-model="time" timePicker range />    
                    </form>
                </div>
                    <div class="break_time_btn_wrap">
                    <button type="button" class="break_add_btn">저장</button>
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
        <p> - 공휴일 휴무를 설정하시면 법정 공휴일이 휴무일로 설정됩니다.</p>
        <p> - 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
        </div>
        <div class="regular_wrap">
        <div class="regular_two">
            <form>
                <div class="regular_switch">
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked">공휴일 휴무</label>
                    </div>                  
                </div>
                <!--//////휴무1//////-->
                <div class="regular_wrap">
                <div class="regular_box">
                        <select id="time" className="Rday" @change="regular">
                            <option value="첫째">매월 첫째주</option>
                            <option value="둘째">매월 둘째주</option>
                            <option value="셋째">매월 셋째주</option>
                            <option value="넷째">매월 넷째주</option>
                            <option value="다섯째">매월 다섯째주</option>
                            </select>           
                        <select id="time" className="Rday" @change="regular" v-model="rdaySelect">
                            <option value="null">요일선택</option>
                            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
                        </select>  
                </div>                    
                <!--//////휴무2//////-->  
                <div class="regular_box">
                        <select id="time" className="Rday" @change="temporary">
                            <option value="첫째">매월 첫째주</option>
                            <option value="둘째">매월 둘째주</option>
                            <option value="셋째">매월 셋째주</option>
                            <option value="넷째">매월 넷째주</option>
                            <option value="다섯째">매월 다섯째주</option>
                        </select>           
                        <select id="time" className="Rday" @change="temporary" v-model="rdaySelect">
                            <option value="null">요일선택</option>
                            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
                        </select>  
                </div>   
                </div>                                                                          
            </form>
            <div class="regular_btn_wrap">
            <button type="button" class="regular_add_btn">저장</button>
            <button type="button" class="regular_close_btn">닫기</button>
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
        <p> - 하루종일 설정하시면 날짜별 설정이 가능합니다.</p>
        <p> - 정해놓은 시간(날짜)가 지나면 자동으로 휴무가 풀립니다.</p>
        <div class="temporary_reason">
            <p class="temporary_reason_text">사유</p>
                <div class="temporary_form_box">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                        개인사정으로 인해 쉬어갑니다!
                    </label>
                </div>
                <div class="temporary_form_box">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                        매장 내 주문만 가능합니다! 카운터에서 주문해주세요!
                    </label>
                </div>
                <div class="temporary_form_box">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                        직접입력
                    </label>
                </div>
                <input type="text" class="temporary_form_text" placeholder="입력한대로 어플에 노출됩니다.">
        </div>
        </div>
        <div class="temporary_wrap">
        <div class="temporary_two">
            <form>
                <div class="temporary_switch">
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked"> 하루종일
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                   </label>
                    </div>                  
                </div>
                <div class="temporary_day_box">
                <p>날짜 선택하기</p>
                <Datepicker 
                v-model="date" locale="ko" range multiCalendars autoApply weekStart="0" :enableTimePicker="false" :yearRange="[2022, 2040]" />
                <p class="temporary_time_text">시작 및 종료시간</p>
                <Datepicker v-model="time" timePicker range />
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
            <button type="button" class="temporary_add_btn">저장</button>
            </div>
        </div>
        </div>
        </div>
    </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            rdaySelect:null,
            selected: [],
            name: 'day',
            type: 'select',
            options: [
                { v: "월", t: "월요일" },
                { v: "화", t: "화요일" },
                { v: "수", t: "수요일" },
                { v: "목", t: "목요일" },
                { v: "금", t: "금요일" },
                { v: "토", t: "토요일" },
                { v: "일", t: "일요일" },
        ],
        isShow: false,
        }
    },
    props: {
        step: Number,
    },
    methods: {
        changeStat(step){

        }
    },
    setup() {
        const date = ref(new Date());
        return {
          date,
        }
    }
}
</script>

<style>
@import '../../assets/css/OperationManagement/OperationSetting.css';
</style>