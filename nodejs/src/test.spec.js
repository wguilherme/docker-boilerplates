// supertest
import supertest from 'supertest'
import {app} from './app'
const request = supertest(app)

// beforeAll(()=>{
// console.log('beforeAll')
// })

// afterAll(()=>{
//   console.log('afterAll')
// })


it('check application health', async()=>{
  const response = await request.get('/')
  expect(response.status).toBe(200)
  expect(true).toBe(true)
})

// it('test mongoose and mongodb-memory-server connection', () =>{
//   const response = await request.post('/api/product')
//   expect(b.status).toBe(200)
// })