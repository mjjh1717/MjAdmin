import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes as routes } from './routes'
import { setupRouterGuard } from './guard'

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}