import { Sequelize } from "sequelize";

// implementación del patrón Singleton
class Database {
    constructor() {
        if (!Database.instance) {
            this._sequelize = new Sequelize('railway', 'root', 'JHKLEpvAjiqEHcnanlAtEWfQhucyWQBB', {
                host: 'autorack.proxy.rlwy.net',
                dialect: 'mysql',
                port: 44409
            });
            Database.instance = this;
        }

        return Database.instance;
    }

    getSequelizeInstance() {
        return this._sequelize;
    }
}

const dbInstance = new Database(); // Instancia única
Object.freeze(dbInstance);

export default dbInstance.getSequelizeInstance();

