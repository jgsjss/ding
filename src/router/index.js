import { createRouter, createWebHistory } from 'vue-router'
import Main from '../view/Main.vue'
import MenuManagement from '../view/MenuManagement.vue'
import OrderManagement from '../view/OrderManagement.vue'
import StaffManagement from '../view/StaffManagement.vue'
import OperationManagement from '../view/OperationManagement.vue'
import DiscountCode from '../view/DiscountCode.vue'
import SalesManagement from '../view/SalesManagement.vue'
import Login from '../view/Login.vue'
import SignUp from '../view/SignUp.vue'
import ReleaseSoldOut from '../view/ReleaseSoldOut.vue'


const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path:'/signup',
    component: SignUp,
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/menumanagement',
    component: MenuManagement
  },
  {
    path: '/salesmanagement',
    component: SalesManagement
  },
  {
    path: '/ordermanagement',
    component: OrderManagement
  },
  {
    path: '/staffmanagement',
    component: StaffManagement
  },
  {
    path: '/operationmanagement',
    component: OperationManagement
  },
  {
    path: '/discountcode',
    component: DiscountCode
  },
  {
    path:'/releaseSoldout',
    component: ReleaseSoldOut,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
