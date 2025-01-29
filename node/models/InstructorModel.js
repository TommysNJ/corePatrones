import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const InstructorModel = ModelFactory.createModel("instructores", {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: 'usuarios',
            key: 'email'
        }
    },
    nombre: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.DATE },
    profesion: { type: DataTypes.STRING },
    titulo_profesional: { type: DataTypes.STRING }
});

export default InstructorModel;