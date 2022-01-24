<template>
<Navbar />
    <!--/////영업시간 모달/////-->
  
    <div class="oper_modal_container">
        <div class="oper_modal_wrapper">
        <div class="oper_modal_one">
        <h4 class="oper_modal_text">영업시간</h4>            
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
                <div class="oper_sub_btnbox">
                    <button type="button" class="opentime_addbtn">+&nbsp;영업시간 추가</button>
                    <button type="button" class="opentime_addbtntwo">저장</button>
                </div>
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
                <div>
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">24시간</label>
                    </div>                  
                </div>
                    <label for="starttime">시작시간</label>  
                        <select id="number" className="sel" v-model.trim="firstNum" ref="firstNum">
                            <option>선택</option>
                            <option value="00">00시</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="019">019</option>
                                    </select>           
            </form>
        </div>
        <div  class="oper_modal_three">
            <form>
                <button type="checkbox" class="day_btn">월</button>
                <button type="checkbox" class="day_btn">화</button>
                <button type="checkbox" class="day_btn">수</button>
                <button type="checkbox" class="day_btn">목</button>
                <button type="checkbox" class="day_btn">금</button>
                <button type="checkbox" class="day_btn">토</button>
                <button type="checkbox" class="day_btn">일</button>
                <div>
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">24시간</label>
                    </div>                    
                </div>
            </form>            
        </div>
        </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar,
    }
}
</script>

<style>
@import '../assets/css/OperationManagement/OperationModal.css';
</style>