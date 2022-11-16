module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        nombre: {
            type: Sequelize.STRING
        },
        apepat: {
            type: Sequelize.STRING
        },
        apemat: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        contrasenia: {
            type: Sequelize.STRING
        },
        rolId: {
            type: Sequelize.INTEGER
        }
    });

    return Usuario;
};