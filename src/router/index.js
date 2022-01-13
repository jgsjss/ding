import { createRouter, createWebHistory } from 'vue-router';
// import Total from '../view/**'
import Main from '../view/Main.vue';
import MenuManagement from '../view/MenuManagement.vue';
import OrderManagement from '../view/OrderManagement.vue';
import NewOrderListOne from '../view/NewOrderListOne.vue';
import NewOrderListTwo from '../view/NewOrderListTwo.vue';
import PreparingListOne from '../view/PreparingListOne.vue';
import PreparingListTwo from '../view/PreparingListTwo.vue';
import CompletedOrder from '../view/CompletedOrder.vue';
import OrderList from '../view/OrderList.vue';

import StaffManagement from '../view/StaffManagement.vue';
import OperationManagement from '../view/OperationManagement.vue';
import DiscountCode from '../view/DiscountCode.vue';
import SalesManagement from '../view/SalesManagement.vue';
import Login from '../view/Login.vue';
import SignUpOne from '../view/SignUpOne.vue';
import SignUp2two from '../view/SignUpTwo.vue';
import SignUpThree from '../view/SignUpThree.vue';
import SignUpFour from '../view/SignUpFour.vue';
import ReleaseSoldOut from '../view/ReleaseSoldOut.vue';
import MenuManageCategories from '../view/MenuManageCategories.vue';
import MenuManageMenus from '../view/MenuManageMenus.vue';
import MenuManageOptions from '../view/MenuManageOptions.vue';
import test1 from '../view/test1';
import PageNotFound from '../view/page404';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
  {
    path: '/',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signUpOne',
    component: SignUpOne,
  },
  {
    path: '/signuptwo',
    component: SignUp2two,
    name: 'signup2',
  },
  {
    path: '/signupthree',
    component: SignUpThree,
    name: 'signup3',
  },
  {
    path: '/signupfour',
    component: SignUpFour,
    name: 'signup4',
  },
  {
    path: '/main',
    component: Main,
  },
  {
    path: '/menumanagement',
    component: MenuManagement,
    //중첩되는 자식 라우트 경로
    children: [
      {
        path: '/menumanagement/categories',
        component: MenuManageCategories,
      },
      {
        path: '/menumanagement/menus',
        component: MenuManageMenus,
      },
      {
        path: '/menumanagement/options',
        component: MenuManageOptions,
      },
    ],
  },
  {
    path: '/salesmanagement',
    component: SalesManagement,
  },
  {
    path: '/ordermanagement',
    component: OrderManagement,
    //중첩되는 자식 라우트 경로
    children: [
      {
        path: '/ordermanagement/neworderlistone',
        component: NewOrderListOne,
      },
      {
        path: '/ordermanagement/neworderlisttwo',
        component: NewOrderListTwo,
      },
      {
        path: '/ordermanagement/preparinglistone',
        component: PreparingListOne,
      },
      {
        path: '/ordermanagement/preparinglisttwo',
        component: PreparingListTwo,
      },
      {
        path: '/ordermanagement/completedorder',
        component: CompletedOrder,
      },
      {
        path: '/ordermanagement/orderlist',
        component: OrderList,
      },

      // {
      //   path: '/ordermanagement/4',
      //   component: OrderManagement4
      // },
    ],
  },
  {
    path: '/staffmanagement',
    component: StaffManagement,
  },
  {
    path: '/operationmanagement',
    component: OperationManagement,
  },
  {
    path: '/discountcode',
    component: DiscountCode,
  },
  {
    path: '/releaseSoldout',
    component: ReleaseSoldOut,
  },
  {
    path: '/test1',
    component: test1,
  },
];
// routes.beforeEach(function (to, from, next) {
//   if(localStorage.guest) { // 그냥 로그인 된 상태인지 아닌지 여부
//     next('/');
//   }	else {
//     next(); //페이지 전환 이루어 짐.
//   }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
