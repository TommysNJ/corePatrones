import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const TemaModel = ModelFactory.createModel("temas", {
    id_tema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT }
});

export default TemaModel;