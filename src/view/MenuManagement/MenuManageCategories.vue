<template>
  <!-- 메뉴관리 페이지의 카테고리편집 게시판 페이지 -->
  <div class="cate_container">
    <form class="category_wrap">
      <div class="category_left">
        <label class="cate_label">
          <input type="checkbox" id="all-check" v-model="toggle" @click="toggleAll" />
          전체선택
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn" @click="deleteProducts">삭제</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn" @click="chooseStatus(0)">정상</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn" @click="chooseStatus(1)">숨김</button>
        </label>
        <label class="cate_label">
          <button type="button" class="cate_check_btn" @click="chooseStatus(2)">품절</button>
        </label>
      </div>
      <div class="category_right">

<!--        검색창----------------------------------------------------------->
        <input type="search" name="categoriSearch" placeholder="search" class="menu_search" v-model="search" v-on:change.prevent="searchCategory" />
<!--        <input type="search" name="categoriSearch" placeholder="search" class="menu_search" v-model="search" @change="searchCategory" />-->

        <router-link  to="/menumanagement/MenuConnect" @keyup.capture.stop >
          <button class="cate_menu_btn">순서변경</button>
        </router-link>
        <button
          class="cate_menu_btn02"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#categoryadd"
          aria-controls="categoryadd"
          @click="roleCheck"
        >
          +카테고리추가
        </button>
        <!--카테고리 추가,상세 오프캔버스-->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="categoryadd" aria-labelledby="categoryaddLabel">
          <h4 class="category_add_title" id="categoryaddLabel">카테고리 추가</h4>
          <!--카테고리 추가-->
          <div class="offcanvas-body category_add_body01">
            <div>
              <form class="row">
                <label for="category_add_label" class="category_add_label"
                  >* 카테고리명
                  <input
                    type="text"
                    id="cana"
                    v-model="ctname"
                    class="category_add_input form-control"
                    @change="errorCaAdd"
                    placeholder="예) 딩동아메리카노"
                  />
                  <span class="error_next_box2" id="caAddName" style aria-live="assertive">필수 정보 입니다.</span>
                </label>
                <label for="category_add_label" class="category_add_label"
                  >설명
                  <input
                    type="text"
                    v-model="description"
                    class="category_add_input form-control"
                    @change="errorCaDeAdd"
                    placeholder="예) 딩동커피만의 로스팅 방식으로 만들어 낸 아메리카노"
                  />
                  <span class="error_next_box2" id="caAddDe" style aria-live="assertive">필수 정보 입니다.</span>
                </label>

                <div class="category_add_label_wrap">
                  카테고리공개
                  <label class="category_add_label">
                    <input
                      type="radio"
                      name="category_radio"
                      @click="statusCheck"
                      value="open"
                      checked="checked"
                      class="category_add_radio"
                    />&nbsp공개&nbsp
                  </label>
                  <label class="category_add_label">
                    <input
                      type="radio"
                      name="category_radio"
                      @click="statusCheck"
                      value="hidden"
                      class="category_add_radio"
                    />&nbsp숨김(노출 안됨)
                  </label>
                  <div class="category_add_connect_box">
                    <label class="category_add_label"> 연결메뉴(총 33개) </label>
                    <p class="category_menu_name">
                      토피넛 프라푸치노,더블 에스프레소 칩 프라푸치노, 에스프레소 프라푸치노, 말차 프라푸치노 토피넛
                      프라푸치노,더블 에스프레소 칩 프라푸치노, 에스프레소 프라푸치노, 말차 프라푸치노 토피넛
                      프라푸치노,더블 에스프레소 칩 프라푸치노, 에스프레소 프라푸치노, 말차 프라푸치노
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="category_add_btn_wrap">
            <button type="button" @click="addCategory" class="category_add_btn" :disabled="disabled == 1">저장</button>
          </div>
        </div>
        <!--------------카테고리 추가 오프캔버스 끝-------------->

        <select class="hidden_select">
          <option class="hidden_btn">전체</option>
          <option class="hidden_btn" value="숨김">숨김</option>
          <option class="hidden_btn" value="정상">정상</option>
        </select>
      </div>
    </form>
    <button type="button" @click="test">체크박스 출력</button>
    <div class="category_list_wrap">
      <table class="cate_table">
        <thead class="category_thead">
          <tr class="cate_title">
            <th scope="col"></th>
            <th scope="col" class="cate_col">카테고리명</th>
            <th scope="col" class="cate_col">연결 된 메뉴</th>
            <th scope="col" class="cate_col">연결메뉴 갯수</th>
            <th scope="col" class="cate_col">메뉴연결</th>
            <th scope="col" class="cate_col">숨김/품절</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in cgData" :key="i">
            <td scope="row" class="cate_check_box">
              <input
                type="checkbox"
                @change="notcheckedall"
                id="a.pdnum"
                v-model="selectedChkBox[i]"
              />

              <!--            value="a.pdnum"-->
              <!--            <span>pd 넘버{{a.pdnum}}</span>-->
            </td>
            <!--          cglength: {{cgData.length}}-->
            <!-- <td>인덱스 {{a}}--{{i}}</td> -->
            <td class="cate_data">{{ cgData[i].pdcategory }}</td>

            <td class="cate_data col-7" title="마우스">{{ cgData[i].pdname }}</td>
            <td class="cate_data">{{ "이건...일단보류" }}</td>
            <router-link to="/menumanagement/MenuConnecttwo">
              <td class="cate_data">
                <button type="button" class="cate_connect_btn">메뉴연결</button>
              </td>
            </router-link>
            <td class="cate_data">
              <select class="cate_condition" v-model="conditionkey[i]">
                <option class="cate_condition_text">상태설정</option>
                <option class="cate_condition_text">숨김</option>
                <option class="cate_condition_text">정상</option>
                <option class="edit_condition_text" >품절</option>
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
      <div class="btn-cover_categories">
        <button :disabled="pageNum === 1" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum }} / {{ totalPage }} </span>
        <button :disabled="pageNum >= totalPage" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
      </div>
    </div>
    <!--    <button @click="logPdnum">테스트</button>-->
  </div>
