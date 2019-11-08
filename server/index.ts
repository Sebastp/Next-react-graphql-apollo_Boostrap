import express from 'express'
import next from 'next'
import helmet from 'helmet'

// import { routes } from './core/nextRoutes'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
// const handle = routes.getRequestHandler(app)

nextApp.prepare().then(() => {
  const server = express()
  server.use(helmet())

  server.get('*', (req, res) => handle(req, res))
  // express().use(handler).listen(3000) //routes handle way
  server.listen(port, err => {
    if (err) throw err
  })
})
