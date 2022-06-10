// supertest
import supertest from 'supertest'
import {app} from './app'
const request = supertest(app)
import mongoose from 'mongoose'
import jest from 'jest'

const {connect, disconnect} = mongoose

beforeAll(async () => {
  jest.setTimeout = 30000
  await connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .then((params) => console.log('MongoDB is connected', params))
})

afterAll(async () => { await disconnect()
  // .then(() => console.log('MongoDB is disconnected')) 
})

describe('test routes', ()=>{


it('check application health', async()=>{
  const response = await request.get('/')
  expect(response.status).toBe(200)
  // expect(true).toBe(true)
})

it('should add a product', async()=>{
  const addProduct = await request.post('/api/product')
  expect(addProduct.status).toBe(200)
})

it('should list products', async()=>{
  const listProducts = await request.get('/api/product')
  expect(listProducts.status).toBe(200)
})


  
})
