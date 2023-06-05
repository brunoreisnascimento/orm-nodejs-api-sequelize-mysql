const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router()

router.get('/pessoas', PessoaController.getAllPearsons)
router.get('/pessoas/:id', PessoaController.getOnePearson)
router.post('/pessoas', PessoaController.createOnePearson)
router.put('/pessoas/:id', PessoaController.updatedOnePearson)
router.delete('/pessoas/:id', PessoaController.deleteOnePearson)
router.delete('/pessoas/:id', PessoaController.pegaUmaMatricula)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.autalizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)


module.exports = router
