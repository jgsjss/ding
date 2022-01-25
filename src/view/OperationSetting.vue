<template>
  <div class="oper_set_container">
      <h2 class="operset_text">
          ◆가게설정
      </h2>
      <div class="oper_set_wrap">
          <!--/////영업시간 고정/////-->
    <div class="oper_modal_container">
        <div class="oper_modal_wrapper">
        <div class="oper_modal_one">
        <div class="oper_modal_text">영업시간</div>    
        <p> - 요일별 하나의 영업시간만 등록할 수 잇습니다.</p>
        <p> - 영업시간이 등록되지 않은 요일은 24시간 영업으로 보여집니다.</p>
        <p> - 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
        <div class="oper_modal_oper_box">
            <form>
                <button type="button" class="oper_timebtn">
                    <span class="btn_inner_text">평일</span>
                    <i class="xi-minus-circle-o"></i>                    
                    11시00분 ~ 01시00분(익일)
                </button>
                <button type="button" class="oper_timebtn">
                    <span class="btn_inner_text">주말</span>
                    <i class="xi-minus-circle-o"></i>
                    24시간
                </button>
            </form>
        </div>
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
                    <label class="form-check-label" for="flexSwitchCheckChecked">24시간</label>
                    </div>                  
                </div>
                <!--//////시작시간//////-->
                <div class="startime_wrap">
                <div class="starttime_box">
                    <label for="starttime" class="starttime">시작시간</label>  
                        <select id="time" className="Stime" @change="starttime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>

                                    </select>           
                        <select id="time" className="Stime" @change="starttime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>                    
                <!--//////종료시간//////-->  
                <div class="starttime_box">
                    <label for="starttime" class="starttime">종료시간</label>  
                        <select id="time" className="Stime" @change="starttime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>

                                    </select>           
                        <select id="time" className="Stime" @change="starttime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>   
                </div>                                                                          
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
          <div></div>
          <!--/////임시휴무 평소에는 hidden/////-->          
          <div></div>
          <!--/////정기휴무 평소에는 hidden/////-->          
          <div></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../assets/css/OperationManagement/OperationSetting.css';
</style>