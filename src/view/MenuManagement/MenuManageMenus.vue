<template>
  <!-- 메뉴관리 페이지의 메뉴편집 게시판 페이지 -->
  <div class="menuedit_container">
    <form class="menuedit_wrap">
      <div class="menuedit_left">
        <label class="menuedit_label">
          <input type="checkbox"
                 class="menuedit_check"
                   id="all-check"
                   v-model="allCheckedMenus"
                   @click="checkedAllMenu($event.target.checked)"                 
          >
          전체선택
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn"> 삭제</button>
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn"> 품절</button>
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn"> 숨김</button>
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn"> 정상</button>
        </label>
      </div>
      <div class="menuedit_right">
        <input type="search"
               name="categoriSearch"
               placeholder="search"
               class="menu_search"
        >
        <router-link to="/menumanagement/MenuAdd">
        <button class="menuedit_menu_btn02" type="button" @click="moveNext" >+메뉴추가</button>
        </router-link>
        <select class="menu_hidden_select">
          <option class="menu_hidden_btn">전체/정상/숨김/품절</option>
          <option class="menu_hidden_btn" value="삭제">정상</option>
          <option class="menu_hidden_btn" value="숨김">숨김</option>
          <option class="menu_hidden_btn" value="정상">품절</option>
        </select>
      </div>

    </form>
    <div class="menuedit_list_wrap">
      <table class="edit_table">
        <thead class="edit_thead">
        <tr class="edit_title">
          <th scope="col"></th>
          <th scope="col" class="edit_col">메뉴명</th>
          <th scope="col" class="edit_col">가격</th>
          <th scope="col" class="edit_col">카테고리</th>
          <th scope="col" class="edit_col">연결옵션</th>
          <th scope="col" class="edit_col">숨김/품절</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(a, i) in $store.state.menueditData" :key="i">
          <td v-for="menuname in coffees" :key="menuname"></td>
          <td scope="row" class="cate_check_box">
            <input type="checkbox"
                   :id="'menuCheck_' + i.menuId"
                   :value="i"
                   v-model="menuSelected"
                   @click="menuPrint"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
           <router-link to="/menumanagement/MenuAddTwo">
            <td class="edit_data">
              <img src="../../assets/coffee.jpeg" class="coffee_img">
              {{ $store.state.menueditData[i].menuname }}
            </td>
           </router-link>
          <td class="edit_data" title="마우스">{{  $store.state.menueditData[i].price }}</td>
          <td class="edit_data">{{ $store.state.menueditData[i].category }}</td>
          <td class="edit_data">{{ $store.state.menueditData[i].connectoption }}</td>
          <td class="edit_data">
            <select class="edit_condition" @change="editCondition($event)" v-model="conditionKey">
              <option class="edit_condition_text" value="null">상태설정</option>
              <option class="edit_condition_text" value="숨김">숨김</option>
              <option class="edit_condition_text" value="품절">품절</option>
              <option class="edit_condition_text" value="정상상태">정상상태</option>
            </select>
            <!-- <button type="button" class="cate_connect_btn">숨김(OFF)
              </button> -->
          </td>
        </tr>
        </tbody>
      </table>
      <div class="edit_add_wrap">
        <button type="button" class="edit_add_btn">저장</button>
      </div>
      <!-- <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
      </div> -->
    </div>


  </div>

</template>

<script>
// import { ref, computed } from 'vue';
// import axios from 'axios';
import _ from 'lodash'
import axios from 'axios'
import router from '../../router'

export default {
  data () {
    return {
      conditionKey:null,
      pageNum: 0,
      active: false,
      menuname:[
        {
          coffee: require('../../assets/coffee.jpeg')
        }
      ],
      allCheckedMenus: false,

    }
  },
  methods: {
    moveNext(){
        console.log('유저권한', this.getUserrole)
        if (this.getUserrole != 0) {
          alert('기능에 대한 권한이 없습니다.')
          return
        } else if(this.getUserrole == 0) {
          return
        }
    },
    print () {
      console.log(this.selected)
    },
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    },
    checkedAllMenu (checked) {
      this.menuSelected = checked

    },
    menuSelected () {
      for (let i in this.boardList) {
        if (!this.boardList[i].menuSelected) {
          this.allChecked = false
          return
        } else {
          this.allChecked = true
        }
      }
    },
    getSelected () {
      let boardIds = []
      for (let i in this.cgData) {
        if (this.cgData[i].menuSelected) {
          boardIds.push(this.cgData[i].boardId)
        }
      }
    },
    // getCategories () {
    //   axios.post('/apimenu/categories').then(res => {
    //     // console.log(res)
    //
    //     this.cgData = res.data
    //     // console.log('cgData: ', this.cgData)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // },
    menuCnt (obj) {
      _.forEach(obj,function (v,k,copy) {
        // console.log("Asd",V)
        // console.log(K)
        // console.log("v",v)
        // console.log("k",k)
        // console.log("copy",copy)
        _.reduce(v,function (accum,v) {
          console.log("v",v)
          console.log("accum",accum)
          // console.log("k",k)
          // console.log("i",i)
        },3)
      })
    },
    editCondition(event) {
      console.log(event.target.value)
    }
  },

  // mounted() {
  //   this.getList();
  // },
  computed: {
    // pageCount () {
    //   return Math.ceil(this.$store.state.CategoryData.length / 10)
    // },
    getUserrole(){
      return this.$store.getters['loginStore/getUserrole']
    }
  },
  // beforeMount () {
  //   this.getCategories()
  //
  //   // console.log(this.cgData)
  // },
  setup () {

  },
  updated () {
    this.menuCnt(this.cgData)
  }
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuManageMenus.css';
</style>
