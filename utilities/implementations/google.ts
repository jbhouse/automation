module.exports = {
    searchGoogle: (executablePath: string, url: string) =>
        require('child_process').execFile(executablePath, [url], function (err: string, data: string) {
            if (err) {
                console.error(err);
                return;
            }
        })
}
