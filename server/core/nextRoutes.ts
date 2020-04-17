const routes = require('next-routes')

const routerObj = new routes().add('homeRoute', '/', 'index').add({
  name: 'userRoute',
  pattern: '/user/:username',
  page: 'userPage',
})

export const { Link } = routerObj
export default routerObj
