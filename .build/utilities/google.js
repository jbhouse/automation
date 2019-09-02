"use strict";
var child = require('child_process').execFile;
module.exports = {
    searchGoogle: function (executablePath, query) {
        // {console.log("https://www.google.com/search?q=" + query);}
        return child(executablePath, ["https://www.google.com/search?q=" + query], function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
};
