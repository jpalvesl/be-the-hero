const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        value: Joi.number(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown()
  }),

  index: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    })
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    })
  })
}