</template>
<script>
// import InfiniteLoading from 'v3-infinite-loading'
import _ from "lodash";
import axios from "axios";
import store from "../../store/index.js";
import router from "@/router";
const sweet = require("sweetalert2");
export default {
  data() {
    return {
      active: false,
      cgData: [],
      allChecked: false,
      isUserRole: false,
      totalPage: "",
      dataPerPage: "",
      pageCount: 10,
      currentPage: 1,
      pageNum: 1,
      ctname: "",
      description: "",
      status: "open",
      disabled: 0,
      allSelectPdnum: [],
      noneSelected: [],
      selected: [],
      selectedChkBox: [],
      toggle: false,
      computeSelectedChkBox: null,
      conditionkey: [],
      search:"",
      searchValue: "",
    };
  },
  components: {},
  methods: {
    searchCategory() {
      console.log("searchCategory : ",this.search);
      this.searchMenu(this.search);
    },
    searchMenu(word){
      // let word = this.searchValue

      axios.get("/apimenu/searchkeyword", {
        params : {
          keyword : word,
        }
      }).then((res) =>{

      }).catch(err=>{
        if(err) console.log("searchMenu err: ", err )
      })
    },
    chooseStatus(choose) {
      let statList = [];
      _.filter(this.selectedChkBox, (val, i) => {
        if (val) {
          let pdnums = this.cgData[i].pdnum;
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
              showConfirmButton: false,
              timer: 3000,
            });
            this.$router.go();
          } else if (res.data == 1) {
            this.$swal.fire({
              icon: "success",
              title: "상태 숨김",
              text: "선택하신 메뉴가 숨김처리 되었습니다.",
              showConfirmButton: false,
              timer: 3000,
            });
            this.$router.go();
          }else if (res.data == 2) {
            this.$swal.fire({
              icon: "success",
              title: "상태 숨김",
              text: "선택하신 메뉴가 숨김처리 되었습니다.",
              showConfirmButton: false,
              timer: 3000,
            });
            this.$router.go();
          }
        })
        .catch((err) => {
          if (err) console.log(err);
        });
    },
    deleteProducts() {
      let deleteList = [];
      _.filter(this.selectedChkBox, (val, i) => {
        if (val) {
          let pdnums = this.cgData[i].pdnum;
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
            });
            this.$router.go();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleAll() {
      if (this.toggle) {
        for (let i = 0; i < this.cgData.length; i++) {
          this.selectedChkBox[i] = false;
        }
      } else {
        for (let i = 0; i < this.cgData.length; i++) {
          this.selectedChkBox[i] = true;
        }
      }
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
    notToggleAll() {},
    test() {
      console.log("this.selectedChkBox : ", this.selectedChkBox);
      console.log("");
    },
    logPdnum() {
      console.log("this.selected 테스트버튼 : ", this.selected);
      // console.log("cgData", this.cgData)
      // console.log("cgData.pdnum", this.cgData[0].pdnum)
    },
    //카테고리추가 숨김, 해제 체크
    statusCheck() {
      for (let i = 0; i < this.cgData.length; i++) {
        if (this.cgData[i].status == "0") {
          this.conditionkey[i] = "정상";
        } else if(this.cgData[i].status == "1"){
          this.conditionkey[i] = "숨김";
        }else{
          this.conditionkey[i] = "품절";
        }
      }
    },
    //권한체크
    // roleCheck() {
    //   console.log('유저권한', this.userrole)
    //   if (this.userrole != 0) {
    //     alert('해당 기능은 권한이 없습니다.')
    //     this.isUserRole = false
    //   } else {
    //     this.isUserRole = true
    //   }
    // },
    // print(pdnum) {
    //   let eachSelected = false;
    //   for (let i in this.selected) {
    //     if (this.selected[i] === pdnum) eachSelected = true;
    //   }
    //   if (this.allChecked || eachSelected) {
    //     this.selected.splice(pdnum)
    //   } else {
    //     this.selected.push(pdnum)
    //   }
    //   this.selected.sort(function (a, b) {
    //     if (a > b) return 1;
    //     if (a === b) return 0;
    //     if (a < b) return -1;
    //   })

    // console.log("this.selected 프린트 : ", this.selected, "/// pdnum : ", pdnum)

    // if(this.selected.has(pdnum)){
    //   this.selected.delete(pdnum)
    // }else{
    //   this.selected.add(pdnum)
    // }
    // console.log("after : ",this.selected.sort(function (a,b) {
    //   if(a > b) return 1;
    //   if(a === b) return 0;
    //   if(a < b) return -1;
    // }))
    // },
    nextPage() {
      this.pageNum += 1;
      this.getCategories(this.pageNum);
      this.selectedChkBox = [];
      this.toggle = false;
    },
    prevPage() {
      this.pageNum -= 1;
      console.log(this.pageNum);
      this.getCategories(this.pageNum);
      this.selectedChkBox = [];
      this.toggle = false;
    },
    async getCategories(curpage) {
      await axios
        .post("/apimenu/categories", {
          data: {
            shopcode: this.shopcode,
            curpage: curpage,
          },
        })
        .then((res) => {
          console.log("res.data: ", res.data);
          // 백엔드에서 날라오는 값 res.data=>articles[rows, ActualArticleLength]
          //게시물 총 갯수
          this.totalPage = res.data.length;
          //게시물 정보들
          this.cgData = res.data.rows;
          // this.totalPage = this.cgData.length
          this.statusCheck();
          console.log("cgData: ", this.cgData);

          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    menuCnt(obj) {
      _.forEach(obj, function (v, k, copy) {
        // console.log("Asd",V)
        // console.log(K)
        console.log("v", v);
        // console.log("k",k)
        // console.log("copy",copy)
        // _.reduce(v,function (acc,v,k) {
        //   console.log("v",v)
        //   // console.log("acc",acc)
        //   console.log("k",k)
        //   // console.log("i",i)
        //   let connectedMenuCnt=0
        // },0)
        _.find(v, function (obj) {
          // console.log("v",v)
          // console.log("k",k)
          // console.log("copy",copy)
          let cnt = obj.pdname;
          console.log("cnt", cnt);
        });
      });
    },
    cntPdname(obj, ctnum) {
      let myctnumgroup = _.partition(obj, function (value, index, copy) {
        return value.ctnum == ctnum;
      });
      // console.log(myctnumgroup)
    },
    async addCategory() {
      await axios
        .post("/apimenu/addcategory", {
          ctname: this.ctname,
          description: this.description,
          status: this.status,
          shopCode: this.shopcode,
        })
        .then((res) => {
          console.log(res.data);
          sweet.fire("카테고리 추가 완료");
          router.push("/menumanagement/categories");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  errorCaAdd() {
    if (this.ctname == "") {
      document.getElementById("caAddName").style.display = "block";
      return false;
    } else if (this.ctname != "") {
      document.getElementById("caAddName").style.display = "none";
      return false;
    }
  },
  errorCaDeAdd() {
    if (this.description == "") {
      document.getElementById("caAddDe").style.display = "block";
      return false;
    } else if (this.description != "") {
      document.getElementById("caAddDe").style.display = "none";
      return false;
    }
  },
  mounted() {
    // this.getList();
  },
  computed: {
    shopcode() {
      return store.getters["loginStore/getShopcode"];
    },
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

  },
  beforeMount() {
    this.getCategories(1);
    this.selectedChkBox.length = 10;
    // console.log(this.cgData)
  },
  updated() {
    // this.menuCnt(this.cgData)
    this.cntPdname(this.cgData, 2);
  },

};
</script>
<style>
@import "../../assets/css/MenuManagement/MenuManageCategories.css";
</style>
