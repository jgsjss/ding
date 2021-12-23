import { createStore } from 'vuex'
import orderData from '../assets/orderData.js'
import menuData from '../assets/menuData.js'
import shopData from '@/assets/shopData'

export default createStore({
  state: {
    //-------------메뉴관리 데이터------
    menuData,
    //품절메뉴 개수
    soldOutNum : 2,
    //숨김메뉴 개수
    hiddenNum : 1,
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
  },
  mutations: {
    completedOrder(state){
      for(var i = 0; i<state.orderData.length; i++){
        if(state.orderData[i].isCompleted == true){
          state.completedNum--;
        }else{
          state.completedNum++;
        }
      }
    }
  },
  actions: {

  },
  modules: {

  }
})
