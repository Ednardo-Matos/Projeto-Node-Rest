const customExpress = require('./config/customExpress')
const port = 3000 // atribuir uma porta ao servidor
const conexao = require('./infraestrutura/conexao.js')
const Tabelas = require('./infraestrutura/tabelas')


conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso')

        Tabelas.init(conexao)

        const app = customExpress()

        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
    }
})

