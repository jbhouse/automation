module.exports = (childProcess: any) => {

    return ({ "openPR": openPR })

    function openPR(executablePath: string, pullRequestUrl: string, fn: any) {
        childProcess.exec('git branch', function (err: string, stdout: string) {
            if (Boolean(err)) {
                console.log(err);
            } else {
                pullRequestUrl += "\\pull\\new\\" + stdout.split('*')[1].split('\n')[0].trim();
                fn(executablePath, pullRequestUrl);
            }
        });
    }
}