module.exports = (childProcess: any) => {

    return ({ "filterOutput": filterOutput })

    function filterOutput(command: string, filterKey: string) {
        childProcess.exec(command + filterKey, (err: string, stdout: string, stderr: string) => {
            if (err) {
                console.log("error: ", err);
                return;
            } // node couldn't execute the command
            Boolean(stdout) ? console.log(stdout) : console.log(stderr)
        })
    }
}