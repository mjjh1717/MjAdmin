import { createPageLoadingGuard } from './page-loading-guard'
import { createPageTitleGuard } from './page-title-guard'
import { createPermissionGuard } from './permission-guard'

export function setupRouterGuard(router) {
  createPageLoadingGuard(router)
  createPageTitleGuard(router)
  setTimeout(() => {
    createPermissionGuard(router)
  }, 200);
}
