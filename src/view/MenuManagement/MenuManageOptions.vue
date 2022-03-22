<template>
  <!-- 메뉴관리 페이지의 옵션편집 게시판 페이지 -->
  <div class="menuoption_container">
    <form class="menuoption_wrap">
      <div class="menuoption_left">
        <label class="menuoption_label">
          <input
            type="checkbox"
            class="menuoption_check"
            id="all-check"
            v-model="optionAllChecked"
            @click="optionCheckedAll($event.target.checked)"
          />
          전체선택
        </label>
        <label class="menuoption_label">
          <button type="button" class="menuoption_check_btn">삭제</button>
        </label>
        <label class="menuoption_label">
          <button type="button" class="menuoption_check_btn">숨김</button>
        </label>
        <label class="menuoption_label">
          <button type="button" class="menuoption_check_btn">정상</button>
        </label>
      </div>
      <div class="menuoption_right">
        <input
          type="text"
          v-model="search"
          @input="handleSearchInput"
          @keydown.tab="KeydownTab"
          name="categoriSearch"
          placeholder="search"
          class="menuoption_search"
          autofocus
        />
        <!--옵션추가 오프캔버스 시작-->
        <button
          class="menuoption_menu_btn02"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuoption_offcanvars"
          aria-controls="menuoption_offcanvars"
        >
          +옵션추가
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="menuoption_offcanvars"
          aria-labelledby="menuoption_offcanvarsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title menuoption_off_title" id="menuoption_offcanvarsLabel">
              옵션추가(옵션정보 입력)
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <form>
                <div class="mb-3">
                  <label for="" class="">* 옵션명</label>
                  <input type="text" id="optNa" @change="errorOptionAdd" class="form-control" placeholder="예)맵기" />
                 <span class="error_next_box2" id="optionNa" style aria-live="assertive">필수 정보 입니다.</span>
                </div>
                <div class="mb-3">
                  <label for="" class="">* 옵션목록 및 추가가격</label>
                  <input type="text" id="optDe" class="form-control mb-2" placeholder="예)순한맛" />
                  <input type="text" id="optPr" @change="errorOptionDeAdd" class="form-control" placeholder="예)500원" 
                  @input="optionPrice" :value="opNumber" maxlength="10"/>
                   <span class="error_next_box2" id="optionPr"  style aria-live="assertive">필수 정보 입니다.</span>
                </div>
                <div class="mb-3">
                  <label class="menuoption_form_label">* 선택가능 옵션 수</label>
                  <span>옵션은 최대</span> 
                  <input type="number" min="0" max="5" class="m-2" @input="menuoptionNumber" :value="mNumber" />
                  <span>까지 선택 가능합니다.</span>
                  <p class="option_subtitle">- 등록한 옵션목록 개수만큼 설정 가능합니다.</p>                  


                </div>
                <div class="mb-3">
                  <label class="menuoption_form_label">* 필수여부</label>
                  <input type="radio" name="menuoption_input" class="menuoption_input" />필수(옵션을 선택해야 주문가능)<br />
                  <input type="radio" name="menuoption_input" class="menuoption_input" />선택(옵션을 선택하지 않아도 주문가능)
                </div>
                <button type="submit" class="menuoption_add_btn">옵션 추가 완료</button>
              </form>
            </div>
          </div>
        </div>
        <!--옵션추가 오프캔버스 끝-->
        <select class="menuoption_hidden_select">
          <option class="menuoption_hidden_btn">전체/정상/숨김</option>
          <option class="menuoption_hidden_btn" value="삭제">정상</option>
          <option class="menuoption_hidden_btn" value="숨김">숨김</option>
        </select>
      </div>
    </form>
    <div class="menuoption_list_wrap">
      <table class="menuoption_table">
        <thead class="menuoption_thead">
          <tr class="menuoption_title">
            <th scope="col"></th>
            <th scope="col" class="menuoption_col">옵션명</th>
            <th scope="col" class="menuoption_col">필수여부</th>
            <th scope="col" class="menuoption_col">옵션목록</th>
            <th scope="col" class="menuoption_col">연결된 메뉴</th>
            <th scope="col" class="menuoption_col">메뉴연결</th>            
            <th scope="col" class="menuoption_col">숨김</th>
            <th scope="col" class="menuoption_col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.OptionData" :key="i">
            <td scope="row" class="cate_check_box">
              <input 
                type="checkbox" 
                :id="'optionCheck_' + i.boardId" 
                :value="i" 
                v-model="optionSelected" 
                @click="optionPrint" />
            </td>
            <!-- <td>인덱스 {{a}}--{{i}}</td> -->
            <td class="menuoption_data">
              <router-link to="/menumanagement/menutoping">
              {{ $store.state.OptionData[i].optionname }}
              </router-link>
            </td>
            <td class="menuoption_data" title="마우스">{{ $store.state.OptionData[i].condition }}</td>
            <td class="menuoption_data">{{ $store.state.OptionData[i].optionlist }}</td>
            <td class="menuoption_data">{{ $store.state.OptionData[i].menulist }}</td>
            <td class="menuoption_data">
              <router-link to="/menumanagement/MenuConnecttwo">
                <button type="button" class="menuoption_connect_btn">메뉴연결</button>
              </router-link>
            </td>
            <td class="menuoption_data">
              <select class="menuoption_condition" @change="editCondition($event)" v-model="conditionKey">
                <option class="menuoption_condition_text" value="null">상태설정</option>
                <option class="menuoption_condition_text" value="숨김">숨김</option>
                <option class="menuoption_condition_text" value="품절">품절</option>
                <option class="menuoption_condition_text" value="정상상태">정상상태</option>
              </select>
              <!-- <button type="button" class="cate_connect_btn">숨김(OFF)
              </button> -->
            </td>
            <td class="menuoption_data_box">
              <button type="button" class="menuoption_icon"><i class="xi-close"></i></button
              ><!--삭제-->
              <button
                type="button"
                class="menuoption_icon"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuoption_"
                aria-controls="menuoption_"
              >
                <i class="xi-pen"></i></button
              ><!--수정-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--옵션수정 오프캔버스 시작-->
      <div class="offcanvas offcanvas-start" tabindex="-1" id="menuoption_" aria-labelledby="menuoption_Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="menuoption_Label">옵션정보 수정</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="menuoption_correction"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <form>
              <label for="" class="form-label menuoption_form_label">* 옵션명</label>
              <input type="text" class="menuoption_input form-control" />
              <div class="mb-3">
                <label class="menuoption_form_label">* 필수여부</label>
                <input type="radio" name="menuoption_input" class="menuoption_input" />필수(옵션을 선택해야 주문가능)<br />
                <input type="radio" name="menuoption_input" class="menuoption_input" />선택(옵션을 선택하지 않아도 주문가능)
              </div>
              <div class="mb-3">
                <label class="menuoption_form_label">* 선택가능 옵션 수</label>
                <span>옵션은 최대</span>
                <input type="number" min="0" max="5" maxlength="2" class="m-2" />
                <span>까지 선택 가능합니다.</span>
                <p class="option_subtitle">- 등록한 옵션목록 개수만큼 설정 가능합니다.</p>
              </div>
              <button type="submit" class="menuoption_add_btn">옵션정보 수정</button>
            </form>
          </div>
        </div>
      </div>
      <!--옵션수정 오프캔버스 끝-->
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
    <div class="menuoptions_add_wrap">
      <button type="submit" class="menuoptions_add_btn">저장</button>
    </div>
  </div>
