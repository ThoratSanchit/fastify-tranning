import { DataTypes, Model } from "sequelize";
import sequelize from '../../database/index';

class StudentModel extends Model {}

StudentModel.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        enrolled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'student',
        timestamps: true,
    }
);

export default StudentModel;
