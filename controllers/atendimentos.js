const Atendimento = require('../model/atendimentos')
module.exports = app => {
   
    app.get('/atendimentos', (req, res) => res.send('Servidor rodando ok'))


    app.post('/atendimentos', (req, res) => {
     const atendimento = req.body

     Atendimento.adiciona(atendimento)
        res.send("Solicitação post ok")
    })

}