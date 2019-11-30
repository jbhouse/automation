module.exports = (git: any) => {
    return ({ "popStash": popStash })

    function popStash(workingDirectory: string, stashMessage: string) {
        let workingDir: string = Boolean(workingDirectory) ? workingDirectory : process.cwd();
        require('child_process').exec('git stash list ', { cwd: workingDir }, (err: any, stdout: string, stderr: string) => {
            if (Boolean(err)) {
                console.log(workingDir);
                console.log("Error: ", err);
                return;
            } // node couldn't execute the command
            Boolean(stdout) ? parseGitStashList(stdout, stashMessage, workingDirectory) : console.log(stderr)
        })
    }

    function parseGitStashList(stashList: string, stashMessage: string, workingDirectory: string) {
        let listOfStashMessages: string[] = stashList.split("\n");
        let stashMessagesContainingInput: string[] = listOfStashMessages.filter(msg => msg.includes(stashMessage));
        if (stashMessagesContainingInput.length == 0) {
            console.log("No stashes were found with the given message. Stash messages: ", stashList);
        } else if (stashMessagesContainingInput.length > 1) {
            console.log("More than one stash was found that contains the given input: ", stashMessagesContainingInput);
        } else {
            let stashToApply = "stash@{" + listOfStashMessages.indexOf(stashMessagesContainingInput[0]) + "}";
            git(workingDirectory).raw(['stash', 'apply', stashToApply],
                (err: string, result: string) => Boolean(result) ? console.log(result) : console.log(err)

            );
        }
    }
}