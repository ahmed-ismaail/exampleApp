import StoreModule from "../store/store-module"

Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'government-management',
      path: '/government-management',
      component: require('./components/Tool'),
    },
  ])

  store.registerModule("nova-store/module", StoreModule)

})
