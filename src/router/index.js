import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Content from '../views/Content.vue'
import Contents from '../views/Contents.vue'
import Detail from '../views/Detail.vue'
import Lists from '../views/Lists.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Submit from '../views/Submit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      title:'HI!'
    },
    children:[
        {
          path:'',
          name:'Content',
          alias:'/:id',
          component:Content
        },{
          path:'f/:id',
          name:'Contents',
          component:Contents
        },{
          path:'l/lists',
          name:'Lists',
          component:Lists
        }, {
          path:'p/:id',
          name:'Detail',
          component:Detail
        }, {
          path:'/s/submit',
          name:'Submit',
          component:Submit,
          meta:{
              auth:true
          }
        }
    ]
  },{
    path:'/r/register',
    name:'Register',
    component:Register
  },{
    path:'/r/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=> {
  if(to.matched.some(item=> item.meta.auth)){
      if(localStorage.getItem('name')){
          next()
      }else{
          alert('请登录')
          next({
              path:'/r/login',
              query:{
                  returnUrl:to.name
              }
          })
      }
  }else{
      next()
  }
})
export default router
