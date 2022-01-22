<template>
<Navbar />

    <!--/////영업시간 모달/////-->
  
    <div class="oper_modal_container" v-if="$store.state.OperationModal == true">
        <!--영업시간 모달1-->
        <div>
        <p> - 요일별 하나의 영업시간만 등록할 수 잇습니다.</p>
        <p> - 영업시간이 등록되지 않은 요일은 24시간 영업으로 보여집니다.</p>
        <p> - 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
        </div>
    </div>

</template>

<script>
import router from "../router";
import axios from "axios";
import Navbar from '../components/Navbar.vue';

export default {
  components: { 
    Navbar,
    },
}
</script>

<style>

</style>