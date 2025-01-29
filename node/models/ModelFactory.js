import { DataTypes } from "sequelize";
import db from "../database/db.js";

class ModelFactory {
    static createModel(name, attributes, options = {}) {
        return db.define(name, attributes, {
            timestamps: false,
            ...options
        });
    }
}

export default ModelFactory;