import { createRouter, createWebHistory } from 'vue-router'
import Main from '../view/Main.vue'
import MenuManagement from '../view/MenuManagement.vue'
import OrderManagement from '../view/OrderManagement.vue'
import StaffManagement from '../view/StaffManagement.vue'
import OperationManagement from '../view/OperationManagement.vue'
import DiscountCode from '../view/DiscountCode.vue'
import SalesManagement from '../view/SalesManagement.vue'


const routes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
