const express = require('express')
const app = express()
const port = 3000



//SERVIDOR
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))


app.get('/', (req, res) =>res.send('Servidor rodando ok'))