var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
    ms = require('mediaserver');

var filePath = "E:\\Proyectos\\Personal\\shoutcast\\recordings2\\Oceano-FM\\1 - artist - track.mp3"; 

http.createServer(function(req, res) {
    ms.pipe(req, res, filePath);
})
.listen(2000);
