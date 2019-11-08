import Routes, * as nextRoutes from 'next-routes'

// @ts-ignore
const routes = nextRoutes() as Routes
const Router = routes.Router
const Link = routes.Link

routes.add('confirm', '/user/confirm/:token')
routes.add({
  name: 'homeRoute',
  pattern: '/',
  page: 'homePage',
})

module.exports.routes = {
  routes,
  Router,
  Link,
}
