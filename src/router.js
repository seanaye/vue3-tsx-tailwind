import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'
import { Home } from './pages/Home'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
//const pages = import.meta.glob('./pages/*.tsx')

//const routes = Object.keys(pages).map((path) => {
//  const name = path.match(/\.\/pages(.*)\.tsx$/)[1].toLowerCase()
//  console.log({ name })
//  return {
//    path: name === '/home' ? '/' : name,
//    component: pages[path] // () => import('./pages/*.vue')
//  }
//})
//


const routes = [
  { component: Home, path: '/' }
]

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
