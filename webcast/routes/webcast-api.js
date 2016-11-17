var express = require('express');
var router = express.Router();
const db = require('./../../models/db');
const ms = require('mediaserver');
const path = require('path');
/* GET home page. */
router.route('/tasks')
    //Create new task (/api/tasks)
    .post(function (req, res) {
        var name = req.body.name;

        var task = new db.Task();
        task.name = name;
        task.save(function (err) {
            if (err) return console.log(err);
            res.json({ message: 'task created' });
        })
    })
    // get all the task (/api/tasks)
    .get(function(req, res) {
        db.Task
        .find()
        .select('name startHour duration url recordings')
        .populate('recordings', '_id timestamp')
        .exec(function(err, tasks) {
            if (err) res.send(err);
            res.json(tasks);
        });
    });

router.route('/recordings/:recording_id')
    .get(function(req, res){
        db.Recording.findById(req.params.recording_id, function(err, recording){
            if (err) res.send(err);
            var basePath = process.env.RECORDINGS_PATH;
            var filePath = path.join(basePath, recording.path);
            ms.pipe(req, res, filePath);
        });
    });


module.exports = router;
