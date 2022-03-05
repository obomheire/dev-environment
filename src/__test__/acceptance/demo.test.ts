import app from '../../app'
import supertest from 'supertest'

/*
import { MemoryServerClient } from '../../connection/mongoConnect'
const mem_server = new MemoryServerClient()
beforeAll(() => {
    mem_server.connectDb()
  })
  
  afterAll(async() => {
    mem_server.stopDb()
  })
*/

const request = supertest(app)

describe("/demo endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/demo")
        expect(response.status).toBe(200)
        // expect(response.body).toMatchObject({Message: 'Hello World'});
        expect(response.text).toBe("Hello World");
    })
})