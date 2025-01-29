import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const RoleModel = ModelFactory.createModel("roles", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: { type: DataTypes.STRING }
});

export default RoleModel;