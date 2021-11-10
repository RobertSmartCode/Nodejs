const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers: () => data,
    getUser: (id) =>{
        let identificador = Number(id)
        let user = data.filter((person)=>person.id === identificador)[0];
        return user

    },
    updateUser: (id, newUpdater) => {
        let identificador = Number(id);
        var usuarioActualizado = data.find((usuarioActualizado) => usuarioActualizado.id === identificador);
        usuarioActualizado.first_name = newUpdater.first_name;
        usuarioActualizado.last_name = newUpdater.last_name;
        usuarioActualizado.email = newUpdater.email;
        return newUpdater;
      },
     
      validatos: (user) => {
        const schema = joi.object({
          first_name: joi.string().min(6).required(),
          last_name: joi.string().min(6).required(),
          email: joi.string().min(6).required().email(),
        });
     
        const validation = schema.validate(user);
        return validation;
      },
    
    deleteUser: (id) => {
        let identificador  = Number(id);
        console.log(identificador);
        let user = data.filter( (person) => person.id === identificador)[0];
        if (user == undefined) {
            return ("El usuario que intenta eliminar no existe");
        } else {
            let userAEliminar = data.findIndex((userToDelete) => userToDelete.id === identificador);
            let datosEliminados = data.find((userToDelete) => userToDelete.id === identificador);
            data.splice(userAEliminar, 1);
            return (`Eliminados los datos del usuario ${datosEliminados.first_name} con ID ${datosEliminados.id}`);
        }
    },

    createUser: (dataUser)=>{
        let newUser = {
            id: data.length + 1,
            ...dataUser,
        }
        data.push(newUser);
        return newUser;
    }
};