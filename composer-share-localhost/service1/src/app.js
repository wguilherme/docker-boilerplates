import http from 'http'
import url from 'url'

export const app = http.createServer( async (req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  if (pathname === '/') {res.end('ok')}
})

