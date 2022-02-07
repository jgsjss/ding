import axios from 'axios'
// import { commit } from 'lodash/seq'

export const loginStore = {
  namespaced: true,

  state: {
    userid: '',
    accessToken: '',
    refreshToken: '',
  },
  getters: {
    //로그인 여부 확인 메소드
    isLogin (state) {
      return state.accessToken == '' ? false : true
    },
    isAccessTokenExpire(state){
      let expire=false;
      // accessToken에서 .로 분리하여 payload 가져옴
      let base64Payload = state.accessToken.splite('.')[1];
      //URL과 호환되지 않는 문자를 base64표준문자로 교체
      base64Payload = base64Payload.replace(/-/g, '+').replace(/_/g, '/');
      //atob() 메소드로 복호화
      base64Payload = atob(base64Payload);
      //JSON 객체로 변환
      var payloadObeject = JSON.parse(base64Payload);
      //accessToken의 만료시간 확인
      var currentDate = new Date().getTime() / 1000;
      if(payloadObeject.exp <= currentDate) {
        console.log('token expired');
        expire = true;
      }else {
        console.log('token valid');
      }
      return expire;
    }
  },
  mutations: {
    //userId 설정
    setUserId (state, userid) {
      state.userid = userid
    },
    // accessToken 설정
    setAccessToken (state, accessToken) {
      state.accessToken = accessToken
    },
    //refreshToken 설정
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
    reset (state) {
      state.userid = ''
      state.accessToken = ''
    }
  },
  actions: {
    async doLogin ({ commit }, userInfo) {
      let result = false
      let resultErr = null
      try {
        let res = await axios.post('/member/login', userInfo)
        if (res.data.success == true) {
          commit('setUserId', userInfo.userid);
          commit('setAccessToken', res.data.accessToken);
          commit('setRefreshToken', res.data.refreshToken);
          axios.defaults.headers.common['Access-Token'] = res.data.accessToken
          result = true
          console.log('로그인 성공')
        } else {
          console.log('로그인 실패')
          let err = new Error('Request failed with status code 401')
          err.status = 401;
          err.response = {
            data: {
              'success': false,
              'errormessage': '로그인 실패'
            }
          }
          resultErr = err
        }
      } catch (err) {
        console.log(err)
        if (!err.response) {
          err.response = {
            data: {
              'success': false,
              'errormessage': err.message
            }
          }
        }
        resultErr = err
      }
      return new Promise((resolve, reject) => {
        if (result) {
          resolve()
        } else {
          reject(resultErr)
        }
      })
    },
    //accessToken 갱신 메소드
    async doRefreshToken({commit, state}){
      let result = false;
      let resultErr = null;
      if(state.accessToken != ''){
        let token = { id: state.userid, accessToken : state.accessToken, refreshToken : state.refreshToken};
        try{
          let res = await axios.post('/member/refresh', token)
           if(res.data.success == true){
             console.log('AccessToken이 갱신되었습니다.');
             commit('setAccessToken', res.data.accessToken);
             console.log(res.data.accessToken);
             axios.defaults.headers.common['Access-Token'] = res.data.accessToken;
             resultErr = true;
           }else{
             console.log('Access-Token이 갱신되지 않았습니다.');
             let err = new Error('Request failed with status code 401');
             err.status=401;
             err.response = {data:{'success':false, "errormessage":"Access-Token이 갱신되었습니다."}}
             resultErr = err;
           }
        }catch (err){
          if(!err.response){
            err.response = {data:{"success":false, "errormessage":err.message}};
          }
          resultErr = err;
        }
      } else{
        let err = new Error('Access-Token이 존재하지 않습니다.');
        err.status=401;
        err.response={data:{'success':false, 'errormessage':'Access-Token이 없습니다.'}};
        resultErr = err;
      }
      return new Promise((resolve, reject)=>{
        if(result) resolve();
        else reject(resultErr);
      })
    },
    doLogout ({ commit }) {
      commit('reset')
      delete axios.defaults.headers.common['Access-Token'];
    }
  },
}

