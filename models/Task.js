
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Recording = require('./recording')

var taskSchema = new Schema({
    //userId: { type: Schema.ObjectId, required: true },
    name: String,
    fileName: String,
	days: [String],
	startHour: Number,// (number of seconds since 00:00:00)
	duration: Number, //(minutes)
    url: String,
    path: String,
    executing: Boolean,

    recordings: [{type: Schema.ObjectId, ref: 'Recording'}]
});

taskSchema.methods.finishTask = function (recordingFilePath) {
    //save recording data
    if(recordingFilePath){
        var recording = new Recording({
            task: this._id,
            timestamp: new Date(),
            path: recordingFilePath
        });

        var task = this;

        return recording.save().then(() => {
            task.executing = false;
            task.recordings.push(recording._id);
            task.save().then(() => {
                console.log('data saved');
            });
        });
    }
    else{
        this.executing = false;
        this.save().then(() => {
            console.log('data saved');
        });
    }

}

module.exports = mongoose.model('Task', taskSchema);