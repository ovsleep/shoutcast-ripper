const dotenv = require('dotenv');
dotenv.load();

const exec = require('child_process').exec;

const db = require('./../models/db');
const Tasks = db.Task;


 let now = new Date();
  let day = 'Tuesday';//days[now.getDay()];
  let time = 82860; //now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  //get tasks needed to execute
  var query = Tasks.find({
    'days': day,
    'startHour': { $lte: time },
    'executing': false
  });

  //query.select('name fileName duration');
  query.exec(function (err, tasks) {
    console.log('query executed');
    if(err)
      throw err;
    
    tasks.forEach((task)=>{
      console.log(task.name);
    });
  });