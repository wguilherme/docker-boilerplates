import http from 'http'
import url from 'url'

import mongoose from 'mongoose'
const { Schema, model } = mongoose
const productSchema = new Schema({name: String, price: Number})
const Product = model('Product', productSchema)


export const app = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true)
  if (pathname === '/') {res.end('Working')}

  // if (pathname === '/api/product' && req.method === 'POST') {
  //   const product = new Product({
  //     name: 'Product test',
  //     price: 100
  //   })
  //   product.save()
  // }
})

export const product = 'smartphone'

