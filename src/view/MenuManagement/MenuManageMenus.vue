<template>
  <!-- 메뉴관리 페이지의 메뉴편집 게시판 페이지 -->
  <div class="menuedit_container">
    <button type="button" @click="dummy10" class="btn btn-primary">더미 10개</button>
    <form class="menuedit_wrap">
      <div class="menuedit_left">
        <label class="menuedit_label">
          <input type="checkbox"
                 class="menuedit_check"
                 id="all-check"
                 v-model="toggle"
                 @click="toggleAll"
          >
          전체선택
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn" @click="deleteProducts"> 삭제</button>
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn" @click="chooseStatus(0)"> 정상</button>
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn" @click="chooseStatus(1)"> 숨김</button>
        </label>
        <label class="menuedit_label">
          <button type="button" class="menuedit_check_btn" @click="chooseStatus(2)"> 품절</button>
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
          <!-- <td v-for="menuname in coffees" :key="menuname"></td> -->
          <td scope="row" class="cate_check_box">
            <input type="checkbox"
                   @change="notcheckedall"
                   id="a.pdnum"
                   v-model="selectedChkBox[i]"
            >
          </td>
          <!-- <td>인덱스 {{a}}--{{i}}</td> -->
          <router-link to="/menumanagement/MenuAddModify" class="asdf">
            <td class="edit_data">

              <!--<img v-for="pd in 'http://static/pdimage/'" :key="pd" src="/static/pdimage/{{pd}}" class="coffee_img">-->
              <img :src="`${menuData[i].pdimage}`" class="coffee_img">
              <!--메뉴명-->
              {{ menuData[i].pdname }}
              <!--              {{ menuData[i].pdimage }}-->
              <!--              {{ menuData[i].pdimage }}-->
            </td>
          </router-link>
          <!--가격-->
          <td class="edit_data" title="마우스">{{ menuData[i].price }}</td>
          <!--카테고리-->
          <td class="edit_data">{{ menuData[i].pdcategory }}</td>
          <!--연결옵션-->
          <td class="edit_data">{{ '옵션은 보류' }}</td>
          <!--숨김/품절-->
          <td class="edit_data">
            <select class="edit_condition" v-model="conditionkey[i]">
              <option class="edit_condition_text">상태설정</option>
              <option class="edit_condition_text">숨김</option>
              <option class="cate_condition_text">정상</option>
              <option class="edit_condition_text">품절</option>
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
      <div class="btn-cover_menus">
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
import router from '@/router'
import store from "../../store/index.js"


