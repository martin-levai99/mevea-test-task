import handlePageRequest from 'vike-node/express'
import express from 'express'

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist/client'))
}

app.all('/', handlePageRequest())

export default app