<template>
  <!-- 품절해제모달 html -->
  <!-- <div class="black-bg" v-if="MenuCheckModal == true">
    <div class="white-bg"> -->
      <!-- 버튼클릭시 모달닫기 -->
      <!-- <div><p>품절해제</p>  <a @click="MenuCheckModal = false">X</a>
      </div>
     <div><button>전체</button><button>메뉴</button><button>옵션목록</button> <span><button>품절해제</button></span></div>
      <div class="container">
        <p class="mb-5">포스팅 게시판</p>
        <table class="table">
          <thead>
          <tr>
            <th><input type="checkbox" id="all-check"> </th>
            <th scope="col">구분</th>
            <th scope="col">메뉴/옵션목록</th>
            <th scope="col">가격</th>
            <th scope="col">메뉴상태</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in menuData" :key="i">
            <th scope="row"><input type="checkbox"></th>
            <td>{{ menuData[i].categories1 }}</td>
            <td>{{ menuData[i].name }}</td>
            <td>{{ menuData[i].price }} </td>
            <td>{{ menuData[i].isSoldOut }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div> -->



  <!-- 좌측 네브바 메뉴 -->
  <!-- <div class="container">
    <ul class="nav flex-column">
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/main"><p class="nav-link active" aria-current="page">로고</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/menumanagement/categories"><p class="nav-link">메뉴관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/salesmanagement"><p class="nav-link">매출관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/ordermanagement"><p class="nav-link">주문관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/staffmanagement"><p class="nav-link">직원관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/operationmanagement"><p class="nav-link">운영관리</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <router-link to="/discountcode"><p class="nav-link">할인코드</p></router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <a class="nav-link" href="">img</a>
      </li>
    </ul>
  </div> -->
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
      console.log(response);
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
