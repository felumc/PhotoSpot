module.exports = app => {
    const rol = require("../controllers/rol.controller.js");

    var router = require("express").Router();
    // Crear un nuevo Rol 
    router.post("/rol", rol.create); //http://localhost:9595/administrador/rol

    // Recuperar todos los Roles
    router.get("/roles", rol.findAll); //http://localhost:9595/administrador/roles/

    // Encontrar Rol por id
    router.get("/rol/:id", rol.findOne); //http://localhost:9595/administrador/rol/[id]

    // Actualizar Rol por id
    router.put("/rol/:id", rol.update); //http://localhost:9595/administrador/rol/[id]

    // Eliminar un Rol por id
    router.delete("/rol/:id", rol.delete); //http://localhost:9595/administrador/rol/[id]

    // Eliminar todos los Roles de la base de datos
    router.delete("/rolesALL", rol.deleteAll); //http://localhost:9595/administrador/rolesALL/

    app.use('/administrador', router);
};
