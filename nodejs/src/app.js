import http from 'http'
import url from 'url'

import mongoose from 'mongoose'
const { Schema, model } = mongoose
const productSchema = new Schema({name: String, price: Number})
const Product = model('Product', productSchema)


export const app = http.createServer( async (req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  if (pathname === '/') {res.end('Working')}

  if (pathname === '/api/product' && req.method === 'POST') {
    await Product.create({name: 'any',price: 1})
    res.end('Product added')
  }

  if (pathname === '/api/product' && req.method === 'GET') {
    try{

      const products = await Product.find()
      res.end(JSON.stringify(products))
    }catch (error){
      res.end(error)
    }
  }
})

export const product = 'smartphone'

