import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _113dafaf = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _480d028c = () => interopDefault(import('..\\pages\\calendar.vue' /* webpackChunkName: "pages_calendar" */))
const _4238f694 = () => interopDefault(import('..\\pages\\todo.vue' /* webpackChunkName: "pages_todo" */))
const _30f58a74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _113dafaf,
    name: "about"
  }, {
    path: "/calendar",
    component: _480d028c,
    name: "calendar"
  }, {
    path: "/todo",
    component: _4238f694,
    name: "todo"
  }, {
    path: "/",
    component: _30f58a74,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
