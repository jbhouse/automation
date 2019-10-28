module.exports = {
    openPR: (executablePath: string, pullRequestUrl: string, fn: any) => {
        require('child_process').exec('git branch', function (err: string, stdout: string) {
            if (Boolean(err)) {
                console.log(err);
            } else {
                pullRequestUrl += "\\pull\\new\\" + stdout.split('*')[1].split('\n')[0].trim();
                fn(executablePath, pullRequestUrl);
            }
        });
    }
}