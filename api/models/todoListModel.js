'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    Item: {
        type: String,
        required: 'Kindly enter the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);