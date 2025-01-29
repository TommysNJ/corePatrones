import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const AlumnoModel = ModelFactory.createModel("alumnos", {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: 'usuarios',
            key: 'email'
        }
    },
    nombre: { type: DataTypes.STRING },
    genero: { type: DataTypes.STRING },
    edad: { type: DataTypes.INTEGER },
    nivel_educacion: { type: DataTypes.STRING }
});

export default AlumnoModel;