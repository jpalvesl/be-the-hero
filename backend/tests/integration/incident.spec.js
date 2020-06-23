const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create NGO and incident', async () => {
    const ongResponse = await request(app)
      .post('/ongs')
      .send({
        name: "Nome de teste",
        email: "email@email.com",
        whatsapp: "+5583933042067",
        city: "Campina Grande",
        uf: "PB"
      })

    const incidentResponse = await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

      expect(ongResponse.body).toHaveProperty('id')
      expect(incidentResponse.body).toHaveProperty('id')
  })

  it('Get the five first NGO incidents', async () => {
    const ongResponse = await request(app)
    .post('/ongs')
    .send({
      name: "Nome de teste",
      email: "email@email.com",
      whatsapp: "+5583933042067",
      city: "Campina Grande",
      uf: "PB"
    })

    await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

      await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

      await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

      await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

      await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

      await request(app)
      .post('/incidents')
      .send({
        "title": "Titulo de teste",
        "description": "Descrição de teste",
        "value": 53 
      })
      .set('Authorization', ongResponse.body.id)

    const response = await request(app)
      .get('/incidents')

    expect(response.body.length).toEqual(5)
  })
})