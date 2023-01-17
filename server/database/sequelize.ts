import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(useRuntimeConfig().databaseConnection, {
    define: {
        timestamps: false
    }
});