import {sequelize} from "~/server/database/sequelize";
import {
    CreationOptional,
    DataTypes, InferAttributes, InferCreationAttributes,
    Model
} from "sequelize";


interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    username: string,
    display_name: string,
    role: CreationOptional<string>,
    password_hash: string
}
export const User = sequelize.define<User>('user', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    display_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('ADMIN', 'SHOPPER', 'USER'),
        defaultValue: 'USER'
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    }
});