const { Router } = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = Router()

routes.post('/ongs', (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body

  const id = crypto.randomBytes(4).toString('HEX')

  return res.json({ id })
})

module.exports = routes;