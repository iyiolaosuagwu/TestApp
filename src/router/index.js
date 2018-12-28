import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import questions from '@/components/questions';
import successful from '@/components/successful';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/successful',
      name: 'successful',
      component: successful
    }
  ],
  mode: 'history'
});
