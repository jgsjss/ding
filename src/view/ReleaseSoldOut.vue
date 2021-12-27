<template>
<!-- 품절해제 페이지, 라우팅 path = /releasesoldout -->
<div class="container" ></div>
  <div><p>품절해제</p>
      </div>
     <div><button>전체</button><button>메뉴</button><button>옵션목록</button> <span><button >품절해제</button></span></div>
      <div class="container1">
        <table class="table">
          <thead>
          <tr>
            <th><input type="checkbox" id="all-check"> </th>
            <th scope="col">구분</th>
            <th scope="col">메뉴/옵션목록</th>
            <th scope="col">가격</th>
            <th scope="col">메뉴상태</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in menuData" :key="i">
            <th scope="row"><input type="checkbox"></th>
            <td>{{ menuData[i].categories1 }}</td>
            <td>{{ menuData[i].name }}</td>
            <td>{{ menuData[i].price }} </td>
            <td>{{ menuData[i].isSoldOut +','+  menuData[i].isHidden }}</td>
          </tr>
          </tbody>
        </table>
         <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            pageNum: 0
        }
    },
    props:{
        menuData : Object,
        soldOutNum : Number,
        hiddenNum : Number,
    },
    methods: {
         nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
        }
    },
    //ajax로 서버에서 받아온 list정보를 페이징 처리하는 부분. 현재 받아올 서버 및 데이터가 없어서 주석처리함.
    // computed: {
    //     pageCount () {
    //   let listLeng = this.listArray.length,
    //       listSize = this.pageSize,
    //       page = Math.floor(listLeng / listSize);
    //   if (listLeng % listSize > 0) page += 1;

    //   /*
    //   아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
    //   이런식으로 if 문 없이 고칠 수도 있다!
    //   */
    //   return page;
    // },
    // paginatedData () {
    //   const start = this.pageNum * this.pageSize,
    //         end = start + this.pageSize;
    //   return this.listArray.slice(start, end);
    // }
    // }

}
</script>

<style>
.container1{
    width: 1000px;
    margin: 0 auto;
}

</style>