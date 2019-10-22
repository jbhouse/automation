"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (fs) {
    var file = require('../../taskCounter.json');
    return {
        update: function (directoryToUpdate, fn) {
            if (new Date().toString().slice(0, 9) != file.updateLastRun) {
                fn(directoryToUpdate);
                file.updateLastRun = new Date().toString().slice(0, 9);
                fs.writeFileSync('./taskCounter.json', JSON.stringify(file, null, 2));
            }
        }
    };
};
