<template>
  <!-- 메뉴관리 페이지의 카테고리편집 게시판 페이지 -->
  <div class="cate_container">
    <form class="category_wrap">
      <div class="category_left">
        <label class="cate_label">
          <input type="checkbox"
                 class="cate_check"
                   id="all-check"
                   v-model="allChecked"
                   @click="checkedAll($event.target.checked)"                 
          >
          전체선택
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 삭제</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 품절</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 숨김</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 정상</button>
        </label>
      </div>
      <div class="category_right">
        <input type="search"
               name="categoriSearch"
               placeholder="search"
               class="menu_search"
        >
        <button class="cate_menu_btn02" type="button" data-bs-toggle="offcanvas" data-bs-target="#categoryadd"
                aria-controls="categoryadd">+메뉴추가
        </button>

        <select class="hidden_select">
          <option class="hidden_btn">전체/정상/숨김/품절</option>
          <option class="hidden_btn" value="삭제">정상</option>
          <option class="hidden_btn" value="숨김">숨김</option>
          <option class="hidden_btn" value="정상">품절</option>
        </select>
      </div>

    </form>
    <div class="category_list_wrap">
      <table class="cate_table">
        <thead class="category_thead">
        <tr class="cate_title">
          <th scope="col"></th>
          <th scope="col" class="cate_col">메뉴명</th>
          <th scope="col" class="cate_col">가격</th>
          <th scope="col" class="cate_col">카테고리</th>
          <th scope="col" class="cate_col">연결옵션</th>
          <th scope="col" class="cate_col">숨김/품절</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(a, i) in $store.state.menueditData" :key="i">
          <td v-for="menuname in coffees" :key="menuname"></td>
          <td scope="row" class="cate_check_box">
            <input type="checkbox"
                   :id="'check_' + i.boardId"
                   :value="i"
                   v-model="selected"
                   @click="print"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <td class="cate_data"><img :src="menuname.coffee" />{{ $store.state.menueditData[i].menuname }}</td>
          <td class="cate_data" title="마우스">{{  $store.state.menueditData[i].price }}</td>
          <td class="cate_data">{{ $store.state.menueditData[i].category }}</td>
          <td class="cate_data">{{ $store.state.menueditData[i].connectoption }}</td>
          <td class="cate_data">
            <select class="cate_condition">
              <option class="cate_condition_text">상태설정</option>
              <option class="cate_condition_text">숨김</option>
              <option class="cate_condition_text">정상상태</option>
            </select>
            <!-- <button type="button" class="cate_connect_btn">숨김(OFF)
              </button> -->
          </td>
        </tr>
        </tbody>
      </table>
      <div class="cate_add_wrap">
        <button type="button" class="cate_add_btn">저장</button>
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

export default {
  data () {
    return {
      pageNum: 0,
      active: false,
      menuname:[
        {
          coffee: require('../../assets/coffee.jpeg')
        }
      ],
      allChecked: false,

    }
  },
  methods: {
    print () {
      console.log(this.selected)
    },
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    },
    checkedAll (checked) {
      this.allChecked = checked

    },
    selected () {
      for (let i in this.boardList) {
        if (!this.boardList[i].selected) {
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
        if (this.cgData[i].selected) {
          boardIds.push(this.cgData[i].boardId)
        }
      }
    },
    getCategories () {
      axios.post('/apimenu/categories').then(res => {
        // console.log(res)

        this.cgData = res.data
        // console.log('cgData: ', this.cgData)
      }).catch((err) => {
        console.log(err)
      })
    },
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
    setup () {

    }
  },

  // mounted() {
  //   this.getList();
  // },
  computed: {
    // pageCount () {
    //   return Math.ceil(this.$store.state.CategoryData.length / 10)
    // },
  },
  beforeMount () {
    this.getCategories()

    // console.log(this.cgData)
  },
  setup () {

  },
  updated () {
    this.menuCnt(this.cgData)
  }
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuEdit.css';
</style>
