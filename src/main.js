import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import AppCustomers from "./components/AppCustomers";
import AppProducts from "./components/AppProducts";


Vue.config.productionTip = false


Vue.use(VueRouter);
const routes = [
  { path: "/", redirect: "/customers" },
  { path: "/customers", component: AppCustomers },
  { path: "/products", component: AppProducts } ]


  const router = new VueRouter({
    routes,
    linkExactActiveClass: "link-active",
    mode: "history"
  });


new Vue({
  render: h => h(App),
  router
}).$mount('#app')


