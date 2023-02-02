var router = require('express').Router()
  var alumnos = require('./alumnos')

  router.use('/alumnos', alumnos)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router