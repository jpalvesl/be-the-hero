const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new NGO', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Test Ong",
        email: "jpalvesl101@gmail.com",
        whatsapp: "+5583986042067",
        city: "Campina Grande",
        uf: "PB"
      })
      
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(36)
  })

  it(`should get an empty array of NGO's`, async () => {
    const response = await request(app)
      .get('/ongs')
    
    expect(response.body).toEqual(expect.arrayContaining([]));
  })

  it(`should add an NGO and search for it in the database`, async () => {
    await request(app)
      .post('/ongs')
      .send({
        name: "Test Ong",
        email: "jpalvesl101@gmail.com",
        whatsapp: "+5583986042067",
        city: "Campina Grande",
        uf: "PB"
      })
    
    const response = await request(app)
      .get('/ongs')
      
    expect(response.body).toHaveLength(1)
    expect(response.body[0].name).toEqual('Test Ong')
  })
})