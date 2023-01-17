import {sequelize} from "~/server/database/sequelize";
import {
    CreationOptional,
    DataTypes, InferAttributes, InferCreationAttributes,
    Model
} from "sequelize";


interface Invoice extends Model<InferAttributes<Invoice>, InferCreationAttributes<Invoice>> {
    id: string,
    payer: string,
    receiver: string,
    created_by: string,
    title: string,
    invoice_type: CreationOptional<string>,
    amount: number,
    paid: CreationOptional<boolean>
}
export const Invoice = sequelize.define<Invoice>('invoice', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    payer: {
        type: DataTypes.STRING,
        references: {
            model: 'users',
            key: 'username'
        },
        onDelete: 'SET NULL'
    },
    receiver: {
        type: DataTypes.STRING,
        references: {
            model: 'users',
            key: 'username'
        },
        onDelete: 'SET NULL'
    },
    created_by: {
        type: DataTypes.STRING,
        references: {
            model: 'users',
            key: 'username'
        },
        onDelete: 'SET NULL'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    invoice_type: {
        type: DataTypes.ENUM('SHOPPING', 'RENT', 'OTHER'),
        allowNull: false,
        defaultValue: 'OTHER'
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});