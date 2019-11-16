module.exports = (git: any) => {
    let parseGitStashList = function (stashList: string, stashMessage: string, workingDirectory: string) {
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
    return {
        popStash: (workingDirectory: string, stashMessage: string) => {
            git(workingDirectory).raw(
                ['stash', 'list'],
                (err: string, result: string) =>
                    Boolean(result) ? parseGitStashList(result, stashMessage, workingDirectory) : console.log(err)
            );
        }
    }
}