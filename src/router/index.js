import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VehicleManagement from '../views/VehicleManagement.vue'
import CustomerManagement from '../views/CustomerManagement.vue'
import CreateVehicle from '../views/CreateVehicle.vue'
import AddCustomer from '../views/AddCustomer.vue'
import TphpUpload from '../views/TphpUpload.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/vehicles/new', name: 'CreateVehicle', component: CreateVehicle },
    { path: '/vehicles', name: 'VehicleManagement', component: VehicleManagement },
    { path: '/customers', name: 'CustomerManagement', component: CustomerManagement },
    { path: '/customer/edit/:id', name: 'EditCustomer', component: () => import('../views/EditCustomer.vue') },
    { path: '/tphpUpload', name: 'TphpUpload', component: TphpUpload },
    { path: '/customers/add', name: 'AddCustomer', component: AddCustomer }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