export default {
  data() {
    return {
      conditionKey: [],
      active: false,
      allCheckedMenus: false,
      menuData: [],
      pageCount: 10,
      currentPage: 1,
      pageNum: 1,
      totalPage: "",
      selectedChkBox: [],
      toggle: false,
      conditionkey: [],

    }
  },
  methods: {

    toggleAll() {
      if (this.toggle) {
        for (let i = 0; i < this.menuData.length; i++) {
          this.selectedChkBox[i] = false;
        }
      } else {
        for (let i = 0; i < this.menuData.length; i++) {
          this.selectedChkBox[i] = true;
        }
      }
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
    deleteProducts() {
      let deleteList = [];
      _.filter(this.selectedChkBox, (val, i) => {
        if (val) {
          let pdnums = this.menuData[i].pdnum;
          deleteList.push(pdnums);
          console.log("pdnums", pdnums);
        }
      });
      console.log("delete List : ", deleteList);
      axios
          .post("/apimenu/deleteProducts", {
            data: {
              deletelist: deleteList,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data == 1) {
              this.$swal.fire({
                icon: "success",
                title: "삭제 완료!",
                text: "선택하신 메뉴가 삭제되었습니다.",
                showConfirmButton: false,
                timer: 3000,
              }).then((res)=>{
                this.lazyTimeout()
              });

            }
          })
          .catch((err) => {
            console.log(err);
          });
    },
    lazyTimeout(){
      setTimeout(this.$router.go(),3000)
    },
    chooseStatus(choose) {
      let statList = [];
      _.filter(this.selectedChkBox, (val, i) => {
        if (val) {
          let pdnums = this.menuData[i].pdnum;
          statList.push(pdnums);
          console.log("pdnums", pdnums);
        }
      });
      console.log("status list : ", statList);
      axios
          .post("/apimenu/choosestatus", {
            data: {
              choose: choose,
              statuslist: statList,
            },
          })
          .then((res) => {
            if (res.data == 0) {
              this.$swal.fire({
                icon: "success",
                title: "상태 정상화",
                text: "선택하신 메뉴가 정상화 되었습니다.",
                showConfirmButton: true,
                timer: 3000,
              }).then((res)=>{
                this.lazyTimeout()
              });
            } else if (res.data == 1) {
              this.$swal.fire({
                icon: "success",
                title: "상태 숨김",
                text: "선택하신 메뉴가 숨김처리 되었습니다.",
                showConfirmButton: false,
                timer: 3000,
              }).then((res)=>{
                this.lazyTimeout()
              });
            } else if (res.data == 2) {
              this.$swal.fire({
                icon: "success",
                title: "상태 품절",
                text: "선택하신 메뉴가 품절처리 되었습니다.",
                showConfirmButton: false,
                timer: 3000,
              }).then((res)=>{
                this.lazyTimeout()
              });
            }
          })
          .catch((err) => {
            if (err) console.log(err);
          });
    },
    statusCheck() {
      for (let i = 0; i < this.menuData.length; i++) {
        if (this.menuData[i].status == "0") {
          this.conditionkey[i] = "정상";
        } else if (this.menuData[i].status == "1") {
          this.conditionkey[i] = "숨김";
        } else {
          this.conditionkey[i] = "품절";
        }
      }
    },

    dummy10() {
      axios.get("/apimenu/dummy10",
          //{
          //   data:{
          //     "shopCode" : this.shopcode
          //   }
          // }
      )
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    },
    async getMenu(curpage) {
      try {
        const res = await axios.post('/apimenu/menus', {
          data: {
            shopcode: this.shopcode,
            curpage: curpage
          }
        })
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
        this.statusCheck();
        // console.log(this.menuData.pdimage)
        return res.data

      } catch (e) {
        console.log('err: ', e)
      }

    },
    nextPage() {
      this.pageNum += 1;
      this.getMenu(this.pageNum);
      this.selectedChkBox = [];
      this.toggle = false;
    },
    prevPage() {
      this.pageNum -= 1;
      this.getMenu(this.pageNum);
      this.selectedChkBox = [];
      this.toggle = false;
    },
    menuSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].menuSelected) {
          this.allCheckedMenus = false
          return
        } else {
          this.allCheckedMenus = true
        }
      }
    },
    menuCnt(obj) {
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
    editCondition(event) {
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
    notcheckedall() {
      let sechbox = this.selectedChkBox;
      let length = this.selectedChkBox.length;
      for (let i = 0; i < length; i++) {
        if (sechbox[i] == false) {
          this.toggle = false;
          console.log("toggle : ", this.toggle);
          return;
        } else if (sechbox[i] == true) {
          for (let j = 0; j < length; j++) {
            if (!sechbox[j]) {
              this.toggle = false;
              return;
            } else {
              this.toggle = true;
            }
          }
        }
      }
      return;
    },
    shopcode() {
      return this.$store.getters['loginStore/getShopcode']
    }
  },
  // beforeMount () {
  //   this.getCategories()
  //
  //   // console.log(this.cgData)
  // },
  beforeMount() {
    this.getMenu(1)
    this.selectedChkBox.length = 5;
    // console.log("shopcode:  ",this.shopcode)
  }
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuManageMenus.css';
</style>
