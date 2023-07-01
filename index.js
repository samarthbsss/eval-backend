const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mockeval2-samarthbsss.vercel.app/')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)
server

const PORT = 8000

// server.use(
//   cors({
//     origin: true,
//     credentials: true,
//     preflightContinue: false,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   })
// );
// server.options("*", cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mockeval2-samarthbsss.vercel.app/')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})