</template>

<script>
// import { ref, computed } from 'vue';
// import axios from 'axios';
import _ from "lodash";
import axios from "axios";

export default {
  data() {
    return {
      conditionKey: null,
      pageNum: 0,
      active: false,
      searchList: "",
      search: "",
      optionAllChecked: false,
      opNumber: '',
      mNumber:'',
    };
  },
  methods: {
    print() {
      console.log(this.selected);
    },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    optionCheckedAll(checked) {
      this.optionSelected = checked;
    },
    selected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].optionSelected) {
          this.optionCheckedAll = false;
          return;
        } else {
          this.optionCheckedAll = true;
        }
      }
    },
    getSelected() {
      let boardIds = [];
      for (let i in this.cgData) {
        if (this.cgData[i].optionSelected) {
          boardIds.push(this.cgData[i].boardId);
        }
      }
    },
     errorOptionAdd() {
      if (this.optNa == "") {
        document.getElementById("optionNa").style.display = "block";
        return false;
      } else if (this.optNa != "") {
        document.getElementById("optionNa").style.display = "none";
        return false;
      }
      
    },
    errorOptionDeAdd() {
       if (this.optDe == "") {
        document.getElementById("optionPr").style.display = "block";
        return false;
      } else if (this.optDe != "") {
        document.getElementById("optionPr").style.display = "none";
        return false;
      }
    },

    optionPrice(event) {
      this.opNumber = event.target.value;
    },
     // getCategories() {
    //   axios
    //     .post("/apimenu/categories")
    //     .then((res) => {
    //       // console.log(res)
    //
    //       this.cgData = res.data;
    //       // console.log('cgData: ', this.cgData)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    menuCnt(obj) {
      _.forEach(obj, function (v, k, copy) {
        // console.log("Asd",V)
        // console.log(K)
        // console.log("v",v)
        // console.log("k",k)
        // console.log("copy",copy)
        _.reduce(
          v,
          function (accum, v) {
            console.log("v", v);
            console.log("accum", accum);
            // console.log("k",k)
            // console.log("i",i)
          },
          3
        );
      });
    },
    editCondition(event) {
      console.log(event.target.value);
    },
    menuoptionNumber(event) {
      this.mNumber = event.target.value;
    },

    //검색 고장난거같음 일단 보류
    // handleSearchInput(e) {
    //   this.search = e.target.value;
    //   if (this.search.length !== 0) {
    //     clearTimeout(this.debounce);
    //     this.debounce = setTimeout(() => {
    //       const filteredList = this.stageInfoList.filter((item) => item.title.includes(this.search));
    //       this.searchList = filteredList;
    //     }, 500);
    //   } else {
    //     clearTimeout(this.debounce);
    //     this.debounce = setTimeout(() => {
    //       this.searchList = [];
    //     }, 500);
    //   }
    // },
  },
  watch: {
    //옵션추가 금액
    opNumber(val) {
      const price = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if(price.exec(val)!==null)
      this.opNumber = val.replace(/[^0-9]/g,'');

      //...만 입력하게 될 경우 체크
      if(isNaN(parseFloat(val)))
      this.opNumber = '';
    },
    mNumber(val) {
      const option = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if(option.exec(val)!==null)
      this.mNumber = val.replace(/[^0-9]/g,'');

      //...만 입력하게 될 경우 체크
      if(isNaN(parseFloat(val)))
      this.mNumber = '';
    },   
  },

  // mounted() {
  //   this.getList();
  // },
  computed: {
    // pageCount () {
    //   return Math.ceil(this.$store.state.CategoryData.length / 10)
    // },
  },
  // beforeMount() {
  //   this.getCategories();
  //
  //   // console.log(this.cgData)
  // },
  setup() {},
  updated() {
    this.menuCnt(this.cgData);
  },
};
</script>

<style>
@import "../../assets/css/MenuManagement/MenuManageOptions.css";
</style>
