var { exec } = require('child_process');

module.exports = {
    filterOutput: (command: string, filterKeyword: string) => filterOutputByKeyword(command, filterKeyword)
}

function filterOutputByKeyword(command: string, filterKey: string) {
    exec(command + filterKey, (err: string, stdout: string, stderr: string) => {
        if (err) {
            console.log("error: ", err);
            return;
        } // node couldn't execute the command
        console.log(stdout);
        console.log(stderr);
    })
}