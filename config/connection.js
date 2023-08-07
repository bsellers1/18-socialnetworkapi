const mongoose = require('mongoose');

const connection = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNet';

mongoose.connect(connection);

const db = mongoose.connection;

module.exports = db;