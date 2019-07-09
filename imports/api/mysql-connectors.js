import Sequelize from 'sequelize';

const host = Meteor.settings.mysqlDB.host;
const database = Meteor.settings.mysqlDB.database;
const user = Meteor.settings.mysqlDB.user;
const password = Meteor.settings.mysqlDB.password;

const mysqlDB = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql'
});

export {
    mysqlDB
};

