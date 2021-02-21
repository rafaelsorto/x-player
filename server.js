const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Port from the process.env.PORT
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      // eslint-disable-next-line
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    // eslint-disable-next-line
    console.error(ex.stack)
    process.exit(1)
  })
