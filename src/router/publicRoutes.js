import HomeView from '@/views/HomeView.vue'
import PrediksiView from '@/views/PrediksiView.vue'
import BeritaView from '@/views/BeritaView.vue'
import BeritaDetail from '@/views/BeritaDetailView.vue'
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue'

export default [
  {
    path: '/',
    name: 'beranda',
    component: HomeView
  },
  {
    path: '/prediksi',
    name: 'prediksi',
    component: PrediksiView
  },
  {
    path: '/berita',
    name: 'berita',
    component: BeritaView
  },
  {
    path: '/berita/:id',
    name: 'berita-detail',
    component: BeritaDetail
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
]