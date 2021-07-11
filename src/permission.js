import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from './store'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if(to.path === '/login' || to.path === '/home') {
    next()
  } else {
    if(!store.state.isLogin) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
