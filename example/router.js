import Router from "vue-router";

import Design from './design'
import BuildFill from './build/fill'
import BuildConfig from './build/config'
import BuildEdit from './build/edit'
import BuildValidator from './build/validator'
import BuildPreview from './build/preview'
import BuildGetdata from './build/getdata'
import BuildEvent from './build/event'

// 主入口路由(需嵌套上左右整体布局) 
const mainRoutes = [
  {
    path: "/",
    component: Design,
    name: "design"
  },
  {
    path: "/build/fill",
    component: BuildFill,
    name: "build_fill"
  },
  {
    path: "/build/edit",
    component: BuildEdit,
    name: "build_edit"
  },
  {
    path: "/build/config",
    component: BuildConfig,
    name: "build_config"
  },
  {
    path: "/build/getdata",
    component: BuildGetdata,
    name: "build_getdata"
  },
  {
    path: "/build/validator",
    component: BuildValidator,
    name: "build_validator"
  },
  {
    path: "/build/preview",
    component: BuildPreview,
    name: "build_preview"
  },
   {
    path: "/build/event",
    component: BuildEvent,
    name: "build_event"
  }

]


const router = new Router({
  mode: "history",
  base: '/',
  scrollBehavior: () => ({ y: 0 }), 
  routes: mainRoutes
})


export default router
