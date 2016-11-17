const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var recordingSchema = new Schema({
    fileName: String,
	timestamp: Date,
    path: String,
    task: {type: Schema.ObjectId, ref: 'Task'}
});

module.exports = mongoose.model('Recording', recordingSchema);
