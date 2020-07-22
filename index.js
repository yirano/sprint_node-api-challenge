/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/

const express = require('express')
const cors = require('cors')
const actionRouter = require('./routers/action-router')
const projectRouter = require('./routers/project-router')
const { json } = require('express')

const server = express()
const PORT = process.env.PORT || 4000

server.use(json())
server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ errorMessage: "Something is wrong" })
})

server.listen(PORT, console.log(`Server is listening on http://localhost:${PORT}`))

