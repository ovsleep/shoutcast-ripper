const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const _ = require('underscore');

var recordingSchema = new Schema({
    fileName: String,
	timestamp: Date,
    path: String,
    task: {type: Schema.ObjectId, ref: 'Task'}
});

var Recording = mongoose.model('Recording', recordingSchema);

module.exports = Recording;