var express = require('express');
var router = express.Router();
const db = require('./../../models/db');
const ms = require('mediaserver');
const path = require('path');
/* GET home page. */
router.route('/tasks')
    //Create new task (/api/tasks)
    .post(function (req, res, next) {
        var name = req.body.name;

        var task = new db.Task();
        task.name = name;
        task.save(function (err) {
            if (err) return next(err);
            res.json({ message: 'task created' });
        })
    })
    // get all the task (/api/tasks)
    .get(function(req, res, next) {
        db.Task
        .find()
        .select('name startHour duration url recordings days')
        .populate('recordings', '_id timestamp newRecording')
        .exec(function(err, tasks) {
            if (err) return next(err);
            res.json(tasks);
        });
    });

router.route('/recordings/:recording_id')
    .get(function(req, res, next){
        console.log('playing: ' + req.params.recording_id);
        db.Recording.findById(req.params.recording_id, function(err, recording){
            if (err) return next(err);
            try{
                var basePath = process.env.RECORDINGS_PATH;
                var filePath = path.join(basePath, recording.path);
                recording.newRecording = false;
                recording.save().then(()=>{
                    console.log('playing: ' + recording.newRecording);
                    ms.pipe(req, res, filePath);
                })
            }
            catch(err){
                return next(err);
            }
        });
    });


module.exports = router;
