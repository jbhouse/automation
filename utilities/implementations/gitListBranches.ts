module.exports = {
    listBranches: (cwd?: any, callback?: any) =>
        require('child_process').exec(
            "git branch -a",
            { cwd: (Boolean(cwd) && cwd != undefined) ? cwd : process.cwd(), encoding: "utf8" },
            (err: string, stdout: string, stderr: string) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                } // node couldn't execute the command
                if (stderr) {
                    console.log("error: ", stderr);
                    return;
                }
                if (callback) {
                    callback(stdout.split("\n"), cwd);
                } else {
                    console.log(stdout.split("\n"));
                    return;
                }
            })
}
