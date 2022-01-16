<template>
  <h1><a href="/signupone">회원가입 페이지</a> </h1>
  <h1><a href="/main">메인 페이지</a> </h1>

    <router-view > </router-view>



</template>
<script>
// import MenuModal from './components/MenuModal.vue'

import axios from 'axios'



//   this.$props.
export default {
  data(){
    return{

    }
  },
  components: {

  },
  methods: {

  },
  created () {
    axios.get('http://sample.bmaster.kro.kr/contacts')
    .then(response => {

      this.pageArray = response.data.contacts;
    })
    .catch(err => {
      console.log(err);
    });
  },
  mounted(){
    //menu 컴포넌트 커스텀이벤트 수신 코드
    // this.emitter.on("openMenuModal", (a) =>{
    //   this.MenuCheckModal = a;
    //   console.log(a)
    // })
  },
  watch: {

  },

}
</script>

<style scoped>
ul {list-style:none;}
.container {
  width:100%;
  padding:10px 15px;
}
.nav {
  float:left;
  background:#dcd4e3;
  padding:0 15px;
  margin:0 30px;
}
.nav-item {
  text-align: center;
  padding:15px 0;
}
.nav-item > .xi-cloud-o {
  border:1px dashed #c6a6e2;
  border-radius: 100%;
  padding:5px;
  color:#fff;
}
.nav-link {
  color:#997fb5;
  text-decoration: none;
}
.nav-link:hover {
  color:#997fb5;
  text-decoration: none;
}

/* media query */
@media ( min-width : 768px){
  .container {
    width:100%;
    padding:30px 15px;
  }
  .nav {
    float:left;
    background:#dcd4e3;
  }
  .nav-item {
    text-align: center;
    padding:15px 0;
  }
  .nav-item > .xi-cloud-o {
    border:1px dashed #c6a6e2;
    border-radius: 100%;
    padding:5px;
    color:#fff;
  }
  .nav-link {
    color:#997fb5;
    text-decoration: none;
    font-size:10px;
  }
  .nav-link:hover {
    color:#997fb5;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }

}
@media ( min-width : 992px) {
  .container {
    width:100%;
    padding:30px 15px;
  }
  .nav {
    float:left;
    background:#dcd4e3;
  }
  .nav-item {
    text-align: center;
    padding:15px 0;
  }
  .nav-item > .xi-cloud-o {
    border:1px dashed #c6a6e2;
    border-radius: 100%;
    padding:5px;
    color:#fff;
  }
  .nav-link {
    color:#997fb5;
    text-decoration: none;
    font-size:14px;
  }
  .nav-link:hover {
    color:#997fb5;
    text-decoration: none;
  }
}
@media ( min-width : 1200px) {
  .container {
    width:100%;
    padding:30px 15px;
  }
  .nav {
    float:left;
    background:#dcd4e3;
  }
  .nav-item {
    text-align: center;
    padding:15px 0;
  }
  .nav-item > .xi-cloud-o {
    border:1px dashed #c6a6e2;
    border-radius: 100%;
    padding:5px;
    color:#fff;
  }
  .nav-link {
    color:#997fb5;
    text-decoration: none;
    font-size:16px;
  }
  .nav-link:hover {
    color:#997fb5;
    text-decoration: none;
  }
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  z-index: 9999;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
