Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'government-management',
      path: '/government-management',
      component: require('./components/Tool'),
    },
  ])
})
