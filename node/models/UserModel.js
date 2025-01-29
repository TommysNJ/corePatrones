import ModelFactory from "./ModelFactory.js";
import { DataTypes } from "sequelize";

const UserModel = ModelFactory.createModel("usuarios", {
    email: { 
        type: DataTypes.STRING, 
        primaryKey: true 
    },
    password: { type: DataTypes.STRING },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
});

export default UserModel;