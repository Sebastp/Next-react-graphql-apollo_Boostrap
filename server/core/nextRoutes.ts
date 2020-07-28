const routes = require('next-routes')

const routerObj = new routes().add('homeRoute', '/', 'index')

export const { Link } = routerObj
export default routerObj
