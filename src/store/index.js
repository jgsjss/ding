import { createStore } from 'vuex'
import orderData from '../assets/orderData.js'
import menuData from '../assets/menuData.js'
import shopData from '../assets/shopData'

export default createStore({


  state: {
    //=======================Main.vue 화면 내부 데이터 ========================
    //-------------메뉴관리 데이터------
    menuData,
    //품절메뉴 개수
    soldOutNum : 2,
    //숨김메뉴 개수
    hiddenNum : 1,
    //품절,숨김 메뉴 모달창 상태변경
    MenuCheckModal : false,
    //-------------주문관리 데이터------
    orderData,
    //완료주문 개수
    completedNum : 3,
    //신규주문 개수
    newOrderNum : 2,
    //취소주문 개수
    cancelOrder : 1,
    //-------------운영관리 데이터------
    shopData,
    //영업중인 가게 수
    openShopNum : 3,

    //=======================MenuManagement.vue 화면 내부 데이터 ========================
    //
    menuTab : 0,



  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
