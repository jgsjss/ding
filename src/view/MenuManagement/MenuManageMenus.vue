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
          <button class="menuedit_menu_btn02" type="button" @click="moveNext">+메뉴추가</button>
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
        <tr v-for="(a, i) in menuData" :key="i">
          <td v-for="menuname in a" :key="i"></td>
          <td scope="row" class="cate_check_box">
            <input type="checkbox"
                   :id="'menuCheck_' + i.menuId"
                   :value="i"
                   v-model="menuSelected"
                   @click="menuPrint"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <router-link to="/menumanagement/MenuAddModify" class="asdf">
            <td class="edit_data">

              <!--              <img v-for="pd in 'http://static/pdimage/'" :key="pd" src="/static/pdimage/{{pd}}" class="coffee_img">-->
              <img :src="`${menuData[i].pdimage}`" class="coffee_img">
              {{ menuData[i].pdname }}
              <!--              {{ menuData[i].pdimage }}-->
              <!--              {{ menuData[i].pdimage }}-->
            </td>
          </router-link>
          <td class="edit_data" title="마우스">{{ menuData[i].price }}</td>
          <td class="edit_data">{{ menuData[i].pdcategory }}</td>
          <td class="edit_data">{{ '옵션은 보류' }}</td>
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
      <div class="btn-cover">
        <button :disabled="pageNum === 1" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum }} / {{ totalPage }} </span>
        <button :disabled="pageNum >= totalPage" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
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
      conditionKey: null,
      active: false,
      // menuname: [
      //   {
      //     coffee: require('../../assets/coffee.jpeg')
      //   }
      // ],
      allCheckedMenus: false,
      menuData: '',
      pageCount: 10,
      currentPage: 1,
      pageNum: 1,
      totalPage:Number
    }
  },
  methods: {
    getMenu (curpage) {
      axios.post('/apimenu/menus', {
        data: {
          shopcode: this.shopcode,
          curpage: curpage
        }
      }).then(res => {
        console.log('res.data: ', res.data)
        // 백엔드에서 날라오는 값 res.data=>articles[rows, ActualArticleLength]

        //게시물 총 갯수
        this.totalPage = res.data.length
        //게시물 정보들
        this.menuData = res.data.rows
        // this.totalPage = this.cgData.length

        // 백엔드의 사진의 주소를 interpolation 하기 위해선 FE에서 Data 자체에 전체 주소값을 포함하여야 함.
        // 아니면 interpolation 으로 다이내믹으로 require해서 url 주소 편집 필요 , FE Asset으로 사용도 가능
        // 결과적으로 주소값을 전체적으로 가지고 다니는것이 가장 효율적
        // src="/static/pdimage/{{menuData[i].pdimage}}" 와 같은 방법은 vue 한계상 쉽진 않음

        console.log('menuData: ', this.menuData)
        for (let i = 0; i < this.menuData.length; i++) {

          // this.menuData[i].pdimage = ''.concat('/static/pdimage/', this.menuData[i].pdimage)
          this.menuData[i].pdimage = this.imgbaseurl.concat(this.menuData[i].pdimage)

          console.log('pdimage : ', this.menuData[i].pdimage)
        }
        // console.log(this.menuData.pdimage)
        return res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    moveNext () {
      console.log('유저권한', this.getUserrole)
      if (this.getUserrole != 0) {
        alert('기능에 대한 권한이 없습니다.')
        return
      } else if (this.getUserrole == 0) {
        return
      }
    },
    print () {
      console.log(this.selected)
    },
    nextPage () {
      this.pageNum += 1
      this.getMenu(this.pageNum)
    },
    prevPage () {
      this.pageNum -= 1
      console.log(this.pageNum)
      this.getMenu(this.pageNum)
    },
    checkedAllMenu (checked) {
      this.menuSelected = checked

    },
    menuSelected () {
      for (let i in this.boardList) {
        if (!this.boardList[i].menuSelected) {
          this.allCheckedMenus = false
          return
        } else {
          this.allCheckedMenus = true
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

    menuCnt (obj) {
      _.forEach(obj, function (v, k, copy) {
        // console.log("Asd",V)
        // console.log(K)
        // console.log("v",v)
        // console.log("k",k)
        // console.log("copy",copy)
        _.reduce(v, function (accum, v) {
          console.log('v', v)
          console.log('accum', accum)
          // console.log("k",k)
          // console.log("i",i)
        }, 3)
      })
    },
    editCondition (event) {
      console.log(event.target.value)
    },

    // 이미지 호출을 위한 매장번호,물품번호를 어떻게 할것인가
    getImage: async () => {
      const res = await axios.get('/apimenu/getimg', {
        data: {
          storeNumber: Number,
          productNumber: Number
        }
      })
      // locate=res.data
    }

  },

  // mounted() {
  //   this.getList();
  // },
  computed: {
    // pageCount () {
    //   return Math.ceil(this.$store.state.CategoryData.length / 10)
    // },
    getUserrole () {
      return this.$store.getters['loginStore/getUserrole']
    },
    shopcode () {
      return this.$store.getters['loginStore/getShopcode']
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
  },
  beforeMount () {
    this.getMenu(1)
  }
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuManageMenus.css';
</style>
