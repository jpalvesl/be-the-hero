const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('Get all the incidents from a specify NGO', async () => {
    const ongResponse1 = await request(app)
      .post('/ongs')
      .send({
        name: "Nome de teste",
        email: "email@email.com",
        whatsapp: "+5583933042067",
        city: "Campina Grande",
        uf: "PB"
      })

      const ongResponse2 = await request(app)
      .post('/ongs')
      .send({
        name: "Nome de teste",
        email: "email@email.com",
        whatsapp: "+5583933042067",
        city: "Campina Grande",
        uf: "PB"
      })

      const ongId1 = ongResponse1 
      const ongId2 = ongResponse2

      await request(app)
        .post('/incidents')
        .send({
          "title": "Titulo de teste",
          "description": "Descrição de teste",
          "value": 53 
        })
        .set('Authorization', ongId1)

      await request(app)
        .post('/incidents')
        .send({
          "title": "Titulo de teste",
          "description": "Descrição de teste",
          "value": 53 
        })
        .set('Authorization', ongId1)

      await request(app)
        .post('/incidents')
        .send({
          "title": "Titulo de teste",
          "description": "Descrição de teste",
          "value": 53 
        })
        .set('Authorization', ongId2)

        const profileResponse = await request(app)
          .get('/profile')
          .set('Authorization', ongId1)

        expect(profileResponse.body.length).toEqual(2)
  })
})