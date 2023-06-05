const database = require('../models')

class PessoaController {

    static async getAllPearsons(req, res){
        try {
            const getAllPearson = await database.Pessoas.findAll()
            return res.status(200).json(getAllPearson)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async getOnePearson(req, res){
        try {
            const { id } = req.params
            const getPearson = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(getPearson)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async createOnePearson(req, res){
        const dataBody = req.body
        try {
            const newPerson = await database.Pessoas.create(dataBody)
            return res.status(201).json(newPerson)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async updatedOnePearson(req, res){
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

    static async deleteOnePearson(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso!`})   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }


    static async criaMatricula(req, res){
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudanteId: Number(estudanteId) }

        try {
            const newMatricula = await database.Matriculas.create(novaMatricula)
            return res.status(201).json(newMatricula)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async autalizaMatricula(req, res){
        const dataBody = req.body
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.update(dataBody, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({
                    where: {id: Number(matriculaId)}
                })
            return res.status(200).json(matriculaAtualizada)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    
    static async deletarMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({
                where: { id: Number(matriculaId)}
            })
            return res.status(200).json({mensagem: `id ${matriculaId} deletado com sucesso!`})   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }


}

module.exports = PessoaController