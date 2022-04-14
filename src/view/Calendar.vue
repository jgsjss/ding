<template>
<!--캘린더 api-->
<Datepicker 
v-model="date" locale="ko" range multiCalendars autoApply weekStart="0" :enableTimePicker="false" :yearRange="[2022, 2040]" />
</template>

<script>
import { ref } from 'vue';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
// import axios from 'axios'

export default {
    name: "calendar",
    components: {
        Datepicker,
    },
    setup() {
        const date = ref(new Date());
        return {
          date,
        }
    },
  methods(){
      this.axios.post("/")
  }
}
</script>

<style>
@import '../assets/css/Calendar.css';
</style>