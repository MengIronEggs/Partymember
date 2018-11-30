// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import vueresource from 'vue-resource'

import "./common/Qing"
// /路由拦截器， 对非法请求重定向
// router.beforeEach((to, from, next) => {
//     if (to.name != 'error' && navigator.userAgent.indexOf("Qing") < 0 && to.name != 'companylist' && to.name != 'companylistdetials') {
//         next('/error');
//     } else {
//         next();
//     }
// });

// // //


import { AlertPlugin, ConfirmPlugin, Toast, ToastPlugin, LoadingPlugin, Cell, Group, Picker, XButton, PopupPicker, Selector } from 'vux'
import './common/rem.js';
import './common/font.css';
Vue.use(vueresource)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.component("Picker", Picker);
Vue.component("Cell", Cell);
Vue.component("Group", Group);
Vue.component("XButton", XButton);
Vue.component("PopupPicker", PopupPicker);
Vue.component("Selector", Selector);
FastClick.attach(document.body)

import Mypublic from "./common/public";
Vue.use(new Mypublic())


Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')