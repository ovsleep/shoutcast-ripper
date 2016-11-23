"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TimestampPipe = (function () {
    function TimestampPipe() {
    }
    TimestampPipe.prototype.padLeft = function (num, paddingValue) {
        return String(paddingValue + num).slice(-paddingValue.length);
    };
    TimestampPipe.prototype.transform = function (value) {
        //from the stored time to 23:55:00
        var hours = value / 3600; // needs to be an integer division
        var leaves = value - hours * 3600;
        var minutes = leaves / 60;
        var seconds = leaves - 60 * minutes;
        return this.padLeft(hours, '00') + ":" + this.padLeft(minutes, '00') + ":" + this.padLeft(seconds, '00');
    };
    TimestampPipe = __decorate([
        core_1.Pipe({ name: 'timestamp' }), 
        __metadata('design:paramtypes', [])
    ], TimestampPipe);
    return TimestampPipe;
}());
exports.TimestampPipe = TimestampPipe;
//# sourceMappingURL=timestamp.pipe.js.map