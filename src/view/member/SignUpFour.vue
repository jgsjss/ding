<template>
  <div class="container_fluid">

    <button type="button" @click="fire">얼러트 테스트</button>
    <h4 class="shop_name">(가게이름) 가입 심사중 입니다 :)</h4>
    <div class="sub_text">
      <p>심사는 최대 7일까지 걸릴 수 있습니다(완료시 문자/이메일 알림)</p>
      <p>문의사항이 있으시면 (브랜드 대표번호)로 연락주세요!</p>
    </div>
    <div class="btn_box"><router-link to="/updatebizmember">비밀번호 수정</router-link>></div>
    <div class="btn_box"><a href="#!">회원가입 신청 취소</a></div>
  </div>
</template>

<script>


import store from '../../store'

export default {
  methods: {
    fire () {
      this.$swal.fire({
        title: 'ㅇㅋ??',
        text: '진짜할거에요?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
        }else if(result.dismiss){
          this.$swal.fire(
              'asd'
          )
        }
      })
    }
  },
  mounted () {
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.selected)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.userName)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.userId)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.userPw)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.phNum)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.shopName)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.shopPhNum)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.bizAddr1)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.bizAddr2)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.bizZip)
    // console.log('사인업3에서 넘어옴 : ', store.state.signupStore.etc)
  }
}
</script>

<style>
@import '../../assets/css/Member/SignUpFour.css';
</style>
