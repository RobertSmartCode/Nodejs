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
    app.put("/:id", (req, res) => {
        const user = Service.getUser(req.params.id);
        let {params: { id }} = req;
        let { body: newUpdater } = req;
        if (user.length == 0) {
          res.status(404).send(`Usuario con id ${req.params.id} no existe`);
        } else {
          const result = Service.validatos(req.body);
          if (result.error) {
            res.status(400).send(result.error.details[0].message);
          } else {
            res.send(Service.updateUser(id, newUpdater));
          }
        }
      });

//eliminación de un usuario
app.delete('/:id', (req, res) => {
    const user = Service.getUser(req.params.id);
    let { params : {id} } = req;
    
    res.send(Service.deleteUser(id));
} );

app.listen(PORT, ()=>{
})
console.log(`Servidor escuchando en http://localhost:${PORT}`)