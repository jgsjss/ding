<template>
<Navbar />
<!--준비시간 모달창 시작-->
<div class="modal fade" id="breaktime" tabindex="-1" aria-labelledby="breaktimeModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header break_modal_header">
        <h5 class="modal-title" id="breaktimeModalLabel">준비시간</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">

                <div class="break_switch">
                    <div class="form-check form-switch break_switchbtn">
                    <label for="recipient-name" class="col-form-label">준비시간 설정</label>                                
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
          
                    </div>                  
                </div>            
          </div>
                <!--//////시작시간//////-->
                <div class="breaktime_wrap">
                <div class="breaktime_box">
                    <label for="breaktime" class="breaktime">시작시간</label>  
                        <select id="btime" className="Btime" @change="breaktime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>

                                    </select>           
                        <select id="btime" className="Btime" @change="breaktime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>                    
                <!--//////종료시간//////-->  
                <div class="breaktime_box">
                    <label for="breaktime" class="breaktime">종료시간</label>  
                        <select id="btime" className="Btime" @change="breaktime">
                            <option value="24" v-for="(n, i) in 24" :key="n">{{i}}시</option>

                                    </select>           
                        <select id="btime" className="Btime" @change="breaktime">
                            <option value="59" v-for="(n, i) in 59" :key="n">{{i}}분</option>
                                    </select>  
                </div>   
                </div> 
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">저장</button>
      </div>
    </div>
  </div>
</div>
<!--준비시간 모달창 끝-->

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
@import '../assets/css/components/BreakTime.css';
</style>
