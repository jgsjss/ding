import axios from 'axios'

const loginStore = {
  namespaced: true,

  state: {
    memberId: '',
    accessToken: '',
  },
  getters: {
    //로그인 여부 확인 메소드
    isLogin (state) {
      return state.accessToken == '' ? false : true
    }
  },
  mutations: {
    //memberId 설정
    setMemberId (state, memberId) {
      state.memberId = memberId
    },
    // accessToken 설정
    setAccessToken (state, accessToken) {
      state.accessToken = accessToken
    },
    reset(state){
      state.memberId = '';
      state.accessToken='';
    }
  },
  actions: {
    // //로그인
    // aasync doLogin({ commit }, memberInfo) {
    //   let result = false;
    //   let resultErr = null;
    //   try{
    //       let res = await axios.post("", memberInfo);
    //       if(res.data.success == true){
    //         console.log('로그인 성공')
    //         commit('setMemberId', memberInfo.id);
    //
    //       }
    //   }catch (err){
    //
    //   }
    // }
  }
}
export default loginStore
