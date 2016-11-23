"use strict";
var Task = (function () {
    function Task() {
    }
    Task.prototype.newRecordings = function () {
        var newRecordings = this.recordings.filter(function (r) { return r.newRecording == true; });
        return newRecordings.length;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map