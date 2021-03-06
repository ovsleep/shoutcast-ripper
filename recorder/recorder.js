const dotenv = require('dotenv');
dotenv.load();

const exec = require('child_process').exec;
const db = require('./../models/db');
const icecast = require('icy');
const log = require('../log');
var output = require('./output');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function padLeft(num, paddingValue) {
	return String(paddingValue + num).slice(-paddingValue.length);
}

function getDateStr() {
	var date = new Date();
	return "_" + date.getFullYear() + padLeft(date.getMonth() + 1, '00') + padLeft(date.getDate(), '00');
}

function checkTasksToExecute() {
	//get time parameters
	let now = new Date();
	let day = 'Tuesday';//days[now.getDay()];
	let time = 82860; //now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
	//get tasks needed to execute
	var query = db.Task.find({
		'days': day,
		'startHour': { $lte: time },
		'executing': false
	});

	//query.select('name fileName duration');
	query.exec(function (err, tasks) {
		console.log('query executed');
		if (err)
			throw err;

		tasks.forEach((task) => {
			executeTask(task);
		})
	});

	//setTimeout(checkTasksToExecute, 6000);
}

function executeTask(task) {
	try {
		console.log(`Execute task: ${task.name}`);
		//set executing status
		task.executing = true;
		task.save();

		//start recording
		icecast.get(task.url, (res) => {
			let outFile;

			res.on('data', (data) => {
				if (!outFile) {
					outFile = new output.File(task.path, 0, task.fileName + "_" + getDateStr());
					outFile.isInitialFileWithoutMetadata = true;
				}
				outFile.write(data);
			});

			//set expiration date
			setTimeout(() => {
				endTask(task, res, outFile)
			}, task.duration * 60000 + 5000)
		});
	}
	catch (err) {
		endTask(task, res, outFile)
	}
}

function endTask(task, res, file) {

	log('task ended');
	if (res.res && res.res.client) {
		res.res.client.destroy();
		log('res closed');
	}

	if (file) {
		file.close();
		log('file closed');
		//save recording
		task.finishTask(file.fullPath).then(() => {
			log('Task finished');
		});
	}
	else {
		task.finishTask().then(() => {
			log('Task finished without recording');
		});
	}
}

function main() {
	checkTasksToExecute();
}

main();
