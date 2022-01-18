import { createStore } from 'vuex'
import orderData from '../assets/orderData.js'
import menuData from '../assets/menuData.js'
import shopData from '../assets/shopData.js'
import paymentData from '../assets/paymentData.js'
import priceData from '../assets/priceData.js'
import menuCostomData from '../assets/menuCostomData.js'
import StaffData from '../assets/StaffData.js'

let soldNum=0;
let hidNum=0;
for(let i=0; i<menuData.length; i++){
  if(menuData[i].isHidden == true){
    hidNum++;
  } else if(menuData[i].isSoldOut == true){
    soldNum++;
  }
}

let compleNum = 0;
let cancelNum = 0;
for(let i=0; i<orderData.length; i++){
  if(orderData[i].isCompleted==true){
    compleNum++;
  }else if(orderData[i].isCanceled){
    cancelNum++;
  }
}


export default createStore({


  state: {
    //=======================Main.vue 화면 내부 데이터 ========================
    //-------------메뉴관리 데이터------
    menuData,
    //품절메뉴 개수
    soldOutNum : soldNum,
    //숨김메뉴 개수
    hiddenNum : hidNum,
    //품절,숨김 메뉴 모달창 상태변경
    MenuCheckModal : false,
    //-------------주문관리 데이터------
    orderData,
    //완료주문 개수
    completedNum : compleNum,
    //신규주문 개수
    newOrderNum : 2,
    //취소주문 개수
    cancelOrder : cancelNum,
    //-------------운영관리 데이터------
    shopData,
    //영업중인 가게 수
    openShopNum : 3,
    //----------결제내역 데이터----------
    paymentData,
    //----------가격 데이터-------------
    priceData,
    //----------커스텀 옵션 데이터-------------
    menuCostomData,
    //----------스태프 관리 데이터-------------
    StaffData,
    //품절,숨김 메뉴 모달창 상태변경
    StaffModal : false,
    //=======================MenuManagement.vue 화면 내부 데이터 ========================
    //
    menuTab : 0,


    //스테이트 변환, $store.commit('mutation 함수명') 으로 이벤트 핸들링
    mutations: {

    },
    //ajax요청, 혹은 오래걸리는 작업 요청,  $store.dispatch('actions 함수명') 으로 이벤트 핸들링
    //actions를 통한 스테이트 변경이 필요할 시, mutations에서 함수를 작성해야한다
    //ex) actions :{
    //   getData(context){
    //     axios.get('서버url')
    //     .then((a)=>{
    //       context.commit('뮤테이션 함수', a.data)
    //     })
    //   }
    // }
    //  context와 commit 사용!!! actions에서 추가한 파라미터 context는 대충 $store를 뜻하며, 관습적으로 context로 작성
    //actions 함수가 작동할 컴포넌트에선 @이벤트="$store.dispatch('actions함수명')" 으로 사용한다.
    actions: {

    },
    computed :{

    },
    modules: {
  },

  }
})
