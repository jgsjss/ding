import { createStore } from 'vuex'
import orderData from '../assets/orderData.js'

export default createStore({
  state: {
    orderData,
    completedNum : 0,
    newOrderNum : 0,
    cancelOrder : 0,
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
