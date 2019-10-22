"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function () {
    var g = require('./google').init();
    var maven = require('./FilterCommandOutput').init();
    return {
        google: function (executablePath, query) { return g.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+")); },
        FilterOutput: function (command, filterKeys) { return maven.filterOutput(command, filterKeys); }
    };
};
