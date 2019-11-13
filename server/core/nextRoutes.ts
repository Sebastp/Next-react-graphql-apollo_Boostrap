const routes = require('next-routes')

module.exports = routes().add({
  name: 'userRoute',
  pattern: '/user/:username',
  page: 'userPage',
})
