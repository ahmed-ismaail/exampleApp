import GovernmentsTableModule from "../store/governments-table-module"
import TableComponent from "./components/TableComponent"

Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'government-management',
      path: '/government-management',
      component: require('./components/Tool'),
    },
  ])

  Vue.component("table-component",TableComponent)

  store.registerModule("nova-store/governments-table-module", GovernmentsTableModule)

})
