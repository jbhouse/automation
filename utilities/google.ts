export const init = () => {
    let child = require('child_process').execFile;
    return {
        searchGoogle: (executablePath: string, url: string) =>
            child(executablePath, [url], function (err: string, data: string) {
                if (err) {
                    console.error(err);
                    return;
                }
            })
    }
}