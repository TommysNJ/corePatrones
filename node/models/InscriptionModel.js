import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const InscriptionModel = ModelFactory.createModel("inscripciones", {
    id_inscripcion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email_alumno: {
        type: DataTypes.STRING,
        references: {
            model: 'alumnos',
            key: 'email'
        }
    },
    id_curso: {
        type: DataTypes.INTEGER,
        references: {
            model: 'curso',
            key: 'id_curso'
        }
    },
    fecha_inscripcion: { type: DataTypes.DATE }
});

export default InscriptionModel;