var child = require('child_process').execFile;
module.exports = {
    searchGoogle: (executablePath: string, query: string) =>
        child(executablePath, ["https://www.google.com/search?q=" + query], function (err: string, data: string) {
            if (err) {
                console.error(err);
                return;
            }
        })
}