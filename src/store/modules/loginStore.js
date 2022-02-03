import axios from 'axios'
// import { commit } from 'lodash/seq'

export const loginStore = {
  namespaced: true,

  state: {
    userId: '',
    accessToken: '',
  },
  getters: {
    //로그인 여부 확인 메소드
    isLogin (state) {
      return state.accessToken == '' ? false : true
    }
  },
  mutations: {
    //userId 설정
    setUserId (state, userId) {
      state.userId = userId
    },
    // accessToken 설정
    setAccessToken (state, accessToken) {
      state.accessToken = accessToken
    },
    reset (state) {
      state.userId = ''
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
          console.log('로그인 성공')
          commit('setUserId', userInfo.id)
          commit('setAccessToken', res.data.accessToken)
          result = true
        } else {
          console.log('로그인 실패')
          let err = new Error('Request failed with status code 401')
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
    doLogout ({ commit }) {
      commit('reset')
    }
  },
}

