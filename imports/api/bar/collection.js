
import { mysqlDB } from '/imports/api/mysql-connectors.js';
import Sequelize from 'sequelize';

mysqlDB.define('bar', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bar: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

mysqlDB.sync();

export const Bar = mysqlDB.models.bar;