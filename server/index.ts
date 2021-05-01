require('dotenv').config()
// if you want to use nextRoutes
// const routes = require('@server/core/nextRoutes')

import express from 'express'
import next from 'next'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'

import apollo from '@server/core/apollo'
import { connectDB } from '@server/core/database'

const { PORT = '3000', NODE_ENV } = process.env
const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'

console.log('Running env; ' + NODE_ENV)

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
// if you want to use nextRoutes
// const handle = routes.getRequestHandler(nextApp)

nextApp.prepare().then(() => {
  const server = express()
  connectDB()

  //security
  server.use(
    helmet({
      contentSecurityPolicy: false,
    })
  )

  // Generate logs
  server.use(
    morgan(':method :url :status :res[content-length] - :response-time ms')
  )
  server.use(compression())

  //start apollo server
  apollo.applyMiddleware({ app: server })

  server.get('*', (req, res) => handle(req, res))
  // express().use(handler).listen(3000) //routes handle way
  //@ts-ignore
  server.listen(port, (err) => {
    if (err) throw err
  })
})
