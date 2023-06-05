//routes/turmasRoute.js

const { Router } = require('express')
const TurmasController = require('../controllers/TurmasController.js')

const router = Router()
router
 .get('/turmas', TurmasController.pegaTodasAsTurmas)
 .get('/turmas/:id', TurmasController.pegaUmaTurma)
 .post('/turmas', TurmasController.criaTurma)
 .put('/turmas/:id', TurmasController.atualizaTurma)
 .delete('/turmas/:id', TurmasController.apagaTurma)

module.exports = router