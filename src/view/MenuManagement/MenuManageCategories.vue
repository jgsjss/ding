<template>
  <!-- 메뉴관리 페이지의 카테고리편집 게시판 페이지 -->
  <div class="cate_container">
    <form class="category_wrap">
      <div class="category_left">
        <label class="cate_label">
          <input type="checkbox"
                 class="cate_check"
          >
          전체선택
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 삭제</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 정상</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn"> 숨김</button>
        </label>
      </div>
      <div class="category_right">
        <input type="search"
               name="categoriSearch"
               placeholder="search"
               class="menu_search"
        >
        <router-link to="/menumanagement/MenuConnect">
          <button class="cate_menu_btn">순서변경</button>
        </router-link>
        <button class="cate_menu_btn02" type="button" data-bs-toggle="offcanvas" data-bs-target="#categoryadd"
                aria-controls="categoryadd">+카테고리추가
        </button>
        <!--카테고리 추가,상세 오프캔버스-->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="categoryadd" aria-labelledby="categoryaddLabel">
          <h4 class="category_add_title" id="categoryaddLabel">카테고리 추가</h4>
          <!--카테고리 추가-->
          <div class="offcanvas-body category_add_body01">
            <div>
              <form class="row">
                <label for="category_add_label" class="category_add_label">* 카테고리명
                  <input type="text" class="category_add_input form-control" placeholder="예) 딩동아메리카노">
                </label>
                <label for="category_add_label" class="category_add_label">설명
                  <input type="text" class="category_add_input form-control"
                         placeholder="예) 딩동커피만의 로스팅 방식으로 만들어 낸 아메리카노">
                </label>
                <div class="category_add_label_wrap">
                  <label class="category_add_label">
                    카테고리공개
                    <input type="radio" class="category_add_radio" value="open"/>공개
                    <input type="radio" class="category_add_radio" value="hidden"/>숨김(딩동오더에 노출 안됨)
                  </label>
                </div>
                <div class="category_add_btn_wrap">
                  <button type="button" class="category_add_btn">카테고리추가</button>
                </div>
              </form>
            </div>
          </div>
          <hr/>
          <!--카테고리 상세-->
          <h4 class="category_add_title">카테고리 상세</h4>
          <div class="offcanvas-body category_add_body01">
            <div>
              <form class="row">
                <label for="category_add_label" class="category_add_label">* 카테고리명
                  <input type="text" class="category_add_input form-control" placeholder="예) 딩동아메리카노">
                </label>
                <label for="category_add_label" class="category_add_label">설명
                  <input type="text" class="category_add_input form-control"
                         placeholder="예) 딩동커피만의 로스팅 방식으로 만들어 낸 아메리카노">
                </label>
                <label class="category_add_label">
                  연결메뉴(총 33개)
                </label>
                <p class="category_menu_name">
                  토피넛 프라푸치노,더블 에스프레소 칩 프라푸치노, 에스프레소 프라푸치노, 말차 프라푸치노
                  토피넛 프라푸치노,더블 에스프레소 칩 프라푸치노, 에스프레소 프라푸치노, 말차 프라푸치노
                  토피넛 프라푸치노,더블 에스프레소 칩 프라푸치노, 에스프레소 프라푸치노, 말차 프라푸치노
                </p>
                <div class="category_add_btn_wrap">
                  <button type="button" class="category_del_btn">삭제</button>
                  <button type="button" class="category_add_btn">저장</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <select class="hidden_select">
          <option class="hidden_btn">전체/숨김/정상</option>
          <option class="hidden_btn" value="삭제">삭제</option>
          <option class="hidden_btn" value="숨김">숨김</option>
          <option class="hidden_btn" value="정상">정상</option>
        </select>
      </div>

    </form>
    <div class="category_list_wrap">
      <table class="cate_table">
        <thead class="category_thead">
        <tr class="cate_title">
          <th scope="col">
            <input type="checkbox"
                   id="all-check"
                   v-model="allChecked"
                   @click="checkedAll($event.target.checked)"
            />
          </th>
          <th scope="col" class="cate_col">카테고리명</th>
          <th scope="col" class="cate_col">연결 된 메뉴</th>
          <th scope="col" class="cate_col">연결메뉴 갯수</th>
          <th scope="col" class="cate_col">메뉴연결</th>
          <th scope="col" class="cate_col">숨김</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(a, i) in cgData" :key="i">
          <td scope="row" class="cate_check_box">
            <input type="checkbox"
                   :id="'check_' + i.boardId"
                   :value="i"
                   v-model="selected"
                   @click="print"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <td class="cate_data">{{ cgData[i].pdcategory }}</td>
          <td class="cate_data col-7" title="마우스">{{ cgData[i].pdname }}</td>
          <td class="cate_data">{{ '이건...일단보류' }}</td>
          <router-link to="/menumanagement/MenuConnecttwo">
            <td class="cate_data">
              <button type="button" class="cate_connect_btn">메뉴연결</button>
            </td>
          </router-link>
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

      cgData: [],
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
        console.log("v",v)
        // console.log("k",k)
        // console.log("copy",copy)
        // _.reduce(v,function (acc,v,k) {
        //   console.log("v",v)
        //   // console.log("acc",acc)
        //   console.log("k",k)
        //   // console.log("i",i)
        //   let connectedMenuCnt=0
        //
        //
        // },0)
        _.find(v,function (obj) {
          // console.log("v",v)
          // console.log("k",k)
          // console.log("copy",copy)
          let cnt=(obj.pdname)
          console.log("cnt",cnt)

        })
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
@import '../../assets/css/MenuManagement/MenuManageCategories.css';
</style>
