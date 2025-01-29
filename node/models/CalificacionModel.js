import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const CalificacionModel = ModelFactory.createModel("calificaciones", {
    id_calificacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_inscripcion: {
        type: DataTypes.INTEGER,
        references: {
            model: 'inscripciones',
            key: 'id_inscripcion'
        }
    },
    puntuacion: { type: DataTypes.DECIMAL(5, 2) },
    descripcion: { type: DataTypes.TEXT }
});

export default CalificacionModel;