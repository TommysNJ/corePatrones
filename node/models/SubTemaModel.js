import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const SubTemaModel = ModelFactory.createModel("subtematicas", {
    id_subtematica: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    id_tema: {
        type: DataTypes.INTEGER,
        references: {
            model: 'temas',
            key: 'id_tema'
        }
    }
});

export default SubTemaModel;