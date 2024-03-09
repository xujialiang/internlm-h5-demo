import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../views/MainPage.vue'),
      redirect: { name: '培训' },
      children: [
        {
          path: '/online-training',
          name: '培训',
          component: () => import('../views/tabs/OnlineTraining.vue')
        },{
          path: '/marketing',
          name: '营销',
          component: () => import('../views/tabs/SmartMarketing.vue')
        },{
          path: '/smart-analyze',
          name: '智能分析',
          component: () => import('../views/tabs/SmartAnalyze.vue')
        },{
          path: '/mine',
          name: '我的',
          component: () => import('../views/tabs/MinePage.vue')
        }
      ]
    },{
      path: '/ai-teachers',
      name: 'AI导师',
      component: () => import('../views/pages/Chat/ChatGPT.vue')
    },{
      path: '/online-practice',
      name: '实战演练',
      component: () => import('../views/pages/OnlinePractice.vue')
    },
    {
      path: '/question-bank',
      name: '考试题库',
      component: () => import('../views/pages/QuestionBank.vue')
    },
    {
      path: '/marketing-helper',
      name: 'AIGC营销助手',
      component: () => import('../views/pages/Marketing/MarketingHeper.vue')
    },{
      path: '/marketing-helper-result',
      name: 'AI推文',
      component: () => import('../views/pages/Marketing/MarketingHelper-Result.vue')
    }


   
  ]
})

export default router
