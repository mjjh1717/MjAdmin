export default [
  {
    name: 'Page1',
    path: '/page1',
    component: () => import('@/views/test-page/page1/index.vue'),
    meta: {
      title: '动态路由1',
      role: ['admin'],
    },
  },
  {
    name: 'Page2',
    path: '/page2',
    component: () => import('@/views/test-page/page2/index.vue'),
    meta: {
      title: '动态路由2',
      role: ['editor'],
    },
  },
  {
    name: 'Page3',
    path: '/page3',
    component: () => import('@/views/test-page/page3/index.vue'),
    meta: {
      title: '动态路由3',
      role: ['admin'],
    },
  },
]