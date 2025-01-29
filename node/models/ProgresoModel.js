import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const ProgresoModel = ModelFactory.createModel("progresos", {
    id_detalle: {
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
    fecha_actualizacion: { type: DataTypes.DATE },
    descripcion: { type: DataTypes.TEXT }
});

export default ProgresoModel;