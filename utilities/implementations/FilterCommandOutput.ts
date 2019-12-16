module.exports = (childProcess: any) => {

    return ({ "filterOutput": filterOutput })

    function filterOutput(command: string, filterKey: string): void {
        childProcess.exec(command + filterKey, (err: string, stdout: string, stderr: string) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            Boolean(stdout) ? console.log(stdout) : console.log(stderr)
        })
    }
}