module.exports = {
    filterOutput: (command: string, filterKey: string) => {
        require('child_process').exec(command + filterKey, (err: string, stdout: string, stderr: string) => {
            if (err) {
                console.log("error: ", err);
                return;
            } // node couldn't execute the command
            console.log(stdout);
            console.log(stderr);
        })
    }
}