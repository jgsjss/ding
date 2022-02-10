import axios from 'axios'
// import { commit } from 'lodash/seq'
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export const loginStore = {
  namespaced: true,

  state: {
    userid: '',
    accessToken: '',
    refreshToken: '',
    shopName: '',
    shopPhNum: '',
    mgName: '',
    checked: null,
  },
  getters: {
    getId(state){
      return state.userid
    },
    getAcToken(state){
      return state.accessToken
    },
    getReToken(state){
      return state.refreshToken
    },
    getShopName(state){
      return state.shopName
    },
    getShopPhNum(state){
      return state.shopPhNum
    },
    getMgName(state){
      return state.mgName
    },
    //로그인 여부 확인 메소드
    isLogin (state) {
      return state.refreshToken == '' ? false : true
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

    setUserId (state, id) {
      state.userid = id;
    },
    // accessToken 설정
    setAccessToken (state, access) {
      state.accessToken = access;
    },
    //refreshToken 설정
    setRefreshToken(state, refresh) {
      state.refreshToken = refresh;
    },
    setShopName(state, sname){
      state.shopName = sname;
    },
    setShopPhNum(state,spnum){
      state.shopPhNum = spnum;
    },
    setMgName(state, mname){
      state.mgName = mname
    },
    setChecked(state, ck){
      state.checked = ck
    },
    // 로컬스토리지 삭제 메소드
    // reset (state) {
    //   state.userid = '';
    //   state.accessToken = '';
    //   state.refreshToken = '';
    //   state.shopName = '';
    //   state.shopPhNum = '';
    //   state.mgName = '';
    //   localStorage.removeItem('login.userid')
    //   localStorage.removeItem('login.accessToken')
    //   localStorage.removeItem('login.refreshToken')
    //   localStorage.removeItem('login.shopName')
    //   localStorage.removeItem('login.shopPhNum')
    //   localStorage.removeItem('login.mgName')
    // },

    //쿠키 삭제 메소드
    reset(state){
      state.userid ='';
      state.accessToken ='';
      state.refreshToken ='';
      state.shopName ='';
      state.shopPhNum ='';
      state.mgName ='';

      // cookies.remove('login.userid');
      // cookies.remove('login.accessToken');
      // cookies.remove('login.refreshToken');
      // cookies.remove('login.shopName');
      // cookies.remove('login.shopPhNum');
      // cookies.remove('login.mgName');
      cookies.remove('login')
    },


    // localStorage 저장 코드
    // saveStateToStorage(state){
    //   localStorage.setItem('login.userid', state.userid);
    //   localStorage.setItem('login.accessToken', state.accessToken);
    //   localStorage.setItem('login.refreshToken', state.refreshToken);
    //   localStorage.setItem('login.shopName', state.shopName);
    //   localStorage.setItem('login.shopPhNum', state.shopPhNum);
    //   localStorage.setItem('login.mgName', state.mgName);
    // },

    //쿠키 저장 메소드
    //쿠키 만료기간을 저장하지 않으면 현재시간에서 하루가 추가됨
    //하루가 지난 후 쿠키가 만료되어 액세스 토큰과 리프레쉬 토큰이 삭제되면 토큰을 사용하는 이유가 없어지므로
    //쿠키의 만료기간은 리프레시토큰의 만료기간과 같이 해야함
    saveStateToStorage(state){
      // cookies.set('login.userid', state.userid, 60*60*24);
      // cookies.set('login.accessToken', state.accessToken, 60*60*24);
      // cookies.set('login.refreshToken', state.refreshToken, 60*60*24);
      // cookies.set('login.shopName', state.shopName, 60*60*24);
      // cookies.set('login.shopPhNum', state.shopPhNum, 60*60*24);
      // cookies.set('login.mgName', state.mgName, 60*60*24);
      if(state.checked) {
        cookies.set('login', JSON.stringify(state), 365)
      }else{
        // let date = new Date();
        // console.log(date.getDate(), "-", date.getHours() )
        cookies.set('login', JSON.stringify(state))
        // console.log(cookies.get('expiretime'))
      }
    },
    // 로컬스토리지 리드 메소드
    // readStateFromStorage(state){
    //   if(localStorage.getItem('login.userid') != null){
    //     state.userid = localStorage.getItem('login.userid')
    //   }
    //   if(localStorage.getItem('login.accessToken') != null){
    //     state.accessToken = localStorage.getItem('login.accessToken')
    //   }
    //   if(localStorage.getItem('login.refreshToken') != null){
    //     state.refreshToken = localStorage.getItem('login.refreshToken')
    //   }
    //   if(localStorage.getItem('login.shopName') != null){
    //     state.shopName = localStorage.getItem('login.shopName')
    //   }
    //   if(localStorage.getItem('login.shopPhNum') != null){
    //     state.shopPhNum = localStorage.getItem('login.shopPhNum')
    //   }
    //   if(localStorage.getItem('login.mgName') != null){
    //     state.mgName = localStorage.getItem('login.mgName')
    //   }
    // }

    //쿠키 리드 메소드
    readStateFromStorage(state){
      // if(cookies.get('login.userid') != null){
      //   state.userid = cookies.get('login.userid');
      // }
      // if(cookies.get('login.accessToken') != null){
      //   state.accessToken = cookies.get('login.accessToken');
      // }
      // if(cookies.get('login.refreshToken') != null){
      //   state.refreshToken = cookies.get('login.refreshToken');
      // }
      // if(cookies.get('login.shopName') != null){
      //   state.shopName = cookies.get('login.shopName');
      // }
      // if(cookies.get('login.shopPhNum') != null){
      //   state.shopPhNum = cookies.get('login.shopPhNum');
      // }
      // if(cookies.get('login.mgName') != null){
      //   state.mgName = cookies.get('login.mgName');
      // }

      // state정보를 JSON 객체로 관리할 경우 쿠키에서 GET메소드로 가져올 때 자동으로 JSON 객체로 변환됨, JSON.parse() 사용 안해도 됨
      if(cookies.get('login') != null){
        let storage = cookies.get('login');
        if(storage.userid != null){
          state.userid = storage.userid;
        }
        if(storage.accessToken != null){
          state.accessToken = storage.accessToken;
        }
        if(storage.refreshToken != null){
          state.refreshToken = storage.refreshToken;
        }
        if(storage.shopName != null){
          state.shopName = storage.shopName;
        }
        if(storage.shopPhNum != null){
          state.shopPhNum = storage.shopPhNum;
        }
        if(storage.mgName != null){
          state.mgName = storage.mgName;
        }
      }

    },
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
          commit('setShopName', res.data.shopname);
          commit('setShopPhNum', res.data.shopphnum);
          commit('setMgName', res.data.mgname);
          commit('setChecked', userInfo.checked);
          commit('saveStateToStorage');
          axios.defaults.headers.common['Access-Token'] = res.data.accessToken;
          result = true;
          console.log('로그인 성공');
        } else {
          console.log('로그인 실패');
          let err = new Error('Request failed with status code 401');
          err.status = 401;
          err.response = {
            data: {
              'success': false,
              'errormessage': '로그인 실패'
            }
          }
          resultErr = err;
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
    doReadStateFromStorage({commit}){
      commit('readStateFromStorage');
    },
    doLogout ({ commit }) {
      commit('reset')
      delete axios.defaults.headers.common['Access-Token'];
    }
  },
}

