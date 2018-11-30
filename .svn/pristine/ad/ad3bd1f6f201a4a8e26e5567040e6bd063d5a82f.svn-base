import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const QuestionList = resolve => require(['../components/QuestionList.vue'], resolve);
const index = resolve => require(['../views/index.vue'], resolve);
const Start = resolve => require(['../views/start.vue'], resolve);
// const Msg = resolve => require(['../views/msg.vue'], resolve);
const End = resolve => require(['../views/end.vue'], resolve);
const error = resolve => require(['../components/error.vue'], resolve);
// const explain = resolve => require(['../views/explain.vue'], resolve);
const companylist = resolve => require(['../views/companyList.vue'], resolve);
const companylistdetials = resolve => require(['../views/companyListDetials.vue'], resolve);

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        }, {
            path: '/start',
            name: 'Start',
            component: Start
        },
        {
            path: '/question',
            name: 'QuestionList',
            component: QuestionList
        }, {
            path: '/end',
            name: 'end',
            component: End
        }, {
            path: '/error',
            name: 'error',
            component: error
        },  {
            path: '/companylist',
            name: 'companylist',
            component: companylist
        }, {
            path: '/companylistdetials',
            name: 'companylistdetials',
            component: companylistdetials
        },

    ]
})