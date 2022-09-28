import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView'
import ImageCustomPage from '../views/ImageCustomPage'
import VideoView from '../views/VideoView'
import LoginView from '../views/LoginView'
import RobertView from '../views/RobertView'

const routes = [{
    path: '/', component: IndexView, name: 'IndexPage',
    meta: {title: 'Семен Скрепецкий Картины', description: 'Скрепоносный Бузотер, Картины Семен Скрепецкий, Роберт Бурдай'}
  },{
    path: '/:image_title/:image_id/:skrepeckiy', name: 'CustomImagePage', 
    component: ImageCustomPage,
  },{
    path: '/:id/Semen-Skrepecki-Video', component: VideoView, name: 'VideoPage',
    meta: {title: '😋😋😋 Семен Скрепецкий Стримы 💥💥💥', description: 'Последние Видео Семен Скрепецкий, Скрепоносный Бузотер, Картины Семен Скрепецкий, Роберт Бурдай'}
  },{
    path: '/:id/Semen-Skrepecki-Registration-Login', component: LoginView, name: 'LoginPage',
    meta: {title: '🍾😮😮😮🍾 Логин Семен Скрепецкий', description: 'Семен Скрепецкий, Скрепоносный Бузотер, Картины Семен Скрепецкий, Роберт Бурдай'}
  },{
    path: '/:id/Semen-Skrepecki-Robert-Burdai', component: RobertView, name: 'BurdaiPage',
    meta: {title: '🐉🐲 Роберт Бурдай 🌵🎄', description: 'Семен Скрепецкий, Скрепоносный Бузотер, Картины Семен Скрепецкий, Роберт Бурдай'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  let title       = 'Семен Скрепецкий'
  let description = 'Скрепоносный Бузотер, Картины Семен Скрепецкий, Роберт Бурдай'
  switch(to.name){
    case 'CustomImagePage':
    // title       = SKREP_STORAGE[to.params.image_id].title
    // description = SKREP_STORAGE[to.params.image_id].title + ' ' + SKREP_STORAGE[to.params.image_id].description
      break
    default:
      title       = to.meta.title
      description = to.meta.description  
  }
  document.title = title
  document.getElementsByTagName('meta')['description'].content = title + ' ' + description
})

export default router

