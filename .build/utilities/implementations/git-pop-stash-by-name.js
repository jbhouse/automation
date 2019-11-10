"use strict";
module.exports = (git) => {
    let parseGitStashList = function (stashList, stashMessage, workingDirectory) {
        let listOfStashMessages = stashList.split("\n");
        let stashMessagesContainingInput = listOfStashMessages.filter(msg => msg.includes(stashMessage));
        if (stashMessagesContainingInput.length == 0) {
            console.log("No stashes were found with the given message. Stash messages: ", stashList);
        }
        else if (stashMessagesContainingInput.length > 1) {
            console.log("More than one stash was found that contains the given input: ", stashMessagesContainingInput);
        }
        else {
            let stashToApply = "stash@{" + listOfStashMessages.indexOf(stashMessagesContainingInput[0]) + "}";
            git(workingDirectory).raw(['stash', 'apply', stashToApply], (err, result) => Boolean(result) ? console.log(err) : console.log(err));
        }
    };
    return {
        popStash: (workingDirectory, stashMessage) => {
            git(workingDirectory).raw(['stash', 'list'], (err, result) => {
                Boolean(result) ? parseGitStashList(result, stashMessage, workingDirectory) : console.log(err);
            });
        }
    };
};
