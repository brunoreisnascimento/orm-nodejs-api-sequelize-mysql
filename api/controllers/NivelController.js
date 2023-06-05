const database = require('../models')

class NivelController {

    static async pegaTodosOsNiveis(req, res){
        try {
            const getAll = await database.Niveis.findAll()
            return res.status(200).json(getAll)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req, res){
        try {
            const { id } = req.params
            const getNivel = await database.Niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(getNivel)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async criaNivel(req, res){
        const dataBody = req.body
        try {
            const newNivel = await database.Niveis.create(dataBody)
            return res.status(201).json(newNivel)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res){
        const dataBody = req.body
        const { id } = req.params
        try {
            await database.Niveis.update(dataBody, {where: {id: Number(id)}})
            const Updated = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(Updated)   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

    static async apagaNivel(req, res){
        const { id } = req.params
        try {
            await database.Niveis.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso!`})   
        } catch (error) {
           return res.status(500).json(error.message)
        }
    }

}

module.exports = NivelController