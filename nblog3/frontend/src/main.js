import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App).use(store).use(router)

app.config.globalProperties.$http = (url, opts) => fetch(url, opts)
app.config.globalProperties.$httpPosts = process.env.NODE_ENV === 'production' ? '/blog/api/posts/' : 'http://127.0.0.1:8000/blog/api/posts/'
app.config.globalProperties.$httpCategories = process.env.NODE_ENV === 'production' ? '/blog/api/categories' : 'http://127.0.0.1:8000/blog/api/categories/'

app.mount('#app')
