const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://username:password@ds155461.mlab.com:55461/project', {useNewUrlParser: true});

const usersSchema = new Schema({
        name: String,
        age: Number,
        address: String,
        premium: Boolean
    },
    { strict: false }
);

const models = {};
models.Users = mongoose.model('users', usersSchema);

module.exports = models;