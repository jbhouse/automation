var child = require('child_process').execFile;
module.exports = {
    searchGoogle: (executablePath: string, url: string) =>
        child(executablePath, [url], function (err: string, data: string) {
            if (err) {
                console.error(err);
                return;
            }
        })
}