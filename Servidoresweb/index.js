const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())
const Service = require('./src/service');

app.get('/', (req,res)=>{
    res.json({
        message: "Lista de Usuarios",
        body: Service.getUsers(),
    });

})
app.get('/:id', (req,res)=>{
    let {params : {id}} = req;
    let user = Service.getUser(id);

    res.json({
        message: `Usuario ${id}`,
        body: user,
    });

})
app.post('/', (req, res) => {
    let {body:newUser} = req;
    let user = Service.createUser(newUser);
    
    res.status(201).json({
        message: "Usuario Creado",
        body: user
    });
    });

app.put('/:id',(req, res)=>{
    ///Respuesta
})

app.put('/:id',(req, res)=>{
    ///Respuesta
})

app.listen(PORT, ()=>{
})
console.log(`Servidor escuchando en http://localhost:${PORT}`)