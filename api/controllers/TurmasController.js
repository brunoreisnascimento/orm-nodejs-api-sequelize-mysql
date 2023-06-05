const database = require('../models')

class TurmasController {

    static async pegaTodasAsTurmas(req, res){
        try {
            const getTurmas = await database.Turmas.findAll()
            return res.status(200).json(getTurmas)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req, res){
        try {
            const { id } = req.params            
            const getTur = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(getTur)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res){
        const dataBody = req.body
        try {
            const newTurma= await database.Turmas.create(dataBody)
            return res.status(201).json(newTurma)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res){
        const dataBody = req.body
        const { id } = req.params
        try {
            await database.Pessoas.update(dataBody, {where: {id: Number(id)}})
            const PersonUpdated = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(PersonUpdated)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async apagaTurma(req, res){
        const { id } = req.params
        try {
            await database.Turmas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso!`})   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmasController