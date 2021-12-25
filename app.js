const express = require('express');

const app = express();

var usuarios = [
    {
        id: 1,
        name: 'Away'
    },
    {
        id: 2,
        name: "Deia"
    }
]

app.use(express.json());

app.get("/usuarios", (req, res)=> {
    res.send(usuarios)
})

app.post('/usuarios/adicionar', (req, res)=>{
    usuarios.push(req.body)
    res.send(usuarios)
})

app.put('/usuarios/alterar/:id', (req,res)=>{
    let usuario = usuarios.find(us => us.id ===req.params.id)
    usuario.name = req.body.name
    req.body;
})

app.delete('/usuarios/apagar/:id', (req, res)=>{
    let usuario = usuarios.find(us => us.id === req.params.id)
    for (let i = 0; i < usuarios.length; i++){
        if(usuarios[i]===usuario){
            usuarios.shift(usuario)
            break;
        }
    }
    req.body;
})

app.listen(3000, ()=>
    console.log("Tá rodando..."))