import DashboardView from '@/views/admin/DashboardView.vue'

// posts routes
import NewsView from '@/views/admin/news/NewsView.vue'
import CreateNewsView from '@/views/admin/news/CreateNewsView.vue'
import EditNewsView from '@/views/admin/news/EditNewsView.vue'

// categories routes
import CategoryView from '@/views/admin/categories/CategoryView.vue'
import CreateCategoryView from '@/views/admin/categories/CreateCategoryView.vue'

const newsResource = [
  {
    path: '/admin/news',
    name: 'admin-news',
    component: NewsView
  },
  {
    path: '/admin/news/create',
    name: 'admin-news-create',
    component: CreateNewsView
  },
  {
    path: '/admin/news/:id/edit',
    name: 'admin-news-edit',
    component: EditNewsView
  }
]

const categoryResource = [
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: CategoryView
  },
  {
    path: '/admin/categories/create',
    name: 'admin-categories-create',
    component: CreateCategoryView
  }
]

export default [
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: DashboardView
  },
  ...newsResource,
  ...categoryResource
]