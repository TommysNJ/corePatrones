import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const AdminModel = ModelFactory.createModel("administradores", {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: 'usuarios',
            key: 'email'
        }
    },
    nombre: { type: DataTypes.STRING }
});

export default AdminModel;