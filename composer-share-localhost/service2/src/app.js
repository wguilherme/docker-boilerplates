import http from 'http'
import url from 'url'
import fetch from "node-fetch";

const API_BASE_URL  = process.env.NODE_ENV === 'DOCKER' ? 'http://service1:4040' : 'http://localhost:4040'

export const app = http.createServer( async (req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  if (pathname === '/') {
    try{
      const response = await fetch(API_BASE_URL)
      console.log('response', response.statusText)
      res.end(response.statusText)
    }catch(error){
      console.log(error.message)
      res.end()
      // res.send(error)
    }
  }
})

