var fs = require('fs');
var path = require('path');
var sanitize = require('sanitize-filename');
var childProcess = require('child_process');
var log = require('../log');

function fixName(name) {
    //log.log(name);
    return sanitize(name);
    //return name.replace(/[^a-z0-9 \-\(\)\.]/gi, '_');
}
var DELETE_SMALL_FILES = false; // may set to true when debugging
var MIN_FILE_SIZE = 1024 * 1000; // 1M

exports.onFileCompleted = function () { };

var File = (function () {
    function File(folder, trackNumberOffset, streamTitle) {
        this.streamTitle = streamTitle;
        this.title = streamTitle;
        this.isInitialFileWithoutMetadata = false;
        this.deleteOnClose = false;
    
        var albumFolder = folder;
        if (!fs.existsSync(albumFolder)) {
            fs.mkdirSync(albumFolder);
        }
        this.trackNumber = fs.readdirSync(albumFolder).length + 1 + trackNumberOffset;
        this.createStream(albumFolder);
    }
    Object.defineProperty(File.prototype, "fileName", {
        get: function () {
            return path.basename(this.file);
        },
        enumerable: true,
        configurable: true
    });
    File.prototype.createStream = function (folder) {
        var _this = this;
        var index = 0;
        var file;
        do {
            file = this.getUniqueFileName(folder, index);
            index++;
        } while (fs.existsSync(file));
        this.file = file;
        this.outStream = fs.createWriteStream(file, { flags: 'w' });
        this.outStream.once('close', function () {
            
        });
    };
    File.prototype.write = function (data) {
        this.outStream.write(data);
    };
    File.prototype.close = function () {
        this.outStream.close();
    };
    File.prototype.getUniqueFileName = function (folder, index) {
        var name = [this.trackNumber, this.title].join('-');
        name = fixName(name) + '.mp3';
        this.fullPath = path.join(folder, name); 
        return this.fullPath
    };
    return File;
})();
exports.File = File;
